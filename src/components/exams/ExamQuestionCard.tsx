'use client';

import { cn } from '@/lib/utils';
import { ExamQuestion } from '@/content/types';

interface ExamQuestionCardProps {
  question: ExamQuestion;
  selectedIndex: number | null;
  onSelect: (index: number) => void;
  showResult: boolean;
  questionNumber: number;
}

export default function ExamQuestionCard({
  question,
  selectedIndex,
  onSelect,
  showResult,
  questionNumber,
}: ExamQuestionCardProps) {
  return (
    <div className="bg-background rounded-xl border border-border p-6 shadow-sm">
      <div className="mb-4">
        <span className="text-sm font-semibold text-muted">
          Question {questionNumber}
        </span>
        <p className="text-primary font-medium mt-1">{question.question}</p>
      </div>

      <div className="space-y-2">
        {question.options.map((option, index) => {
          const isSelected = selectedIndex === index;
          const isCorrect = index === question.correctIndex;

          let optionClasses: string;

          if (showResult) {
            if (isCorrect) {
              optionClasses =
                'border-success bg-success-light text-success font-medium';
            } else if (isSelected && !isCorrect) {
              optionClasses =
                'border-error bg-error-light text-error font-medium';
            } else {
              optionClasses =
                'border-border bg-surface text-muted opacity-60';
            }
          } else {
            if (isSelected) {
              optionClasses =
                'border-accent bg-accent-light/30 text-primary font-medium';
            } else {
              optionClasses =
                'border-border hover:border-accent/30 hover:bg-surface text-primary-light';
            }
          }

          return (
            <button
              key={index}
              onClick={() => {
                if (!showResult) {
                  onSelect(index);
                }
              }}
              disabled={showResult}
              className={cn(
                'w-full text-left px-4 py-3 rounded-lg border transition-colors text-sm flex items-start gap-3',
                optionClasses,
                showResult && 'cursor-default'
              )}
            >
              <span
                className={cn(
                  'flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold mt-0.5',
                  showResult && isCorrect && 'border-success bg-success text-white',
                  showResult && isSelected && !isCorrect && 'border-error bg-error text-white',
                  showResult && !isCorrect && !isSelected && 'border-border text-muted',
                  !showResult && isSelected && 'border-accent bg-accent text-white',
                  !showResult && !isSelected && 'border-border text-muted'
                )}
              >
                {String.fromCharCode(65 + index)}
              </span>
              <span>{option}</span>
            </button>
          );
        })}
      </div>

      {showResult && question.explanation && (
        <div className="mt-4 p-3 rounded-lg bg-surface border border-border">
          <p className="text-sm text-primary-light">
            <span className="font-semibold text-primary">Explanation: </span>
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
