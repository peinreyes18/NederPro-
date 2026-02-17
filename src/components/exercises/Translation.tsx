'use client';

import { useState } from 'react';
import { TranslationContent } from '@/content/types';
import { checkExactMatch } from '@/lib/exercise-checker';
import Button from '@/components/ui/Button';

interface TranslationProps {
  content: TranslationContent;
  instruction: string;
  onSubmit: (correct: boolean, userAnswer: string, explanation?: string, correctAnswer?: string) => void;
  disabled: boolean;
}

export default function Translation({
  content,
  instruction,
  onSubmit,
  disabled,
}: TranslationProps) {
  const [answers, setAnswers] = useState<string[]>(
    content.items.map(() => '')
  );
  const [showVocab, setShowVocab] = useState<boolean[]>(
    content.items.map(() => false)
  );

  const handleSubmit = () => {
    let allCorrect = true;
    const wrongItems: string[] = [];

    content.items.forEach((item, i) => {
      const result = checkExactMatch(
        answers[i],
        item.correctDutch,
        item.acceptableAnswers
      );
      if (!result.correct) {
        allCorrect = false;
        wrongItems.push(`"${item.correctDutch}"`);
      }
    });

    const userAnswer = answers.join(', ');
    const correctAnswer = content.items.map((item) => item.correctDutch).join(', ');

    onSubmit(
      allCorrect,
      userAnswer,
      allCorrect
        ? undefined
        : `The correct translation${content.items.length > 1 ? 's are' : ' is'}: ${correctAnswer}`,
      allCorrect ? undefined : correctAnswer
    );
  };

  return (
    <div>
      <p className="text-sm font-medium text-muted mb-4">{instruction}</p>

      <div className="space-y-5">
        {content.items.map((item, i) => (
          <div key={i} className="bg-accent-light/10 border border-accent/20 rounded-lg p-4">
            <p className="text-primary font-medium mb-2">{item.english}</p>

            {item.keyVocabulary && item.keyVocabulary.length > 0 && (
              <div className="mb-3">
                <button
                  type="button"
                  onClick={() => {
                    const next = [...showVocab];
                    next[i] = !next[i];
                    setShowVocab(next);
                  }}
                  className="text-xs text-accent hover:text-accent-hover font-medium"
                >
                  {showVocab[i] ? 'Hide vocabulary hints' : 'Show vocabulary hints'}
                </button>
                {showVocab[i] && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {item.keyVocabulary.map((vocab, vi) => (
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
              value={answers[i]}
              onChange={(e) => {
                const newAnswers = [...answers];
                newAnswers[i] = e.target.value;
                setAnswers(newAnswers);
              }}
              disabled={disabled}
              placeholder="Type your Dutch translation..."
              className="w-full border border-border rounded-md px-3 py-2 text-sm text-primary bg-background focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent disabled:opacity-50"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !disabled) handleSubmit();
              }}
            />
          </div>
        ))}
      </div>

      {!disabled && (
        <div className="mt-6">
          <Button onClick={handleSubmit} disabled={answers.some((a) => !a.trim())}>
            Check Answer
          </Button>
        </div>
      )}
    </div>
  );
}
