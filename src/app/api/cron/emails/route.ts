import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { sendTrialExpiryEmail, sendTrialLastDayEmail } from '@/lib/email';

/**
 * Vercel Cron Job — runs every day at 09:00 UTC
 * Handles:
 *   1. Trial expiry reminders (48h warning) — trial ends in ~2 days
 *   2. Trial last-day reminders (24h warning) — trial ends today
 *
 * Protected by CRON_SECRET header (set in Vercel env vars).
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getUserProfile(supabaseAdmin: any, userId: string): Promise<{
  email: string;
  firstName?: string;
} | null> {
  const { data } = await supabaseAdmin.auth.admin.getUserById(userId);
  if (!data?.user?.email) return null;
  const meta = data.user.user_metadata ?? {};
  return {
    email: data.user.email,
    firstName: meta.full_name?.split(' ')[0] || meta.name?.split(' ')[0] || undefined,
  };
}

export async function GET(request: NextRequest) {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
  // Vercel cron sends the secret as "Authorization: Bearer <CRON_SECRET>"
  // Fall back to x-cron-secret or ?secret= for manual testing
  const cronSecret = process.env.CRON_SECRET;
  const authHeader = request.headers.get('authorization');
  const manualSecret =
    request.headers.get('x-cron-secret') ??
    request.nextUrl.searchParams.get('secret');

  const isVercelCron = cronSecret && authHeader === `Bearer ${cronSecret}`;
  const isManualTest = cronSecret && manualSecret === cronSecret;

  if (!isVercelCron && !isManualTest) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const now = new Date();
  const results = { expiry: 0, lastday: 0, errors: 0 };

  // ── 1. Trial expiry reminder (48h warning) ─────────────────────────────────
  // Find subscriptions whose trial_end is 44–52 hours from now (gives an 8h window)
  const expiryStart = new Date(now.getTime() + 44 * 60 * 60 * 1000).toISOString();
  const expiryEnd   = new Date(now.getTime() + 52 * 60 * 60 * 1000).toISOString();

  const { data: expirySubs } = await supabaseAdmin
    .from('subscriptions')
    .select('user_id, trial_end, plan')
    .eq('status', 'trialing')
    .gte('trial_end', expiryStart)
    .lte('trial_end', expiryEnd);

  for (const sub of expirySubs ?? []) {
    const profile = await getUserProfile(supabaseAdmin, sub.user_id);
    if (!profile) continue;

    const trialEndDate = new Date(sub.trial_end).toLocaleDateString('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    });

    const planPrice = sub.plan === 'yearly' ? '€34.99' : '€3.49';
    const planPeriod = sub.plan === 'yearly' ? 'per year' : 'per month';

    try {
      await sendTrialExpiryEmail({
        to: profile.email,
        firstName: profile.firstName,
        trialEndDate,
        planPrice,
        planPeriod,
      });
      results.expiry++;
    } catch (e) {
      console.error('Trial expiry email error:', e);
      results.errors++;
    }
  }

  // ── 2. Trial last-day reminder (24h warning) ───────────────────────────────
  // Find subscriptions whose trial_end is 20–28 hours from now
  const lastDayStart = new Date(now.getTime() + 20 * 60 * 60 * 1000).toISOString();
  const lastDayEnd   = new Date(now.getTime() + 28 * 60 * 60 * 1000).toISOString();

  const { data: lastDaySubs } = await supabaseAdmin
    .from('subscriptions')
    .select('user_id, trial_end, plan')
    .eq('status', 'trialing')
    .gte('trial_end', lastDayStart)
    .lte('trial_end', lastDayEnd);

  for (const sub of lastDaySubs ?? []) {
    const profile = await getUserProfile(supabaseAdmin, sub.user_id);
    if (!profile) continue;

    const planPrice = sub.plan === 'yearly' ? '€34.99' : '€3.49';
    const planPeriod = sub.plan === 'yearly' ? 'per year' : 'per month';

    try {
      await sendTrialLastDayEmail({
        to: profile.email,
        firstName: profile.firstName,
        planPrice,
        planPeriod,
      });
      results.lastday++;
    } catch (e) {
      console.error('Trial last-day email error:', e);
      results.errors++;
    }
  }

  // ── 3. Safety net: mark expired trialing subscriptions as canceled ──────────
  // Catches any rows where the Stripe webhook was missed or delayed.
  const { data: expiredRows } = await supabaseAdmin
    .from('subscriptions')
    .update({ status: 'canceled', updated_at: now.toISOString() })
    .eq('status', 'trialing')
    .lt('trial_end', now.toISOString())
    .select('id');
  const expiredCount = expiredRows?.length ?? 0;

  console.log(`Cron email results: expiry=${results.expiry}, lastday=${results.lastday}, errors=${results.errors}, expired_cleaned=${expiredCount ?? 0}`);
  return NextResponse.json({ ok: true, ...results, expired_cleaned: expiredCount ?? 0 });
}
