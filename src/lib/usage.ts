import { createClient } from '@supabase/supabase-js';

/**
 * Daily usage limits for TRIAL users.
 *
 * The goal is to stop the "start trial → binge everything in a weekend →
 * cancel before the charge" pattern. Paying (active) subscribers are never
 * capped; only valid trial users are. Everyone else is already blocked by the
 * middleware/subscription checks.
 *
 * Counting is per UTC day, per kind, stored in the `daily_usage` table and
 * incremented atomically via the `consume_daily_usage` Postgres function.
 */

export type UsageKind = 'exercise' | 'mock_exam' | 'speaking' | 'writing';

/** Per-day caps for trial users. Tune these freely — they're the only knob. */
export const DAILY_CAPS: Record<UsageKind, number> = {
  exercise: 5,   // exercise sets opened per day
  mock_exam: 1,  // full mock exams per day (the big "exam dump")
  speaking: 10,  // speaking conversations started per day (AI cost)
  writing: 10,   // AI writing-feedback requests per day (AI cost)
};

export const USAGE_KINDS: UsageKind[] = ['exercise', 'mock_exam', 'speaking', 'writing'];

export function isUsageKind(v: unknown): v is UsageKind {
  return typeof v === 'string' && (USAGE_KINDS as string[]).includes(v);
}

function admin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

export type AccessKind = 'unlimited' | 'limited' | 'blocked';

/**
 * - `unlimited` — active (paying) subscriber, never capped.
 * - `limited`   — valid trial (card on file, not expired) → daily caps apply.
 * - `blocked`   — no access at all (no row, canceled, expired, no card).
 */
export async function getAccessKind(userId: string): Promise<AccessKind> {
  const { data } = await admin()
    .from('subscriptions')
    .select('status, trial_end, has_payment_method')
    .eq('user_id', userId)
    .maybeSingle();

  if (!data) return 'blocked';
  if (data.status === 'active') return 'unlimited';
  if (data.status === 'trialing') {
    if (!data.has_payment_method) return 'blocked';
    if (data.trial_end && new Date(data.trial_end) <= new Date()) return 'blocked';
    return 'limited';
  }
  return 'blocked';
}

export interface ConsumeResult {
  allowed: boolean;
  /** true when the user is a capped trial user (so the UI can show "X left") */
  limited: boolean;
  cap: number;
  used: number;
  remaining: number;
}

/**
 * Try to consume one unit of `kind` for this user.
 * Paid users always pass without touching the counter. Trial users pass only
 * while under the daily cap. On any DB hiccup we fail OPEN (allow) so a glitch
 * never blocks a legitimate paying-soon trial user.
 */
export async function consume(userId: string, kind: UsageKind): Promise<ConsumeResult> {
  const cap = DAILY_CAPS[kind];
  const access = await getAccessKind(userId);

  if (access === 'blocked') {
    return { allowed: false, limited: false, cap, used: cap, remaining: 0 };
  }
  if (access === 'unlimited') {
    return { allowed: true, limited: false, cap, used: 0, remaining: cap };
  }

  // limited (trial) → atomic check-and-increment
  const { data, error } = await admin().rpc('consume_daily_usage', {
    p_user: userId,
    p_kind: kind,
    p_cap: cap,
  });

  if (error) {
    console.error('consume_daily_usage error:', error);
    return { allowed: true, limited: true, cap, used: 0, remaining: cap }; // fail open
  }

  const newCount = data as number | null; // NULL means cap already reached
  if (newCount == null) {
    return { allowed: false, limited: true, cap, used: cap, remaining: 0 };
  }
  return {
    allowed: true,
    limited: true,
    cap,
    used: newCount,
    remaining: Math.max(0, cap - newCount),
  };
}

export interface UsageStatus {
  access: AccessKind;
  caps: Record<UsageKind, number>;
  used: Record<UsageKind, number>;
}

/** Read today's usage without consuming anything (for showing counters). */
export async function getStatus(userId: string): Promise<UsageStatus> {
  const access = await getAccessKind(userId);
  const used: Record<UsageKind, number> = { exercise: 0, mock_exam: 0, speaking: 0, writing: 0 };

  if (access === 'limited') {
    const today = new Date().toISOString().slice(0, 10);
    const { data } = await admin()
      .from('daily_usage')
      .select('kind, count')
      .eq('user_id', userId)
      .eq('day', today);
    for (const row of data ?? []) {
      if (isUsageKind(row.kind)) used[row.kind] = row.count as number;
    }
  }

  return { access, caps: DAILY_CAPS, used };
}
