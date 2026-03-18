'use client';

import { useMemo } from 'react';
import { useProgress } from './useProgress';
import { useVocabProgress } from './useVocabProgress';
import { getTopicsForLevel } from '@/lib/content-loader';
import { vocabularyCategories, VocabularyWord } from '@/content/vocabulary';
import { Exercise } from '@/content/types';
import { UserProgress } from '@/types/progress';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface GrammarDailyItem {
  kind: 'grammar';
  exercise: Exercise;
  levelId: string;
  topicId: string;
  topicTitle: string;
}

export interface VocabDailyItem {
  kind: 'vocab';
  word: VocabularyWord;
  categoryId: string;
  categoryName: string;
  direction: 'dutch-to-english' | 'english-to-dutch';
}

export type DailyItem = GrammarDailyItem | VocabDailyItem;

export interface DailySession {
  items: DailyItem[];
  grammarCount: number;
  vocabCount: number;
  doneToday: boolean;
  streak: number;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Seeded pseudo-random shuffle so the session is stable within a day */
function seededShuffle<T>(arr: T[], seed: number): T[] {
  const result = [...arr];
  let s = seed;
  for (let i = result.length - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    const j = Math.abs(s) % (i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function todaySeed(): number {
  const d = new Date();
  return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
}

/** Determine the most relevant level for the user to practice */
function detectActiveLevel(progress: UserProgress): string {
  const levelOrder = ['a0', 'a1', 'a2', 'b1', 'b2'];
  for (const levelId of levelOrder) {
    const lvl = progress.levels[levelId];
    if (lvl && lvl.topicsInProgress.length > 0) return levelId;
  }
  // Fall back to the first level where the user has started anything
  for (const levelId of levelOrder) {
    const lvl = progress.levels[levelId];
    if (lvl && lvl.topicsCompleted.length > 0) return levelId;
  }
  return 'a1'; // default for new users
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

export function useDailyPractice(): DailySession & { isLoaded: boolean } {
  const { progress, isLoaded: progressLoaded } = useProgress();
  const { getDueWords, getMasteredWords, isLoaded: vocabLoaded } = useVocabProgress();

  const session = useMemo((): DailySession => {
    const today = new Date().toISOString().split('T')[0];
    const doneToday = progress.stats.dailyPracticeDate === today;
    const streak = progress.stats.currentStreak;
    const seed = todaySeed();

    const grammarItems: GrammarDailyItem[] = [];
    const vocabItems: VocabDailyItem[] = [];

    // ── VOCABULARY ─────────────────────────────────────────────────────────
    // 1. Due SRS words first (up to 3)
    const dueWords = getDueWords.slice(0, 3);
    for (const dw of dueWords) {
      vocabItems.push({
        kind: 'vocab',
        word: dw.word,
        categoryId: dw.categoryId,
        categoryName: dw.categoryName,
        direction: dw.srs.easeFactor < 2.0 ? 'english-to-dutch' : 'dutch-to-english',
      });
    }

    // 2. If still need vocab, pick new unpracticed words from vocabulary categories
    if (vocabItems.length < 2) {
      const masteredDutchWords = new Set(getMasteredWords.map((mw) => mw.word.dutch));
      for (const category of vocabularyCategories) {
        if (vocabItems.length >= 3) break;
        const unpracticed = category.words.filter((w) => !masteredDutchWords.has(w.dutch));
        const shuffled = seededShuffle(unpracticed, seed + category.id.charCodeAt(0));
        for (const word of shuffled) {
          if (vocabItems.length >= 3) break;
          vocabItems.push({
            kind: 'vocab',
            word,
            categoryId: category.id,
            categoryName: category.name,
            direction: 'dutch-to-english',
          });
        }
      }
    }

    // ── GRAMMAR ────────────────────────────────────────────────────────────
    const activeLevel = detectActiveLevel(progress);
    const levelTopics = getTopicsForLevel(activeLevel);
    const levelData = progress.levels[activeLevel];

    // Pick the in-progress topic, or the next not-started one
    const inProgressTopicId = levelData?.topicsInProgress?.[0];
    const completedSet = new Set(levelData?.topicsCompleted ?? []);
    const nextTopicId = levelTopics.find((t) => !completedSet.has(t.id))?.id;
    const targetTopicId = inProgressTopicId ?? nextTopicId;
    const targetTopic = levelTopics.find((t) => t.id === targetTopicId);

    if (targetTopic) {
      // Filter to quick exercise types suitable for a 5-item daily session
      const quickTypes = new Set(['multiple-choice', 'fill-in-the-blank', 'error-correction', 'word-order', 'translation']);
      const eligible = targetTopic.exercises.filter((ex) => quickTypes.has(ex.type));
      const shuffledEx = seededShuffle(eligible, seed + 1);
      const needed = Math.max(2, 5 - vocabItems.length);
      for (const ex of shuffledEx.slice(0, needed)) {
        grammarItems.push({
          kind: 'grammar',
          exercise: ex,
          levelId: activeLevel,
          topicId: targetTopic.id,
          topicTitle: targetTopic.title,
        });
      }
    }

    // ── ASSEMBLE & TRIM TO 5 ──────────────────────────────────────────────
    const all: DailyItem[] = [...vocabItems, ...grammarItems];
    const shuffled = seededShuffle(all, seed + 99);
    const items = shuffled.slice(0, 5);

    return {
      items,
      grammarCount: items.filter((i) => i.kind === 'grammar').length,
      vocabCount: items.filter((i) => i.kind === 'vocab').length,
      doneToday,
      streak,
    };
  }, [progress, getDueWords, getMasteredWords]);

  return { ...session, isLoaded: progressLoaded && vocabLoaded };
}
