'use client';

import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';

/**
 * A slim, non-blocking upgrade prompt shown at the top of a public "catalogue"
 * page (e.g. the Reading / Listening index) to visitors who aren't subscribed.
 * The catalogue itself stays visible — this just tells them what unlocks it and
 * where to click. Subscribers (and the brief auth-loading window) see nothing.
 *
 * Use this on pages that only list content. The actual exercises live on gated
 * detail routes, so a non-subscriber who clicks through still hits the paywall.
 */
export default function PreviewBanner({ feature }: { feature: string }) {
  const { isLoading, isSubscribed } = useAuth();
  if (isLoading || isSubscribed) return null;

  return (
    <div className="mb-8 rounded-xl border border-accent/30 bg-accent-light/30 px-4 py-3 flex flex-col sm:flex-row sm:items-center gap-3">
      <p className="text-sm text-primary flex-1">
        <span className="font-semibold">Preview.</span> Browse everything below.
        Start a free 7-day trial to open {feature} and track your progress.
      </p>
      <div className="flex gap-2 shrink-0">
        <Link
          href="/signup"
          className="px-4 py-2 rounded-lg bg-accent hover:bg-accent-hover text-white text-sm font-semibold transition-colors whitespace-nowrap"
        >
          Start free trial
        </Link>
        <Link
          href="/pricing"
          className="px-4 py-2 rounded-lg border border-border text-sm text-muted hover:bg-surface-hover transition-colors whitespace-nowrap"
        >
          See pricing
        </Link>
      </div>
    </div>
  );
}
