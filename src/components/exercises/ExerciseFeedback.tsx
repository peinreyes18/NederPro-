'use client';

import Button from '@/components/ui/Button';

interface ExerciseFeedbackProps {
  correct: boolean;
  almostCorrect?: boolean;
  correctAnswer?: string;
  explanation?: string;
  onNext: () => void;
}

export default function ExerciseFeedback({
  correct,
  almostCorrect,
  correctAnswer,
  explanation,
  onNext,
}: ExerciseFeedbackProps) {
  return (
    <div
      className={`rounded-lg p-4 mt-4 ${
        correct
          ? 'bg-success-light border border-success/30'
          : 'bg-error-light border border-error/30'
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <p className={`font-semibold ${correct ? 'text-success' : 'text-error'}`}>
            {correct ? 'Correct!' : almostCorrect ? 'Almost correct!' : 'Incorrect'}
          </p>
          {!correct && correctAnswer && (
            <p className="text-sm text-primary mt-1">
              Correct answer: <span className="font-medium">{correctAnswer}</span>
            </p>
          )}
          {explanation && (
            <p className="text-sm text-primary-light mt-1">{explanation}</p>
          )}
        </div>
        <Button size="sm" onClick={onNext}>
          Continue
        </Button>
      </div>
    </div>
  );
}
