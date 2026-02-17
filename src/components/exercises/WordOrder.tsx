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

export default function WordOrder({
  content,
  instruction,
  onSubmit,
  disabled,
}: WordOrderProps) {
  const [itemStates, setItemStates] = useState(
    content.items.map((item) => ({
      available: [...item.shuffledWords],
      selected: [] as string[],
    }))
  );

  const selectWord = (itemIndex: number, wordIndex: number) => {
    if (disabled) return;
    setItemStates((prev) => {
      const newStates = [...prev];
      const state = { ...newStates[itemIndex] };
      const word = state.available[wordIndex];
      state.available = state.available.filter((_, i) => i !== wordIndex);
      state.selected = [...state.selected, word];
      newStates[itemIndex] = state;
      return newStates;
    });
  };

  const deselectWord = (itemIndex: number, wordIndex: number) => {
    if (disabled) return;
    setItemStates((prev) => {
      const newStates = [...prev];
      const state = { ...newStates[itemIndex] };
      const word = state.selected[wordIndex];
      state.selected = state.selected.filter((_, i) => i !== wordIndex);
      state.available = [...state.available, word];
      newStates[itemIndex] = state;
      return newStates;
    });
  };

  const handleSubmit = () => {
    let allCorrect = true;

    content.items.forEach((item, i) => {
      if (!checkWordOrder(itemStates[i].selected, item.correctOrder)) {
        allCorrect = false;
      }
    });

    const userAnswer = itemStates.map((s) => s.selected.join(' ')).join(' | ');
    const correctAnswer = content.items.map((item) => item.correctOrder.join(' ')).join(' | ');

    onSubmit(
      allCorrect,
      userAnswer,
      allCorrect ? undefined : `The correct word order is: ${correctAnswer}`,
      allCorrect ? undefined : correctAnswer
    );
  };

  const allPlaced = itemStates.every((s) => s.available.length === 0);

  return (
    <div>
      <p className="text-sm font-medium text-muted mb-4">{instruction}</p>

      <div className="space-y-6">
        {content.items.map((item, itemIndex) => (
          <div key={itemIndex} className="bg-surface rounded-lg p-4">
            {item.translation && (
              <p className="text-sm text-muted mb-3">
                Translate: &ldquo;{item.translation}&rdquo;
              </p>
            )}

            {/* Selected words (answer area) */}
            <div className="min-h-[48px] border-2 border-dashed border-border rounded-lg p-2 mb-3 flex flex-wrap gap-2">
              {itemStates[itemIndex].selected.length === 0 && (
                <span className="text-muted text-sm py-1 px-2">
                  Tap words below to build the sentence...
                </span>
              )}
              {itemStates[itemIndex].selected.map((word, wi) => (
                <button
                  key={`${word}-${wi}`}
                  onClick={() => deselectWord(itemIndex, wi)}
                  disabled={disabled}
                  className={cn(
                    'px-3 py-1.5 rounded-md text-sm font-medium transition-colors',
                    'bg-accent text-white hover:bg-accent-hover',
                    disabled && 'opacity-50 pointer-events-none'
                  )}
                >
                  {word}
                </button>
              ))}
            </div>

            {/* Available words */}
            <div className="flex flex-wrap gap-2">
              {itemStates[itemIndex].available.map((word, wi) => (
                <button
                  key={`${word}-${wi}`}
                  onClick={() => selectWord(itemIndex, wi)}
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
          </div>
        ))}
      </div>

      {!disabled && (
        <div className="mt-6">
          <Button onClick={handleSubmit} disabled={!allPlaced}>
            Check Answer
          </Button>
        </div>
      )}
    </div>
  );
}
