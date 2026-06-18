'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Button from './Button';

type Kind = 'exercise' | 'mock_exam';

/**
 * Wraps a subscriber-only activity and enforces the daily TRIAL cap for it.
 *
 * Mount this INSIDE <SubscriptionGate> so it only ever runs for users who
 * already have access (active or valid trial). On mount it asks the server to
 * consume one unit; paid users always pass (the server never increments their
 * counter), trial users pass until they hit the daily cap, after which they see
 * an upgrade gate instead of the activity.
 *
 * Note: a credit is spent when the activity loads, so a page refresh costs
 * another credit. The caps are generous enough that this is fine in practice.
 */
export default function TrialUsageGate({
  kind,
  label,
  children,
}: {
  kind: Kind;
  /** Plural noun for the message, e.g. "exercise sets" */
  label: string;
  children: React.ReactNode;
}) {
  const [state, setState] = useState<'checking' | 'allowed' | 'blocked'>('checking');
  const [cap, setCap] = useState(0);
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return; // guard React strict-mode double-invoke
    fired.current = true;
    (async () => {
      try {
        const res = await fetch('/api/usage', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ kind }),
        });
        if (!res.ok && res.status !== 200) {
          setState('allowed'); // any server hiccup → fail open, never block
          return;
        }
        const data = await res.json();
        setCap(data.cap ?? 0);
        setState(data.allowed ? 'allowed' : 'blocked');
      } catch {
        setState('allowed'); // network error → fail open
      }
    })();
  }, [kind]);

  if (state === 'checking') {
    return <div className="animate-pulse rounded-2xl border border-border bg-surface h-64" />;
  }

  if (state === 'blocked') {
    return (
      <div className="rounded-2xl border border-accent/30 bg-accent-light/30 px-6 py-10 text-center">
        <div className="text-4xl mb-3">⏳</div>
        <h2 className="text-xl font-bold text-primary mb-2">
          Daily trial limit reached
        </h2>
        <p className="text-sm text-muted mb-6 max-w-sm mx-auto">
          You&apos;ve used all {cap} {label} included in your free trial today.
          Subscribe for unlimited access, or come back tomorrow.
        </p>
        <Link href="/subscribe">
          <Button size="lg">Subscribe for unlimited access →</Button>
        </Link>
      </div>
    );
  }

  return <>{children}</>;
}
