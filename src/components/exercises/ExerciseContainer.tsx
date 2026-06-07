'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Exercise } from '@/content/types';
import { useExercise, ExerciseInitialState } from '@/hooks/useExercise';
import { useProgress } from '@/hooks/useProgress';
import dynamic from 'next/dynamic';
import ExerciseFeedback from './ExerciseFeedback';
import ExerciseResults from './ExerciseResults';
import ProgressBar from '@/components/ui/ProgressBar';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

const ExerciseSkeleton = () => (
  <div className="animate-pulse space-y-4">
    <div className="h-6 bg-surface rounded w-3/4" />
    <div className="h-10 bg-surface rounded" />
    <div className="h-10 bg-surface rounded w-1/2" />
  </div>
);

const FillInTheBlank = dynamic(() => import('./FillInTheBlank'), { loading: ExerciseSkeleton });
const MultipleChoice = dynamic(() => import('./MultipleChoice'), { loading: ExerciseSkeleton });
const WordOrder = dynamic(() => import('./WordOrder'), { loading: ExerciseSkeleton });
const SentenceBuilder = dynamic(() => import('./SentenceBuilder'), { loading: ExerciseSkeleton });
const Translation = dynamic(() => import('./Translation'), { loading: ExerciseSkeleton });
const ErrorCorrection = dynamic(() => import('./ErrorCorrection'), { loading: ExerciseSkeleton });
const WritingPrompt = dynamic(() => import('./WritingPrompt'), { loading: ExerciseSkeleton });
const ReadingComprehension = dynamic(() => import('./ReadingComprehension'), { loading: ExerciseSkeleton });
const Speaking = dynamic(() => import('./Speaking'), { loading: ExerciseSkeleton });
const ListeningComprehension = dynamic(() => import('./ListeningComprehension'), { loading: ExerciseSkeleton });

interface ExerciseContainerProps {
  exercises: Exercise[];
  levelId: string;
  topicId: string;
  backUrl: string;
  nextTopic?: { id: string; title: string; levelId: string };
  onComplete?: () => void;
}

function storageKey(levelId: string, topicId: string) {
  return `nederpro_resume_exercise_${levelId}_${topicId}`;
}

function loadSavedSession(
  levelId: string,
  topicId: string,
  maxIndex: number
): ExerciseInitialState | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(storageKey(levelId, topicId));
    if (!raw) return null;
    const parsed: ExerciseInitialState = JSON.parse(raw);
    const idx = parsed.currentIndex ?? 0;
    if (idx <= 0 && (parsed.results?.length ?? 0) === 0) return null;
    if (idx >= maxIndex) return null; // stale — content may have changed
    return parsed;
  } catch {
    return null;
  }
}

export default function ExerciseContainer({
  exercises,
  levelId,
  topicId,
  backUrl,
  nextTopic,
  onComplete,
}: ExerciseContainerProps) {
  const router = useRouter();

  // Lazy-read saved session once on mount
  const [savedSession] = useState<ExerciseInitialState | null>(() =>
    loadSavedSession(levelId, topicId, exercises.length)
  );
  const [showResumeBanner, setShowResumeBanner] = useState(!!savedSession);
  const onCompleteFiredRef = useRef(false);

  const {
    currentExercise,
    currentIndex,
    total,
    state,
    results,
    lastFeedback,
    isComplete,
    isOutOfHearts,
    hearts,
    combo,
    xp,
    submit,
    next,
    reset,
  } = useExercise(exercises, savedSession ?? undefined);

  const { recordExerciseResult } = useProgress();

  // Persist session between exercises (only when idle with at least one result)
  useEffect(() => {
    const key = storageKey(levelId, topicId);
    if (isComplete || isOutOfHearts) {
      localStorage.removeItem(key);
      return;
    }
    if (state !== 'idle' || results.length === 0) return;
    try {
      localStorage.setItem(
        key,
        JSON.stringify({ currentIndex, results, hearts, combo, xp } satisfies ExerciseInitialState)
      );
    } catch {}
  }, [currentIndex, state, results, hearts, combo, xp, isComplete, isOutOfHearts, levelId, topicId]);

  const handleSubmit = (
    correct: boolean,
    userAnswer: string,
    explanation?: string,
    correctAnswer?: string
  ) => {
    setShowResumeBanner(false);
    submit(correct, userAnswer, explanation, correctAnswer);
    recordExerciseResult(levelId, topicId, total, {
      exerciseId: currentExercise?.id || '',
      correct,
      userAnswer,
      timestamp: new Date().toISOString(),
    });
  };

  // Fire onComplete once when the session finishes
  useEffect(() => {
    if (isComplete && !onCompleteFiredRef.current) {
      onCompleteFiredRef.current = true;
      onComplete?.();
    }
  }, [isComplete, onComplete]);

  const handleReset = () => {
    onCompleteFiredRef.current = false;
    localStorage.removeItem(storageKey(levelId, topicId));
    setShowResumeBanner(false);
    reset();
  };

  // Out of hearts screen
  if (isOutOfHearts) {
    return (
      <div className="max-w-lg mx-auto text-center">
        <div className="bg-background rounded-lg border border-border p-8 shadow-sm">
          <div className="flex justify-center gap-2 mb-5">
            {Array.from({ length: 3 }).map((_, i) => (
              <span key={i} className="text-2xl text-border">♥</span>
            ))}
          </div>
          <h2 className="text-xl font-bold text-primary mb-2">No hearts remaining</h2>
          <p className="text-muted text-sm mb-6">
            Review the lesson and try again to reinforce your understanding.
          </p>
          <div className="flex flex-col gap-3">
            <Button className="w-full" onClick={handleReset}>Try Again</Button>
            <Button variant="outline" className="w-full" onClick={() => router.push(backUrl)}>
              Back to Lesson
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Results screen
  if (isComplete) {
    return (
      <ExerciseResults
        results={results}
        totalExercises={total}
        xpEarned={xp}
        onRetry={handleReset}
        onBack={() => router.push(backUrl)}
        nextTopic={nextTopic}
        onNext={nextTopic ? () => router.push(`/levels/${nextTopic.levelId}/${nextTopic.id}`) : undefined}
      />
    );
  }

  if (!currentExercise) return null;

  const exerciseInstruction = currentExercise.instruction || '';
  const progressPercent = Math.round((currentIndex / total) * 100);

  const difficultyVariant =
    currentExercise.difficulty === 'controlled'
      ? 'default'
      : currentExercise.difficulty === 'guided'
      ? 'accent'
      : 'warning';

  return (
    <div>
      {/* Resume banner */}
      {showResumeBanner && (
        <div className="mb-4 rounded-lg bg-warning-light border border-warning/40 px-4 py-3 flex items-center justify-between text-sm">
          <span className="text-warning">
            Resuming from exercise {currentIndex + 1} of {total}
          </span>
          <button
            onClick={handleReset}
            className="text-warning text-xs underline hover:no-underline ml-4 shrink-0"
          >
            Start over
          </button>
        </div>
      )}

      {/* Progress header: hearts · progress · combo + difficulty */}
      <div className="flex items-center justify-between mb-2">
        {/* Hearts */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 3 }).map((_, i) => (
            <span
              key={i}
              className={`text-lg leading-none transition-all duration-300 ${
                i < hearts ? 'text-error' : 'text-border'
              }`}
            >
              ♥
            </span>
          ))}
        </div>

        {/* Combo + difficulty */}
        <div className="flex items-center gap-2">
          {combo >= 2 && (
            <span className="text-xs font-semibold text-accent bg-accent-light px-2 py-0.5 rounded-full">
              {combo} in a row
            </span>
          )}
          <Badge variant={difficultyVariant}>
            {currentExercise.difficulty}
          </Badge>
        </div>
      </div>

      {/* Exercise counter + progress bar */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-xs text-muted tabular-nums whitespace-nowrap">
          {currentIndex + 1} / {total}
        </span>
        <ProgressBar value={progressPercent} size="sm" className="flex-1" />
      </div>

      {/* Exercise content */}
      <div className="bg-background rounded-lg border border-border p-6">
        {currentExercise.content.type === 'fill-in-the-blank' && (
          <FillInTheBlank
            key={currentExercise.id}
            content={currentExercise.content}
            instruction={exerciseInstruction}
            onSubmit={handleSubmit}
            disabled={state === 'submitted'}
          />
        )}

        {currentExercise.content.type === 'multiple-choice' && (
          <MultipleChoice
            key={currentExercise.id}
            content={currentExercise.content}
            instruction={exerciseInstruction}
            onSubmit={handleSubmit}
            disabled={state === 'submitted'}
          />
        )}

        {currentExercise.content.type === 'word-order' && (
          <WordOrder
            key={currentExercise.id}
            content={currentExercise.content}
            instruction={exerciseInstruction}
            onSubmit={handleSubmit}
            disabled={state === 'submitted'}
          />
        )}

        {currentExercise.content.type === 'sentence-builder' && (
          <SentenceBuilder
            key={currentExercise.id}
            content={currentExercise.content}
            instruction={exerciseInstruction}
            onSubmit={handleSubmit}
            disabled={state === 'submitted'}
          />
        )}

        {currentExercise.content.type === 'translation' && (
          <Translation
            key={currentExercise.id}
            content={currentExercise.content}
            instruction={exerciseInstruction}
            onSubmit={handleSubmit}
            disabled={state === 'submitted'}
          />
        )}

        {currentExercise.content.type === 'error-correction' && (
          <ErrorCorrection
            key={currentExercise.id}
            content={currentExercise.content}
            instruction={exerciseInstruction}
            onSubmit={handleSubmit}
            disabled={state === 'submitted'}
          />
        )}

        {currentExercise.content.type === 'writing-prompt' && (
          <WritingPrompt
            key={currentExercise.id}
            content={currentExercise.content}
            instruction={exerciseInstruction}
            onSubmit={handleSubmit}
            disabled={state === 'submitted'}
          />
        )}

        {currentExercise.content.type === 'reading-comprehension' && (
          <ReadingComprehension
            key={currentExercise.id}
            content={currentExercise.content}
            instruction={exerciseInstruction}
            onSubmit={handleSubmit}
            disabled={state === 'submitted'}
          />
        )}

        {currentExercise.content.type === 'speaking' && (
          <Speaking
            key={currentExercise.id}
            content={currentExercise.content}
            instruction={exerciseInstruction}
            onSubmit={handleSubmit}
            disabled={state === 'submitted'}
          />
        )}

        {currentExercise.content.type === 'listening-comprehension' && (
          <ListeningComprehension
            key={currentExercise.id}
            content={currentExercise.content}
            instruction={exerciseInstruction}
            onSubmit={handleSubmit}
            disabled={state === 'submitted'}
          />
        )}

        {/* Feedback */}
        {state === 'submitted' && lastFeedback && (
          <ExerciseFeedback
            correct={lastFeedback.correct}
            correctAnswer={lastFeedback.correctAnswer}
            explanation={lastFeedback.explanation}
            combo={combo}
            onNext={next}
          />
        )}
      </div>
    </div>
  );
}
