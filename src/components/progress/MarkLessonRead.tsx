'use client';

import { useEffect } from 'react';
import { useProgress } from '@/hooks/useProgress';

interface MarkLessonReadProps {
  levelId: string;
  topicId: string;
}

export default function MarkLessonRead({ levelId, topicId }: MarkLessonReadProps) {
  const { markLessonRead, isLoaded } = useProgress();

  useEffect(() => {
    if (isLoaded) {
      markLessonRead(levelId, topicId);
    }
  }, [isLoaded, levelId, topicId, markLessonRead]);

  return null;
}
