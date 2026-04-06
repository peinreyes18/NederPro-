import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase';
import { stripe } from '@/lib/stripe';
import Stripe from 'stripe';
import { sendWelcomeEmail, sendWinbackEmail } from '@/lib/email';

/** Generates a unique gift code in the format GIFT-XXXX-XXXX-XXXX */
function generateGiftCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // no 0/O, 1/I/L to avoid confusion
  const segments = ['', '', ''];
  for (let s = 0; s < 3; s++) {
    for (let i = 0; i < 4; i++) {
      segments[s] += chars[Math.floor(Math.random() * chars.length)];
    }
  }
  return 'GIFT-' + segments.join('-');
}

/** Pull email + display name from Supabase auth for a given user ID */
async function getUserProfile(userId: string): Promise<{ email: string; firstName?: string; goal?: string; level?: string } | null> {
  const supabaseAdmin = createAdminClient();
  const { data } = await supabaseAdmin.auth.admin.getUserById(userId);
  if (!data?.user) return null;
  const email = data.user.email;
  if (!email) return null;
  const meta = data.user.user_metadata ?? {};
  const firstName = meta.full_name?.split(' ')[0] || meta.name?.split(' ')[0] || undefined;
  const goal = meta.onboarding_goal ?? undefined;
  const level = meta.onboarding_level ?? undefined;
  return { email, firstName, goal, level };
}

export async function POST(request: NextRequest) {
  const supabaseAdmin = createAdminClient();
  const body = await request.text();
  const sig = request.headers.get('stripe-signature');

  if (!sig) {
    return NextResponse.json({ error: 'Missing stripe-signature' }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session;

      // ── Gift purchase ───────────────────────────────────────────────────────
      if (session.mode === 'payment' && session.metadata?.type === 'gift') {
        const paymentIntent = session.payment_intent as string;

        // Idempotency: only generate one code per payment
        const { data: existingCode } = await supabaseAdmin
          .from('gift_codes')
          .select('id')
          .eq('stripe_payment_intent', paymentIntent)
          .maybeSingle();

        if (!existingCode) {
          // Generate a unique code (retry up to 5 times on collision)
          let code = '';
          for (let attempt = 0; attempt < 5; attempt++) {
            const candidate = generateGiftCode();
            const { data: collision } = await supabaseAdmin
              .from('gift_codes')
              .select('id')
              .eq('code', candidate)
              .maybeSingle();
            if (!collision) { code = candidate; break; }
          }

          if (code) {
            await supabaseAdmin.from('gift_codes').insert({
              code,
              stripe_payment_intent: paymentIntent,
              plan: session.metadata.plan ?? 'yearly',
              duration_months: parseInt(session.metadata.duration_months ?? '12', 10),
              purchased_by_email: session.customer_details?.email ?? null,
            });

            // Notify owner
            const { Resend } = await import('resend');
            const resend = new Resend(process.env.RESEND_API_KEY);
            await resend.emails.send({
              from: 'hello@nederpro.com',
              to: 'lainefajardo18@gmail.com',
              subject: '🎁 New gift subscription sold — NederPro',
              html: `<p>A gift subscription was purchased by <strong>${session.customer_details?.email ?? 'unknown'}</strong>.</p><p>Gift code: <strong>${code}</strong></p>`,
            }).catch(console.error);
          }
        }
        break;
      }

      if (session.mode !== 'subscription') break;

      const subscriptionId = session.subscription as string;
      const customerId = session.customer as string;

      // Idempotency: skip if this subscription was already recorded
      const { data: existing } = await supabaseAdmin
        .from('subscriptions')
        .select('stripe_subscription_id')
        .eq('stripe_subscription_id', subscriptionId)
        .maybeSingle();

      if (existing) break;

      const [sub, customer] = await Promise.all([
        stripe.subscriptions.retrieve(subscriptionId),
        stripe.customers.retrieve(customerId),
      ]);

      const userId = (customer as Stripe.Customer).metadata?.supabase_user_id;
      if (!userId) break;

      const trialEnd = sub.trial_end
        ? new Date(sub.trial_end * 1000).toISOString()
        : null;

      const priceId = sub.items.data[0]?.price.id;
      const plan = priceId === process.env.STRIPE_PRICE_ID_YEARLY
        ? 'yearly'
        : priceId === process.env.STRIPE_PRICE_ID_MONTHLY
        ? 'monthly'
        : null;

      await supabaseAdmin.from('subscriptions').upsert(
        {
          user_id: userId,
          stripe_customer_id: customerId,
          stripe_subscription_id: sub.id,
          status: sub.status,
          plan,
          trial_end: trialEnd,
          current_period_end: sub.items.data[0]?.current_period_end
            ? new Date(sub.items.data[0].current_period_end * 1000).toISOString()
            : null,
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'user_id' }
      );

      // ── Send welcome email ──────────────────────────────────────────────────
      const profile = await getUserProfile(userId);
      if (profile) {
        const trialEndDate = trialEnd
          ? new Date(trialEnd).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
          : undefined;
        await sendWelcomeEmail({
          to: profile.email,
          firstName: profile.firstName,
          goal: profile.goal,
          level: profile.level,
          trialEndDate,
        }).catch(console.error); // don't fail the webhook if email fails

        // ── Notify owner ──────────────────────────────────────────────────────
        const { Resend } = await import('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: 'hello@nederpro.com',
          to: 'lainefajardo18@gmail.com',
          subject: 'New NederPro subscriber',
          html: `<p>New subscriber: <strong>${profile.email}</strong></p>`,
        }).catch(console.error);
      }

      break;
    }

    case 'customer.subscription.updated': {
      const sub = event.data.object as Stripe.Subscription;
      const prevSub = event.data.previous_attributes as Record<string, unknown> | undefined;

      await supabaseAdmin
        .from('subscriptions')
        .update({
          status: sub.status,
          trial_end: sub.trial_end
            ? new Date(sub.trial_end * 1000).toISOString()
            : null,
          current_period_end: sub.items.data[0]?.current_period_end
            ? new Date((sub.items.data[0].current_period_end as number) * 1000).toISOString()
            : null,
          updated_at: new Date().toISOString(),
        })
        .eq('stripe_subscription_id', sub.id);

      // Notify owner when trial converts to active paid subscription
      const wasTrialing = prevSub?.status === 'trialing';
      const isNowActive = sub.status === 'active';
      if (wasTrialing && isNowActive) {
        const customer = await stripe.customers.retrieve(sub.customer as string);
        const userId = (customer as Stripe.Customer).metadata?.supabase_user_id;
        if (userId) {
          const profile = await getUserProfile(userId);
          if (profile) {
            const { Resend } = await import('resend');
            const resend = new Resend(process.env.RESEND_API_KEY);
            await resend.emails.send({
              from: 'hello@nederpro.com',
              to: 'lainefajardo18@gmail.com',
              subject: '💳 New paid subscriber — NederPro',
              html: `<p><strong>${profile.email}</strong> just converted from trial to a paid subscription.</p>`,
            }).catch(console.error);
          }
        }
      }
      break;
    }

    case 'customer.subscription.deleted': {
      const sub = event.data.object as Stripe.Subscription;

      // Check if the customer still has another active/trialing subscription
      // (e.g. a duplicate was cancelled to stop double-billing)
      const remainingSubs = await stripe.subscriptions.list({
        customer: sub.customer as string,
        status: 'active',
        limit: 1,
      });
      const trialingSubs = remainingSubs.data.length === 0
        ? await stripe.subscriptions.list({
            customer: sub.customer as string,
            status: 'trialing',
            limit: 1,
          })
        : { data: [] };

      const activeSub = remainingSubs.data[0] ?? trialingSubs.data[0] ?? null;

      if (activeSub) {
        // User still has an active subscription — update the record to point to
        // the surviving subscription instead of marking them as cancelled
        const priceIdActive = activeSub.items.data[0]?.price.id;
        const planActive = priceIdActive === process.env.STRIPE_PRICE_ID_YEARLY
          ? 'yearly'
          : priceIdActive === process.env.STRIPE_PRICE_ID_MONTHLY
          ? 'monthly'
          : null;

        await supabaseAdmin
          .from('subscriptions')
          .update({
            stripe_subscription_id: activeSub.id,
            status: activeSub.status,
            plan: planActive,
            trial_end: activeSub.trial_end
              ? new Date(activeSub.trial_end * 1000).toISOString()
              : null,
            current_period_end: activeSub.items.data[0]?.current_period_end
              ? new Date((activeSub.items.data[0].current_period_end as number) * 1000).toISOString()
              : null,
            updated_at: new Date().toISOString(),
          })
          .eq('stripe_subscription_id', sub.id);

        break; // Don't send cancellation emails — user still has access
      }

      // Fetch cancellation reason before updating status
      const { data: existingSub } = await supabaseAdmin
        .from('subscriptions')
        .select('cancellation_reason')
        .eq('stripe_subscription_id', sub.id)
        .single();
      const cancellationReason = existingSub?.cancellation_reason ?? null;

      await supabaseAdmin
        .from('subscriptions')
        .update({
          status: 'canceled',
          updated_at: new Date().toISOString(),
        })
        .eq('stripe_subscription_id', sub.id);

      // ── Send winback email to user + notify owner ───────────────────────────
      const customer = await stripe.customers.retrieve(sub.customer as string);
      const userId = (customer as Stripe.Customer).metadata?.supabase_user_id;
      if (userId) {
        const profile = await getUserProfile(userId);
        if (profile) {
          await sendWinbackEmail({
            to: profile.email,
            firstName: profile.firstName,
          }).catch(console.error);

          const { Resend } = await import('resend');
          const resend = new Resend(process.env.RESEND_API_KEY);
          await resend.emails.send({
            from: 'hello@nederpro.com',
            to: 'lainefajardo18@gmail.com',
            subject: '❌ Subscription cancelled — NederPro',
            html: `<p><strong>${profile.email}</strong> has cancelled their subscription.</p>${cancellationReason ? `<p><strong>Reason:</strong> ${cancellationReason}</p>` : '<p><em>No reason provided.</em></p>'}`,
          }).catch(console.error);
        }
      }
      break;
    }
  }

  return NextResponse.json({ received: true });
}
