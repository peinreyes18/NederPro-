'use client';

import Badge from '@/components/ui/Badge';
import ProgressBar from '@/components/ui/ProgressBar';
import { useProgress } from '@/hooks/useProgress';
import { getTopicStatus } from '@/lib/progress';
import { cn } from '@/lib/utils';

interface TopicStatusBadgeProps {
  levelId: string;
  topicId: string;
  index: number;
}

export function TopicStatusCircle({ levelId, topicId, index }: TopicStatusBadgeProps) {
  const { progress, isLoaded } = useProgress();
  const status = isLoaded ? getTopicStatus(progress, levelId, topicId) : 'not-started';

  return (
    <div
      className={cn(
        'w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0',
        status === 'completed'
          ? 'bg-success-light text-success'
          : status === 'in-progress'
          ? 'bg-accent-light text-accent'
          : 'bg-surface text-muted'
      )}
    >
      {status === 'completed' ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M3 8l4 4 6-7" />
        </svg>
      ) : (
        index + 1
      )}
    </div>
  );
}

export function TopicStatusBadge({ levelId, topicId }: { levelId: string; topicId: string }) {
  const { progress, isLoaded } = useProgress();
  const status = isLoaded ? getTopicStatus(progress, levelId, topicId) : 'not-started';

  if (status === 'in-progress') return <Badge variant="accent">In progress</Badge>;
  if (status === 'completed') return <Badge variant="success">Completed</Badge>;
  return null;
}

export function TopicExerciseProgress({ levelId, topicId }: { levelId: string; topicId: string }) {
  const { progress, isLoaded } = useProgress();
  const topicProg = isLoaded ? progress.levels[levelId]?.topicProgress[topicId] : null;

  if (!topicProg || topicProg.exercisesTotal === 0) return null;

  const exercisePercent = Math.round((topicProg.exercisesCompleted / topicProg.exercisesTotal) * 100);
  return <ProgressBar value={exercisePercent} size="sm" className="mt-2 max-w-xs" />;
}
