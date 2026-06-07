import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { createAdminClient } from '@/lib/supabase-admin';
import { cookies } from 'next/headers';
import { stripe } from '@/lib/stripe';

export async function POST(request: NextRequest) {
  const cookieStore = await cookies();
  let reason: string | null = null;
  try {
    const body = await request.json();
    reason = typeof body?.reason === 'string' ? body.reason.trim().slice(0, 500) || null : null;
  } catch { /* no body is fine */ }

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
    // Optimistic DB update — must use admin client because RLS only grants SELECT to users
    await createAdminClient()
      .from('subscriptions')
      .update({ status: 'canceled', cancellation_reason: reason, updated_at: new Date().toISOString() })
      .eq('user_id', session.user.id);

    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to cancel subscription';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
