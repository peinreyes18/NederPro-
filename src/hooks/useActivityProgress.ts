'use client';

import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'nederpro_activity_progress';

export interface ActivityProgress {
  listening: {
    completed: string[];   // exercise IDs
    scores: Record<string, number>; // id → score out of 4
  };
  reading: {
    completed: string[];
    scores: Record<string, number>;
  };
  knm: {
    attempts: number;
    bestScore: number;   // percentage
    lastScore: number;
  };
  mockExam: {
    attempts: number;
    bestScore: number;   // percentage
    passed: boolean;
    lastScore: number;
  };
}

const DEFAULT: ActivityProgress = {
  listening: { completed: [], scores: {} },
  reading:   { completed: [], scores: {} },
  knm:       { attempts: 0, bestScore: 0, lastScore: 0 },
  mockExam:  { attempts: 0, bestScore: 0, passed: false, lastScore: 0 },
};

function load(): ActivityProgress {
  if (typeof window === 'undefined') return DEFAULT;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT;
    const parsed = JSON.parse(raw);
    // Merge with defaults so new keys are always present
    return {
      listening: { ...DEFAULT.listening, ...parsed.listening },
      reading:   { ...DEFAULT.reading,   ...parsed.reading   },
      knm:       { ...DEFAULT.knm,       ...parsed.knm       },
      mockExam:  { ...DEFAULT.mockExam,  ...parsed.mockExam  },
    };
  } catch {
    return DEFAULT;
  }
}

function save(data: ActivityProgress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // storage full or private mode — ignore
  }
}

export function useActivityProgress() {
  const [data, setData] = useState<ActivityProgress>(DEFAULT);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setData(load());
    setIsLoaded(true);
  }, []);

  const completeListening = useCallback((id: string, score: number) => {
    setData((prev) => {
      const next: ActivityProgress = {
        ...prev,
        listening: {
          completed: prev.listening.completed.includes(id)
            ? prev.listening.completed
            : [...prev.listening.completed, id],
          scores: { ...prev.listening.scores, [id]: score },
        },
      };
      save(next);
      return next;
    });
  }, []);

  const completeReading = useCallback((id: string, score: number) => {
    setData((prev) => {
      const next: ActivityProgress = {
        ...prev,
        reading: {
          completed: prev.reading.completed.includes(id)
            ? prev.reading.completed
            : [...prev.reading.completed, id],
          scores: { ...prev.reading.scores, [id]: score },
        },
      };
      save(next);
      return next;
    });
  }, []);

  const completeKnm = useCallback((score: number) => {
    setData((prev) => {
      const next: ActivityProgress = {
        ...prev,
        knm: {
          attempts: prev.knm.attempts + 1,
          bestScore: Math.max(prev.knm.bestScore, score),
          lastScore: score,
        },
      };
      save(next);
      return next;
    });
  }, []);

  const completeMockExam = useCallback((score: number) => {
    setData((prev) => {
      const next: ActivityProgress = {
        ...prev,
        mockExam: {
          attempts: prev.mockExam.attempts + 1,
          bestScore: Math.max(prev.mockExam.bestScore, score),
          passed: prev.mockExam.passed || score >= 70,
          lastScore: score,
        },
      };
      save(next);
      return next;
    });
  }, []);

  return { data, isLoaded, completeListening, completeReading, completeKnm, completeMockExam };
}
