import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { createAdminClient } from '@/lib/supabase-admin';
import { cookies } from 'next/headers';
import { stripe } from '@/lib/stripe';

const GIFT_DURATION_SECONDS = 365 * 24 * 60 * 60; // 1 year

/**
 * POST /api/stripe/redeem-gift
 * Body: { code: string }
 *
 * Validates the gift code and:
 * - New user (no subscription): creates a 1-year trial Stripe subscription
 * - Existing active/trialing: extends their subscription by 1 year
 * - Canceled: creates a fresh 1-year trial subscription
 *
 * Marks the code as redeemed in the DB.
 */
export async function POST(request: NextRequest) {
  const cookieStore = await cookies();
  const body = await request.json().catch(() => ({}));
  const code = (body.code ?? '').trim().toUpperCase();

  if (!code) {
    return NextResponse.json({ error: 'Please enter a gift code.' }, { status: 400 });
  }

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return cookieStore.getAll(); },
        setAll() {},
      },
    }
  );

  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    return NextResponse.json({ error: 'You need to be signed in to redeem a gift code.' }, { status: 401 });
  }

  const userId = session.user.id;
  const supabaseAdmin = createAdminClient();

  // ── Validate the gift code ─────────────────────────────────────────────────
  const { data: gift } = await supabaseAdmin
    .from('gift_codes')
    .select('id, redeemed_at, expires_at, duration_months')
    .eq('code', code)
    .maybeSingle();

  if (!gift) {
    return NextResponse.json({ error: 'Gift code not found. Please check and try again.' }, { status: 404 });
  }

  if (gift.redeemed_at) {
    return NextResponse.json({ error: 'This gift code has already been redeemed.' }, { status: 409 });
  }

  if (new Date(gift.expires_at) < new Date()) {
    return NextResponse.json({ error: 'This gift code has expired.' }, { status: 410 });
  }

  // ── Get or create Stripe customer ──────────────────────────────────────────
  const { data: existing } = await supabaseAdmin
    .from('subscriptions')
    .select('stripe_customer_id, stripe_subscription_id, status, trial_end, current_period_end')
    .eq('user_id', userId)
    .maybeSingle();

  let customerId = existing?.stripe_customer_id ?? null;
  if (!customerId) {
    const customer = await stripe.customers.create({
      email: session.user.email,
      metadata: { supabase_user_id: userId },
    });
    customerId = customer.id;
  }

  const nowSeconds = Math.floor(Date.now() / 1000);
  const giftTrialEnd = nowSeconds + GIFT_DURATION_SECONDS;

  // ── Create or extend subscription ─────────────────────────────────────────
  if (!existing || existing.status === 'canceled' || !existing.stripe_subscription_id) {
    // No active sub — create a fresh 1-year trial
    const sub = await stripe.subscriptions.create({
      customer: customerId,
      items: [{ price: process.env.STRIPE_PRICE_ID_YEARLY! }],
      trial_end: giftTrialEnd,
      trial_settings: {
        end_behavior: { missing_payment_method: 'cancel' },
      },
      payment_settings: {
        save_default_payment_method: 'on_subscription',
      },
    });

    await supabaseAdmin.from('subscriptions').upsert(
      {
        user_id: userId,
        stripe_customer_id: customerId,
        stripe_subscription_id: sub.id,
        status: sub.status,
        plan: 'yearly',
        trial_end: new Date(giftTrialEnd * 1000).toISOString(),
        current_period_end: sub.items.data[0]?.current_period_end
          ? new Date((sub.items.data[0].current_period_end as number) * 1000).toISOString()
          : null,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'user_id' }
    );
  } else {
    // Existing active/trialing sub — extend by 1 year from the later of
    // current_period_end or trial_end (whichever is further in the future)
    const currentEndSeconds = Math.max(
      existing.trial_end ? Math.floor(new Date(existing.trial_end).getTime() / 1000) : 0,
      existing.current_period_end ? Math.floor(new Date(existing.current_period_end).getTime() / 1000) : 0,
      nowSeconds
    );

    const newTrialEnd = currentEndSeconds + GIFT_DURATION_SECONDS;

    await stripe.subscriptions.update(existing.stripe_subscription_id, {
      trial_end: newTrialEnd,
    });

    await supabaseAdmin
      .from('subscriptions')
      .update({
        trial_end: new Date(newTrialEnd * 1000).toISOString(),
        plan: 'yearly',
        updated_at: new Date().toISOString(),
      })
      .eq('user_id', userId);
  }

  // ── Mark code as redeemed ─────────────────────────────────────────────────
  await supabaseAdmin
    .from('gift_codes')
    .update({
      redeemed_by_user_id: userId,
      redeemed_at: new Date().toISOString(),
    })
    .eq('id', gift.id);

  return NextResponse.json({ ok: true });
}
