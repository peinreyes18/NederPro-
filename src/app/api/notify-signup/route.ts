import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { describeAttribution } from '@/lib/attribution';

/**
 * Owner notification on every new account, including WHERE the signup came from
 * (first-touch attribution captured in the browser — see lib/attribution.ts).
 * Public endpoint, so it validates the email and rate-limits per IP; previously
 * anyone could spam the owner's inbox with it.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const hits = new Map<string, { count: number; windowStart: number }>();
const LIMIT = 10;
const WINDOW_MS = 60 * 60 * 1000;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const e = hits.get(ip);
  if (!e || now - e.windowStart > WINDOW_MS) { hits.set(ip, { count: 1, windowStart: now }); return false; }
  e.count++;
  return e.count > LIMIT;
}

const str = (v: unknown, max = 80) => (typeof v === 'string' ? v.slice(0, max) : undefined);

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (rateLimited(ip)) return NextResponse.json({ error: 'Too many requests' }, { status: 429 });

  let body: Record<string, unknown>;
  try { body = await request.json(); } catch { return NextResponse.json({ error: 'Invalid body' }, { status: 400 }); }

  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }

  const a = (body.attribution && typeof body.attribution === 'object' ? body.attribution : {}) as Record<string, unknown>;
  const attribution = {
    source: str(a.source), medium: str(a.medium), campaign: str(a.campaign),
    content: str(a.content), landing: str(a.landing, 120), referrer: str(a.referrer),
  };
  const where = describeAttribution(attribution);

  try {
    await new Resend(process.env.RESEND_API_KEY).emails.send({
      from: 'hello@nederpro.com',
      to: 'lainefajardo18@gmail.com',
      subject: `New NederPro signup — via ${attribution.source ?? 'unknown'}`,
      html: `<p>A new user just signed up: <strong>${email}</strong></p><p><strong>Came from:</strong> ${where}</p>`,
    });
  } catch (err) {
    console.error('notify-signup failed:', err);
  }

  return NextResponse.json({ ok: true });
}
