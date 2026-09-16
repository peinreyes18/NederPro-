import { NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { stripe } from '@/lib/stripe';
import Stripe from 'stripe';

/**
 * What the account page shows under "Payment method".
 *
 * Any Stripe payment-method type counts, not just cards: Dutch customers mostly
 * pay with iDEAL (which becomes a SEPA debit mandate), Revolut Pay or Link.
 * The old card-only version told those subscribers "No payment method on file
 * yet", which is both wrong and alarming for someone who is paying.
 *
 * `exp_month`/`exp_year` are null for non-card methods (there is no expiry).
 */
type MethodInfo = {
  type: string;
  brand: string;
  last4: string;
  exp_month: number | null;
  exp_year: number | null;
};

function describe(pm: Stripe.PaymentMethod | string | null | undefined): MethodInfo | null {
  if (!pm || typeof pm === 'string') return null;
  switch (pm.type) {
    case 'card':
      return pm.card
        ? { type: 'card', brand: pm.card.brand, last4: pm.card.last4, exp_month: pm.card.exp_month, exp_year: pm.card.exp_year }
        : null;
    case 'sepa_debit':
      return { type: 'sepa_debit', brand: 'SEPA bank account (iDEAL)', last4: pm.sepa_debit?.last4 ?? '', exp_month: null, exp_year: null };
    case 'ideal':
      return { type: 'ideal', brand: 'iDEAL', last4: '', exp_month: null, exp_year: null };
    case 'link':
      return { type: 'link', brand: 'Link', last4: '', exp_month: null, exp_year: null };
    case 'revolut_pay':
      return { type: 'revolut_pay', brand: 'Revolut Pay', last4: '', exp_month: null, exp_year: null };
    case 'paypal':
      return { type: 'paypal', brand: 'PayPal', last4: '', exp_month: null, exp_year: null };
    default:
      return { type: pm.type, brand: pm.type.replace(/_/g, ' '), last4: '', exp_month: null, exp_year: null };
  }
}

export async function GET() {
  const cookieStore = await cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return cookieStore.getAll(); },
        setAll() {},
      },
    }
  );

  // getUser() validates the token with the Auth server (getSession() only decodes the cookie).
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { data: sub } = await supabase
    .from('subscriptions')
    .select('stripe_customer_id, stripe_subscription_id')
    .eq('user_id', user.id)
    .single();

  if (!sub?.stripe_customer_id) {
    return NextResponse.json({ card: null });
  }

  // 1. The subscription's own default payment method
  if (sub.stripe_subscription_id) {
    try {
      const subscription = await stripe.subscriptions.retrieve(sub.stripe_subscription_id, {
        expand: ['default_payment_method'],
      });
      const info = describe(subscription.default_payment_method);
      if (info) return NextResponse.json({ card: info });
    } catch {
      // fall through
    }
  }

  try {
    // 2. The customer's default payment method
    const customer = await stripe.customers.retrieve(sub.stripe_customer_id, {
      expand: ['invoice_settings.default_payment_method'],
    }) as Stripe.Customer;
    const info = describe(customer.invoice_settings?.default_payment_method);
    if (info) return NextResponse.json({ card: info });

    // 3. Any saved payment method of any type
    const methods = await stripe.paymentMethods.list({ customer: sub.stripe_customer_id, limit: 1 });
    const listed = describe(methods.data[0]);
    if (listed) return NextResponse.json({ card: listed });
  } catch {
    // ignore
  }

  return NextResponse.json({ card: null });
}
