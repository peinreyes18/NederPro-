'use client';

import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import Button from '@/components/ui/Button';

/**
 * Shows a sign-up CTA at the bottom of lesson pages for unauthenticated visitors.
 * Hidden entirely once the user is logged in.
 */
export default function LessonSignupNudge() {
  const { user, isLoading } = useAuth();

  // Don't render until auth state is resolved, and never show to logged-in users
  if (isLoading || user) return null;

  return (
    <div className="mt-10 rounded-2xl border border-accent/30 bg-accent-light px-6 py-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-1">
            Track Your Progress
          </p>
          <h2 className="text-lg font-bold text-primary mb-1">
            Create a free account to save your progress
          </h2>
          <p className="text-sm text-muted">
            7-day free trial · No credit card required · Full access to all lessons &amp; exercises
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <Link href="/signup">
            <Button size="sm">Start free trial</Button>
          </Link>
          <Link href="/login">
            <Button variant="outline" size="sm">Sign in</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
