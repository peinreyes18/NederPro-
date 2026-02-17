import { UserProgress } from '@/types/progress';

const STORAGE_KEY = 'nederpro_progress';
const STORAGE_VERSION = 1;

export const defaultProgress: UserProgress = {
  version: STORAGE_VERSION,
  lastUpdated: new Date().toISOString(),
  levels: {},
  settings: {
    showEnglishHints: true,
    autoAdvance: false,
    fontSize: 'normal',
  },
  stats: {
    totalStudyTimeMinutes: 0,
    currentStreak: 0,
    longestStreak: 0,
    lastStudyDate: '',
    totalExercisesCompleted: 0,
    totalCorrectAnswers: 0,
  },
};

export function loadProgress(): UserProgress {
  if (typeof window === 'undefined') return { ...defaultProgress };

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...defaultProgress };

    const parsed = JSON.parse(raw) as UserProgress;

    if (parsed.version !== STORAGE_VERSION) {
      return migrateProgress(parsed);
    }

    return parsed;
  } catch {
    return { ...defaultProgress };
  }
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return;

  try {
    progress.lastUpdated = new Date().toISOString();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // localStorage may be full or unavailable
  }
}

export function resetProgress(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}

export function exportProgress(): string {
  const progress = loadProgress();
  return JSON.stringify(progress, null, 2);
}

export function importProgress(json: string): UserProgress {
  const parsed = JSON.parse(json);

  // Validate required top-level structure
  if (
    typeof parsed !== 'object' ||
    parsed === null ||
    typeof parsed.version !== 'number' ||
    typeof parsed.levels !== 'object' ||
    typeof parsed.settings !== 'object' ||
    typeof parsed.stats !== 'object'
  ) {
    throw new Error('Invalid progress data format');
  }

  // Merge with defaults to fill any missing fields
  const validated: UserProgress = {
    ...defaultProgress,
    ...parsed,
    settings: { ...defaultProgress.settings, ...parsed.settings },
    stats: { ...defaultProgress.stats, ...parsed.stats },
    version: STORAGE_VERSION,
  };

  saveProgress(validated);
  return validated;
}

function migrateProgress(old: UserProgress): UserProgress {
  // Future migration logic goes here
  return { ...defaultProgress, ...old, version: STORAGE_VERSION };
}
