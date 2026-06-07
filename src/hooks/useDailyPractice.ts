'use client';

import { useMemo } from 'react';
import { useProgress } from './useProgress';
import { getTopicsForLevel } from '@/lib/content-loader';
import { levels } from '@/content/levels';
import { Exercise, GrammarRuleSection, Topic } from '@/content/types';
import { UserProgress } from '@/types/progress';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface DailyLesson {
  levelId: string;
  levelShortName: string;
  topicId: string;
  topicTitle: string;
  topicSubtitle?: string;
  grammarTip: string;
  exercises: Exercise[];
  doneToday: boolean;
  streak: number;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const LEVEL_ORDER = ['a0', 'a1', 'a2', 'b1', 'b2'] as const;

const QUICK_TYPES = new Set([
  'multiple-choice',
  'fill-in-the-blank',
  'error-correction',
  'word-order',
  'translation',
]);

const MAX_EXERCISES = 8;

function detectActiveLevel(progress: UserProgress): string {
  for (const levelId of LEVEL_ORDER) {
    const lvl = progress.levels[levelId];
    if (lvl?.topicsInProgress.length > 0) return levelId;
  }
  for (const levelId of LEVEL_ORDER) {
    const lvl = progress.levels[levelId];
    if (lvl?.topicsCompleted.length > 0) return levelId;
  }
  return 'a1';
}

function extractGrammarTip(topic: Topic): string {
  const lesson = 'lesson' in topic ? topic.lesson : topic.lessons?.[0];
  if (!lesson) return '';
  const sections = 'sections' in lesson ? lesson.sections : [];
  const firstRule = sections.find(
    (s): s is GrammarRuleSection => s.type === 'grammar-rule'
  );
  return firstRule?.rule ?? '';
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

export function useDailyPractice(): DailyLesson & { isLoaded: boolean } {
  const { progress, isLoaded } = useProgress();

  const lesson = useMemo((): DailyLesson => {
    const today = new Date().toISOString().split('T')[0];
    const doneToday = progress.stats.dailyPracticeDate === today;
    const streak = progress.stats.currentStreak;

    const levelId = detectActiveLevel(progress);
    const levelDef = levels.find((l) => l.id === levelId);
    const levelShortName = levelDef?.shortName ?? levelId.toUpperCase();

    const levelTopics = getTopicsForLevel(levelId);
    const levelData = progress.levels[levelId];
    const completedSet = new Set(levelData?.topicsCompleted ?? []);
    const inProgressId = levelData?.topicsInProgress?.[0];

    // Find the starting topic index (in-progress, or first uncompleted)
    const preferredId = inProgressId ?? levelTopics.find((t) => !completedSet.has(t.id))?.id ?? levelTopics[0]?.id;
    const startIndex = levelTopics.findIndex((t) => t.id === preferredId);

    // Walk forward from the preferred topic until we find one with quick exercises
    let topic: (typeof levelTopics)[number] | undefined;
    let exercises: Exercise[] = [];
    for (let i = 0; i < levelTopics.length; i++) {
      const candidate = levelTopics[(startIndex + i) % levelTopics.length];
      const quick = candidate.exercises.filter((ex) => QUICK_TYPES.has(ex.type));
      if (quick.length > 0) {
        topic = candidate;
        exercises = quick.slice(0, MAX_EXERCISES);
        break;
      }
    }

    if (!topic) {
      return {
        levelId,
        levelShortName,
        topicId: '',
        topicTitle: 'Dutch Grammar',
        grammarTip: '',
        exercises: [],
        doneToday,
        streak,
      };
    }

    return {
      levelId,
      levelShortName,
      topicId: topic.id,
      topicTitle: topic.title,
      topicSubtitle: topic.subtitle,
      grammarTip: extractGrammarTip(topic),
      exercises,
      doneToday,
      streak,
    };
  }, [progress]);

  return { ...lesson, isLoaded };
}
