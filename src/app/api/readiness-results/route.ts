import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { sendReadinessResultsEmail } from '@/lib/email';
import { createAdminClient } from '@/lib/supabase-admin';
import { describeAttribution } from '@/lib/attribution';

/**
 * POST /api/readiness-results
 * Emails a visitor their readiness-test result + study plan, notifies the owner,
 * and stores the lead when the `leads` table exists (see supabase/leads.sql).
 * Public (no account) — so it validates strictly and rate-limits per IP.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const VERDICTS = new Set(['ready', 'nearly', 'not-yet']);
const LEVELS = new Set(['a0', 'a1', 'a2']);

const hits = new Map<string, { count: number; windowStart: number }>();
const LIMIT = 10; // per IP per hour
const WINDOW_MS = 60 * 60 * 1000;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const e = hits.get(ip);
  if (!e || now - e.windowStart > WINDOW_MS) { hits.set(ip, { count: 1, windowStart: now }); return false; }
  e.count++;
  return e.count > LIMIT;
}

type Gap = { title: string; href: string };

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (rateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try { body = await request.json(); } catch { return NextResponse.json({ error: 'Invalid body' }, { status: 400 }); }

  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  const pct = typeof body.pct === 'number' && body.pct >= 0 && body.pct <= 100 ? Math.round(body.pct) : null;
  const verdict = typeof body.verdict === 'string' && VERDICTS.has(body.verdict) ? body.verdict : null;
  const startLevel = typeof body.startLevel === 'string' && LEVELS.has(body.startLevel) ? body.startLevel : null;
  const startLevelLabel = typeof body.startLevelLabel === 'string' ? body.startLevelLabel.slice(0, 40) : '';
  const gaps: Gap[] = Array.isArray(body.gaps)
    ? (body.gaps as unknown[])
        .filter((g): g is Gap => !!g && typeof g === 'object' && typeof (g as Gap).title === 'string' && typeof (g as Gap).href === 'string' && (g as Gap).href.startsWith('/'))
        .slice(0, 5)
        .map((g) => ({ title: g.title.slice(0, 80), href: g.href.slice(0, 120) }))
    : [];
  const byArea = (body.byArea && typeof body.byArea === 'object' ? body.byArea : {}) as Record<string, { correct?: number; total?: number }>;
  const area = (k: string) => {
    const a = byArea[k] ?? {};
    return `${Number(a.correct) || 0}/${Number(a.total) || 0}`;
  };

  if (!EMAIL_RE.test(email) || email.length > 254 || pct === null || !verdict || !startLevel) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
  }

  // Where this lead came from (tracked link / referrer), captured in the browser.
  const str = (v: unknown, max = 80) => (typeof v === 'string' ? v.slice(0, max) : undefined);
  const a = (body.attribution && typeof body.attribution === 'object' ? body.attribution : {}) as Record<string, unknown>;
  const attribution = {
    source: str(a.source), medium: str(a.medium), campaign: str(a.campaign),
    content: str(a.content), landing: str(a.landing, 120), referrer: str(a.referrer),
  };
  const where = describeAttribution(attribution);

  // 1. Results email to the visitor
  try {
    await sendReadinessResultsEmail({
      to: email,
      pct,
      verdict: verdict as 'ready' | 'nearly' | 'not-yet',
      startLevel,
      startLevelLabel,
      gaps,
      areas: { a1: area('a1'), a2: area('a2'), knm: area('knm') },
    });
  } catch (err) {
    console.error('readiness results email failed:', err);
    return NextResponse.json({ error: 'Could not send email' }, { status: 502 });
  }

  // 2. Owner notification (best effort)
  try {
    await new Resend(process.env.RESEND_API_KEY).emails.send({
      from: 'hello@nederpro.com',
      to: 'lainefajardo18@gmail.com',
      subject: `🎯 Readiness test lead: ${email} (${pct}%, ${verdict}) — via ${attribution.source ?? 'unknown'}`,
      html: `<p><strong>${email}</strong> took the readiness test.</p><p>Score ${pct}% · ${verdict} · start at ${startLevel.toUpperCase()}</p><p>A1 ${area('a1')} · A2 ${area('a2')} · KNM ${area('knm')}</p><p><strong>Came from:</strong> ${where}</p>`,
    });
  } catch (err) { console.error('owner notify failed:', err); }

  // 3. Store the lead if the table exists (see supabase/leads.sql). Fail open.
  try {
    await createAdminClient()
      .from('leads')
      .insert({
        email, source: 'readiness-test', score_pct: pct, verdict, start_level: startLevel,
        utm_source: attribution.source ?? null, utm_medium: attribution.medium ?? null,
        utm_campaign: attribution.campaign ?? null, utm_content: attribution.content ?? null,
        landing_path: attribution.landing ?? null,
      });
  } catch { /* table may not exist yet */ }

  return NextResponse.json({ ok: true });
}
