'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useDailyPractice } from '@/hooks/useDailyPractice';
import { useProgress } from '@/hooks/useProgress';
import { useAuth } from '@/contexts/AuthContext';
import ExerciseContainer from '@/components/exercises/ExerciseContainer';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import SubscriptionGate from '@/components/ui/SubscriptionGate';

// ---------------------------------------------------------------------------
// Loading skeleton
// ---------------------------------------------------------------------------
function LoadingSkeleton() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 animate-pulse">
      <div className="h-4 bg-surface rounded w-36 mb-4" />
      <div className="h-8 bg-surface rounded w-72 mb-8" />
      <div className="h-40 bg-surface rounded mb-4" />
      <div className="h-12 bg-surface rounded w-48" />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Setup screen
// ---------------------------------------------------------------------------
interface SetupScreenProps {
  levelId: string;
  levelShortName: string;
  topicId: string;
  topicTitle: string;
  topicSubtitle?: string;
  grammarTip: string;
  exerciseCount: number;
  streak: number;
  doneToday: boolean;
  onStart: () => void;
}

function SetupScreen({
  levelId,
  levelShortName,
  topicId,
  topicTitle,
  topicSubtitle,
  grammarTip,
  exerciseCount,
  streak,
  doneToday,
  onStart,
}: SetupScreenProps) {
  const estMinutes = Math.max(3, Math.ceil(exerciseCount * 0.6));

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
      <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
        {doneToday ? "Today's lesson — complete" : "Today's Grammar Lesson"}
      </p>

      {/* Topic card */}
      <div className="rounded-2xl border border-border bg-background p-6 mb-6 shadow-sm">
        <div className="flex items-start gap-3 mb-4">
          <Badge variant="accent">{levelShortName}</Badge>
          {doneToday && (
            <Badge variant="success">Done ✓</Badge>
          )}
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-primary mb-1">
          {topicTitle}
        </h1>
        {topicSubtitle && (
          <p className="text-muted text-sm mb-0">{topicSubtitle}</p>
        )}

        {/* Grammar tip */}
        {grammarTip && (
          <div className="mt-5 pt-5 border-t border-border">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1.5">
              The Rule
            </p>
            <p className="text-sm text-primary-light leading-relaxed">{grammarTip}</p>
          </div>
        )}

        {/* Meta */}
        <div className="mt-5 pt-5 border-t border-border flex items-center gap-5 text-sm text-muted">
          <span>{exerciseCount} exercises</span>
          <span>~{estMinutes} min</span>
        </div>
      </div>

      {/* Streak */}
      {streak > 0 && (
        <div className="flex items-center gap-3 mb-6 rounded-xl border border-warning/30 bg-warning/5 px-5 py-4">
          <span className="text-2xl leading-none">🔥</span>
          <div>
            <p className="font-bold text-primary text-sm">{streak} day streak — keep it going!</p>
            <p className="text-xs text-muted mt-0.5">Practice every day to maintain your streak.</p>
          </div>
        </div>
      )}

      {/* CTA */}
      {doneToday ? (
        <div className="flex flex-wrap gap-3">
          <Link href={`/levels/${levelId}/${topicId}`}>
            <Button variant="outline">Read the full lesson →</Button>
          </Link>
          <Link href="/levels">
            <Button variant="outline">Browse all topics</Button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-wrap gap-3">
          <Button size="lg" onClick={onStart}>
            Start lesson →
          </Button>
          <Link href={`/levels/${levelId}/${topicId}`}>
            <Button size="lg" variant="outline">Read lesson first</Button>
          </Link>
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main page
// ---------------------------------------------------------------------------

export default function DailyPracticePage() {
  const {
    levelId,
    levelShortName,
    topicId,
    topicTitle,
    topicSubtitle,
    grammarTip,
    exercises,
    doneToday,
    streak,
    isLoaded,
  } = useDailyPractice();

  const { markDailyPracticeDone } = useProgress();
  const { isSubscribed, isLoading: authLoading } = useAuth();
  const [screen, setScreen] = useState<'setup' | 'lesson'>('setup');

  if (!isLoaded) return <LoadingSkeleton />;

  if (!authLoading && !isSubscribed) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        <SubscriptionGate feature="daily practice" />
      </div>
    );
  }

  if (screen === 'setup') {
    return (
      <SetupScreen
        levelId={levelId}
        levelShortName={levelShortName}
        topicId={topicId}
        topicTitle={topicTitle}
        topicSubtitle={topicSubtitle}
        grammarTip={grammarTip}
        exerciseCount={exercises.length}
        streak={streak}
        doneToday={doneToday}
        onStart={() => setScreen('lesson')}
      />
    );
  }

  // Lesson screen — ExerciseContainer handles all exercises, hearts, XP, combo, and resume
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      {/* Lesson header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="accent">{levelShortName}</Badge>
          <span className="text-xs text-muted font-medium">Daily Lesson</span>
        </div>
        <h1 className="text-xl font-bold text-primary">{topicTitle}</h1>
        {topicSubtitle && (
          <p className="text-sm text-muted mt-0.5">{topicSubtitle}</p>
        )}
      </div>

      <ExerciseContainer
        exercises={exercises}
        levelId={levelId}
        topicId={topicId}
        backUrl="/daily-practice"
        onComplete={markDailyPracticeDone}
      />
    </div>
  );
}
