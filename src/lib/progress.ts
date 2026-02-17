import { UserProgress, LevelProgress, TopicProgress } from '@/types/progress';

export function getTopicProgress(
  progress: UserProgress,
  levelId: string,
  topicId: string
): TopicProgress | null {
  const level = progress.levels[levelId];
  if (!level) return null;
  return level.topicProgress[topicId] || null;
}

export function getLevelProgress(
  progress: UserProgress,
  levelId: string
): LevelProgress | null {
  return progress.levels[levelId] || null;
}

export function getLevelCompletionPercent(
  progress: UserProgress,
  levelId: string,
  totalTopics: number
): number {
  const level = progress.levels[levelId];
  if (!level || totalTopics === 0) return 0;
  return Math.round((level.topicsCompleted.length / totalTopics) * 100);
}

export function getTopicStatus(
  progress: UserProgress,
  levelId: string,
  topicId: string
): 'not-started' | 'in-progress' | 'completed' {
  const level = progress.levels[levelId];
  if (!level) return 'not-started';

  if (level.topicsCompleted.includes(topicId)) return 'completed';
  if (level.topicsInProgress.includes(topicId)) return 'in-progress';
  return 'not-started';
}

export function getOverallStats(progress: UserProgress): {
  totalTopicsCompleted: number;
  totalTopicsInProgress: number;
  totalExercisesCompleted: number;
  overallScore: number;
} {
  let totalTopicsCompleted = 0;
  let totalTopicsInProgress = 0;
  let totalCorrect = 0;
  let totalAttempted = 0;

  for (const level of Object.values(progress.levels)) {
    totalTopicsCompleted += level.topicsCompleted.length;
    totalTopicsInProgress += level.topicsInProgress.length;

    for (const topic of Object.values(level.topicProgress)) {
      for (const result of topic.exerciseResults) {
        totalAttempted++;
        if (result.correct) totalCorrect++;
      }
    }
  }

  return {
    totalTopicsCompleted,
    totalTopicsInProgress,
    totalExercisesCompleted: progress.stats.totalExercisesCompleted,
    overallScore: totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0,
  };
}
