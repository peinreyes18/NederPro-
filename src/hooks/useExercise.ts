'use client';

import { useState, useCallback } from 'react';
import { Exercise } from '@/content/types';
import { ExerciseResult } from '@/types/progress';

export type ExerciseState = 'idle' | 'submitted' | 'completed';

export interface ExerciseSessionResult {
  exerciseId: string;
  correct: boolean;
  userAnswer: string;
}

export function useExercise(exercises: Exercise[]) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [state, setState] = useState<ExerciseState>('idle');
  const [results, setResults] = useState<ExerciseSessionResult[]>([]);
  const [lastFeedback, setLastFeedback] = useState<{
    correct: boolean;
    almostCorrect?: boolean;
    correctAnswer?: string;
    explanation?: string;
  } | null>(null);

  const currentExercise = exercises[currentIndex] || null;
  const total = exercises.length;
  const isComplete = state === 'completed';

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
    },
    [currentExercise]
  );

  const next = useCallback(() => {
    if (currentIndex + 1 >= total) {
      setState('completed');
    } else {
      setCurrentIndex((prev) => prev + 1);
      setState('idle');
      setLastFeedback(null);
    }
  }, [currentIndex, total]);

  const reset = useCallback(() => {
    setCurrentIndex(0);
    setState('idle');
    setResults([]);
    setLastFeedback(null);
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
    submit,
    next,
    reset,
    getScore,
    toExerciseResults,
  };
}
