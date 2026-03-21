'use client';

import Link from 'next/link';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Card from '@/components/ui/Card';
import ProgressBar from '@/components/ui/ProgressBar';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { useProgress } from '@/hooks/useProgress';
import { levels } from '@/content/levels';
import { getTopic } from '@/lib/content-loader';
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

  // Find the most recent in-progress topic to surface as "Continue Learning"
  const continueTopic = (() => {
    for (const level of levels) {
      const levelData = progress.levels[level.id];
      if (!levelData) continue;
      const inProgressId = level.topicIds.find((t) => levelData.topicsInProgress.includes(t));
      if (inProgressId) {
        const topic = getTopic(level.id, inProgressId);
        return { levelId: level.id, topicId: inProgressId, levelName: level.shortName, topicTitle: topic?.title ?? inProgressId };
      }
    }
    // Fall back to next not-started topic in the earliest active level
    for (const level of levels) {
      const levelData = progress.levels[level.id];
      if (!levelData) continue;
      const nextId = level.topicIds.find((t) => !levelData.topicsCompleted.includes(t));
      if (nextId) {
        const topic = getTopic(level.id, nextId);
        return { levelId: level.id, topicId: nextId, levelName: level.shortName, topicTitle: topic?.title ?? nextId };
      }
    }
    return null;
  })();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <Breadcrumb items={[{ label: 'Progress' }]} />

      <h1 className="text-3xl font-bold text-primary mb-6">Your Progress</h1>

      {/* Continue Learning CTA */}
      {continueTopic && (
        <Link href={`/levels/${continueTopic.levelId}/${continueTopic.topicId}`}>
          <div className="mb-8 rounded-2xl border border-accent/30 bg-accent-light px-6 py-5 flex items-center justify-between gap-4 hover:border-accent/60 transition-colors cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-0.5">Continue Learning</p>
                <p className="font-semibold text-primary text-sm">
                  {continueTopic.levelName} · {continueTopic.topicTitle}
                </p>
              </div>
            </div>
            <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>
      )}

      {/* CEFR Progress Chart */}
      <Card className="mb-8">
        <h2 className="text-base font-semibold text-primary mb-5">CEFR Level Progress</h2>
        <div className="flex items-end gap-3 h-36">
          {levels.filter((l) => l.topicIds.length > 0).map((level) => {
            const pct = getLevelCompletionPercent(progress, level.id, level.topicIds.length);
            const barHeight = Math.max(pct, 2);
            return (
              <div key={level.id} className="flex-1 flex flex-col items-center gap-1.5">
                <span className="text-xs font-semibold text-accent">{pct > 0 ? `${pct}%` : ''}</span>
                <div className="w-full rounded-t-md bg-surface relative" style={{ height: '96px' }}>
                  <div
                    className="absolute bottom-0 left-0 right-0 rounded-t-md bg-accent transition-all duration-700"
                    style={{ height: `${barHeight}%` }}
                  />
                </div>
                <span className="text-xs font-bold text-primary">{level.shortName}</span>
              </div>
            );
          })}
        </div>
        <p className="text-xs text-muted mt-4">Topics completed per CEFR level</p>
      </Card>

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

      {/* Study streak + community */}
      <div className="grid gap-4 sm:grid-cols-2 mb-8">
        {progress.stats.lastStudyDate && (
          <Card>
            <div className="flex items-center gap-4">
              <span className="text-4xl">🔥</span>
              <div>
                <p className="text-3xl font-extrabold text-primary leading-none">
                  {progress.stats.currentStreak}
                  <span className="text-base font-medium text-muted ml-1">
                    day{progress.stats.currentStreak !== 1 ? 's' : ''}
                  </span>
                </p>
                <p className="text-xs text-muted mt-0.5">Current streak · last studied {formatDate(progress.stats.lastStudyDate)}</p>
              </div>
            </div>
            {progress.stats.longestStreak > 0 && (
              <p className="text-xs text-muted mt-3 pt-3 border-t border-border">
                🏆 Best streak: <span className="font-semibold text-primary">{progress.stats.longestStreak} days</span>
              </p>
            )}
          </Card>
        )}
        <Card className="flex flex-col justify-between">
          <div>
            <p className="text-sm font-semibold text-primary mb-1">Join the community</p>
            <p className="text-xs text-muted leading-relaxed">Ask questions, share progress, and learn alongside other Dutch students.</p>
          </div>
          <a
            href="https://discord.gg/nederpro"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#5865F2] text-white text-sm font-medium hover:bg-[#4752c4] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            Join Discord
          </a>
        </Card>
      </div>

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
