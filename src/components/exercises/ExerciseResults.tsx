'use client';

import Button from '@/components/ui/Button';
import { ExerciseSessionResult } from '@/hooks/useExercise';

interface ExerciseResultsProps {
  results: ExerciseSessionResult[];
  totalExercises: number;
  onRetry: () => void;
  onBack: () => void;
}

export default function ExerciseResults({
  results,
  totalExercises,
  onRetry,
  onBack,
}: ExerciseResultsProps) {
  const correctCount = results.filter((r) => r.correct).length;
  const score = Math.round((correctCount / totalExercises) * 100);

  return (
    <div className="max-w-lg mx-auto text-center">
      <div className="bg-background rounded-lg border border-border p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-primary mb-2">Exercises Complete</h2>

        <div className="my-6">
          <div
            className={`text-5xl font-bold ${
              score >= 80 ? 'text-success' : score >= 50 ? 'text-warning' : 'text-error'
            }`}
          >
            {score}%
          </div>
          <p className="text-muted mt-1">
            {correctCount} of {totalExercises} correct
          </p>
        </div>

        <p className="text-primary-light mb-6">
          {score >= 80
            ? 'Excellent work! You have a strong grasp of this topic.'
            : score >= 50
            ? 'Good effort. Consider reviewing the lesson and trying again.'
            : 'This topic needs more practice. Review the lesson material and try again.'}
        </p>

        <div className="flex gap-3 justify-center">
          <Button variant="outline" onClick={onBack}>
            Back to Lesson
          </Button>
          <Button onClick={onRetry}>
            Try Again
          </Button>
        </div>
      </div>
    </div>
  );
}
