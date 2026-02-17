'use client';

import { useRouter } from 'next/navigation';
import { Exercise } from '@/content/types';
import { useExercise } from '@/hooks/useExercise';
import { useProgress } from '@/hooks/useProgress';
import dynamic from 'next/dynamic';
import ExerciseFeedback from './ExerciseFeedback';
import ExerciseResults from './ExerciseResults';
import ProgressBar from '@/components/ui/ProgressBar';
import Badge from '@/components/ui/Badge';

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

interface ExerciseContainerProps {
  exercises: Exercise[];
  levelId: string;
  topicId: string;
  backUrl: string;
}

export default function ExerciseContainer({
  exercises,
  levelId,
  topicId,
  backUrl,
}: ExerciseContainerProps) {
  const router = useRouter();
  const {
    currentExercise,
    currentIndex,
    total,
    state,
    results,
    lastFeedback,
    isComplete,
    submit,
    next,
    reset,
  } = useExercise(exercises);

  const { recordExerciseResult } = useProgress();

  const handleSubmit = (
    correct: boolean,
    userAnswer: string,
    explanation?: string,
    correctAnswer?: string
  ) => {
    submit(correct, userAnswer, explanation, correctAnswer);
    recordExerciseResult(levelId, topicId, total, {
      exerciseId: currentExercise?.id || '',
      correct,
      userAnswer,
      timestamp: new Date().toISOString(),
    });
  };

  if (isComplete) {
    return (
      <ExerciseResults
        results={results}
        totalExercises={total}
        onRetry={reset}
        onBack={() => router.push(backUrl)}
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
      {/* Progress header */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-muted">
          Exercise {currentIndex + 1} of {total}
        </span>
        <Badge variant={difficultyVariant}>
          {currentExercise.difficulty}
        </Badge>
      </div>
      <ProgressBar value={progressPercent} size="sm" className="mb-6" />

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

        {/* Feedback */}
        {state === 'submitted' && lastFeedback && (
          <ExerciseFeedback
            correct={lastFeedback.correct}
            correctAnswer={lastFeedback.correctAnswer}
            explanation={lastFeedback.explanation}
            onNext={next}
          />
        )}
      </div>
    </div>
  );
}
