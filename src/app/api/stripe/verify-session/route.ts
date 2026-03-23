import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { createClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

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

    // Retrieve the checkout session from Stripe with subscription expanded
    const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['subscription'],
    });

    if (checkoutSession.mode !== 'subscription') {
      return NextResponse.json({ error: 'Not a subscription session' }, { status: 400 });
    }

    if (!checkoutSession.subscription) {
      return NextResponse.json({ error: 'No subscription on session' }, { status: 400 });
    }

    // subscription is expanded so it's a full object
    const sub = checkoutSession.subscription as Stripe.Subscription;
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

    const periodEnd = sub.items.data[0]?.current_period_end
      ? new Date((sub.items.data[0].current_period_end as number) * 1000).toISOString()
      : null;

    const customerId =
      typeof checkoutSession.customer === 'string'
        ? checkoutSession.customer
        : (checkoutSession.customer as Stripe.Customer)?.id ?? null;

    // Write to Supabase using service role key (bypasses RLS)
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
      console.error('[verify-session] Supabase error:', dbError);
      return NextResponse.json({ error: 'Database error', detail: dbError.message }, { status: 500 });
    }

    return NextResponse.json({ status: sub.status, plan });

  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('[verify-session] Error:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
