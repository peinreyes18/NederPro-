'use client';

import { useState } from 'react';
import { TranslationContent } from '@/content/types';
import { checkExactMatch } from '@/lib/exercise-checker';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';

interface TranslationProps {
  content: TranslationContent;
  instruction: string;
  onSubmit: (correct: boolean, userAnswer: string, explanation?: string, correctAnswer?: string) => void;
  disabled: boolean;
}

export default function Translation({ content, instruction, onSubmit, disabled }: TranslationProps) {
  const items = content.items;
  const total = items.length;

  const [subIndex, setSubIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [showVocab, setShowVocab] = useState(false);
  const [subSubmitted, setSubSubmitted] = useState(false);
  const [subCorrect, setSubCorrect] = useState(false);
  const [collected, setCollected] = useState<{ answer: string; correct: boolean }[]>([]);

  const current = items[subIndex];
  const isLast = subIndex === total - 1;

  const handleCheck = () => {
    const result = checkExactMatch(answer, current.correctDutch, current.acceptableAnswers);
    const next = [...collected, { answer, correct: result.correct }];
    setCollected(next);
    setSubCorrect(result.correct);
    setSubSubmitted(true);

    if (isLast) {
      const allCorrect = next.every((r) => r.correct);
      const userAnswer = next.map((r) => r.answer).join(', ');
      const correctAnswer = items.map((item) => item.correctDutch).join(', ');
      onSubmit(
        allCorrect,
        userAnswer,
        allCorrect ? undefined : `Correct: ${correctAnswer}`,
        allCorrect ? undefined : correctAnswer
      );
    }
  };

  const handleNext = () => {
    setSubIndex((i) => i + 1);
    setAnswer('');
    setShowVocab(false);
    setSubSubmitted(false);
    setSubCorrect(false);
  };

  return (
    <div>
      <p className="text-sm font-medium text-muted mb-4">{instruction}</p>

      <div className="bg-accent-light/10 border border-accent/20 rounded-lg p-4 mb-4">
        <p className="text-primary font-medium mb-2">{current.english}</p>

        {current.keyVocabulary && current.keyVocabulary.length > 0 && (
          <div className="mb-3">
            <button
              type="button"
              onClick={() => setShowVocab((v) => !v)}
              className="text-xs text-accent hover:text-accent-hover font-medium"
            >
              {showVocab ? 'Hide vocabulary hints' : 'Show vocabulary hints'}
            </button>
            {showVocab && (
              <div className="mt-2 flex flex-wrap gap-2">
                {current.keyVocabulary.map((vocab, vi) => (
                  <span
                    key={vi}
                    className="inline-block text-xs bg-background border border-border rounded px-2 py-1 text-primary-light"
                  >
                    {vocab.dutch} = {vocab.english}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        <input
          type="text"
          value={answer}
          onChange={(e) => { if (!subSubmitted && !disabled) setAnswer(e.target.value); }}
          disabled={disabled || subSubmitted}
          placeholder="Type your Dutch translation..."
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
            Correct: <span className="text-success font-medium">{current.correctDutch}</span>
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
            {subCorrect ? 'Correct!' : `Incorrect — ${current.correctDutch}`}
          </span>
          <Button size="sm" onClick={handleNext}>Next →</Button>
        </div>
      )}
    </div>
  );
}
