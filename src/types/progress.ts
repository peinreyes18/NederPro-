export interface UserProgress {
  version: number;
  lastUpdated: string;
  levels: Record<string, LevelProgress>;
  settings: UserSettings;
  stats: UserStats;
}

export interface LevelProgress {
  levelId: string;
  topicsCompleted: string[];
  topicsInProgress: string[];
  topicProgress: Record<string, TopicProgress>;
}

export interface TopicProgress {
  topicId: string;
  lessonRead: boolean;
  exercisesCompleted: number;
  exercisesTotal: number;
  exerciseResults: ExerciseResult[];
  bestScore: number;
  lastAttempted: string;
  attempts: number;
}

export interface ExerciseResult {
  exerciseId: string;
  correct: boolean;
  userAnswer: string;
  timestamp: string;
}

export interface UserSettings {
  showEnglishHints: boolean;
  autoAdvance: boolean;
  fontSize: 'normal' | 'large';
}

export interface UserStats {
  totalStudyTimeMinutes: number;
  currentStreak: number;
  longestStreak: number;
  lastStudyDate: string;
  totalExercisesCompleted: number;
  totalCorrectAnswers: number;
}
