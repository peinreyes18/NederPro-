'use client';

import { useState } from 'react';
import { FillInTheBlankContent } from '@/content/types';
import { checkExactMatch } from '@/lib/exercise-checker';
import Button from '@/components/ui/Button';

interface FillInTheBlankProps {
  content: FillInTheBlankContent;
  instruction: string;
  onSubmit: (correct: boolean, userAnswer: string, explanation?: string, correctAnswer?: string) => void;
  disabled: boolean;
}

export default function FillInTheBlank({
  content,
  instruction,
  onSubmit,
  disabled,
}: FillInTheBlankProps) {
  const [answers, setAnswers] = useState<string[]>(
    content.sentences.map(() => '')
  );

  const handleSubmit = () => {
    let allCorrect = true;
    const wrongItems: string[] = [];

    content.sentences.forEach((sentence, i) => {
      const result = checkExactMatch(
        answers[i],
        sentence.correctAnswer,
        sentence.acceptableAnswers
      );
      if (!result.correct) {
        allCorrect = false;
        wrongItems.push(`"${sentence.correctAnswer}"`);
      }
    });

    const userAnswer = answers.join(', ');
    const correctAnswer = content.sentences.map((s) => s.correctAnswer).join(', ');

    onSubmit(
      allCorrect,
      userAnswer,
      allCorrect ? undefined : `The correct answer${content.sentences.length > 1 ? 's are' : ' is'}: ${correctAnswer}`,
      allCorrect ? undefined : correctAnswer
    );
  };

  return (
    <div>
      <p className="text-sm font-medium text-muted mb-4">{instruction}</p>

      <div className="space-y-4">
        {content.sentences.map((sentence, i) => (
          <div key={i} className="flex items-center flex-wrap gap-1.5 text-primary">
            {sentence.before && <span>{sentence.before}</span>}
            <input
              type="text"
              value={answers[i]}
              onChange={(e) => {
                const newAnswers = [...answers];
                newAnswers[i] = e.target.value;
                setAnswers(newAnswers);
              }}
              disabled={disabled}
              placeholder={sentence.hint || '...'}
              className="border-b-2 border-accent/40 bg-transparent px-2 py-1 text-center min-w-[100px] max-w-[200px] focus:border-accent focus:outline-none disabled:opacity-50"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !disabled) handleSubmit();
              }}
            />
            {sentence.after && <span>{sentence.after}</span>}
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
