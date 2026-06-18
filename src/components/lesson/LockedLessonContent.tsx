'use client';

import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import Button from '@/components/ui/Button';

/**
 * Wraps the second half of a gated lesson (A2/B1/B2).
 *
 * - Subscribers (active or valid trial) see the full content.
 * - While auth/subscription is still resolving — and during server-side
 *   rendering — the full content is rendered too. This is deliberate: it keeps
 *   the locked text in the page HTML so Google can still index it (no cloaking),
 *   and it only blurs on the client once we know the visitor isn't subscribed.
 * - Everyone else sees a short blurred teaser plus a "start free trial" gate.
 *
 * The `.npaywall` class on the wrapper matches the `hasPart` cssSelector in the
 * lesson page's structured data, so Google treats this as a compliant
 * (non-cloaked) metered paywall.
 */
export default function LockedLessonContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isSubscribed, subscriptionLoaded } = useAuth();

  // Subscribed, or we don't yet know (SSR + first paint) → show full content.
  if (isSubscribed || !subscriptionLoaded) {
    return <div className="npaywall">{children}</div>;
  }

  // Not subscribed → blurred teaser + gate.
  return (
    <div className="npaywall">
      <div className="relative">
        {/* Blurred teaser of the locked content */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none max-h-56 overflow-hidden opacity-60 blur-[3px]"
        >
          {children}
        </div>
        {/* Fade so the blur dissolves into the page */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Gate */}
      <div className="rounded-2xl border border-accent/30 bg-accent-light/30 px-6 py-8 text-center -mt-6 relative">
        <div className="w-12 h-12 rounded-full bg-accent-light flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-primary mb-2">
          Keep reading the full lesson
        </h2>
        <p className="text-sm text-muted mb-5 max-w-sm mx-auto">
          You&apos;ve read the first half. Start your free trial to unlock the rest of
          this lesson — plus every exercise, mock exam, and the speaking owl.
        </p>
        <p className="text-sm text-muted mb-6">
          7-day free trial · Cancel before day 7, pay nothing
        </p>

        {user ? (
          <Link href="/subscribe">
            <Button size="lg">Start free trial — unlock everything →</Button>
          </Link>
        ) : (
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/signup">
              <Button size="lg">Start free trial →</Button>
            </Link>
            <Link href="/login">
              <Button variant="outline" size="lg">Sign in</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
