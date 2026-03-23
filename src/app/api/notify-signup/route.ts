import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  await resend.emails.send({
    from: 'hello@nederpro.com',
    to: 'lainefajardo18@gmail.com',
    subject: 'New NederPro signup',
    html: `<p>A new user just signed up: <strong>${email}</strong></p>`,
  });

  return NextResponse.json({ ok: true });
}
