'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { UserProgress, TopicProgress, ExerciseResult } from '@/types/progress';
import { loadProgress, saveProgress, defaultProgress } from '@/lib/storage';

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(defaultProgress);
  const [isLoaded, setIsLoaded] = useState(false);
  const saveTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = loadProgress();
    setProgress(stored);
    setIsLoaded(true);
  }, []);

  // Debounced save
  useEffect(() => {
    if (!isLoaded) return;

    if (saveTimerRef.current) {
      clearTimeout(saveTimerRef.current);
    }

    saveTimerRef.current = setTimeout(() => {
      saveProgress(progress);
    }, 300);

    return () => {
      if (saveTimerRef.current) {
        clearTimeout(saveTimerRef.current);
      }
    };
  }, [progress, isLoaded]);

  const markLessonRead = useCallback((levelId: string, topicId: string) => {
    setProgress((prev) => {
      const updated = { ...prev };
      if (!updated.levels[levelId]) {
        updated.levels[levelId] = {
          levelId,
          topicsCompleted: [],
          topicsInProgress: [],
          topicProgress: {},
        };
      }

      const level = { ...updated.levels[levelId] };
      if (!level.topicProgress[topicId]) {
        level.topicProgress[topicId] = {
          topicId,
          lessonRead: false,
          exercisesCompleted: 0,
          exercisesTotal: 0,
          exerciseResults: [],
          bestScore: 0,
          lastAttempted: '',
          attempts: 0,
        };
      }

      level.topicProgress = {
        ...level.topicProgress,
        [topicId]: { ...level.topicProgress[topicId], lessonRead: true },
      };

      if (!level.topicsInProgress.includes(topicId) && !level.topicsCompleted.includes(topicId)) {
        level.topicsInProgress = [...level.topicsInProgress, topicId];
      }

      updated.levels = { ...updated.levels, [levelId]: level };
      return updated;
    });
  }, []);

  const recordExerciseResult = useCallback(
    (levelId: string, topicId: string, exercisesTotal: number, result: ExerciseResult) => {
      setProgress((prev) => {
        const updated = { ...prev };
        if (!updated.levels[levelId]) {
          updated.levels[levelId] = {
            levelId,
            topicsCompleted: [],
            topicsInProgress: [],
            topicProgress: {},
          };
        }

        const level = { ...updated.levels[levelId] };
        const existing = level.topicProgress[topicId] || {
          topicId,
          lessonRead: false,
          exercisesCompleted: 0,
          exercisesTotal,
          exerciseResults: [],
          bestScore: 0,
          lastAttempted: '',
          attempts: 0,
        };

        const newResults = [...existing.exerciseResults, result];
        const completed = new Set(newResults.filter((r) => r.correct).map((r) => r.exerciseId)).size;

        // Calculate score from only the most recent session (last exercisesTotal results)
        const recentResults = newResults.slice(-exercisesTotal);
        const correctCount = recentResults.filter((r) => r.correct).length;
        const score = recentResults.length > 0 ? Math.round((correctCount / recentResults.length) * 100) : 0;

        // Only increment attempts when a full session is completed
        const resultsInCurrentSession = newResults.length % exercisesTotal;
        const sessionJustCompleted = resultsInCurrentSession === 0 && newResults.length > 0;

        const topicProg: TopicProgress = {
          ...existing,
          exercisesCompleted: completed,
          exercisesTotal,
          exerciseResults: newResults,
          bestScore: Math.max(existing.bestScore, score),
          lastAttempted: new Date().toISOString(),
          attempts: sessionJustCompleted ? existing.attempts + 1 : existing.attempts,
        };

        level.topicProgress = { ...level.topicProgress, [topicId]: topicProg };

        // Mark as completed if all exercises done correctly
        if (completed >= exercisesTotal && !level.topicsCompleted.includes(topicId)) {
          level.topicsCompleted = [...level.topicsCompleted, topicId];
          level.topicsInProgress = level.topicsInProgress.filter((id) => id !== topicId);
        } else if (!level.topicsInProgress.includes(topicId) && !level.topicsCompleted.includes(topicId)) {
          level.topicsInProgress = [...level.topicsInProgress, topicId];
        }

        updated.levels = { ...updated.levels, [levelId]: level };

        // Update global stats
        const today = new Date().toISOString().split('T')[0];
        const prevDate = updated.stats.lastStudyDate;
        let { currentStreak, longestStreak } = updated.stats;

        if (prevDate !== today) {
          // Check if previous study was yesterday
          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          const yesterdayStr = yesterday.toISOString().split('T')[0];

          if (prevDate === yesterdayStr) {
            currentStreak += 1;
          } else if (!prevDate) {
            currentStreak = 1;
          } else {
            // Streak broken
            currentStreak = 1;
          }
          longestStreak = Math.max(longestStreak, currentStreak);
        }

        updated.stats = {
          ...updated.stats,
          totalExercisesCompleted: updated.stats.totalExercisesCompleted + 1,
          totalCorrectAnswers: result.correct
            ? updated.stats.totalCorrectAnswers + 1
            : updated.stats.totalCorrectAnswers,
          lastStudyDate: today,
          currentStreak,
          longestStreak,
        };

        return updated;
      });
    },
    []
  );

  const getTopicProgress = useCallback(
    (levelId: string, topicId: string): TopicProgress | null => {
      const level = progress.levels[levelId];
      if (!level) return null;
      return level.topicProgress[topicId] || null;
    },
    [progress]
  );

  return {
    progress,
    isLoaded,
    markLessonRead,
    recordExerciseResult,
    getTopicProgress,
  };
}
