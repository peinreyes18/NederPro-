import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { createClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';
import { stripe } from '@/lib/stripe';

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const body = await request.json();
    const sessionId = body?.sessionId as string | undefined;

    if (!sessionId) {
      return NextResponse.json({ error: 'Missing sessionId' }, { status: 400 });
    }

    // Verify the user is logged in
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
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Step 1: retrieve checkout session to get subscription ID + customer ID
    const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId);

    if (checkoutSession.mode !== 'subscription' || !checkoutSession.subscription) {
      return NextResponse.json({ error: 'No subscription on session' }, { status: 400 });
    }

    const subscriptionId =
      typeof checkoutSession.subscription === 'string'
        ? checkoutSession.subscription
        : checkoutSession.subscription.id;

    const customerId =
      typeof checkoutSession.customer === 'string'
        ? checkoutSession.customer
        : checkoutSession.customer?.id ?? null;

    // Step 2: retrieve the subscription separately for full details
    const sub = await stripe.subscriptions.retrieve(subscriptionId);

    const priceId = sub.items.data[0]?.price?.id ?? null;
    const plan =
      priceId === process.env.STRIPE_PRICE_ID_BIWEEKLY
        ? 'biweekly'
        : priceId === process.env.STRIPE_PRICE_ID_MONTHLY
          ? 'monthly'
          : null;

    const trialEnd = sub.trial_end
      ? new Date(sub.trial_end * 1000).toISOString()
      : null;

    // current_period_end is on the subscription object in all API versions
    const periodEnd = (sub as unknown as { current_period_end?: number }).current_period_end
      ? new Date(((sub as unknown as { current_period_end: number }).current_period_end) * 1000).toISOString()
      : null;

    // Step 3: write to Supabase
    const { error: dbError } = await supabaseAdmin.from('subscriptions').upsert(
      {
        user_id: session.user.id,
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

    return NextResponse.json({ status: sub.status, plan });

  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('[verify-session] Error:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
