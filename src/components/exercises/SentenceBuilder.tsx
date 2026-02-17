'use client';

import { useState } from 'react';
import { SentenceBuilderContent } from '@/content/types';
import { checkSentenceMatch } from '@/lib/exercise-checker';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';

interface SentenceBuilderProps {
  content: SentenceBuilderContent;
  instruction: string;
  onSubmit: (correct: boolean, userAnswer: string, explanation?: string, correctAnswer?: string) => void;
  disabled: boolean;
}

export default function SentenceBuilder({
  content,
  instruction,
  onSubmit,
  disabled,
}: SentenceBuilderProps) {
  const [itemStates, setItemStates] = useState(
    content.items.map((item) => ({
      available: [...item.availableWords],
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
      const userSentence = itemStates[i].selected.join(' ');
      const result = checkSentenceMatch(userSentence, item.correctSentence);
      if (!result.correct) {
        allCorrect = false;
      }
    });

    const userAnswer = itemStates.map((s) => s.selected.join(' ')).join(' | ');
    const correctAnswer = content.items.map((item) => item.correctSentence).join(' | ');

    onSubmit(
      allCorrect,
      userAnswer,
      allCorrect ? undefined : `The correct sentence is: ${correctAnswer}`,
      allCorrect ? undefined : correctAnswer
    );
  };

  const hasSelection = itemStates.some((s) => s.selected.length > 0);

  return (
    <div>
      <p className="text-sm font-medium text-muted mb-4">{instruction}</p>

      <div className="space-y-6">
        {content.items.map((item, itemIndex) => (
          <div key={itemIndex} className="bg-accent-light/10 rounded-lg p-4">
            <p className="text-sm text-accent font-medium mb-3">
              Translate: &ldquo;{item.englishPrompt}&rdquo;
            </p>

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
          <Button onClick={handleSubmit} disabled={!hasSelection}>
            Check Answer
          </Button>
        </div>
      )}
    </div>
  );
}
