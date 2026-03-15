'use client';

import Link from 'next/link';
import Button from '@/components/ui/Button';
import { useAuth } from '@/contexts/AuthContext';

/**
 * Hero CTA buttons — auth-aware.
 * Guests:        "Start free trial" + "Sign in"
 * Logged-in:     "Go to my lessons" + "View progress"
 */
export default function HeroCta() {
  const { user, isLoading } = useAuth();

  // Render nothing while auth resolves to avoid a flash of guest buttons
  if (isLoading) return <div className="mt-10 h-12" />;

  if (user) {
    return (
      <div className="mt-10 flex flex-wrap gap-4">
        <Link href="/levels">
          <Button size="lg">Go to my lessons →</Button>
        </Link>
        <Link href="/progress">
          <Button size="lg" variant="outline">View progress</Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link href="/signup">
          <Button size="lg">Start free trial</Button>
        </Link>
        <Link href="/login">
          <Button size="lg" variant="outline">Sign in</Button>
        </Link>
      </div>
      <p className="mt-4 text-sm text-muted">
        From €2.49 · 7-day free trial · Cancel anytime
      </p>
    </>
  );
}
