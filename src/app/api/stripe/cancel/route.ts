import { NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { stripe } from '@/lib/stripe';

export async function POST() {
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
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { data: sub } = await supabase
    .from('subscriptions')
    .select('stripe_subscription_id, status')
    .eq('user_id', session.user.id)
    .single();

  if (!sub?.stripe_subscription_id) {
    return NextResponse.json({ error: 'No subscription found' }, { status: 404 });
  }

  // Only allow cancelling trialing subscriptions from this endpoint
  // Active paid subscriptions should go through the portal
  if (sub.status !== 'trialing') {
    return NextResponse.json({ error: 'Use the billing portal to cancel a paid subscription' }, { status: 400 });
  }

  try {
    await stripe.subscriptions.cancel(sub.stripe_subscription_id);
    // Webhook will handle updating the database, but update optimistically too
    await supabase
      .from('subscriptions')
      .update({ status: 'canceled', updated_at: new Date().toISOString() })
      .eq('user_id', session.user.id);

    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to cancel subscription';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
