'use client';

import { useState } from 'react';
import { FillInTheBlankContent } from '@/content/types';
import { checkExactMatch } from '@/lib/exercise-checker';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';

interface FillInTheBlankProps {
  content: FillInTheBlankContent;
  instruction: string;
  onSubmit: (correct: boolean, userAnswer: string, explanation?: string, correctAnswer?: string) => void;
  disabled: boolean;
}

export default function FillInTheBlank({ content, instruction, onSubmit, disabled }: FillInTheBlankProps) {
  const sentences = content.sentences;
  const total = sentences.length;

  const [subIndex, setSubIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [subSubmitted, setSubSubmitted] = useState(false);
  const [subCorrect, setSubCorrect] = useState(false);
  const [collected, setCollected] = useState<{ answer: string; correct: boolean }[]>([]);

  const current = sentences[subIndex];
  const isLast = subIndex === total - 1;

  const handleCheck = () => {
    const result = checkExactMatch(answer, current.correctAnswer, current.acceptableAnswers);
    const next = [...collected, { answer, correct: result.correct }];
    setCollected(next);
    setSubCorrect(result.correct);
    setSubSubmitted(true);

    if (isLast) {
      const allCorrect = next.every((r) => r.correct);
      const userAnswer = next.map((r) => r.answer).join(', ');
      const correctAnswer = sentences.map((s) => s.correctAnswer).join(', ');
      onSubmit(allCorrect, userAnswer, allCorrect ? undefined : `Correct: ${correctAnswer}`, allCorrect ? undefined : correctAnswer);
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

      <div className="flex items-center flex-wrap gap-1.5 text-primary mb-6">
        {current.before && <span>{current.before}</span>}
        <input
          type="text"
          value={answer}
          onChange={(e) => { if (!subSubmitted && !disabled) setAnswer(e.target.value); }}
          disabled={disabled || subSubmitted}
          placeholder={current.hint || '...'}
          className={cn(
            'border-b-2 bg-transparent px-2 py-1 text-center min-w-[100px] max-w-[200px] focus:outline-none',
            subSubmitted
              ? subCorrect
                ? 'border-success text-success'
                : 'border-error text-error'
              : 'border-accent/40 focus:border-accent',
            'disabled:opacity-50'
          )}
          onKeyDown={(e) => { if (e.key === 'Enter' && !subSubmitted && !disabled && answer.trim()) handleCheck(); }}
          autoFocus
        />
        {current.after && <span>{current.after}</span>}
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
            {subCorrect ? 'Correct!' : `Incorrect — ${current.correctAnswer}`}
          </span>
          <Button size="sm" onClick={handleNext}>Next →</Button>
        </div>
      )}
    </div>
  );
}
