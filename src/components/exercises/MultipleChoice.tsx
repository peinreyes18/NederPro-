'use client';

import { useState } from 'react';
import { MultipleChoiceContent } from '@/content/types';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';

interface MultipleChoiceProps {
  content: MultipleChoiceContent;
  instruction: string;
  onSubmit: (correct: boolean, userAnswer: string, explanation?: string, correctAnswer?: string) => void;
  disabled: boolean;
}

export default function MultipleChoice({
  content,
  instruction,
  onSubmit,
  disabled,
}: MultipleChoiceProps) {
  const [selectedIndices, setSelectedIndices] = useState<(number | null)[]>(
    content.questions.map(() => null)
  );

  const handleSubmit = () => {
    let allCorrect = true;
    const explanations: string[] = [];

    content.questions.forEach((q, i) => {
      if (selectedIndices[i] !== q.correctIndex) {
        allCorrect = false;
        explanations.push(q.explanation);
      }
    });

    const userAnswer = selectedIndices
      .map((idx, i) => (idx !== null ? content.questions[i].options[idx] : ''))
      .join(', ');
    const correctAnswer = content.questions
      .map((q) => q.options[q.correctIndex])
      .join(', ');

    onSubmit(
      allCorrect,
      userAnswer,
      allCorrect ? undefined : explanations.join(' '),
      allCorrect ? undefined : correctAnswer
    );
  };

  return (
    <div>
      <p className="text-sm font-medium text-muted mb-4">{instruction}</p>

      <div className="space-y-6">
        {content.questions.map((question, qi) => (
          <div key={qi}>
            <p className="text-primary font-medium mb-3">{question.question}</p>
            <div className="space-y-2">
              {question.options.map((option, oi) => (
                <button
                  key={oi}
                  onClick={() => {
                    if (disabled) return;
                    const newSelections = [...selectedIndices];
                    newSelections[qi] = oi;
                    setSelectedIndices(newSelections);
                  }}
                  disabled={disabled}
                  className={cn(
                    'w-full text-left px-4 py-3 rounded-lg border transition-colors text-sm',
                    selectedIndices[qi] === oi
                      ? 'border-accent bg-accent-light/30 text-primary font-medium'
                      : 'border-border hover:border-accent/30 hover:bg-surface text-primary-light',
                    disabled && 'opacity-50 pointer-events-none'
                  )}
                >
                  <span className="text-muted mr-2 font-medium">
                    {String.fromCharCode(65 + oi)}.
                  </span>
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {!disabled && (
        <div className="mt-6">
          <Button
            onClick={handleSubmit}
            disabled={selectedIndices.some((idx) => idx === null)}
          >
            Check Answer
          </Button>
        </div>
      )}
    </div>
  );
}
