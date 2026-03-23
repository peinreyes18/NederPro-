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
  const cookieStore = await cookies();
  const { sessionId } = await request.json();

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

  try {
    // Retrieve the checkout session from Stripe
    const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['subscription'],
    });

    if (checkoutSession.mode !== 'subscription' || !checkoutSession.subscription) {
      return NextResponse.json({ error: 'Invalid session' }, { status: 400 });
    }

    const sub = checkoutSession.subscription as import('stripe').Stripe.Subscription;
    const priceId = sub.items.data[0]?.price.id;

    const plan =
      priceId === process.env.STRIPE_PRICE_ID_BIWEEKLY
        ? 'biweekly'
        : priceId === process.env.STRIPE_PRICE_ID_MONTHLY
          ? 'monthly'
          : null;

    const trialEnd = sub.trial_end
      ? new Date(sub.trial_end * 1000).toISOString()
      : null;

    const currentPeriodEnd = sub.items.data[0]?.current_period_end
      ? new Date(sub.items.data[0].current_period_end * 1000).toISOString()
      : null;

    // Write subscription to Supabase using service role (bypasses RLS)
    const { error } = await supabaseAdmin.from('subscriptions').upsert(
      {
        user_id: session.user.id,
        stripe_customer_id: checkoutSession.customer as string,
        stripe_subscription_id: sub.id,
        status: sub.status,
        plan,
        trial_end: trialEnd,
        current_period_end: currentPeriodEnd,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'user_id' }
    );

    if (error) {
      console.error('Supabase upsert error:', error);
      return NextResponse.json({ error: 'DB write failed' }, { status: 500 });
    }

    return NextResponse.json({ status: sub.status, plan });
  } catch (err) {
    console.error('verify-session error:', err);
    return NextResponse.json({ error: 'Stripe error' }, { status: 500 });
  }
}
