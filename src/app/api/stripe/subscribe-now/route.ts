import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { stripe } from '@/lib/stripe';

/**
 * POST /api/stripe/subscribe-now
 * For trialing users who want to commit to a plan and add a payment method early.
 *
 * 1. If the selected plan differs from current → update Stripe subscription price.
 * 2. Open Stripe Billing Portal so the user can add their payment method.
 *
 * Body: { plan: 'monthly' | 'yearly' }
 */
export async function POST(request: NextRequest) {
  const cookieStore = await cookies();
  const body = await request.json().catch(() => ({}));
  const plan: 'yearly' | 'monthly' = body.plan === 'yearly' ? 'yearly' : 'monthly';

  const priceId =
    plan === 'yearly'
      ? process.env.STRIPE_PRICE_ID_YEARLY!
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

  const { data: sub } = await supabase
    .from('subscriptions')
    .select('stripe_customer_id, stripe_subscription_id, plan, status')
    .eq('user_id', session.user.id)
    .single();

  if (!sub?.stripe_customer_id || !sub?.stripe_subscription_id) {
    return NextResponse.json({ error: 'No subscription found.' }, { status: 404 });
  }

  if (sub.status !== 'trialing') {
    return NextResponse.json({ error: 'Subscription is not in trial.' }, { status: 409 });
  }

  // ── Switch plan if different ────────────────────────────────────────────────
  if (sub.plan !== plan) {
    const stripeSub = await stripe.subscriptions.retrieve(sub.stripe_subscription_id);
    const itemId = stripeSub.items.data[0]?.id;

    if (itemId) {
      await stripe.subscriptions.update(sub.stripe_subscription_id, {
        items: [{ id: itemId, price: priceId }],
        proration_behavior: 'none',
      });

      // Reflect new plan in our DB (webhook will also reconcile on next event)
      await supabase
        .from('subscriptions')
        .update({ plan })
        .eq('user_id', session.user.id);
    }
  }

  // ── Open billing portal for payment method setup ───────────────────────────
  const origin = request.headers.get('origin') ?? 'https://nederpro.com';

  const portalSession = await stripe.billingPortal.sessions.create({
    customer: sub.stripe_customer_id,
    return_url: `${origin}/account`,
  });

  return NextResponse.json({ url: portalSession.url });
}
