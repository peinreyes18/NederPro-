'use client';

import Link from 'next/link';
import { useVocabProgress } from '@/hooks/useVocabProgress';
import Button from '@/components/ui/Button';

export default function QuizBanner() {
  const { getTotalMasteredCount, isLoaded } = useVocabProgress();

  if (!isLoaded || getTotalMasteredCount === 0) {
    return null;
  }

  return (
    <div className="mb-8 rounded-xl border-2 border-accent/30 bg-gradient-to-r from-accent-light/40 to-accent-light/10 p-5 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl">🏆</span>
            <h2 className="text-lg font-bold text-primary">Vocabulary Quiz</h2>
          </div>
          <p className="text-sm text-muted">
            You&apos;ve mastered{' '}
            <span className="font-semibold text-accent-hover">{getTotalMasteredCount} words</span>{' '}
            across all categories. Test yourself with a mixed quiz!
          </p>
        </div>
        <Link href="/vocabulary/quiz" className="shrink-0">
          <Button>Start Quiz</Button>
        </Link>
      </div>
    </div>
  );
}
