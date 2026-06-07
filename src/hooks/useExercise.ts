'use client';

import { useState, useCallback } from 'react';
import { Exercise } from '@/content/types';
import { ExerciseResult } from '@/types/progress';

export type ExerciseState = 'idle' | 'submitted' | 'completed' | 'out-of-hearts';

export interface ExerciseSessionResult {
  exerciseId: string;
  correct: boolean;
  userAnswer: string;
}

export interface ExerciseInitialState {
  currentIndex: number;
  results: ExerciseSessionResult[];
  hearts: number;
  combo: number;
  xp: number;
}

const MAX_HEARTS = 3;

const XP_BY_DIFFICULTY: Record<string, number> = {
  controlled: 10,
  guided: 15,
  free: 20,
};

export function useExercise(exercises: Exercise[], initial?: ExerciseInitialState) {
  const [currentIndex, setCurrentIndex] = useState(initial?.currentIndex ?? 0);
  const [state, setState] = useState<ExerciseState>('idle');
  const [results, setResults] = useState<ExerciseSessionResult[]>(initial?.results ?? []);
  const [lastFeedback, setLastFeedback] = useState<{
    correct: boolean;
    almostCorrect?: boolean;
    correctAnswer?: string;
    explanation?: string;
  } | null>(null);
  const [hearts, setHearts] = useState(initial?.hearts ?? MAX_HEARTS);
  const [combo, setCombo] = useState(initial?.combo ?? 0);
  const [xp, setXp] = useState(initial?.xp ?? 0);

  const currentExercise = exercises[currentIndex] || null;
  const total = exercises.length;
  const isComplete = state === 'completed';
  const isOutOfHearts = state === 'out-of-hearts';

  const submit = useCallback(
    (correct: boolean, userAnswer: string, explanation?: string, correctAnswer?: string) => {
      const result: ExerciseSessionResult = {
        exerciseId: currentExercise?.id || '',
        correct,
        userAnswer,
      };

      setResults((prev) => [...prev, result]);
      setLastFeedback({ correct, correctAnswer, explanation });
      setState('submitted');

      if (!correct) {
        setHearts((h) => Math.max(0, h - 1));
        setCombo(0);
      } else {
        const base = XP_BY_DIFFICULTY[currentExercise?.difficulty ?? 'controlled'] ?? 10;
        const bonus = combo >= 2 ? 5 : 0;
        setXp((x) => x + base + bonus);
        setCombo((c) => c + 1);
      }
    },
    [currentExercise, combo]
  );

  const next = useCallback(() => {
    if (hearts <= 0) {
      setState('out-of-hearts');
      setLastFeedback(null);
      return;
    }
    if (currentIndex + 1 >= total) {
      setState('completed');
    } else {
      setCurrentIndex((prev) => prev + 1);
      setState('idle');
      setLastFeedback(null);
    }
  }, [currentIndex, total, hearts]);

  const reset = useCallback(() => {
    setCurrentIndex(0);
    setState('idle');
    setResults([]);
    setLastFeedback(null);
    setHearts(MAX_HEARTS);
    setCombo(0);
    setXp(0);
  }, []);

  const getScore = useCallback(() => {
    if (results.length === 0) return 0;
    const correct = results.filter((r) => r.correct).length;
    return Math.round((correct / results.length) * 100);
  }, [results]);

  const toExerciseResults = useCallback((): ExerciseResult[] => {
    return results.map((r) => ({
      exerciseId: r.exerciseId,
      correct: r.correct,
      userAnswer: r.userAnswer,
      timestamp: new Date().toISOString(),
    }));
  }, [results]);

  return {
    currentExercise,
    currentIndex,
    total,
    state,
    results,
    lastFeedback,
    isComplete,
    isOutOfHearts,
    hearts,
    combo,
    xp,
    submit,
    next,
    reset,
    getScore,
    toExerciseResults,
  };
}
