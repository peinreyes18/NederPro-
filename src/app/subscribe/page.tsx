'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { trackBeginCheckout } from '@/lib/analytics';

type Plan = 'biweekly' | 'monthly';

const plans: { id: Plan; label: string; price: string; period: string; badge?: string }[] = [
  { id: 'biweekly', label: 'Every 2 weeks', price: '€2.49', period: 'per 2 weeks' },
  { id: 'monthly', label: 'Monthly', price: '€3.49', period: 'per month', badge: 'Best value' },
];

const included = [
  'All grammar levels (A0 – B2)',
  'Vocabulary, exercises & exam practice',
  'AI-powered writing feedback',
  'Culture, history & reference guides',
  'Progress tracking across devices',
];

export default function SubscribePage() {
  const router = useRouter();
  const [selected, setSelected] = useState<Plan>('monthly');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleStartTrial() {
    setLoading(true);
    setError(null);
    trackBeginCheckout(selected);

    try {
      const res = await fetch('/api/stripe/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan: selected }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? 'Something went wrong. Please try again.');
        setLoading(false);
        return;
      }

      router.push(data.url);
    } catch {
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  }

  const selectedPlan = plans.find((p) => p.id === selected)!;

  return (
    <div className="max-w-lg mx-auto px-4 py-16">
      <div className="text-center mb-8">
        <div className="w-12 h-12 rounded-full bg-accent-light flex items-center justify-center mb-4 mx-auto">
          <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-primary mb-1">Start your free trial</h1>
        <p className="text-primary-light text-sm">
          7 days free — full access, no charge until the trial ends.
        </p>
      </div>

      {/* What's included */}
      <Card className="mb-4">
        <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">Everything included</p>
        <ul className="space-y-2">
          {included.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-primary-light">
              <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </Card>

      {/* Plan selector */}
      <Card className="mb-4">
        <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">Choose your plan</p>
        <div className="space-y-2">
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setSelected(plan.id)}
              className={cn(
                'w-full flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-all duration-150 text-left',
                selected === plan.id
                  ? 'border-accent bg-accent-light'
                  : 'border-border bg-background hover:border-accent/40'
              )}
            >
              <div className="flex items-center gap-3">
                <div className={cn(
                  'w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center',
                  selected === plan.id ? 'border-accent' : 'border-border'
                )}>
                  {selected === plan.id && (
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  )}
                </div>
                <div>
                  <span className="text-sm font-medium text-primary">{plan.label}</span>
                  {plan.badge && (
                    <span className="ml-2 text-xs font-semibold text-accent bg-accent-light px-1.5 py-0.5 rounded-md">
                      {plan.badge}
                    </span>
                  )}
                </div>
              </div>
              <div className="text-right">
                <span className="text-base font-bold text-primary">{plan.price}</span>
                <span className="text-xs text-muted ml-1">{plan.period}</span>
              </div>
            </button>
          ))}
        </div>
      </Card>

      {error && (
        <p className="text-sm text-error bg-error-light rounded-lg px-3 py-2 mb-4">
          {error}
        </p>
      )}

      <Button className="w-full" onClick={handleStartTrial} disabled={loading}>
        {loading
          ? 'Redirecting to checkout…'
          : `Start free trial — then ${selectedPlan.price} ${selectedPlan.period} →`}
      </Button>

      <p className="text-xs text-muted text-center mt-3">
        Cancel anytime before the trial ends and you won&apos;t be charged. Secure payment via Stripe.
      </p>
    </div>
  );
}
