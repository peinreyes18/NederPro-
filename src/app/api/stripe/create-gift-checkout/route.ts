import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

/**
 * POST /api/stripe/create-gift-checkout
 * Creates a one-time Stripe Checkout session for a gift subscription (€34.99 yearly).
 * No auth required — anyone can buy a gift.
 */
export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin') ?? 'https://nederpro.com';

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [
      {
        price_data: {
          currency: 'eur',
          unit_amount: 3499, // €34.99
          product_data: {
            name: 'NederPro — 1 Year Gift',
            description:
              'Give someone a full year of structured Dutch learning. All grammar levels, speaking practice, mock exams, and more.',
          },
        },
        quantity: 1,
      },
    ],
    metadata: { type: 'gift', plan: 'yearly', duration_months: '12' },
    success_url: `${origin}/gift/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/gift`,
  });

  return NextResponse.json({ url: session.url });
}
