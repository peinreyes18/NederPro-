import { NextResponse } from 'next/server';

/**
 * DISABLED — no-card trials are no longer offered.
 *
 * Trials now require a card collected via Stripe Checkout (see create-checkout).
 * This route previously created a 7-day trial with no payment method, which let
 * users cancel and re-register for endless free trials. Kept as a stub returning
 * 410 Gone so any stale client or bookmarked call fails loudly instead of
 * silently granting free access.
 */
export async function POST() {
  return NextResponse.json(
    { error: 'No-card trials are no longer available. Please subscribe to start your trial.' },
    { status: 410 }
  );
}
