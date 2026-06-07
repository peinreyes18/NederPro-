'use client';

import { useState, useCallback, useEffect } from 'react';
import {
  knmQuestions,
  categoryLabels,
  categoryIcons,
  type KnmCategory,
} from '@/data/knm-questions';
import { cn } from '@/lib/utils';
import { useActivityProgress } from '@/hooks/useActivityProgress';

type Mode = 'menu' | 'quiz' | 'results';

const ALL = 'all' as const;
type Filter = KnmCategory | typeof ALL;

const categories = Object.keys(categoryLabels) as KnmCategory[];

// ── Resume helpers ────────────────────────────────────────────────────────────

const KNM_RESUME_KEY = 'nederpro_resume_knm';

interface KnmResumeData {
  questions: (typeof knmQuestions)[number][];
  answers: (number | null)[];
  current: number;
  filter: Filter;
  savedAt: number;
}

function saveKnmResume(data: Omit<KnmResumeData, 'savedAt'>) {
  try { localStorage.setItem(KNM_RESUME_KEY, JSON.stringify({ ...data, savedAt: Date.now() })); } catch { /* ignore */ }
}

function loadKnmResume(): KnmResumeData | null {
  try {
    const raw = localStorage.getItem(KNM_RESUME_KEY);
    if (!raw) return null;
    const d = JSON.parse(raw) as KnmResumeData;
    if (!d.questions?.length || !Array.isArray(d.answers)) return null;
    return d;
  } catch { return null; }
}

function clearKnmResume() {
  try { localStorage.removeItem(KNM_RESUME_KEY); } catch { /* ignore */ }
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function KnmPage() {
  const { completeKnm } = useActivityProgress();
  const [mode, setMode] = useState<Mode>('menu');
  const [filter, setFilter] = useState<Filter>(ALL);
  const [questions, setQuestions] = useState(knmQuestions);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [resumeData, setResumeData] = useState<KnmResumeData | null>(null);

  // Load any saved resume on mount
  useEffect(() => { setResumeData(loadKnmResume()); }, []);

  // Save progress whenever an answer is confirmed
  useEffect(() => {
    if (mode !== 'quiz' || !questions.length) return;
    saveKnmResume({ questions, answers, current, filter });
  }, [answers, current]); // eslint-disable-line react-hooks/exhaustive-deps

  const startQuiz = useCallback((f: Filter) => {
    clearKnmResume();
    setResumeData(null);
    const pool =
      f === ALL ? knmQuestions : knmQuestions.filter((q) => q.category === f);
    const qs = shuffle(pool).slice(0, f === ALL ? 30 : pool.length);
    setQuestions(qs);
    setFilter(f);
    setAnswers(new Array(qs.length).fill(null));
    setCurrent(0);
    setSelected(null);
    setShowFeedback(false);
    setMode('quiz');
  }, []);

  const continueQuiz = useCallback(() => {
    if (!resumeData) return;
    setQuestions(resumeData.questions);
    setAnswers(resumeData.answers);
    setCurrent(resumeData.current);
    setFilter(resumeData.filter);
    setSelected(null);
    setShowFeedback(false);
    setResumeData(null);
    setMode('quiz');
  }, [resumeData]);

  const handleSelect = (oi: number) => {
    if (showFeedback) return;
    setSelected(oi);
  };

  const handleConfirm = () => {
    if (selected === null) return;
    setAnswers((prev) => {
      const next = [...prev];
      next[current] = selected;
      return next;
    });
    setShowFeedback(true);
  };

  const handleNext = () => {
    if (current + 1 >= questions.length) {
      clearKnmResume();
      const pct = Math.round((score / questions.length) * 100);
      completeKnm(pct);
      setMode('results');
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setShowFeedback(false);
    }
  };

  const score = answers.filter((a, i) => a === questions[i]?.answer).length;
  const q = questions[current];
  const isCorrect = selected === q?.answer;

  // ── MENU ────────────────────────────────────────────────────────────────
  if (mode === 'menu') {
    return (
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-primary mb-3">KNM Quiz 🏛️</h1>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Kennis van de Nederlandse Maatschappij — required for the inburgeringsexamen.
            Practice all topics or focus on one area.
          </p>
        </div>

        {/* Resume banner */}
        {resumeData && (
          <div className="rounded-xl border border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-900/20 p-5 mb-6">
            <p className="font-semibold text-amber-800 dark:text-amber-200 mb-1">📌 Unfinished quiz found</p>
            <p className="text-sm text-amber-700 dark:text-amber-300 mb-4">
              {resumeData.answers.filter((a) => a !== null).length} / {resumeData.questions.length} answered
              {resumeData.filter !== ALL && ` · ${categoryLabels[resumeData.filter as KnmCategory]}`}
            </p>
            <div className="flex gap-3">
              <button
                onClick={continueQuiz}
                className="flex-1 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm transition-colors"
              >
                Continue quiz →
              </button>
              <button
                onClick={() => { clearKnmResume(); setResumeData(null); }}
                className="flex-1 py-2.5 rounded-xl border border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-300 text-sm hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors"
              >
                Discard
              </button>
            </div>
          </div>
        )}

        {/* Full mock */}
        <button
          onClick={() => startQuiz(ALL)}
          className="w-full mb-8 p-5 rounded-2xl bg-accent hover:bg-accent-hover text-white font-semibold text-left transition-colors flex items-center justify-between group"
        >
          <div>
            <div className="text-lg font-bold mb-0.5">🎯 Full KNM mock exam</div>
            <div className="text-sm opacity-80">30 random questions · all topics · like the real exam</div>
          </div>
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* By category */}
        <h2 className="font-semibold text-primary mb-3">Or practice by topic</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {categories.map((cat) => {
            const count = knmQuestions.filter((q) => q.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => startQuiz(cat)}
                className="p-4 rounded-xl border border-border bg-surface hover:bg-surface-hover hover:border-accent text-left transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{categoryIcons[cat]}</span>
                    <span className="font-medium text-primary group-hover:text-accent transition-colors">
                      {categoryLabels[cat]}
                    </span>
                  </div>
                  <span className="text-xs text-muted bg-background border border-border px-2 py-0.5 rounded-md">
                    {count} vragen
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // ── RESULTS ─────────────────────────────────────────────────────────────
  if (mode === 'results') {
    const pct = Math.round((score / questions.length) * 100);
    const passed = pct >= 70;

    return (
      <div className="max-w-2xl mx-auto px-4 py-10">
        <div className="rounded-2xl border border-border bg-surface p-8 text-center mb-8">
          <div className="text-6xl mb-3">{passed ? '🎉' : '💪'}</div>
          <div className="text-5xl font-bold text-primary mb-1">
            {score}/{questions.length}
          </div>
          <div className="text-2xl font-semibold text-muted mb-2">{pct}%</div>
          <div className={cn('text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-6',
            passed
              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
              : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
          )}>
            {passed ? '✓ Geslaagd (≥70%)' : '✗ Niet geslaagd (<70%)'}
          </div>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => startQuiz(filter)}
              className="px-6 py-2.5 rounded-xl border border-border text-sm text-muted hover:bg-surface-hover transition-colors"
            >
              Opnieuw proberen
            </button>
            <button
              onClick={() => setMode('menu')}
              className="px-6 py-2.5 rounded-xl bg-accent hover:bg-accent-hover text-white text-sm font-semibold transition-colors"
            >
              Terug naar menu
            </button>
          </div>
        </div>

        {/* Review wrong answers */}
        {answers.some((a, i) => a !== questions[i]?.answer) && (
          <div>
            <h2 className="font-semibold text-primary mb-4">Foute antwoorden — uitleg</h2>
            <div className="space-y-4">
              {questions.map((q, i) => {
                const ua = answers[i];
                if (ua === q.answer) return null;
                return (
                  <div key={q.id} className="rounded-xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-900/10 p-4">
                    <p className="font-medium text-primary mb-2">{i + 1}. {q.question}</p>
                    <p className="text-sm text-red-700 dark:text-red-300 mb-1">
                      ✗ Uw antwoord: <span className="font-medium">{ua !== null ? q.options[ua] : '—'}</span>
                    </p>
                    <p className="text-sm text-green-700 dark:text-green-300 mb-2">
                      ✓ Juiste antwoord: <span className="font-medium">{q.options[q.answer]}</span>
                    </p>
                    <p className="text-xs text-muted">{q.explanation}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  // ── QUIZ ────────────────────────────────────────────────────────────────
  if (!q) return null;
  const progress = ((current) / questions.length) * 100;

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      {/* Progress */}
      <div className="flex items-center justify-between mb-2">
        <button
          onClick={() => setMode('menu')}
          className="text-sm text-muted hover:text-primary transition-colors"
        >
          ← Stop
        </button>
        <span className="text-sm text-muted">
          {current + 1} / {questions.length}
        </span>
      </div>
      <div className="h-2 bg-border rounded-full mb-8 overflow-hidden">
        <div
          className="h-full bg-accent rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Category badge */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-lg">{categoryIcons[q.category]}</span>
        <span className="text-xs font-medium text-muted">{categoryLabels[q.category]}</span>
      </div>

      {/* Question */}
      <h2 className="text-lg font-bold text-primary mb-6 leading-snug">{q.question}</h2>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {q.options.map((opt, oi) => {
          let style = 'border-border text-primary hover:border-accent hover:bg-accent-light cursor-pointer';
          if (showFeedback) {
            if (oi === q.answer) {
              style = 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 cursor-default';
            } else if (oi === selected && !isCorrect) {
              style = 'border-red-400 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 cursor-default';
            } else {
              style = 'border-border text-muted opacity-50 cursor-default';
            }
          } else if (selected === oi) {
            style = 'border-accent bg-accent-light text-accent cursor-pointer';
          }

          return (
            <button
              key={oi}
              onClick={() => handleSelect(oi)}
              disabled={showFeedback}
              className={cn(
                'w-full text-left px-4 py-3 rounded-xl border text-sm transition-all duration-150',
                style
              )}
            >
              <span className="font-semibold mr-2">{['A', 'B', 'C', 'D'][oi]}.</span>
              {opt}
            </button>
          );
        })}
      </div>

      {/* Feedback */}
      {showFeedback && (
        <div className={cn(
          'rounded-xl px-4 py-3 text-sm mb-5',
          isCorrect
            ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300'
            : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300'
        )}>
          <span className="font-semibold">{isCorrect ? '✓ Correct! ' : '✗ Fout. '}</span>
          {q.explanation}
        </div>
      )}

      {/* Action button */}
      {!showFeedback ? (
        <button
          onClick={handleConfirm}
          disabled={selected === null}
          className={cn(
            'w-full py-3 rounded-xl font-semibold text-sm transition-colors',
            selected !== null
              ? 'bg-accent hover:bg-accent-hover text-white'
              : 'bg-muted/20 text-muted cursor-not-allowed'
          )}
        >
          Controleer antwoord
        </button>
      ) : (
        <button
          onClick={handleNext}
          className="w-full py-3 rounded-xl bg-accent hover:bg-accent-hover text-white font-semibold text-sm transition-colors"
        >
          {current + 1 >= questions.length ? 'Bekijk resultaten →' : 'Volgende vraag →'}
        </button>
      )}
    </div>
  );
}
