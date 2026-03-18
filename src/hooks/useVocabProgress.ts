'use client';

import { useCallback, useMemo } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { vocabularyCategories, VocabularyWord } from '@/content/vocabulary';

// ---------------------------------------------------------------------------
// SM-2 Spaced Repetition Algorithm
// Based on: https://www.supermemo.com/en/sm-2
// quality 3 = correct,  quality 0 = incorrect
// ---------------------------------------------------------------------------

const MIN_EASE = 1.3;
const DEFAULT_EASE = 2.5;

export interface SRSData {
  repetitions: number;  // consecutive correct reviews
  easeFactor: number;   // ≥ 1.3, starts at 2.5
  interval: number;     // days until next review
  nextReview: string;   // ISO date string
  firstSeen: string;    // ISO date string
}

export function sm2(current: SRSData, quality: 0 | 3): SRSData {
  let { repetitions, easeFactor, interval } = current;
  if (quality >= 3) {
    if (repetitions === 0) interval = 1;
    else if (repetitions === 1) interval = 3;
    else interval = Math.round(interval * easeFactor);
    repetitions += 1;
    easeFactor = Math.max(MIN_EASE, easeFactor + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  } else {
    repetitions = 0;
    interval = 1;
    easeFactor = Math.max(MIN_EASE, easeFactor - 0.2);
  }
  const next = new Date();
  next.setDate(next.getDate() + interval);
  next.setHours(0, 0, 0, 0);
  return { repetitions, easeFactor, interval, nextReview: next.toISOString(), firstSeen: current.firstSeen };
}

// ---------------------------------------------------------------------------
// Storage types
// ---------------------------------------------------------------------------

export interface WordResult {
  correctCount: number;
  incorrectCount: number;
  lastPracticed: string;
  srs?: SRSData;
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
  srs?: SRSData;
}

export interface DueWord {
  word: VocabularyWord;
  categoryId: string;
  categoryName: string;
  categoryIcon: string;
  srs: SRSData;
  daysOverdue: number;
}

export interface CategoryStats {
  total: number;
  mastered: number;
  practiced: number;
  dueCount: number;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function makeSRSData(): SRSData {
  return { repetitions: 0, easeFactor: DEFAULT_EASE, interval: 0, nextReview: new Date().toISOString(), firstSeen: new Date().toISOString() };
}

function isDueToday(nextReview: string): boolean {
  const today = new Date();
  today.setHours(23, 59, 59, 999);
  return new Date(nextReview) <= today;
}

const defaultVocabProgress: VocabProgress = { categories: {} };

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

export function useVocabProgress() {
  const [progress, setProgress, isLoaded] = useLocalStorage<VocabProgress>(
    'nederpro_vocab_progress',
    defaultVocabProgress
  );

  // Plain practice result (no SRS scheduling — used by existing practice page)
  const recordWordResult = useCallback(
    (categoryId: string, dutchWord: string, correct: boolean) => {
      setProgress((prev) => {
        const updated = { ...prev };
        const catResults = { ...(updated.categories[categoryId] || {}) };
        const existing: WordResult = catResults[dutchWord] || { correctCount: 0, incorrectCount: 0, lastPracticed: '' };
        catResults[dutchWord] = {
          ...existing,
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

  // SRS review result — runs SM-2 and reschedules the word
  const recordSRSResult = useCallback(
    (categoryId: string, dutchWord: string, correct: boolean) => {
      setProgress((prev) => {
        const updated = { ...prev };
        const catResults = { ...(updated.categories[categoryId] || {}) };
        const existing: WordResult = catResults[dutchWord] || { correctCount: 0, incorrectCount: 0, lastPracticed: '' };
        const currentSRS: SRSData = existing.srs ?? makeSRSData();
        const newSRS = sm2(currentSRS, correct ? 3 : 0);
        catResults[dutchWord] = {
          correctCount: correct ? existing.correctCount + 1 : existing.correctCount,
          incorrectCount: correct ? existing.incorrectCount : existing.incorrectCount + 1,
          lastPracticed: new Date().toISOString(),
          srs: newSRS,
        };
        updated.categories = { ...updated.categories, [categoryId]: catResults };
        return updated;
      });
    },
    [setProgress]
  );

  // Add a word to the SRS queue (called when first practiced)
  const enqueueForSRS = useCallback(
    (categoryId: string, dutchWord: string) => {
      setProgress((prev) => {
        const catResults = prev.categories[categoryId] || {};
        const existing = catResults[dutchWord];
        if (existing?.srs) return prev; // already queued
        const updated = { ...prev };
        const updatedCat = { ...catResults };
        updatedCat[dutchWord] = { ...(existing || { correctCount: 0, incorrectCount: 0, lastPracticed: '' }), srs: makeSRSData() };
        updated.categories = { ...updated.categories, [categoryId]: updatedCat };
        return updated;
      });
    },
    [setProgress]
  );

  // All words due for review today, sorted most overdue first
  const getDueWords = useMemo((): DueWord[] => {
    const due: DueWord[] = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    for (const category of vocabularyCategories) {
      const catResults = progress.categories[category.id];
      if (!catResults) continue;
      for (const word of category.words) {
        const result = catResults[word.dutch];
        if (!result?.srs) continue;
        if (isDueToday(result.srs.nextReview)) {
          const reviewDate = new Date(result.srs.nextReview);
          reviewDate.setHours(0, 0, 0, 0);
          const daysOverdue = Math.max(0, Math.floor((today.getTime() - reviewDate.getTime()) / 86400000));
          due.push({ word, categoryId: category.id, categoryName: category.name, categoryIcon: category.icon, srs: result.srs, daysOverdue });
        }
      }
    }
    due.sort((a, b) => b.daysOverdue !== a.daysOverdue ? b.daysOverdue - a.daysOverdue : a.srs.easeFactor - b.srs.easeFactor);
    return due;
  }, [progress]);

  const getDueTodayCount = useMemo((): number => getDueWords.length, [getDueWords]);

  const getMasteredWords = useMemo((): MasteredWord[] => {
    const mastered: MasteredWord[] = [];
    for (const category of vocabularyCategories) {
      const catResults = progress.categories[category.id];
      if (!catResults) continue;
      for (const word of category.words) {
        const result = catResults[word.dutch];
        if (result && result.correctCount >= 1) {
          mastered.push({
            word, categoryId: category.id, categoryName: category.name, categoryIcon: category.icon,
            correctCount: result.correctCount, incorrectCount: result.incorrectCount, lastPracticed: result.lastPracticed, srs: result.srs,
          });
        }
      }
    }
    return mastered;
  }, [progress]);

  const getCategoryStats = useCallback(
    (categoryId: string): CategoryStats => {
      const category = vocabularyCategories.find((c) => c.id === categoryId);
      if (!category) return { total: 0, mastered: 0, practiced: 0, dueCount: 0 };
      const catResults = progress.categories[categoryId] || {};
      let mastered = 0, practiced = 0, dueCount = 0;
      for (const word of category.words) {
        const result = catResults[word.dutch];
        if (result) {
          practiced++;
          if (result.correctCount >= 1) mastered++;
          if (result.srs && isDueToday(result.srs.nextReview)) dueCount++;
        }
      }
      return { total: category.words.length, mastered, practiced, dueCount };
    },
    [progress]
  );

  const getTotalMasteredCount = useMemo((): number => getMasteredWords.length, [getMasteredWords]);

  return {
    progress,
    isLoaded,
    recordWordResult,
    recordSRSResult,
    enqueueForSRS,
    getDueWords,
    getDueTodayCount,
    getMasteredWords,
    getCategoryStats,
    getTotalMasteredCount,
  };
}
