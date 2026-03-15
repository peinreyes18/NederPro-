import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { sendDay3Email, sendTrialExpiryEmail } from '@/lib/email';

/**
 * Vercel Cron Job — runs every day at 09:00 UTC
 * Handles:
 *   1. Day 3 check-in emails  — subscribers whose trial started 3 days ago
 *   2. Trial expiry reminders — subscribers whose trial ends in ~48 hours
 *
 * Protected by CRON_SECRET header (set in Vercel env vars).
 */

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function getUserProfile(userId: string): Promise<{
  email: string;
  firstName?: string;
  goal?: string;
  level?: string;
} | null> {
  const { data } = await supabaseAdmin.auth.admin.getUserById(userId);
  if (!data?.user?.email) return null;
  const meta = data.user.user_metadata ?? {};
  return {
    email: data.user.email,
    firstName: meta.full_name?.split(' ')[0] || meta.name?.split(' ')[0] || undefined,
    goal: meta.onboarding_goal ?? undefined,
    level: meta.onboarding_level ?? undefined,
  };
}

export async function GET(request: NextRequest) {
  // Verify cron secret to prevent unauthorised calls
  const secret = request.headers.get('x-cron-secret') ?? request.nextUrl.searchParams.get('secret');
  if (secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const now = new Date();
  const results = { day3: 0, expiry: 0, errors: 0 };

  // ── 1. Day 3 check-in ──────────────────────────────────────────────────────
  // Find subscriptions created between 72–96 hours ago (trial started 3 days ago)
  const day3Start = new Date(now.getTime() - 96 * 60 * 60 * 1000).toISOString();
  const day3End   = new Date(now.getTime() - 72 * 60 * 60 * 1000).toISOString();

  const { data: day3Subs } = await supabaseAdmin
    .from('subscriptions')
    .select('user_id, created_at')
    .eq('status', 'trialing')
    .gte('created_at', day3Start)
    .lte('created_at', day3End);

  for (const sub of day3Subs ?? []) {
    const profile = await getUserProfile(sub.user_id);
    if (!profile) continue;
    try {
      await sendDay3Email({
        to: profile.email,
        firstName: profile.firstName,
        goal: profile.goal,
        level: profile.level,
      });
      results.day3++;
    } catch (e) {
      console.error('Day 3 email error:', e);
      results.errors++;
    }
  }

  // ── 2. Trial expiry reminder (48h warning) ─────────────────────────────────
  // Find subscriptions whose trial_end is 44–52 hours from now (gives an 8h window)
  const expiryStart = new Date(now.getTime() + 44 * 60 * 60 * 1000).toISOString();
  const expiryEnd   = new Date(now.getTime() + 52 * 60 * 60 * 1000).toISOString();

  const { data: expirySubs } = await supabaseAdmin
    .from('subscriptions')
    .select('user_id, trial_end, stripe_subscription_id')
    .eq('status', 'trialing')
    .gte('trial_end', expiryStart)
    .lte('trial_end', expiryEnd);

  for (const sub of expirySubs ?? []) {
    const profile = await getUserProfile(sub.user_id);
    if (!profile) continue;

    const trialEndDate = new Date(sub.trial_end).toLocaleDateString('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    });

    try {
      await sendTrialExpiryEmail({
        to: profile.email,
        firstName: profile.firstName,
        trialEndDate,
      });
      results.expiry++;
    } catch (e) {
      console.error('Trial expiry email error:', e);
      results.errors++;
    }
  }

  console.log(`Cron email results: day3=${results.day3}, expiry=${results.expiry}, errors=${results.errors}`);
  return NextResponse.json({ ok: true, ...results });
}
