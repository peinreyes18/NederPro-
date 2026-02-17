'use client';

import { useState } from 'react';
import { ReadingComprehensionContent } from '@/content/types';
import { checkExactMatch } from '@/lib/exercise-checker';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';

interface ReadingComprehensionProps {
  content: ReadingComprehensionContent;
  instruction: string;
  onSubmit: (correct: boolean, userAnswer: string, explanation?: string, correctAnswer?: string) => void;
  disabled: boolean;
}

export default function ReadingComprehension({
  content,
  instruction,
  onSubmit,
  disabled,
}: ReadingComprehensionProps) {
  const [answers, setAnswers] = useState<(string | null)[]>(
    content.questions.map(() => null)
  );

  const handleSubmit = () => {
    let allCorrect = true;
    const explanations: string[] = [];

    content.questions.forEach((q, i) => {
      const userAnswer = answers[i] || '';
      if (q.options) {
        // Multiple-choice: direct string comparison
        const isCorrect =
          userAnswer.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase();
        if (!isCorrect) {
          allCorrect = false;
          if (q.explanation) explanations.push(q.explanation);
        }
      } else {
        // Free-text: use checkExactMatch
        const result = checkExactMatch(userAnswer, q.correctAnswer);
        if (!result.correct) {
          allCorrect = false;
          if (q.explanation) explanations.push(q.explanation);
        }
      }
    });

    const userAnswer = answers.filter(Boolean).join(', ');
    const correctAnswer = content.questions.map((q) => q.correctAnswer).join(', ');

    onSubmit(
      allCorrect,
      userAnswer,
      allCorrect ? undefined : explanations.join(' '),
      allCorrect ? undefined : correctAnswer
    );
  };

  const allAnswered = answers.every((a) => a !== null && a.trim() !== '');

  return (
    <div>
      <p className="text-sm font-medium text-muted mb-4">{instruction}</p>

      {/* Passage */}
      <div className="border-l-4 border-accent bg-surface rounded-r-lg p-4 mb-6">
        {content.passageTitle && (
          <h3 className="font-semibold text-primary mb-2">{content.passageTitle}</h3>
        )}
        <div className="text-primary leading-relaxed whitespace-pre-line">
          {content.passage}
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-5">
        {content.questions.map((question, qi) => (
          <div key={qi}>
            <p className="text-primary font-medium mb-2">
              <span className="text-muted mr-1">{qi + 1}.</span>
              {question.question}
            </p>

            {question.options ? (
              /* Multiple-choice question */
              <div className="space-y-2">
                {question.options.map((option, oi) => (
                  <button
                    key={oi}
                    onClick={() => {
                      if (disabled) return;
                      const newAnswers = [...answers];
                      newAnswers[qi] = option;
                      setAnswers(newAnswers);
                    }}
                    disabled={disabled}
                    className={cn(
                      'w-full text-left px-4 py-3 rounded-lg border transition-colors text-sm',
                      answers[qi] === option
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
            ) : (
              /* Free-text question */
              <input
                type="text"
                value={answers[qi] || ''}
                onChange={(e) => {
                  const newAnswers = [...answers];
                  newAnswers[qi] = e.target.value;
                  setAnswers(newAnswers);
                }}
                disabled={disabled}
                placeholder="Type your answer..."
                className="w-full border border-border rounded-md px-3 py-2 text-sm text-primary bg-background focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent disabled:opacity-50"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !disabled && allAnswered) handleSubmit();
                }}
              />
            )}
          </div>
        ))}
      </div>

      {!disabled && (
        <div className="mt-6">
          <Button onClick={handleSubmit} disabled={!allAnswered}>
            Check Answer
          </Button>
        </div>
      )}
    </div>
  );
}
