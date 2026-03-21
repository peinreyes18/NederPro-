/**
 * Thin wrapper around gtag so we get typed events and a single place
 * to add/remove tracking without touching every component.
 *
 * Only fires when window.gtag is available (i.e. GA4 is loaded and
 * the user has accepted analytics cookies).
 */

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag?: (...args: any[]) => void;
  }
}

function gtag(...args: unknown[]) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag(...args);
  }
}

/** User created an account (email confirmed) */
export function trackSignUp() {
  gtag('event', 'sign_up', { method: 'email' });
}

/** User clicked "Start free trial" on the subscribe page */
export function trackBeginCheckout(plan: string) {
  gtag('event', 'begin_checkout', {
    currency: 'EUR',
    value: plan === 'monthly' ? 3.49 : 2.49,
    items: [{ item_id: plan, item_name: `NederPro ${plan}` }],
  });
}

/** User completed onboarding (chose goal + level) */
export function trackOnboardingComplete(goal: string, level: string) {
  gtag('event', 'tutorial_complete', { goal, level });
}
