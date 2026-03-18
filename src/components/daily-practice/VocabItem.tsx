'use client';

import { useState, useMemo } from 'react';
import { VocabularyWord } from '@/content/vocabulary';
import { vocabularyCategories } from '@/content/vocabulary';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';

interface VocabItemProps {
  word: VocabularyWord;
  categoryId: string;
  direction: 'dutch-to-english' | 'english-to-dutch';
  onSubmit: (correct: boolean) => void;
  disabled: boolean;
  /** Seed for stable distractor generation */
  seed?: number;
}

function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return Math.abs(s) / 0x7fffffff;
  };
}

function buildDistractors(
  word: VocabularyWord,
  direction: 'dutch-to-english' | 'english-to-dutch',
  seed: number
): string[] {
  // Gather all words across all categories as distractor pool
  const allWords: VocabularyWord[] = [];
  for (const cat of vocabularyCategories) {
    for (const w of cat.words) {
      if (w.dutch !== word.dutch) allWords.push(w);
    }
  }

  const rand = seededRandom(seed);
  // Shuffle pool
  const shuffled = [...allWords].sort(() => rand() - 0.5);

  const correct = direction === 'dutch-to-english' ? word.english : word.dutch;
  const distractors: string[] = [];
  for (const w of shuffled) {
    if (distractors.length >= 3) break;
    const candidate = direction === 'dutch-to-english' ? w.english : w.dutch;
    if (candidate !== correct && !distractors.includes(candidate)) {
      distractors.push(candidate);
    }
  }
  return distractors;
}

export default function VocabItem({
  word,
  categoryId,
  direction,
  onSubmit,
  disabled,
  seed = 42,
}: VocabItemProps) {
  const correctAnswer = direction === 'dutch-to-english' ? word.english : word.dutch;
  const prompt = direction === 'dutch-to-english' ? word.dutch : word.english;
  const promptLabel = direction === 'dutch-to-english' ? 'Dutch' : 'English';
  const answerLabel = direction === 'dutch-to-english' ? 'English' : 'Dutch';

  const options = useMemo(() => {
    const distractors = buildDistractors(word, direction, seed);
    const all = [correctAnswer, ...distractors];
    const rand = seededRandom(seed + 1);
    return all.sort(() => rand() - 0.5);
  }, [word, direction, seed, correctAnswer]);

  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (option: string) => {
    if (disabled || submitted) return;
    setSelected(option);
  };

  const handleSubmit = () => {
    if (!selected || submitted) return;
    setSubmitted(true);
    onSubmit(selected === correctAnswer);
  };

  const categoryName = vocabularyCategories.find((c) => c.id === categoryId)?.name ?? categoryId;

  return (
    <div>
      {/* Label */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-accent bg-accent-light px-2 py-0.5 rounded-full">
          Vocabulary · {categoryName}
        </span>
      </div>

      <p className="text-sm font-medium text-muted mb-1">
        What is the {answerLabel} translation of this {promptLabel} word?
      </p>

      {/* The word to translate */}
      <p className="text-2xl font-bold text-primary mb-6">{prompt}</p>

      {/* Example sentence if available */}
      {word.example && (
        <p className="text-sm text-muted italic mb-5">
          e.g. {direction === 'dutch-to-english' ? word.example : (word.exampleTranslation ?? word.example)}
        </p>
      )}

      {/* Options */}
      <div className="space-y-2">
        {options.map((option, i) => {
          const isSelected = selected === option;
          const isCorrect = option === correctAnswer;
          let optionClass = 'border-border hover:border-accent/30 hover:bg-surface text-primary-light';
          if (submitted) {
            if (isCorrect) {
              optionClass = 'border-green-500/60 bg-green-50 dark:bg-green-900/20 text-primary font-medium';
            } else if (isSelected && !isCorrect) {
              optionClass = 'border-red-400/60 bg-red-50 dark:bg-red-900/20 text-primary';
            } else {
              optionClass = 'border-border opacity-50 text-primary-light';
            }
          } else if (isSelected) {
            optionClass = 'border-accent bg-accent-light/30 text-primary font-medium';
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(option)}
              disabled={disabled || submitted}
              className={cn(
                'w-full text-left px-4 py-3 rounded-lg border transition-colors text-sm',
                optionClass,
                (disabled || submitted) && !submitted && 'pointer-events-none'
              )}
            >
              <span className="text-muted mr-2 font-medium">
                {String.fromCharCode(65 + i)}.
              </span>
              {option}
              {submitted && isCorrect && (
                <span className="ml-2 text-green-600 dark:text-green-400">✓</span>
              )}
              {submitted && isSelected && !isCorrect && (
                <span className="ml-2 text-red-500">✗</span>
              )}
            </button>
          );
        })}
      </div>

      {!submitted && (
        <div className="mt-6">
          <Button onClick={handleSubmit} disabled={!selected || disabled}>
            Check Answer
          </Button>
        </div>
      )}

      {submitted && (
        <div className={cn(
          'mt-5 rounded-lg px-4 py-3 text-sm font-medium',
          selected === correctAnswer
            ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-700'
            : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-700'
        )}>
          {selected === correctAnswer
            ? '✓ Correct!'
            : `✗ The correct answer is: ${correctAnswer}`}
        </div>
      )}
    </div>
  );
}
