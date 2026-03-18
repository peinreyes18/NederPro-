'use client';

import Link from 'next/link';
import { useVocabProgress } from '@/hooks/useVocabProgress';
import Button from '@/components/ui/Button';

export default function QuizBanner() {
  const { getTotalMasteredCount, getDueTodayCount, isLoaded } = useVocabProgress();

  if (!isLoaded) return null;

  const dueCount = getDueTodayCount;
  const masteredCount = getTotalMasteredCount;

  return (
    <div className="space-y-3 mb-8">
      {/* Daily Review banner — shown whenever words are due */}
      {dueCount > 0 && (
        <div className="rounded-xl border-2 border-warning/40 bg-gradient-to-r from-warning/10 to-warning/5 p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl">📅</span>
                <h2 className="text-lg font-bold text-primary">Daily Review</h2>
              </div>
              <p className="text-sm text-muted">
                <span className="font-semibold text-warning">{dueCount} word{dueCount !== 1 ? 's' : ''}</span>{' '}
                scheduled for review today. Keep your streak going!
              </p>
            </div>
            <Link href="/vocabulary/review" className="shrink-0">
              <Button>Review Now</Button>
            </Link>
          </div>
        </div>
      )}

      {/* Quiz banner — shown when enough words mastered */}
      {masteredCount > 0 && (
        <div className="rounded-xl border-2 border-accent/30 bg-gradient-to-r from-accent-light/40 to-accent-light/10 p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl">🏆</span>
                <h2 className="text-lg font-bold text-primary">Vocabulary Quiz</h2>
              </div>
              <p className="text-sm text-muted">
                You&apos;ve mastered{' '}
                <span className="font-semibold text-accent-hover">{masteredCount} words</span>{' '}
                across all categories. Test yourself with a mixed quiz!
              </p>
            </div>
            <Link href="/vocabulary/quiz" className="shrink-0">
              <Button variant="outline">Start Quiz</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
