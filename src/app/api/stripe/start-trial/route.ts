import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { createAdminClient } from '@/lib/supabase-admin';
import { cookies } from 'next/headers';
import { stripe } from '@/lib/stripe';

export async function POST(request: NextRequest) {
  const cookieStore = await cookies();
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
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const userId = session.user.id;
  const supabaseAdmin = createAdminClient();

  // Don't create a trial if the user already has an active/trialing subscription
  const { data: existing } = await supabaseAdmin
    .from('subscriptions')
    .select('status, stripe_customer_id')
    .eq('user_id', userId)
    .maybeSingle();

  if (existing?.status === 'active' || existing?.status === 'trialing') {
    return NextResponse.json({ ok: true }); // already has access
  }

  // Create or reuse Stripe customer
  let customerId = existing?.stripe_customer_id;
  if (!customerId) {
    const customer = await stripe.customers.create({
      email: session.user.email,
      metadata: { supabase_user_id: userId },
    });
    customerId = customer.id;
  }

  // Create a 7-day trial subscription with no payment method required.
  // trial_settings.end_behavior: 'cancel' means when the trial ends without
  // a payment method attached, Stripe cancels the subscription automatically.
  const sub = await stripe.subscriptions.create({
    customer: customerId,
    items: [{ price: process.env.STRIPE_PRICE_ID_MONTHLY! }],
    trial_period_days: 7,
    trial_settings: {
      end_behavior: { missing_payment_method: 'cancel' },
    },
    payment_settings: {
      save_default_payment_method: 'on_subscription',
    },
  });

  const trialEnd = sub.trial_end
    ? new Date(sub.trial_end * 1000).toISOString()
    : null;

  // Write subscription to DB
  await supabaseAdmin.from('subscriptions').upsert(
    {
      user_id: userId,
      stripe_customer_id: customerId,
      stripe_subscription_id: sub.id,
      status: sub.status, // 'trialing'
      plan: 'monthly',
      trial_end: trialEnd,
      current_period_end: sub.items.data[0]?.current_period_end
        ? new Date((sub.items.data[0].current_period_end as number) * 1000).toISOString()
        : null,
      updated_at: new Date().toISOString(),
    },
    { onConflict: 'user_id' }
  );

  return NextResponse.json({ ok: true });
}
