'use client';

import { useState } from 'react';
import { ErrorCorrectionContent } from '@/content/types';
import { checkExactMatch } from '@/lib/exercise-checker';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';

interface ErrorCorrectionProps {
  content: ErrorCorrectionContent;
  instruction: string;
  onSubmit: (correct: boolean, userAnswer: string, explanation?: string, correctAnswer?: string) => void;
  disabled: boolean;
}

export default function ErrorCorrection({ content, instruction, onSubmit, disabled }: ErrorCorrectionProps) {
  const items = content.items;
  const total = items.length;

  const [subIndex, setSubIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [subSubmitted, setSubSubmitted] = useState(false);
  const [subCorrect, setSubCorrect] = useState(false);
  const [collected, setCollected] = useState<{ answer: string; correct: boolean }[]>([]);

  const current = items[subIndex];
  const isLast = subIndex === total - 1;

  const handleCheck = () => {
    const result = checkExactMatch(answer, current.correctedSentence);
    const next = [...collected, { answer, correct: result.correct }];
    setCollected(next);
    setSubCorrect(result.correct);
    setSubSubmitted(true);

    if (isLast) {
      const allCorrect = next.every((r) => r.correct);
      const userAnswer = next.map((r) => r.answer).join(', ');
      const correctAnswer = items.map((item) => item.correctedSentence).join(', ');
      const explanation = next
        .map((r, i) => (!r.correct ? items[i].errorExplanation : ''))
        .filter(Boolean)
        .join(' ');
      onSubmit(allCorrect, userAnswer, allCorrect ? undefined : explanation, allCorrect ? undefined : correctAnswer);
    }
  };

  const handleNext = () => {
    setSubIndex((i) => i + 1);
    setAnswer('');
    setSubSubmitted(false);
    setSubCorrect(false);
  };

  return (
    <div>
      <p className="text-sm font-medium text-muted mb-4">{instruction}</p>

      <div className={cn(
        'rounded-lg p-4 mb-4',
        subSubmitted
          ? subCorrect ? 'bg-success-light/20 border border-success/20' : 'bg-error-light/20 border border-error/20'
          : 'bg-error-light/20 border border-error/20'
      )}>
        <p className="text-primary font-medium mb-1">{current.incorrectSentence}</p>
        <p className="text-xs text-muted mb-3">Type the corrected sentence below:</p>
        <input
          type="text"
          value={answer}
          onChange={(e) => { if (!subSubmitted && !disabled) setAnswer(e.target.value); }}
          disabled={disabled || subSubmitted}
          placeholder="Corrected sentence..."
          className={cn(
            'w-full border rounded-md px-3 py-2 text-sm text-primary bg-background focus:outline-none focus:ring-1',
            subSubmitted
              ? subCorrect
                ? 'border-success focus:border-success focus:ring-success'
                : 'border-error focus:border-error focus:ring-error'
              : 'border-border focus:border-accent focus:ring-accent',
            'disabled:opacity-50'
          )}
          onKeyDown={(e) => { if (e.key === 'Enter' && !subSubmitted && !disabled && answer.trim()) handleCheck(); }}
          autoFocus
        />
        {subSubmitted && !subCorrect && (
          <p className="text-xs text-muted mt-2">
            {current.errorExplanation && <span className="block mb-1">{current.errorExplanation}</span>}
            Correct: <span className="text-success font-medium">{current.correctedSentence}</span>
          </p>
        )}
      </div>

      {!subSubmitted && !disabled && (
        <Button onClick={handleCheck} disabled={!answer.trim()}>
          Check Answer
        </Button>
      )}

      {subSubmitted && !isLast && (
        <div className={cn(
          'mt-4 rounded-lg px-4 py-3 flex items-center justify-between gap-4',
          subCorrect ? 'bg-success-light border border-success/30' : 'bg-error-light border border-error/30'
        )}>
          <span className={cn('font-semibold text-sm', subCorrect ? 'text-success' : 'text-error')}>
            {subCorrect ? 'Correct!' : `Incorrect — ${current.correctedSentence}`}
          </span>
          <Button size="sm" onClick={handleNext}>Next →</Button>
        </div>
      )}
    </div>
  );
}
