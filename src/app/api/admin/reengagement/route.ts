import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { sendReengagementEmail } from '@/lib/email';

/**
 * One-time re-engagement blast.
 * Sends the "You signed up — here's what you're missing 🦉" email to every
 * auth user who has NO subscription row (never started a trial).
 *
 * Protected by CRON_SECRET.
 * Call with: GET /api/admin/reengagement?secret=<CRON_SECRET>
 *
 * Add &dry_run=true to preview recipients without sending.
 */
export async function GET(request: NextRequest) {
  const cronSecret = process.env.CRON_SECRET;
  const provided =
    request.headers.get('x-cron-secret') ??
    request.nextUrl.searchParams.get('secret');

  if (!cronSecret || provided !== cronSecret) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const dryRun = request.nextUrl.searchParams.get('dry_run') === 'true';
  const excludeParam = request.nextUrl.searchParams.get('exclude') ?? '';
  const excludeEmails = new Set(excludeParam.split(',').map((e) => e.trim().toLowerCase()).filter(Boolean));

  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  // Fetch ALL auth users (paginate if >1000)
  const allUsers: { id: string; email: string; firstName?: string }[] = [];
  let page = 1;
  while (true) {
    const { data: { users }, error } = await supabaseAdmin.auth.admin.listUsers({ page, perPage: 1000 });
    if (error || !users?.length) break;
    for (const u of users) {
      if (!u.email) continue;
      const meta = u.user_metadata ?? {};
      const firstName = meta.full_name?.split(' ')[0] || meta.name?.split(' ')[0] || undefined;
      allUsers.push({ id: u.id, email: u.email, firstName });
    }
    if (users.length < 1000) break;
    page++;
  }

  if (!allUsers.length) {
    return NextResponse.json({ ok: true, sent: 0, skipped: 0, errors: 0, dryRun });
  }

  // Find users who already have ANY subscription row
  const userIds = allUsers.map((u) => u.id);
  const { data: existingSubs } = await supabaseAdmin
    .from('subscriptions')
    .select('user_id')
    .in('user_id', userIds);

  const hasSubscription = new Set((existingSubs ?? []).map((s) => s.user_id));

  // Target: signed up but NO subscription row at all, and not manually excluded
  const targets = allUsers.filter(
    (u) => !hasSubscription.has(u.id) && !excludeEmails.has(u.email.toLowerCase())
  );

  if (dryRun) {
    return NextResponse.json({
      dryRun: true,
      total_users: allUsers.length,
      would_send: targets.length,
      recipients: targets.map((u) => ({ email: u.email, firstName: u.firstName })),
    });
  }

  let sent = 0;
  let errors = 0;

  for (const user of targets) {
    try {
      await sendReengagementEmail({ to: user.email, firstName: user.firstName });
      sent++;
      // Small delay to avoid hitting Resend rate limits
      await new Promise((r) => setTimeout(r, 100));
    } catch (e) {
      console.error(`Re-engagement email failed for ${user.email}:`, e);
      errors++;
    }
  }

  console.log(`Re-engagement blast: sent=${sent}, skipped=${allUsers.length - targets.length}, errors=${errors}`);
  return NextResponse.json({ ok: true, sent, skipped: allUsers.length - targets.length, errors, dryRun: false });
}
