'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { listeningExercises, levelColors } from '@/data/listening-exercises';
import { cn } from '@/lib/utils';
import { useActivityProgress } from '@/hooks/useActivityProgress';

type Stage = 'pre' | 'playing' | 'questions' | 'results';

function listeningResumeKey(id: string) { return `nederpro_resume_listening_${id}`; }

function saveListeningResume(id: string, answers: (number | null)[]) {
  try { localStorage.setItem(listeningResumeKey(id), JSON.stringify({ answers })); } catch { /* ignore */ }
}

function loadListeningResume(id: string): { answers: (number | null)[] } | null {
  try {
    const raw = localStorage.getItem(listeningResumeKey(id));
    if (!raw) return null;
    const d = JSON.parse(raw);
    if (!Array.isArray(d.answers)) return null;
    return d;
  } catch { return null; }
}

function clearListeningResume(id: string) {
  try { localStorage.removeItem(listeningResumeKey(id)); } catch { /* ignore */ }
}

export default function ListeningExercisePage() {
  const params = useParams();
  const router = useRouter();
  const exerciseId = params.exerciseId as string;

  const exercise = listeningExercises.find((e) => e.id === exerciseId);

  const [stage, setStage] = useState<Stage>('pre');
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [hasResume, setHasResume] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [playCount, setPlayCount] = useState(0);
  const [progress, setProgress] = useState(0); // 0-100 for progress bar
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);
  const { completeListening } = useActivityProgress();
  const savedRef = useRef(false);

  useEffect(() => {
    if (!exercise) { router.push('/listening'); return; }
    const saved = loadListeningResume(exercise.id);
    if (saved && saved.answers.some((a) => a !== null)) {
      setAnswers(saved.answers);
      setStage('questions');
      setHasResume(true);
    }
  }, [exercise, router]);

  useEffect(() => {
    return () => {
      window.speechSynthesis?.cancel();
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, []);

  const estimateDuration = useCallback((text: string) => {
    // ~120 words per minute at rate 0.85 → ~102 wpm, average word ~5 chars
    const words = text.split(/\s+/).length;
    return (words / 1.7) * 1000; // ms
  }, []);

  const playAudio = useCallback(() => {
    if (!exercise) return;
    window.speechSynthesis.cancel();
    if (progressRef.current) clearInterval(progressRef.current);

    const utter = new SpeechSynthesisUtterance(exercise.transcript);
    const voices = window.speechSynthesis.getVoices();
    const dutchVoice = voices.find((v) => v.lang.startsWith('nl'));
    if (dutchVoice) utter.voice = dutchVoice;
    utter.lang = 'nl-NL';
    utter.rate = 0.85;
    utterRef.current = utter;

    setStage('playing');
    setProgress(0);

    const duration = estimateDuration(exercise.transcript);
    const start = Date.now();
    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / duration) * 100, 99);
      setProgress(pct);
    }, 200);

    utter.onend = () => {
      if (progressRef.current) clearInterval(progressRef.current);
      setProgress(100);
      setPlayCount((c) => c + 1);
      setTimeout(() => {
        setStage('questions');
        setAnswers(new Array(exercise.questions.length).fill(null));
        setProgress(0);
      }, 400);
    };

    utter.onerror = () => {
      if (progressRef.current) clearInterval(progressRef.current);
      setStage('questions');
      setAnswers(new Array(exercise.questions.length).fill(null));
    };

    window.speechSynthesis.speak(utter);
  }, [exercise, estimateDuration]);

  const stopAudio = useCallback(() => {
    window.speechSynthesis.cancel();
    if (progressRef.current) clearInterval(progressRef.current);
    if (exercise) {
      setStage('questions');
      setAnswers(new Array(exercise.questions.length).fill(null));
      setProgress(0);
    }
  }, [exercise]);

  const replayAudio = useCallback(() => {
    if (exercise) clearListeningResume(exercise.id);
    savedRef.current = false;
    setHasResume(false);
    setStage('pre');
    setShowTranscript(false);
    setTimeout(playAudio, 100);
  }, [playAudio, exercise]);

  const handleAnswer = (qIdx: number, optIdx: number) => {
    if (stage === 'results') return;
    setAnswers((prev) => {
      const next = [...prev];
      next[qIdx] = optIdx;
      if (exercise) saveListeningResume(exercise.id, next);
      return next;
    });
  };

  const handleSubmit = () => {
    if (exercise) clearListeningResume(exercise.id);
    setStage('results');
    setShowTranscript(true);
    if (exercise && !savedRef.current) {
      savedRef.current = true;
      const s = answers.filter((a, i) => a === exercise.questions[i].answer).length;
      completeListening(exercise.id, s);
    }
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
        href="/listening"
        className="inline-flex items-center gap-1 text-sm text-muted hover:text-primary transition-colors mb-6"
      >
        ← Back to Listening
      </Link>

      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className={cn('text-xs font-bold px-2 py-0.5 rounded-full', levelColors[exercise.level])}>
            {exercise.level}
          </span>
          <span className="text-xs text-muted">{exercise.topic}</span>
        </div>
        <h1 className="text-2xl font-bold text-primary">{exercise.title}</h1>
        <p className="text-muted mt-1">{exercise.description}</p>
      </div>

      {/* Audio player card */}
      <div className="rounded-2xl border border-border bg-surface p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="font-semibold text-primary">🎧 Audio</span>
          {playCount > 0 && (
            <span className="text-xs text-muted">Played {playCount}×</span>
          )}
        </div>

        {/* Progress bar */}
        <div className="h-2 bg-border rounded-full mb-5 overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex gap-3">
          {stage === 'playing' ? (
            <button
              onClick={stopAudio}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <rect x="6" y="6" width="12" height="12" rx="2" />
              </svg>
              Stop
            </button>
          ) : (
            <button
              onClick={stage === 'pre' ? playAudio : replayAudio}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-accent hover:bg-accent-hover text-white font-semibold transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {stage === 'pre' ? 'Play audio' : 'Play again'}
            </button>
          )}

          {stage !== 'pre' && (
            <button
              onClick={() => setShowTranscript((v) => !v)}
              className="px-4 py-3 rounded-xl border border-border text-sm text-muted hover:bg-surface-hover transition-colors"
            >
              {showTranscript ? 'Hide' : 'Show'} transcript
            </button>
          )}
        </div>

        {showTranscript && (
          <div className="mt-4 p-4 rounded-xl bg-background border border-border text-sm text-primary leading-relaxed">
            {exercise.transcript}
          </div>
        )}
      </div>

      {/* Questions */}
      {(stage === 'questions' || stage === 'results') && (
        <div className="space-y-5">
          {hasResume && stage === 'questions' && (
            <div className="rounded-xl border border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-900/20 p-4 flex items-center justify-between gap-3">
              <p className="text-sm text-amber-800 dark:text-amber-200">
                📌 Continuing — {answers.filter((a) => a !== null).length}/{exercise.questions.length} answered. Replay the audio above if needed.
              </p>
              <button
                onClick={replayAudio}
                className="text-xs text-amber-700 dark:text-amber-300 underline hover:no-underline whitespace-nowrap"
              >
                Start over
              </button>
            </div>
          )}
          <h2 className="font-semibold text-primary">Comprehension questions</h2>

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
                        optStyle = 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 cursor-default';
                      } else if (oi === userAnswer && !isCorrect) {
                        optStyle = 'border-red-400 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 cursor-default';
                      } else {
                        optStyle = 'border-border text-muted opacity-60 cursor-default';
                      }
                    } else if (userAnswer === oi) {
                      optStyle = 'border-accent bg-accent-light text-accent cursor-pointer';
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
                        <span className="font-semibold mr-2">
                          {['A', 'B', 'C', 'D'][oi]}.
                        </span>
                        {opt}
                      </button>
                    );
                  })}
                </div>

                {stage === 'results' && (
                  <div className={cn(
                    'mt-3 text-xs rounded-lg px-3 py-2',
                    isCorrect
                      ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300'
                      : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300'
                  )}>
                    {isCorrect ? '✓ Correct! ' : '✗ Incorrect. '}
                    {q.explanation}
                  </div>
                )}
              </div>
            );
          })}

          {/* Score / Submit */}
          {stage === 'results' ? (
            <div className="rounded-xl border border-border bg-surface p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-1">
                {score}/{exercise.questions.length}
              </div>
              <div className="text-muted text-sm mb-4">
                {score === exercise.questions.length
                  ? '🎉 Perfect score!'
                  : score >= exercise.questions.length / 2
                  ? '👍 Good effort!'
                  : '💪 Keep practising!'}
              </div>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={replayAudio}
                  className="px-5 py-2.5 rounded-xl border border-border text-sm text-muted hover:bg-surface-hover transition-colors"
                >
                  Try again
                </button>
                <Link
                  href="/listening"
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
              {allAnswered ? 'Check answers' : `Answer all questions (${answers.filter(a => a !== null).length}/${exercise.questions.length})`}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
