'use client';

import { useState } from 'react';
import { WordOrderContent } from '@/content/types';
import { checkWordOrder } from '@/lib/exercise-checker';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';

interface WordOrderProps {
  content: WordOrderContent;
  instruction: string;
  onSubmit: (correct: boolean, userAnswer: string, explanation?: string, correctAnswer?: string) => void;
  disabled: boolean;
}

export default function WordOrder({ content, instruction, onSubmit, disabled }: WordOrderProps) {
  const items = content.items;
  const total = items.length;

  const [subIndex, setSubIndex] = useState(0);
  const [available, setAvailable] = useState([...items[0].shuffledWords]);
  const [selected, setSelected] = useState<string[]>([]);
  const [subSubmitted, setSubSubmitted] = useState(false);
  const [subCorrect, setSubCorrect] = useState(false);
  const [collected, setCollected] = useState<{ selected: string[]; correct: boolean }[]>([]);

  const current = items[subIndex];
  const isLast = subIndex === total - 1;

  const selectWord = (wordIndex: number) => {
    if (disabled || subSubmitted) return;
    const word = available[wordIndex];
    setAvailable((prev) => prev.filter((_, i) => i !== wordIndex));
    setSelected((prev) => [...prev, word]);
  };

  const deselectWord = (wordIndex: number) => {
    if (disabled || subSubmitted) return;
    const word = selected[wordIndex];
    setSelected((prev) => prev.filter((_, i) => i !== wordIndex));
    setAvailable((prev) => [...prev, word]);
  };

  const handleCheck = () => {
    const correct = checkWordOrder(selected, current.correctOrder);
    const next = [...collected, { selected: [...selected], correct }];
    setCollected(next);
    setSubCorrect(correct);
    setSubSubmitted(true);

    if (isLast) {
      const allCorrect = next.every((r) => r.correct);
      const userAnswer = next.map((r) => r.selected.join(' ')).join(' | ');
      const correctAnswer = items.map((item) => item.correctOrder.join(' ')).join(' | ');
      onSubmit(
        allCorrect,
        userAnswer,
        allCorrect ? undefined : `Correct order: ${correctAnswer}`,
        allCorrect ? undefined : correctAnswer
      );
    }
  };

  const handleNext = () => {
    const nextIndex = subIndex + 1;
    setSubIndex(nextIndex);
    setAvailable([...items[nextIndex].shuffledWords]);
    setSelected([]);
    setSubSubmitted(false);
    setSubCorrect(false);
  };

  return (
    <div>
      <p className="text-sm font-medium text-muted mb-4">{instruction}</p>

      <div className="bg-surface rounded-lg p-4 mb-4">
        {current.translation && (
          <p className="text-sm text-muted mb-3">
            Translate: &ldquo;{current.translation}&rdquo;
          </p>
        )}

        {/* Selected words (answer area) */}
        <div className={cn(
          'min-h-[48px] border-2 border-dashed rounded-lg p-2 mb-3 flex flex-wrap gap-2',
          subSubmitted
            ? subCorrect ? 'border-success/50' : 'border-error/50'
            : 'border-border'
        )}>
          {selected.length === 0 && !subSubmitted && (
            <span className="text-muted text-sm py-1 px-2">
              Tap words below to build the sentence...
            </span>
          )}
          {selected.map((word, wi) => (
            <button
              key={`${word}-${wi}`}
              onClick={() => deselectWord(wi)}
              disabled={disabled || subSubmitted}
              className={cn(
                'px-3 py-1.5 rounded-md text-sm font-medium transition-colors',
                subSubmitted
                  ? subCorrect
                    ? 'bg-success text-white opacity-80'
                    : 'bg-error text-white opacity-80'
                  : 'bg-accent text-white hover:bg-accent-hover',
                (disabled || subSubmitted) && 'pointer-events-none'
              )}
            >
              {word}
            </button>
          ))}
        </div>

        {/* Available words */}
        {!subSubmitted && (
          <div className="flex flex-wrap gap-2">
            {available.map((word, wi) => (
              <button
                key={`${word}-${wi}`}
                onClick={() => selectWord(wi)}
                disabled={disabled}
                className={cn(
                  'px-3 py-1.5 rounded-md text-sm font-medium transition-colors',
                  'bg-background border border-border text-primary hover:bg-surface-hover hover:border-accent/30',
                  disabled && 'opacity-50 pointer-events-none'
                )}
              >
                {word}
              </button>
            ))}
          </div>
        )}

        {subSubmitted && !subCorrect && (
          <p className="text-sm text-muted mt-2">
            Correct: <span className="text-success font-medium">{current.correctOrder.join(' ')}</span>
          </p>
        )}
      </div>

      {!subSubmitted && !disabled && (
        <Button onClick={handleCheck} disabled={available.length > 0}>
          Check Answer
        </Button>
      )}

      {subSubmitted && !isLast && (
        <div className={cn(
          'mt-4 rounded-lg px-4 py-3 flex items-center justify-between gap-4',
          subCorrect ? 'bg-success-light border border-success/30' : 'bg-error-light border border-error/30'
        )}>
          <span className={cn('font-semibold text-sm', subCorrect ? 'text-success' : 'text-error')}>
            {subCorrect ? 'Correct!' : `Incorrect — ${current.correctOrder.join(' ')}`}
          </span>
          <Button size="sm" onClick={handleNext}>Next →</Button>
        </div>
      )}
    </div>
  );
}
