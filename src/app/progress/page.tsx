'use client';

import Breadcrumb from '@/components/layout/Breadcrumb';
import Card from '@/components/ui/Card';
import ProgressBar from '@/components/ui/ProgressBar';
import Badge from '@/components/ui/Badge';
import { useProgress } from '@/hooks/useProgress';
import { levels } from '@/content/levels';
import { getLevelCompletionPercent } from '@/lib/progress';
import { getOverallStats } from '@/lib/progress';
import { formatDate } from '@/lib/utils';

export default function ProgressPage() {
  const { progress, isLoaded } = useProgress();

  if (!isLoaded) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <p className="text-muted">Loading progress...</p>
      </div>
    );
  }

  const stats = getOverallStats(progress);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <Breadcrumb items={[{ label: 'Progress' }]} />

      <h1 className="text-3xl font-bold text-primary mb-8">Your Progress</h1>

      {/* Stats overview */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <p className="text-sm text-muted mb-1">Topics Completed</p>
          <p className="text-3xl font-bold text-primary">{stats.totalTopicsCompleted}</p>
        </Card>
        <Card>
          <p className="text-sm text-muted mb-1">In Progress</p>
          <p className="text-3xl font-bold text-accent">{stats.totalTopicsInProgress}</p>
        </Card>
        <Card>
          <p className="text-sm text-muted mb-1">Exercises Done</p>
          <p className="text-3xl font-bold text-primary">{stats.totalExercisesCompleted}</p>
        </Card>
        <Card>
          <p className="text-sm text-muted mb-1">Accuracy</p>
          <p className="text-3xl font-bold text-primary">
            {stats.overallScore > 0 ? `${stats.overallScore}%` : '--'}
          </p>
        </Card>
      </div>

      {/* Study streak */}
      {progress.stats.lastStudyDate && (
        <Card className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted">Last Study Session</p>
              <p className="text-primary font-medium">
                {formatDate(progress.stats.lastStudyDate)}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted">Study Streak</p>
              <p className="text-primary font-medium">
                {progress.stats.currentStreak} day{progress.stats.currentStreak !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
        </Card>
      )}

      {/* Per-level progress */}
      <h2 className="text-xl font-bold text-primary mb-4">Progress by Level</h2>
      <div className="space-y-4">
        {levels.map((level) => {
          const hasContent = level.topicIds.length > 0;
          if (!hasContent) return null;

          const completionPercent = getLevelCompletionPercent(
            progress,
            level.id,
            level.topicIds.length
          );

          const levelData = progress.levels[level.id];
          const completedCount = levelData?.topicsCompleted.length || 0;
          const inProgressCount = levelData?.topicsInProgress.length || 0;

          return (
            <Card key={level.id}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-xl font-bold text-accent">{level.shortName}</span>
                  <h3 className="font-semibold text-primary">{level.name}</h3>
                </div>
                <div className="flex gap-2">
                  {completedCount > 0 && (
                    <Badge variant="success">{completedCount} done</Badge>
                  )}
                  {inProgressCount > 0 && (
                    <Badge variant="accent">{inProgressCount} started</Badge>
                  )}
                </div>
              </div>
              <ProgressBar value={completionPercent} showLabel />
              <p className="text-xs text-muted mt-2">
                {completedCount} of {level.topicIds.length} topics completed
              </p>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
