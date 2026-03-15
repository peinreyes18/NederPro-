'use client';

import Button from '@/components/ui/Button';
import { ExerciseSessionResult } from '@/hooks/useExercise';

interface ExerciseResultsProps {
  results: ExerciseSessionResult[];
  totalExercises: number;
  onRetry: () => void;
  onBack: () => void;
  nextTopic?: { id: string; title: string; levelId: string };
  onNext?: () => void;
}

export default function ExerciseResults({
  results,
  totalExercises,
  onRetry,
  onBack,
  nextTopic,
  onNext,
}: ExerciseResultsProps) {
  const correctCount = results.filter((r) => r.correct).length;
  const score = Math.round((correctCount / totalExercises) * 100);
  const passed = score >= 80;

  return (
    <div className="max-w-lg mx-auto text-center">
      <div className="bg-background rounded-lg border border-border p-8 shadow-sm">
        {/* Score circle */}
        <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-current"
          style={{ color: score >= 80 ? 'var(--color-success)' : score >= 50 ? 'var(--color-warning)' : 'var(--color-error)' }}
        >
          <span className="text-2xl font-bold">{score}%</span>
        </div>

        <h2 className="text-2xl font-bold text-primary mb-1">
          {passed ? 'Great work! 🎉' : score >= 50 ? 'Good effort!' : 'Keep practising'}
        </h2>
        <p className="text-muted text-sm mb-1">
          {correctCount} of {totalExercises} correct
        </p>
        <p className="text-primary-light text-sm mb-6">
          {passed
            ? 'You\'ve got a strong grasp of this topic.'
            : score >= 50
            ? 'Review the lesson and try again to solidify your understanding.'
            : 'Review the lesson material carefully and try again.'}
        </p>

        {/* Primary CTA: next topic if passed, retry if not */}
        <div className="flex flex-col gap-3">
          {passed && nextTopic && onNext ? (
            <>
              <Button className="w-full" onClick={onNext}>
                Next: {nextTopic.title} →
              </Button>
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1" onClick={onBack}>
                  Back to Lesson
                </Button>
                <Button variant="outline" className="flex-1" onClick={onRetry}>
                  Try Again
                </Button>
              </div>
            </>
          ) : (
            <>
              <Button className="w-full" onClick={onRetry}>
                Try Again
              </Button>
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1" onClick={onBack}>
                  Back to Lesson
                </Button>
                {nextTopic && onNext && (
                  <Button variant="outline" className="flex-1" onClick={onNext}>
                    Skip to Next →
                  </Button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
