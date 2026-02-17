'use client';

import { useCallback, useMemo } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { vocabularyCategories, VocabularyWord } from '@/content/vocabulary';

interface WordResult {
  correctCount: number;
  incorrectCount: number;
  lastPracticed: string;
}

interface VocabProgress {
  categories: Record<string, Record<string, WordResult>>;
}

export interface MasteredWord {
  word: VocabularyWord;
  categoryId: string;
  categoryName: string;
  categoryIcon: string;
  correctCount: number;
  incorrectCount: number;
  lastPracticed: string;
}

export interface CategoryStats {
  total: number;
  mastered: number;
  practiced: number;
}

const defaultVocabProgress: VocabProgress = {
  categories: {},
};

export function useVocabProgress() {
  const [progress, setProgress, isLoaded] = useLocalStorage<VocabProgress>(
    'nederpro_vocab_progress',
    defaultVocabProgress
  );

  const recordWordResult = useCallback(
    (categoryId: string, dutchWord: string, correct: boolean) => {
      setProgress((prev) => {
        const updated = { ...prev };
        const catResults = { ...(updated.categories[categoryId] || {}) };
        const existing = catResults[dutchWord] || {
          correctCount: 0,
          incorrectCount: 0,
          lastPracticed: '',
        };

        catResults[dutchWord] = {
          correctCount: correct ? existing.correctCount + 1 : existing.correctCount,
          incorrectCount: correct ? existing.incorrectCount : existing.incorrectCount + 1,
          lastPracticed: new Date().toISOString(),
        };

        updated.categories = { ...updated.categories, [categoryId]: catResults };
        return updated;
      });
    },
    [setProgress]
  );

  const getMasteredWords = useMemo((): MasteredWord[] => {
    const mastered: MasteredWord[] = [];

    for (const category of vocabularyCategories) {
      const catResults = progress.categories[category.id];
      if (!catResults) continue;

      for (const word of category.words) {
        const result = catResults[word.dutch];
        if (result && result.correctCount >= 1) {
          mastered.push({
            word,
            categoryId: category.id,
            categoryName: category.name,
            categoryIcon: category.icon,
            correctCount: result.correctCount,
            incorrectCount: result.incorrectCount,
            lastPracticed: result.lastPracticed,
          });
        }
      }
    }

    return mastered;
  }, [progress]);

  const getCategoryStats = useCallback(
    (categoryId: string): CategoryStats => {
      const category = vocabularyCategories.find((c) => c.id === categoryId);
      if (!category) return { total: 0, mastered: 0, practiced: 0 };

      const catResults = progress.categories[categoryId] || {};
      let mastered = 0;
      let practiced = 0;

      for (const word of category.words) {
        const result = catResults[word.dutch];
        if (result) {
          practiced++;
          if (result.correctCount >= 1) {
            mastered++;
          }
        }
      }

      return { total: category.words.length, mastered, practiced };
    },
    [progress]
  );

  const getTotalMasteredCount = useMemo((): number => {
    return getMasteredWords.length;
  }, [getMasteredWords]);

  return {
    progress,
    isLoaded,
    recordWordResult,
    getMasteredWords,
    getCategoryStats,
    getTotalMasteredCount,
  };
}
