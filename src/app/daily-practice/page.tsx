'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useDailyPractice, DailyItem, GrammarDailyItem, VocabDailyItem } from '@/hooks/useDailyPractice';
import { useProgress } from '@/hooks/useProgress';
import { useVocabProgress } from '@/hooks/useVocabProgress';
import { useAuth } from '@/contexts/AuthContext';
import ProgressBar from '@/components/ui/ProgressBar';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import SubscriptionGate from '@/components/ui/SubscriptionGate';

// Dynamically load exercise components
const MultipleChoice = dynamic(() => import('@/components/exercises/MultipleChoice'));
const FillInTheBlank = dynamic(() => import('@/components/exercises/FillInTheBlank'));
const ErrorCorrection = dynamic(() => import('@/components/exercises/ErrorCorrection'));
const WordOrder = dynamic(() => import('@/components/exercises/WordOrder'));
const Translation = dynamic(() => import('@/components/exercises/Translation'));
const VocabItem = dynamic(() => import('@/components/daily-practice/VocabItem'));

// ---------------------------------------------------------------------------
// Screen: Loading skeleton
// ---------------------------------------------------------------------------
function LoadingSkeleton() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 animate-pulse">
      <div className="h-6 bg-surface rounded w-48 mb-4" />
      <div className="h-10 bg-surface rounded w-64 mb-8" />
      <div className="h-32 bg-surface rounded mb-4" />
      <div className="h-32 bg-surface rounded" />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Screen: Setup
// ---------------------------------------------------------------------------
interface SetupScreenProps {
  grammarCount: number;
  vocabCount: number;
  streak: number;
  doneToday: boolean;
  onStart: () => void;
}

function SetupScreen({ grammarCount, vocabCount, streak, doneToday, onStart }: SetupScreenProps) {
  const total = grammarCount + vocabCount;
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="mb-8">
        <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Daily Practice</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-primary mb-3">
          {doneToday ? "Today's session is complete ✅" : "Today's Practice"}
        </h1>
        <p className="text-muted text-base">
          {doneToday
            ? "Great work! You've already completed today's practice. Come back tomorrow to keep your streak going."
            : 'A focused mix of grammar and vocabulary — done in under 5 minutes.'}
        </p>
      </div>

      {/* Streak badge */}
      {streak > 0 && (
        <div className="flex items-center gap-3 mb-8 rounded-xl border border-warning/30 bg-warning/5 px-5 py-4">
          <span className="text-3xl">🔥</span>
          <div>
            <p className="font-bold text-primary">
              {streak} day streak
            </p>
            <p className="text-sm text-muted">Keep it up — practice daily to maintain your streak!</p>
          </div>
        </div>
      )}

      {/* Session breakdown */}
      {!doneToday && (
        <div className="rounded-xl border border-border bg-background p-6 mb-8">
          <h2 className="font-semibold text-primary mb-4">Today's {total} exercises</h2>
          <div className="flex gap-4 flex-wrap">
            {vocabCount > 0 && (
              <div className="flex items-center gap-2 text-sm text-primary-light">
                <span className="w-8 h-8 rounded-lg bg-accent-light flex items-center justify-center text-base">📖</span>
                <span><strong className="text-primary">{vocabCount}</strong> vocabulary</span>
              </div>
            )}
            {grammarCount > 0 && (
              <div className="flex items-center gap-2 text-sm text-primary-light">
                <span className="w-8 h-8 rounded-lg bg-accent-light flex items-center justify-center text-base">📝</span>
                <span><strong className="text-primary">{grammarCount}</strong> grammar</span>
              </div>
            )}
          </div>
          <p className="text-xs text-muted mt-4">
            ⏱ Estimated time: ~3–5 minutes
          </p>
        </div>
      )}

      {/* Action buttons */}
      <div className="flex flex-wrap gap-3">
        {doneToday ? (
          <>
            <Link href="/vocabulary/review">
              <Button variant="outline">Review vocabulary →</Button>
            </Link>
            <Link href="/levels">
              <Button variant="outline">Continue lessons →</Button>
            </Link>
          </>
        ) : (
          <>
            <Button onClick={onStart} size="lg">Start Practice →</Button>
            <Link href="/levels">
              <Button size="lg" variant="outline">Go to lessons</Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Screen: Session
// ---------------------------------------------------------------------------
interface SessionScreenProps {
  items: DailyItem[];
  onComplete: (correctCount: number) => void;
}

type ItemState = 'idle' | 'submitted';

function GrammarItemRenderer({
  item,
  state,
  onSubmit,
}: {
  item: GrammarDailyItem;
  state: ItemState;
  onSubmit: (correct: boolean) => void;
}) {
  const handleSubmit = (correct: boolean, _userAnswer: string) => {
    onSubmit(correct);
  };

  const instruction = item.exercise.instruction ?? '';
  const content = item.exercise.content;

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-surface px-2 py-0.5 rounded-full border border-border">
          Grammar · {item.topicTitle}
        </span>
        <Badge variant="default">{item.exercise.difficulty}</Badge>
      </div>

      <div className="bg-background rounded-lg border border-border p-5">
        {content.type === 'multiple-choice' && (
          <MultipleChoice
            key={item.exercise.id}
            content={content}
            instruction={instruction}
            onSubmit={handleSubmit}
            disabled={state === 'submitted'}
          />
        )}
        {content.type === 'fill-in-the-blank' && (
          <FillInTheBlank
            key={item.exercise.id}
            content={content}
            instruction={instruction}
            onSubmit={handleSubmit}
            disabled={state === 'submitted'}
          />
        )}
        {content.type === 'error-correction' && (
          <ErrorCorrection
            key={item.exercise.id}
            content={content}
            instruction={instruction}
            onSubmit={handleSubmit}
            disabled={state === 'submitted'}
          />
        )}
        {content.type === 'word-order' && (
          <WordOrder
            key={item.exercise.id}
            content={content}
            instruction={instruction}
            onSubmit={handleSubmit}
            disabled={state === 'submitted'}
          />
        )}
        {content.type === 'translation' && (
          <Translation
            key={item.exercise.id}
            content={content}
            instruction={instruction}
            onSubmit={handleSubmit}
            disabled={state === 'submitted'}
          />
        )}
      </div>
    </div>
  );
}

function SessionScreen({ items, onComplete }: SessionScreenProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemState, setItemState] = useState<ItemState>('idle');
  const [lastCorrect, setLastCorrect] = useState<boolean | null>(null);
  const [correctCount, setCorrectCount] = useState(0);

  const currentItem = items[currentIndex];
  const total = items.length;
  const progressPercent = Math.round((currentIndex / total) * 100);

  const handleItemSubmit = useCallback((correct: boolean) => {
    setItemState('submitted');
    setLastCorrect(correct);
    if (correct) setCorrectCount((c) => c + 1);
  }, []);

  const handleNext = useCallback(() => {
    if (currentIndex + 1 >= total) {
      onComplete(correctCount + (lastCorrect ? 1 : 0));
    } else {
      setCurrentIndex((i) => i + 1);
      setItemState('idle');
      setLastCorrect(null);
    }
  }, [currentIndex, total, correctCount, lastCorrect, onComplete]);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
      {/* Progress header */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-muted font-medium">
          Exercise {currentIndex + 1} of {total}
        </span>
        <span className="text-sm font-semibold text-accent">
          🔥 Daily Practice
        </span>
      </div>
      <ProgressBar value={progressPercent} size="sm" className="mb-8" />

      {/* Current item */}
      {currentItem.kind === 'vocab' && (
        <VocabItem
          key={currentIndex}
          word={(currentItem as VocabDailyItem).word}
          categoryId={(currentItem as VocabDailyItem).categoryId}
          direction={(currentItem as VocabDailyItem).direction}
          onSubmit={handleItemSubmit}
          disabled={itemState === 'submitted'}
          seed={currentIndex * 1000 + currentItem.word.dutch.charCodeAt(0)}
        />
      )}
      {currentItem.kind === 'grammar' && (
        <GrammarItemRenderer
          key={currentIndex}
          item={currentItem as GrammarDailyItem}
          state={itemState}
          onSubmit={handleItemSubmit}
        />
      )}

      {/* Next button after submit */}
      {itemState === 'submitted' && (
        <div className={`mt-6 rounded-lg px-5 py-4 border flex items-center justify-between gap-4 ${
          lastCorrect
            ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700'
            : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700'
        }`}>
          <span className={`font-semibold text-sm ${lastCorrect ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'}`}>
            {lastCorrect ? '✓ Correct!' : '✗ Not quite right'}
          </span>
          <Button onClick={handleNext} size="sm">
            {currentIndex + 1 >= total ? 'See Results →' : 'Next →'}
          </Button>
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Screen: Results
// ---------------------------------------------------------------------------
interface ResultsScreenProps {
  correctCount: number;
  total: number;
  streak: number;
  onRetry: () => void;
}

function ResultsScreen({ correctCount, total, streak, onRetry }: ResultsScreenProps) {
  const score = Math.round((correctCount / total) * 100);

  const message =
    score === 100
      ? 'Perfect score! Outstanding work! 🏆'
      : score >= 80
      ? 'Excellent! Keep up the great work! 🌟'
      : score >= 60
      ? 'Good effort! Practice makes perfect. 💪'
      : 'Keep going — every session builds your Dutch! 🇳🇱';

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 text-center">
      {/* Score circle */}
      <div className="w-28 h-28 rounded-full border-4 border-accent flex flex-col items-center justify-center mx-auto mb-6">
        <span className="text-3xl font-extrabold text-accent">{score}%</span>
        <span className="text-xs text-muted">{correctCount}/{total}</span>
      </div>

      <h1 className="text-2xl sm:text-3xl font-extrabold text-primary mb-2">Practice Complete!</h1>
      <p className="text-muted mb-8">{message}</p>

      {/* Streak */}
      {streak > 0 && (
        <div className="flex items-center justify-center gap-3 mb-8 rounded-xl border border-warning/30 bg-warning/5 px-5 py-4 max-w-xs mx-auto">
          <span className="text-2xl">🔥</span>
          <p className="font-bold text-primary">{streak} day streak!</p>
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-wrap gap-3 justify-center">
        <Button onClick={onRetry}>Practice Again</Button>
        <Link href="/vocabulary/review">
          <Button variant="outline">Review Vocabulary</Button>
        </Link>
        <Link href="/levels">
          <Button variant="outline">Go to Lessons</Button>
        </Link>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main page
// ---------------------------------------------------------------------------

type Screen = 'setup' | 'session' | 'results';

export default function DailyPracticePage() {
  const { items, grammarCount, vocabCount, doneToday, streak, isLoaded } = useDailyPractice();
  const { markDailyPracticeDone, recordExerciseResult } = useProgress();
  const { recordSRSResult, enqueueForSRS } = useVocabProgress();
  const { isSubscribed, isLoading: authLoading } = useAuth();

  const [screen, setScreen] = useState<Screen>('setup');
  const [finalCorrect, setFinalCorrect] = useState(0);

  const handleStart = () => setScreen('session');

  const handleComplete = useCallback((correctCount: number) => {
    setFinalCorrect(correctCount);

    // Mark daily practice done + update streak
    markDailyPracticeDone();

    // Record SRS results for vocab items
    for (const item of items) {
      if (item.kind === 'vocab') {
        const vocabItem = item as VocabDailyItem;
        enqueueForSRS(vocabItem.categoryId, vocabItem.word.dutch);
        // We don't have per-item correctness here at session level,
        // so vocab SRS gets recorded during actual vocab practice sessions
      }
    }

    setScreen('results');
  }, [items, markDailyPracticeDone, enqueueForSRS, recordExerciseResult]);

  const handleRetry = () => {
    setScreen('session');
    setFinalCorrect(0);
  };

  if (!isLoaded) return <LoadingSkeleton />;

  if (!authLoading && !isSubscribed) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        <SubscriptionGate feature="daily practice" />
      </div>
    );
  }

  if (screen === 'setup' || (doneToday && screen !== 'session' && screen !== 'results')) {
    return (
      <SetupScreen
        grammarCount={grammarCount}
        vocabCount={vocabCount}
        streak={streak}
        doneToday={doneToday && screen === 'setup'}
        onStart={handleStart}
      />
    );
  }

  if (screen === 'session') {
    return (
      <SessionScreen
        items={items}
        onComplete={handleComplete}
      />
    );
  }

  return (
    <ResultsScreen
      correctCount={finalCorrect}
      total={items.length}
      streak={streak}
      onRetry={handleRetry}
    />
  );
}
