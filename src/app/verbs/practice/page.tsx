'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import ProgressBar from '@/components/ui/ProgressBar';
import {
  buildQueue,
  isCorrect,
  useCategoryMeta,
  type DrillCategory,
  type DrillTense,
  type DrillQuestion,
  type CategoryMeta,
} from '@/hooks/useVerbDrill';

// ---------------------------------------------------------------------------
// Tense option definitions
// ---------------------------------------------------------------------------

const TENSE_OPTIONS: { id: DrillTense; label: string; description: string }[] = [
  { id: 'present', label: 'Present (OTT)', description: 'Onvoltooid tegenwoordige tijd' },
  { id: 'pastSimple', label: 'Simple Past (OVT)', description: 'Onvoltooid verleden tijd' },
  { id: 'participle', label: 'Past Participle', description: 'Voltooid deelwoord + hulpwerkwoord' },
  { id: 'random', label: 'Random Mix', description: 'All three tenses shuffled' },
];

const SESSION_SIZES = [
  { value: 10, label: '10' },
  { value: 20, label: '20' },
  { value: 0, label: 'All' },
];

// ---------------------------------------------------------------------------
// Setup Screen
// ---------------------------------------------------------------------------

interface SetupScreenProps {
  onStart: (category: DrillCategory, tense: DrillTense, count: number) => void;
}

function SetupScreen({ onStart }: SetupScreenProps) {
  const categories = useCategoryMeta();
  const [selectedCategory, setSelectedCategory] = useState<DrillCategory>('irregular');
  const [selectedTense, setSelectedTense] = useState<DrillTense>('present');
  const [selectedCount, setSelectedCount] = useState<number>(10);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Link href="/verbs" className="text-muted hover:text-primary text-sm transition-colors">
            ← Verb Reference
          </Link>
        </div>
        <h1 className="text-2xl font-bold text-primary">Verb Conjugation Drill</h1>
        <p className="text-muted mt-1">
          Type the correct conjugated form to practise all 200 Dutch verbs.
        </p>
      </div>

      {/* Step 1: Category */}
      <section className="mb-8">
        <h2 className="text-base font-semibold text-primary mb-3">
          1. Choose a category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {categories.map((cat: CategoryMeta) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`text-left rounded-xl border-2 px-4 py-3 transition-all duration-150 ${
                selectedCategory === cat.id
                  ? 'border-accent bg-accent-light/40'
                  : 'border-border bg-surface hover:border-accent/40 hover:bg-surface-hover'
              }`}
            >
              <div className="flex items-center justify-between mb-0.5">
                <span className="font-semibold text-primary text-sm">{cat.label}</span>
                <span
                  className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                    selectedCategory === cat.id
                      ? 'bg-accent text-white'
                      : 'bg-surface-hover text-muted'
                  }`}
                >
                  {cat.verbCount}
                </span>
              </div>
              <p className="text-xs text-muted">{cat.description}</p>
            </button>
          ))}
        </div>
      </section>

      {/* Step 2: Tense */}
      <section className="mb-8">
        <h2 className="text-base font-semibold text-primary mb-3">2. Choose a tense</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {TENSE_OPTIONS.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelectedTense(t.id)}
              className={`text-left rounded-xl border-2 px-4 py-3 transition-all duration-150 ${
                selectedTense === t.id
                  ? 'border-accent bg-accent-light/40'
                  : 'border-border bg-surface hover:border-accent/40 hover:bg-surface-hover'
              }`}
            >
              <p className="font-semibold text-primary text-sm">{t.label}</p>
              <p className="text-xs text-muted mt-0.5">{t.description}</p>
            </button>
          ))}
        </div>
      </section>

      {/* Step 3: Session length */}
      <section className="mb-8">
        <h2 className="text-base font-semibold text-primary mb-3">3. Session length</h2>
        <div className="flex gap-3">
          {SESSION_SIZES.map((s) => (
            <button
              key={s.value}
              onClick={() => setSelectedCount(s.value)}
              className={`flex-1 rounded-xl border-2 py-2.5 font-semibold text-sm transition-all duration-150 ${
                selectedCount === s.value
                  ? 'border-accent bg-accent text-white'
                  : 'border-border bg-surface text-primary hover:border-accent/40 hover:bg-surface-hover'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </section>

      {/* Start button */}
      <Button
        size="lg"
        className="w-full"
        onClick={() => onStart(selectedCategory, selectedTense, selectedCount)}
      >
        Start Drill →
      </Button>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Drill Screen (one question at a time)
// ---------------------------------------------------------------------------

interface DrillScreenProps {
  questions: DrillQuestion[];
  onComplete: (results: QuestionResult[]) => void;
}

interface QuestionResult {
  question: DrillQuestion;
  userAnswer: string;
  correct: boolean;
}

function tenseLabel(tense: 'present' | 'pastSimple' | 'participle'): string {
  if (tense === 'present') return 'Present (OTT)';
  if (tense === 'pastSimple') return 'Simple Past (OVT)';
  return 'Past Participle';
}

function DrillScreen({ questions, onComplete }: DrillScreenProps) {
  const [index, setIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState<QuestionResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const question = questions[index];
  const progress = ((index) / questions.length) * 100;

  // Focus input when question changes
  useEffect(() => {
    if (!submitted) {
      inputRef.current?.focus();
    }
  }, [index, submitted]);

  const handleSubmit = useCallback(() => {
    if (submitted) {
      // Advance to next
      const newResults = [
        ...results,
        {
          question,
          userAnswer: inputValue,
          correct: isCorrect(inputValue, question.correctAnswer),
        },
      ];
      if (index + 1 >= questions.length) {
        onComplete(newResults);
      } else {
        setResults(newResults);
        setIndex((i) => i + 1);
        setInputValue('');
        setSubmitted(false);
      }
    } else {
      setSubmitted(true);
    }
  }, [submitted, results, question, inputValue, index, questions.length, onComplete]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  const correct = submitted ? isCorrect(inputValue, question.correctAnswer) : null;

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2 text-sm text-muted">
          <span>
            {index + 1} / {questions.length}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <ProgressBar value={progress} />
      </div>

      {/* Verb card */}
      <div className="rounded-2xl border border-border bg-surface p-6 mb-6 shadow-sm">
        {/* Verb header */}
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h2 className="text-2xl font-bold text-primary">{question.verb.infinitive}</h2>
          <span className="text-muted text-lg">·</span>
          <span className="text-muted text-base italic">{question.verb.translation}</span>
        </div>

        {/* Verb meta badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge variant={question.verb.isRegular ? 'success' : 'warning'}>
            {question.verb.isRegular ? 'regular' : 'irregular'}
          </Badge>
          {question.verb.separablePrefix && (
            <Badge variant="accent">separable · {question.verb.separablePrefix}-</Badge>
          )}
          {question.verb.reflexive && (
            <Badge variant="default">reflexive</Badge>
          )}
          <Badge variant="default">{tenseLabel(question.tense)}</Badge>
        </div>

        {/* Divider */}
        <hr className="border-border mb-6" />

        {/* The question prompt */}
        <p className="text-sm text-muted mb-2">
          {question.tense === 'participle'
            ? question.person === 'auxiliary'
              ? 'What auxiliary verb (hulpwerkwoord) does this verb use?'
              : 'What is the past participle (voltooid deelwoord)?'
            : (
              <>
                Conjugate for:{' '}
                <span className="font-semibold text-primary">{question.personLabel}</span>
              </>
            )}
        </p>

        {/* Input */}
        <div className="flex gap-3 items-center mt-3">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => {
              if (!submitted) setInputValue(e.target.value);
            }}
            onKeyDown={handleKeyDown}
            disabled={submitted}
            placeholder="Type your answer…"
            className={`flex-1 rounded-lg border px-4 py-2.5 text-sm font-medium bg-background text-primary placeholder:text-muted/50 focus:outline-none focus:ring-2 transition-all ${
              submitted && correct
                ? 'border-success bg-success-light/30 ring-success/30'
                : submitted && !correct
                ? 'border-error bg-error-light/30 ring-error/30'
                : 'border-border focus:ring-accent/40'
            }`}
          />
          <Button
            onClick={handleSubmit}
            variant={submitted ? 'outline' : 'primary'}
            size="md"
          >
            {submitted ? 'Next →' : 'Check'}
          </Button>
        </div>

        {/* Feedback */}
        {submitted && (
          <div
            className={`mt-4 rounded-lg px-4 py-3 text-sm flex items-start gap-2 ${
              correct
                ? 'bg-success-light/40 text-success border border-success/20'
                : 'bg-error-light/40 text-error border border-error/20'
            }`}
          >
            <span className="text-base leading-tight mt-0.5">{correct ? '✓' : '✗'}</span>
            <div>
              {correct ? (
                <span className="font-semibold">Correct!</span>
              ) : (
                <>
                  <span className="font-semibold">Incorrect.</span>{' '}
                  The answer is{' '}
                  <span className="font-bold">{question.correctAnswer}</span>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Hint: Enter key */}
      <p className="text-center text-xs text-muted/60">
        Press <kbd className="font-mono bg-surface border border-border rounded px-1 py-0.5">Enter</kbd>{' '}
        to {submitted ? 'go to next' : 'check'}
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Results Screen
// ---------------------------------------------------------------------------

interface ResultsScreenProps {
  results: QuestionResult[];
  onRetryMissed: (missed: DrillQuestion[]) => void;
  onNewSession: () => void;
}

function ResultsScreen({ results, onRetryMissed, onNewSession }: ResultsScreenProps) {
  const [missedOpen, setMissedOpen] = useState(false);

  const total = results.length;
  const correct = results.filter((r) => r.correct).length;
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;

  const missed = results.filter((r) => !r.correct).map((r) => r.question);

  const motivation =
    pct === 100
      ? 'Perfect score! 🎉'
      : pct >= 80
      ? 'Great work! Keep it up! 💪'
      : pct >= 60
      ? 'Good effort — review the missed verbs below.'
      : 'Keep practising — repetition is key! 📚';

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div
          className={`inline-flex items-center justify-center w-28 h-28 rounded-full border-4 mb-4 ${
            pct === 100
              ? 'border-success bg-success-light/30 text-success'
              : pct >= 60
              ? 'border-accent bg-accent-light/30 text-accent'
              : 'border-warning bg-warning-light/30 text-warning'
          }`}
        >
          <div>
            <p className="text-3xl font-bold leading-none">{pct}%</p>
            <p className="text-xs font-medium mt-0.5">
              {correct}/{total}
            </p>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-primary mb-1">Session complete!</h1>
        <p className="text-muted text-sm">{motivation}</p>
      </div>

      {/* Missed verbs */}
      {missed.length > 0 && (
        <div className="rounded-xl border border-border bg-surface mb-6 overflow-hidden">
          <button
            onClick={() => setMissedOpen((o) => !o)}
            className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-primary hover:bg-surface-hover transition-colors"
          >
            <span>
              Missed verbs{' '}
              <span className="text-xs font-normal text-muted ml-1">({missed.length})</span>
            </span>
            <span className="text-muted text-xs">{missedOpen ? '▲' : '▼'}</span>
          </button>
          {missedOpen && (
            <div className="divide-y divide-border border-t border-border">
              {results
                .filter((r) => !r.correct)
                .map((r, i) => (
                  <div key={i} className="px-4 py-3 text-sm">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                      <span className="font-semibold text-primary">{r.question.verb.infinitive}</span>
                      <span className="text-muted text-xs">{tenseLabel(r.question.tense)}</span>
                      <span className="text-muted text-xs">·</span>
                      <span className="text-muted text-xs">{r.question.personLabel}</span>
                    </div>
                    <div className="mt-0.5 flex items-center gap-2 text-xs">
                      <span className="text-error line-through">{r.userAnswer || '(blank)'}</span>
                      <span className="text-muted">→</span>
                      <span className="text-success font-semibold">{r.question.correctAnswer}</span>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-col gap-3">
        {missed.length > 0 && (
          <Button size="lg" className="w-full" onClick={() => onRetryMissed(missed)}>
            Retry missed ({missed.length}) →
          </Button>
        )}
        <Button size="lg" variant="outline" className="w-full" onClick={onNewSession}>
          New session
        </Button>
        <Link href="/verbs">
          <Button size="lg" variant="ghost" className="w-full">
            ← Back to verb reference
          </Button>
        </Link>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main Page (orchestrator)
// ---------------------------------------------------------------------------

type Screen = 'setup' | 'drill' | 'results';

export default function VerbPracticePage() {
  const [screen, setScreen] = useState<Screen>('setup');
  const [questions, setQuestions] = useState<DrillQuestion[]>([]);
  const [results, setResults] = useState<QuestionResult[]>([]);

  const handleStart = useCallback(
    (category: DrillCategory, tense: DrillTense, count: number) => {
      const seed = Date.now();
      const q = buildQueue(category, tense, count, seed);
      setQuestions(q);
      setResults([]);
      setScreen('drill');
    },
    [],
  );

  const handleComplete = useCallback((r: QuestionResult[]) => {
    setResults(r);
    setScreen('results');
  }, []);

  const handleRetryMissed = useCallback((missed: DrillQuestion[]) => {
    // Shuffle the missed questions fresh
    const seed = Date.now();
    const shuffled = [...missed].sort(() => 0.5 - Math.random());
    // Rebuild a deterministic shuffle using seed
    let s = seed >>> 0;
    const result = [...missed];
    for (let i = result.length - 1; i > 0; i--) {
      s = ((s * 1664525 + 1013904223) & 0xffffffff) >>> 0;
      const j = s % (i + 1);
      [result[i], result[j]] = [result[j], result[i]];
    }
    void shuffled; // suppress unused warning
    setQuestions(result);
    setResults([]);
    setScreen('drill');
  }, []);

  const handleNewSession = useCallback(() => {
    setScreen('setup');
    setQuestions([]);
    setResults([]);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      {screen === 'setup' && <SetupScreen onStart={handleStart} />}
      {screen === 'drill' && questions.length > 0 && (
        <DrillScreen questions={questions} onComplete={handleComplete} />
      )}
      {screen === 'results' && (
        <ResultsScreen
          results={results}
          onRetryMissed={handleRetryMissed}
          onNewSession={handleNewSession}
        />
      )}
    </main>
  );
}
