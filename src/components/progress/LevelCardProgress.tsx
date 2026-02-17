'use client';

import ProgressBar from '@/components/ui/ProgressBar';
import { useProgress } from '@/hooks/useProgress';
import { getLevelCompletionPercent } from '@/lib/progress';

interface LevelCardProgressProps {
  levelId: string;
  topicCount: number;
}

export default function LevelCardProgress({ levelId, topicCount }: LevelCardProgressProps) {
  const { progress, isLoaded } = useProgress();

  if (!isLoaded || topicCount === 0) return null;

  const completionPercent = getLevelCompletionPercent(progress, levelId, topicCount);

  if (completionPercent === 0) return null;

  return <ProgressBar value={completionPercent} showLabel size="sm" />;
}
