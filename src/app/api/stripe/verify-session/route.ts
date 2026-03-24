import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { stripe } from '@/lib/stripe';
import Stripe from 'stripe';

// Service role bypasses RLS — safe to use server-side only
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const sessionId = body?.sessionId as string | undefined;

    if (!sessionId) {
      return NextResponse.json({ error: 'Missing sessionId' }, { status: 400 });
    }

    // Retrieve the checkout session from Stripe
    const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId);

    if (checkoutSession.mode !== 'subscription' || !checkoutSession.subscription) {
      return NextResponse.json({ error: 'No subscription on session' }, { status: 400 });
    }

    const subscriptionId =
      typeof checkoutSession.subscription === 'string'
        ? checkoutSession.subscription
        : (checkoutSession.subscription as Stripe.Subscription).id;

    const customerId =
      typeof checkoutSession.customer === 'string'
        ? checkoutSession.customer
        : (checkoutSession.customer as Stripe.Customer)?.id ?? null;

    if (!customerId) {
      return NextResponse.json({ error: 'No customer on session' }, { status: 400 });
    }

    // Get supabase_user_id from Stripe customer metadata
    const customer = await stripe.customers.retrieve(customerId) as Stripe.Customer;
    const userId = customer.metadata?.supabase_user_id;

    if (!userId) {
      return NextResponse.json({ error: 'No supabase_user_id in customer metadata' }, { status: 400 });
    }

    // Retrieve the subscription for full details
    const sub = await stripe.subscriptions.retrieve(subscriptionId);

    const trialEnd = sub.trial_end
      ? new Date(sub.trial_end * 1000).toISOString()
      : null;

    const subAny = sub as unknown as Record<string, unknown>;
    const periodEnd = typeof subAny.current_period_end === 'number'
      ? new Date(subAny.current_period_end * 1000).toISOString()
      : null;

    const priceId = sub.items.data[0]?.price.id;
    const plan = priceId === process.env.STRIPE_PRICE_ID_BIWEEKLY
      ? 'biweekly'
      : priceId === process.env.STRIPE_PRICE_ID_MONTHLY
      ? 'monthly'
      : null;

    // Write to Supabase using service role (no auth required)
    const { error: dbError } = await supabaseAdmin.from('subscriptions').upsert(
      {
        user_id: userId,
        stripe_customer_id: customerId,
        stripe_subscription_id: sub.id,
        status: sub.status,
        plan,
        trial_end: trialEnd,
        current_period_end: periodEnd,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'user_id' }
    );

    if (dbError) {
      console.error('[verify-session] DB error:', dbError.message);
      return NextResponse.json({ error: dbError.message }, { status: 500 });
    }

    return NextResponse.json({ status: sub.status, userId });

  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('[verify-session] Error:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
