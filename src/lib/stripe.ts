import Stripe from 'stripe';

let _instance: Stripe | null = null;

function getInstance(): Stripe {
  if (!_instance) {
    _instance = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2026-02-25.clover',
    });
  }
  return _instance;
}

export const stripe = new Proxy({} as Stripe, {
  get(_target, prop) {
    return getInstance()[prop as keyof Stripe];
  },
});
