'use client';

import { useState } from 'react';
import { ErrorCorrectionContent } from '@/content/types';
import { checkExactMatch } from '@/lib/exercise-checker';
import Button from '@/components/ui/Button';

interface ErrorCorrectionProps {
  content: ErrorCorrectionContent;
  instruction: string;
  onSubmit: (correct: boolean, userAnswer: string, explanation?: string, correctAnswer?: string) => void;
  disabled: boolean;
}

export default function ErrorCorrection({
  content,
  instruction,
  onSubmit,
  disabled,
}: ErrorCorrectionProps) {
  const [corrections, setCorrections] = useState<string[]>(
    content.items.map(() => '')
  );

  const handleSubmit = () => {
    let allCorrect = true;
    const explanations: string[] = [];

    content.items.forEach((item, i) => {
      const result = checkExactMatch(corrections[i], item.correctedSentence);
      if (!result.correct) {
        allCorrect = false;
        explanations.push(item.errorExplanation);
      }
    });

    const userAnswer = corrections.join(', ');
    const correctAnswer = content.items.map((item) => item.correctedSentence).join(', ');

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

      <div className="space-y-5">
        {content.items.map((item, i) => (
          <div key={i} className="bg-error-light/20 border border-error/20 rounded-lg p-4">
            <p className="text-primary font-medium mb-1">{item.incorrectSentence}</p>
            <p className="text-xs text-muted mb-3">Type the corrected sentence below:</p>
            <input
              type="text"
              value={corrections[i]}
              onChange={(e) => {
                const newCorrections = [...corrections];
                newCorrections[i] = e.target.value;
                setCorrections(newCorrections);
              }}
              disabled={disabled}
              placeholder="Corrected sentence..."
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
          <Button onClick={handleSubmit} disabled={corrections.some((c) => !c.trim())}>
            Check Answer
          </Button>
        </div>
      )}
    </div>
  );
}
