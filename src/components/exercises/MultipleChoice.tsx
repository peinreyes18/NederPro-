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

export default function MultipleChoice({ content, instruction, onSubmit, disabled }: MultipleChoiceProps) {
  const questions = content.questions;
  const total = questions.length;

  const [subIndex, setSubIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [subSubmitted, setSubSubmitted] = useState(false);
  const [subCorrect, setSubCorrect] = useState(false);
  const [collected, setCollected] = useState<{ selected: number | null; correct: boolean }[]>([]);

  const current = questions[subIndex];
  const isLast = subIndex === total - 1;

  const handleCheck = () => {
    const correct = selectedIndex === current.correctIndex;
    const next = [...collected, { selected: selectedIndex, correct }];
    setCollected(next);
    setSubCorrect(correct);
    setSubSubmitted(true);

    if (isLast) {
      const allCorrect = next.every((r) => r.correct);
      const userAnswer = next.map((r, i) => r.selected !== null ? questions[i].options[r.selected] : '').join(', ');
      const correctAnswer = questions.map((q) => q.options[q.correctIndex]).join(', ');
      const explanation = next
        .map((r, i) => (!r.correct ? questions[i].explanation : ''))
        .filter(Boolean)
        .join(' ');
      onSubmit(allCorrect, userAnswer, allCorrect ? undefined : explanation, allCorrect ? undefined : correctAnswer);
    }
  };

  const handleNext = () => {
    setSubIndex((i) => i + 1);
    setSelectedIndex(null);
    setSubSubmitted(false);
    setSubCorrect(false);
  };

  return (
    <div>
      <p className="text-sm font-medium text-muted mb-4">{instruction}</p>

      <p className="text-primary font-medium mb-3">{current.question}</p>

      <div className="space-y-2">
        {current.options.map((option, oi) => (
          <button
            key={oi}
            onClick={() => { if (!disabled && !subSubmitted) setSelectedIndex(oi); }}
            disabled={disabled || subSubmitted}
            className={cn(
              'w-full text-left px-4 py-3 rounded-lg border transition-colors text-sm',
              selectedIndex === oi
                ? 'border-accent bg-accent-light/30 text-primary font-medium'
                : 'border-border hover:border-accent/30 hover:bg-surface text-primary-light',
              (disabled || subSubmitted) && 'pointer-events-none',
              subSubmitted && oi === current.correctIndex && 'border-success bg-success-light/40 text-success font-medium',
              subSubmitted && selectedIndex === oi && oi !== current.correctIndex && 'border-error bg-error-light/40 text-error'
            )}
          >
            <span className="text-muted mr-2 font-medium">{String.fromCharCode(65 + oi)}.</span>
            {option}
          </button>
        ))}
      </div>

      {/* Check button */}
      {!subSubmitted && !disabled && (
        <div className="mt-6">
          <Button onClick={handleCheck} disabled={selectedIndex === null}>
            Check Answer
          </Button>
        </div>
      )}

      {/* Mini-feedback between sub-items (not shown on last — parent handles it) */}
      {subSubmitted && !isLast && (
        <div className={cn(
          'mt-4 rounded-lg px-4 py-3 flex items-center justify-between gap-4',
          subCorrect ? 'bg-success-light border border-success/30' : 'bg-error-light border border-error/30'
        )}>
          <span className={cn('font-semibold text-sm', subCorrect ? 'text-success' : 'text-error')}>
            {subCorrect ? 'Correct!' : `Incorrect — ${current.options[current.correctIndex]}`}
          </span>
          <Button size="sm" onClick={handleNext}>Next →</Button>
        </div>
      )}
    </div>
  );
}
