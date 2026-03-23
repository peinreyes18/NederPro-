import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { stripe } from '@/lib/stripe';
import Stripe from 'stripe';
import { sendWelcomeEmail, sendWinbackEmail } from '@/lib/email';

// Use service role key to bypass RLS for webhook writes
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

/** Pull email + display name from Supabase auth for a given user ID */
async function getUserProfile(userId: string): Promise<{ email: string; firstName?: string; goal?: string; level?: string } | null> {
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
      if (session.mode !== 'subscription') break;

      const subscriptionId = session.subscription as string;
      const customerId = session.customer as string;

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
      const plan =
        priceId === process.env.STRIPE_PRICE_ID_BIWEEKLY
          ? 'biweekly'
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
          html: `<p>New subscriber: <strong>${profile.email}</strong> — Plan: <strong>${plan ?? 'unknown'}</strong></p>`,
        }).catch(console.error);
      }

      break;
    }

    case 'customer.subscription.created': {
      const sub = event.data.object as Stripe.Subscription;
      const customer = await stripe.customers.retrieve(sub.customer as string);
      const userId = (customer as Stripe.Customer).metadata?.supabase_user_id;
      if (!userId) break;

      const priceId = sub.items.data[0]?.price.id;
      const plan =
        priceId === process.env.STRIPE_PRICE_ID_BIWEEKLY
          ? 'biweekly'
          : priceId === process.env.STRIPE_PRICE_ID_MONTHLY
            ? 'monthly'
            : null;

      await supabaseAdmin.from('subscriptions').upsert(
        {
          user_id: userId,
          stripe_customer_id: sub.customer as string,
          stripe_subscription_id: sub.id,
          status: sub.status,
          plan,
          trial_end: sub.trial_end
            ? new Date(sub.trial_end * 1000).toISOString()
            : null,
          current_period_end: sub.items.data[0]?.current_period_end
            ? new Date(sub.items.data[0].current_period_end * 1000).toISOString()
            : null,
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'user_id' }
      );
      break;
    }

    case 'customer.subscription.updated': {
      const sub = event.data.object as Stripe.Subscription;
      await supabaseAdmin
        .from('subscriptions')
        .update({
          status: sub.status,
          trial_end: sub.trial_end
            ? new Date(sub.trial_end * 1000).toISOString()
            : null,
          current_period_end: sub.items.data[0]?.current_period_end
            ? new Date(sub.items.data[0].current_period_end * 1000).toISOString()
            : null,
          updated_at: new Date().toISOString(),
        })
        .eq('stripe_subscription_id', sub.id);
      break;
    }

    case 'customer.subscription.deleted': {
      const sub = event.data.object as Stripe.Subscription;
      await supabaseAdmin
        .from('subscriptions')
        .update({
          status: 'canceled',
          updated_at: new Date().toISOString(),
        })
        .eq('stripe_subscription_id', sub.id);

      // ── Send winback email ──────────────────────────────────────────────────
      const customer = await stripe.customers.retrieve(sub.customer as string);
      const userId = (customer as Stripe.Customer).metadata?.supabase_user_id;
      if (userId) {
        const profile = await getUserProfile(userId);
        if (profile) {
          await sendWinbackEmail({
            to: profile.email,
            firstName: profile.firstName,
          }).catch(console.error);
        }
      }
      break;
    }
  }

  return NextResponse.json({ received: true });
}
