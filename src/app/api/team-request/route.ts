import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createAdminClient } from '@/lib/supabase-admin';
import { describeAttribution } from '@/lib/attribution';

/**
 * POST /api/team-request
 * Pilot / seat request from /teams. Public (no account), so it validates strictly,
 * rate-limits per IP and uses a honeypot field.
 *
 * 1. Emails the owner (this is the sales lead — must not be lost).
 * 2. Sends the requester a short confirmation (best effort).
 * 3. Stores the lead in `leads` when the table exists (fail open, same as readiness).
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const OWNER_EMAIL = 'lainefajardo18@gmail.com';

const hits = new Map<string, { count: number; windowStart: number }>();
const LIMIT = 5; // per IP per hour — nobody legitimately requests seats six times
const WINDOW_MS = 60 * 60 * 1000;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const e = hits.get(ip);
  if (!e || now - e.windowStart > WINDOW_MS) { hits.set(ip, { count: 1, windowStart: now }); return false; }
  e.count++;
  return e.count > LIMIT;
}

// Escape user text before putting it in HTML email.
function esc(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string));
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (rateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try { body = await request.json(); } catch { return NextResponse.json({ error: 'Invalid body' }, { status: 400 }); }

  const str = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '');
  const name = str(body.name, 80);
  const email = str(body.email, 254).toLowerCase();
  const company = str(body.company, 120);
  const orgType = str(body.orgType, 40);
  const seats = str(body.seats, 20);
  const message = str(body.message, 1000);
  const honeypot = str(body.website, 10);

  // Bots fill the hidden field; pretend success so they stop retrying.
  if (honeypot) return NextResponse.json({ ok: true });

  if (!name || !company || !orgType || !seats || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Please fill in your name, work email, organisation, type and seats.' }, { status: 400 });
  }

  const a = (body.attribution && typeof body.attribution === 'object' ? body.attribution : {}) as Record<string, unknown>;
  const attribution = {
    source: str(a.source, 80) || undefined, medium: str(a.medium, 80) || undefined,
    campaign: str(a.campaign, 80) || undefined, content: str(a.content, 80) || undefined,
    landing: str(a.landing, 120) || undefined, referrer: str(a.referrer, 80) || undefined,
  };
  const where = describeAttribution(attribution);

  const resend = new Resend(process.env.RESEND_API_KEY);

  // 1. Owner notification — the one email that must succeed.
  try {
    await resend.emails.send({
      from: 'hello@nederpro.com',
      to: OWNER_EMAIL,
      replyTo: email,
      subject: `🏢 Team seats request: ${company} — ${seats} seats (${orgType}) — via ${attribution.source ?? 'unknown'}`,
      html: [
        `<p><strong>${esc(name)}</strong> at <strong>${esc(company)}</strong> (${esc(orgType)}) asked for <strong>${esc(seats)}</strong> seats.</p>`,
        `<p>Reply to: <a href="mailto:${esc(email)}">${esc(email)}</a></p>`,
        message ? `<p><strong>Message:</strong><br>${esc(message).replace(/\n/g, '<br>')}</p>` : '',
        `<p><strong>Came from:</strong> ${esc(where)}</p>`,
        `<p style="color:#5b6b80;font-size:13px">Next: mint codes with supabase/bulk-gift-codes.sql (company label "${esc(company)}"), invoice from Stripe if paid, reply within one working day.</p>`,
      ].join(''),
    });
  } catch (err) {
    console.error('team-request owner email failed:', err);
    return NextResponse.json({ error: 'Could not send your request. Please email hello@nederpro.com.' }, { status: 502 });
  }

  // 2. Confirmation to the requester (best effort).
  try {
    await resend.emails.send({
      from: 'hello@nederpro.com',
      to: email,
      subject: `Your NederPro for Teams request — ${company}`,
      html: [
        `<p>Hi ${esc(name)},</p>`,
        `<p>Thanks for asking about <strong>${esc(seats)}</strong> NederPro seats for ${esc(company)}. I'll get back to you personally within one working day with codes or a quote.</p>`,
        `<p>In the meantime your colleagues can preview every lesson at <a href="https://nederpro.com/levels">nederpro.com/levels</a>.</p>`,
        `<p>Patricia<br>Founder, NederPro</p>`,
      ].join(''),
    });
  } catch (err) { console.error('team-request confirmation failed:', err); }

  // 3. Store the lead if the table exists (see supabase/leads.sql). Fail open.
  try {
    await createAdminClient().from('leads').insert({
      email, source: 'teams',
      utm_source: attribution.source ?? null, utm_medium: attribution.medium ?? null,
      utm_campaign: attribution.campaign ?? null, utm_content: `${orgType} · ${seats} · ${company}`.slice(0, 200),
      landing_path: attribution.landing ?? null,
    });
  } catch { /* table may not exist yet */ }

  return NextResponse.json({ ok: true });
}
