'use client';

import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import Button from './Button';

interface SubscriptionGateProps {
  /** Content to render when the user is subscribed. Optional when used as a standalone blocker. */
  children?: React.ReactNode;
  /** Short label for what the user is trying to access, e.g. "exercises" */
  feature?: string;
}

/**
 * Renders children only when the user has an active subscription or trial.
 * Shows contextual CTAs for anonymous visitors and logged-in free users.
 */
export default function SubscriptionGate({
  children,
  feature = 'this feature',
}: SubscriptionGateProps) {
  const { user, isLoading, isSubscribed } = useAuth();

  // While auth is resolving, render an invisible placeholder with the same
  // rough height so the page doesn't shift.
  if (isLoading) {
    return (
      <div className="animate-pulse rounded-2xl border border-border bg-surface h-64" />
    );
  }

  // Subscribed (active or trialing) — just render the content
  if (isSubscribed) {
    return <>{children}</>;
  }

  // ── Shared feature list ────────────────────────────────────────────────────
  const perks = [
    'Interactive exercises for every grammar topic',
    'Vocabulary drills, quizzes & spaced-repetition review',
    'Full mock exam sets (Inburgeringsexamen & NT2)',
    'AI-powered writing feedback',
    'Progress tracking across all devices',
  ];

  // ── Not logged in ──────────────────────────────────────────────────────────
  if (!user) {
    return (
      <div className="rounded-2xl border border-accent/30 bg-accent-light/30 px-6 py-8 text-center">
        <div className="w-12 h-12 rounded-full bg-accent-light flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-primary mb-2">
          Create a free account to access {feature}
        </h2>
        <p className="text-sm text-muted mb-5 max-w-sm mx-auto">
          7-day free trial · Full access · No credit card at signup
        </p>

        <ul className="text-left space-y-2 mb-6 max-w-xs mx-auto">
          {perks.map((p) => (
            <li key={p} className="flex items-start gap-2 text-sm text-primary-light">
              <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              {p}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/signup">
            <Button size="lg">Start free trial →</Button>
          </Link>
          <Link href="/login">
            <Button variant="outline" size="lg">Sign in</Button>
          </Link>
        </div>
      </div>
    );
  }

  // ── Logged in, no subscription ─────────────────────────────────────────────
  return (
    <div className="rounded-2xl border border-accent/30 bg-accent-light/30 px-6 py-8 text-center">
      <div className="w-12 h-12 rounded-full bg-accent-light flex items-center justify-center mx-auto mb-4">
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      </div>
      <h2 className="text-xl font-bold text-primary mb-2">
        Unlock {feature} with a free trial
      </h2>
      <p className="text-sm text-muted mb-5 max-w-sm mx-auto">
        Your 7-day free trial gives you full access — no credit card required until the trial ends.
      </p>

      <ul className="text-left space-y-2 mb-6 max-w-xs mx-auto">
        {perks.map((p) => (
          <li key={p} className="flex items-start gap-2 text-sm text-primary-light">
            <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            {p}
          </li>
        ))}
      </ul>

      <Link href="/subscribe">
        <Button size="lg">Start free trial — 7 days free →</Button>
      </Link>
      <p className="text-xs text-muted mt-3">
        Cancel any time before the trial ends and you won&apos;t be charged.
      </p>
    </div>
  );
}
