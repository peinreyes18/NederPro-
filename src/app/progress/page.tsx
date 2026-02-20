'use client';

import Link from 'next/link';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Card from '@/components/ui/Card';
import ProgressBar from '@/components/ui/ProgressBar';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { useProgress } from '@/hooks/useProgress';
import { levels } from '@/content/levels';
import { getLevelCompletionPercent, getOverallStats } from '@/lib/progress';
import { formatDate } from '@/lib/utils';

// ── Skeleton ─────────────────────────────────────────────────────────────────

function ProgressSkeleton() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 animate-pulse">
      <div className="h-4 bg-surface rounded w-28 mb-8" />
      <div className="h-8 bg-surface rounded w-48 mb-8" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="rounded-2xl border border-border bg-background p-5">
            <div className="h-3 bg-surface rounded w-24 mb-3" />
            <div className="h-8 bg-surface rounded w-12" />
          </div>
        ))}
      </div>
      <div className="h-6 bg-surface rounded w-40 mb-4" />
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-2xl border border-border bg-background p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="h-6 bg-surface rounded w-8" />
                <div className="h-5 bg-surface rounded w-36" />
              </div>
              <div className="h-5 bg-surface rounded-full w-16" />
            </div>
            <div className="h-2 bg-surface rounded-full w-full mb-2" />
            <div className="h-3 bg-surface rounded w-32" />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Empty state ───────────────────────────────────────────────────────────────

function EmptyState() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <Breadcrumb items={[{ label: 'Progress' }]} />
      <h1 className="text-3xl font-bold text-primary mb-8">Your Progress</h1>

      <div className="rounded-2xl border border-border bg-background p-8 sm:p-12 text-center mb-8">
        <div className="w-16 h-16 rounded-full bg-accent-light flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-primary mb-2">Your journey starts here</h2>
        <p className="text-muted text-sm max-w-sm mx-auto mb-8">
          Complete your first lesson or exercise and your progress will appear here — including streaks, accuracy, and level completion.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/levels">
            <Button>Start a lesson</Button>
          </Link>
          <Link href="/exams">
            <Button variant="outline">Try a practice exam</Button>
          </Link>
        </div>
      </div>

      {/* Show levels as "0%" so the page still feels useful */}
      <h2 className="text-xl font-bold text-primary mb-4">Progress by Level</h2>
      <div className="space-y-4">
        {levels.filter((l) => l.topicIds.length > 0).map((level) => (
          <Link key={level.id} href={`/levels/${level.id}`}>
            <Card hover className="cursor-pointer">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-xl font-bold text-accent">{level.shortName}</span>
                  <h3 className="font-semibold text-primary">{level.name}</h3>
                </div>
                <Badge>{level.topicIds.length} topics</Badge>
              </div>
              <ProgressBar value={0} showLabel />
              <p className="text-xs text-muted mt-2">
                0 of {level.topicIds.length} topics completed
              </p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────

export default function ProgressPage() {
  const { progress, isLoaded } = useProgress();

  if (!isLoaded) return <ProgressSkeleton />;

  const stats = getOverallStats(progress);
  const hasActivity = stats.totalExercisesCompleted > 0 || stats.totalTopicsInProgress > 0;

  if (!hasActivity) return <EmptyState />;

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
            <Link key={level.id} href={`/levels/${level.id}`}>
              <Card hover>
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
            </Link>
          );
        })}
      </div>
    </div>
  );
}
