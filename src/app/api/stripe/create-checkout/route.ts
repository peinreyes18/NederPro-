import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { stripe } from '@/lib/stripe';

export async function POST(request: NextRequest) {
  const cookieStore = await cookies();
  const body = await request.json().catch(() => ({}));
  const plan: 'biweekly' | 'monthly' = body.plan === 'biweekly' ? 'biweekly' : 'monthly';

  const priceId =
    plan === 'biweekly'
      ? process.env.STRIPE_PRICE_ID_BIWEEKLY!
      : process.env.STRIPE_PRICE_ID_MONTHLY!;

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll() {},
      },
    }
  );

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Check if user already has a Stripe customer ID
  const { data: subscription } = await supabase
    .from('subscriptions')
    .select('stripe_customer_id')
    .eq('user_id', session.user.id)
    .single();

  let customerId = subscription?.stripe_customer_id;

  if (!customerId) {
    const customer = await stripe.customers.create({
      email: session.user.email,
      metadata: { supabase_user_id: session.user.id },
    });
    customerId = customer.id;
  }

  const origin = request.headers.get('origin') ?? 'https://nederpro.com';

  const checkoutSession = await stripe.checkout.sessions.create({
    customer: customerId,
    payment_method_types: ['card'],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: 'subscription',
    subscription_data: {
      trial_period_days: 7,
    },
    success_url: `${origin}/subscribe/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/subscribe`,
  });

  return NextResponse.json({ url: checkoutSession.url });
}
