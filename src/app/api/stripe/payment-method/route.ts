import { NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { stripe } from '@/lib/stripe';
import Stripe from 'stripe';

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

  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { data: sub } = await supabase
    .from('subscriptions')
    .select('stripe_customer_id, stripe_subscription_id')
    .eq('user_id', session.user.id)
    .single();

  if (!sub?.stripe_customer_id) {
    return NextResponse.json({ card: null });
  }

  // Try to get the payment method from the subscription first
  if (sub.stripe_subscription_id) {
    try {
      const subscription = await stripe.subscriptions.retrieve(sub.stripe_subscription_id, {
        expand: ['default_payment_method'],
      });
      const pm = subscription.default_payment_method as Stripe.PaymentMethod | null;
      if (pm?.card) {
        return NextResponse.json({
          card: {
            brand: pm.card.brand,
            last4: pm.card.last4,
            exp_month: pm.card.exp_month,
            exp_year: pm.card.exp_year,
          },
        });
      }
    } catch {
      // fall through to customer lookup
    }
  }

  // Fall back to customer's default payment method
  try {
    const customer = await stripe.customers.retrieve(sub.stripe_customer_id, {
      expand: ['invoice_settings.default_payment_method'],
    }) as Stripe.Customer;

    const pm = customer.invoice_settings?.default_payment_method as Stripe.PaymentMethod | null;
    if (pm?.card) {
      return NextResponse.json({
        card: {
          brand: pm.card.brand,
          last4: pm.card.last4,
          exp_month: pm.card.exp_month,
          exp_year: pm.card.exp_year,
        },
      });
    }

    // Last resort: list payment methods
    const methods = await stripe.paymentMethods.list({
      customer: sub.stripe_customer_id,
      type: 'card',
      limit: 1,
    });
    const card = methods.data[0]?.card;
    if (card) {
      return NextResponse.json({
        card: {
          brand: methods.data[0].card!.brand,
          last4: methods.data[0].card!.last4,
          exp_month: methods.data[0].card!.exp_month,
          exp_year: methods.data[0].card!.exp_year,
        },
      });
    }
  } catch {
    // ignore
  }

  return NextResponse.json({ card: null });
}
