import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { email } = await request.json();

  await resend.emails.send({
    from: 'hello@nederpro.com',
    to: 'lainefajardo18@gmail.com',
    subject: 'New NederPro signup',
    html: `<p>A new user just signed up: <strong>${email}</strong></p>`,
  });

  return NextResponse.json({ ok: true });
}
