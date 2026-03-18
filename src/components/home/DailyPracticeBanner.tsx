'use client';

import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { useDailyPractice } from '@/hooks/useDailyPractice';
import Button from '@/components/ui/Button';

/**
 * Shown on the home page for logged-in users.
 * - Not done today → bright CTA with streak
 * - Done today     → quiet "all done" confirmation
 */
export default function DailyPracticeBanner() {
  const { user, isLoading: authLoading } = useAuth();
  const { doneToday, streak, grammarCount, vocabCount, isLoaded } = useDailyPractice();

  // Don't render for guests or while loading
  if (authLoading || !user || !isLoaded) return null;

  const total = grammarCount + vocabCount;

  if (doneToday) {
    return (
      <div className="rounded-xl border border-border bg-surface px-5 py-4 flex items-center gap-3 mb-6">
        <span className="text-2xl">✅</span>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-primary text-sm">Daily practice complete!</p>
          <p className="text-xs text-muted truncate">
            Come back tomorrow to keep your{streak > 0 ? ` ${streak}-day` : ''} streak going.
          </p>
        </div>
        <Link href="/daily-practice" className="shrink-0">
          <Button variant="outline" size="sm">View</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="rounded-xl border-2 border-accent/40 bg-gradient-to-r from-accent-light/60 to-accent-light/20 px-5 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
      <div className="flex items-start gap-3">
        <span className="text-3xl leading-none mt-0.5">
          {streak > 0 ? '🔥' : '📅'}
        </span>
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <h2 className="text-base font-bold text-primary">Daily Practice</h2>
            {streak > 0 && (
              <span className="text-xs font-bold text-warning bg-warning/10 border border-warning/30 px-2 py-0.5 rounded-full">
                {streak} day streak
              </span>
            )}
          </div>
          <p className="text-sm text-muted">
            {total > 0
              ? `${total} exercises ready — ~3 min`
              : 'Quick daily review — grammar + vocabulary'}
          </p>
        </div>
      </div>
      <Link href="/daily-practice" className="shrink-0">
        <Button>Start Today →</Button>
      </Link>
    </div>
  );
}
