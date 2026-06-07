'use client';

import { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { readingExercises, levelColors } from '@/data/reading-exercises';
import { cn } from '@/lib/utils';
import { useActivityProgress } from '@/hooks/useActivityProgress';

type Stage = 'reading' | 'results';

function readingResumeKey(id: string) { return `nederpro_resume_reading_${id}`; }

function saveReadingResume(id: string, answers: (number | null)[], elapsed: number) {
  try { localStorage.setItem(readingResumeKey(id), JSON.stringify({ answers, elapsed })); } catch { /* ignore */ }
}

function loadReadingResume(id: string): { answers: (number | null)[]; elapsed: number } | null {
  try {
    const raw = localStorage.getItem(readingResumeKey(id));
    if (!raw) return null;
    const d = JSON.parse(raw);
    if (!Array.isArray(d.answers)) return null;
    return d;
  } catch { return null; }
}

function clearReadingResume(id: string) {
  try { localStorage.removeItem(readingResumeKey(id)); } catch { /* ignore */ }
}

export default function ReadingExercisePage() {
  const params = useParams();
  const router = useRouter();
  const exerciseId = params.exerciseId as string;
  const exercise = readingExercises.find((e) => e.id === exerciseId);

  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [stage, setStage] = useState<Stage>('reading');
  const [elapsed, setElapsed] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [hasResume, setHasResume] = useState(false);
  const { completeReading } = useActivityProgress();
  const savedRef = useRef(false);

  useEffect(() => {
    if (!exercise) { router.push('/reading'); return; }
    const saved = loadReadingResume(exercise.id);
    if (saved && saved.answers.some((a) => a !== null)) {
      setAnswers(saved.answers);
      setElapsed(saved.elapsed);
      setHasResume(true);
      setTimerActive(false);
    } else {
      setAnswers(new Array(exercise.questions.length).fill(null));
      setTimerActive(true);
    }
  }, [exercise, router]);

  // Timer
  useEffect(() => {
    if (!timerActive || stage === 'results') return;
    const interval = setInterval(() => setElapsed((s) => s + 1), 1000);
    return () => clearInterval(interval);
  }, [timerActive, stage]);

  // Save progress when answers change (mid-exercise only)
  useEffect(() => {
    if (stage !== 'reading' || !exercise || !answers.length) return;
    saveReadingResume(exercise.id, answers, elapsed);
  }, [answers]); // eslint-disable-line react-hooks/exhaustive-deps

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60).toString().padStart(2, '0');
    const sec = (s % 60).toString().padStart(2, '0');
    return `${m}:${sec}`;
  };

  const handleAnswer = (qi: number, oi: number) => {
    if (stage === 'results') return;
    setAnswers((prev) => {
      const next = [...prev];
      next[qi] = oi;
      return next;
    });
  };

  const handleSubmit = () => {
    if (exercise) clearReadingResume(exercise.id);
    setStage('results');
    setTimerActive(false);
    if (exercise && !savedRef.current) {
      savedRef.current = true;
      const s = answers.filter((a, i) => a === exercise.questions[i].answer).length;
      completeReading(exercise.id, s);
    }
  };

  const handleRetry = () => {
    if (!exercise) return;
    clearReadingResume(exercise.id);
    savedRef.current = false;
    setAnswers(new Array(exercise.questions.length).fill(null));
    setStage('reading');
    setElapsed(0);
    setTimerActive(true);
    setHasResume(false);
  };

  if (!exercise) return null;

  const score =
    stage === 'results'
      ? answers.filter((a, i) => a === exercise.questions[i].answer).length
      : 0;

  const allAnswered = answers.every((a) => a !== null);

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      {/* Back */}
      <Link
        href="/reading"
        className="inline-flex items-center gap-1 text-sm text-muted hover:text-primary transition-colors mb-6"
      >
        ← Back to Reading
      </Link>

      {/* Header */}
      <div className="flex items-start justify-between mb-2">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className={cn('text-xs font-bold px-2 py-0.5 rounded-full', levelColors[exercise.level])}>
              {exercise.level}
            </span>
            <span className="text-xs text-muted">{exercise.topic}</span>
          </div>
          <h1 className="text-2xl font-bold text-primary">{exercise.title}</h1>
        </div>
        {/* Timer */}
        <div className="flex flex-col items-end gap-1">
          <span className="font-mono text-lg font-semibold text-primary tabular-nums">
            {formatTime(elapsed)}
          </span>
          <button
            onClick={() => setTimerActive((v) => !v)}
            className="text-xs text-muted hover:text-primary transition-colors"
          >
            {timerActive ? 'Pause' : 'Resume'}
          </button>
        </div>
      </div>
      <p className="text-muted mb-6">{exercise.description}</p>

      {/* Resume notice */}
      {hasResume && (
        <div className="rounded-xl border border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-900/20 p-4 mb-5 flex items-center justify-between gap-3">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            📌 Continuing from where you left off — {answers.filter((a) => a !== null).length}/{exercise.questions.length} answered
          </p>
          <button
            onClick={handleRetry}
            className="text-xs text-amber-700 dark:text-amber-300 underline hover:no-underline whitespace-nowrap"
          >
            Start over
          </button>
        </div>
      )}

      {/* Text */}
      <div className="rounded-2xl border border-border bg-surface p-6 mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm font-semibold text-primary">📖 Tekst</span>
        </div>
        <div className="text-sm text-primary leading-7 whitespace-pre-wrap font-[inherit]">
          {exercise.text}
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-5">
        <h2 className="font-semibold text-primary">Vragen</h2>

        {exercise.questions.map((q, qi) => {
          const userAnswer = answers[qi];
          const correct = exercise.questions[qi].answer;
          const isCorrect = userAnswer === correct;

          return (
            <div key={qi} className="rounded-xl border border-border bg-surface p-5">
              <p className="font-medium text-primary mb-3">
                {qi + 1}. {q.question}
              </p>
              <div className="space-y-2">
                {q.options.map((opt, oi) => {
                  let optStyle =
                    'border-border text-primary hover:border-accent hover:bg-accent-light cursor-pointer';
                  if (stage === 'results') {
                    if (oi === correct) {
                      optStyle =
                        'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 cursor-default';
                    } else if (oi === userAnswer && !isCorrect) {
                      optStyle =
                        'border-red-400 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 cursor-default';
                    } else {
                      optStyle = 'border-border text-muted opacity-60 cursor-default';
                    }
                  } else if (userAnswer === oi) {
                    optStyle =
                      'border-accent bg-accent-light text-accent cursor-pointer';
                  }

                  return (
                    <button
                      key={oi}
                      onClick={() => handleAnswer(qi, oi)}
                      disabled={stage === 'results'}
                      className={cn(
                        'w-full text-left px-4 py-2.5 rounded-lg border text-sm transition-all duration-150',
                        optStyle
                      )}
                    >
                      <span className="font-semibold mr-2">{['A', 'B', 'C', 'D'][oi]}.</span>
                      {opt}
                    </button>
                  );
                })}
              </div>

              {stage === 'results' && (
                <div
                  className={cn(
                    'mt-3 text-xs rounded-lg px-3 py-2',
                    isCorrect
                      ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300'
                      : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300'
                  )}
                >
                  {isCorrect ? '✓ Correct! ' : '✗ Incorrect. '}
                  {q.explanation}
                </div>
              )}
            </div>
          );
        })}

        {/* Submit / Results */}
        {stage === 'results' ? (
          <div className="rounded-xl border border-border bg-surface p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-1">
              {score}/{exercise.questions.length}
            </div>
            <div className="text-sm text-muted mb-1">
              {score === exercise.questions.length
                ? '🎉 Perfect score!'
                : score >= exercise.questions.length / 2
                ? '👍 Good effort!'
                : '💪 Keep practising!'}
            </div>
            <div className="text-xs text-muted mb-5">
              Time: {formatTime(elapsed)}
            </div>
            <div className="flex gap-3 justify-center">
              <button
                onClick={handleRetry}
                className="px-5 py-2.5 rounded-xl border border-border text-sm text-muted hover:bg-surface-hover transition-colors"
              >
                Try again
              </button>
              <Link
                href="/reading"
                className="px-5 py-2.5 rounded-xl bg-accent hover:bg-accent-hover text-white text-sm font-semibold transition-colors"
              >
                More exercises →
              </Link>
            </div>
          </div>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!allAnswered}
            className={cn(
              'w-full py-3 rounded-xl font-semibold text-sm transition-colors',
              allAnswered
                ? 'bg-accent hover:bg-accent-hover text-white'
                : 'bg-muted/20 text-muted cursor-not-allowed'
            )}
          >
            {allAnswered
              ? 'Check answers'
              : `Answer all questions (${answers.filter((a) => a !== null).length}/${exercise.questions.length})`}
          </button>
        )}
      </div>
    </div>
  );
}
