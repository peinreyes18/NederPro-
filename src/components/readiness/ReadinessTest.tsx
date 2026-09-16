'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { getAttribution } from '@/lib/attribution';
import {
  AREA_LABELS,
  VERDICT_COPY,
  buildReadinessQuestions,
  scoreReadiness,
  type ReadinessArea,
  type ReadinessQuestion,
  type ReadinessResult,
} from '@/lib/readiness';

type Stage = 'intro' | 'quiz' | 'results';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function ReadinessTest() {
  const [stage, setStage] = useState<Stage>('intro');
  const [questions, setQuestions] = useState<ReadinessQuestion[]>([]);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [current, setCurrent] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [result, setResult] = useState<ReadinessResult | null>(null);

  const start = useCallback(() => {
    const qs = buildReadinessQuestions(); // client-only: random sampling
    setQuestions(qs);
    setAnswers(Array(qs.length).fill(null));
    setCurrent(0);
    setPicked(null);
    setResult(null);
    setStage('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const choose = useCallback((optionIndex: number) => {
    if (picked !== null) return;
    setPicked(optionIndex);
    const next = [...answers];
    next[current] = optionIndex;
    setAnswers(next);
    // brief pause so the selection is visible, then advance
    setTimeout(() => {
      if (current + 1 >= questions.length) {
        const r = scoreReadiness(questions, next);
        setResult(r);
        setStage('results');
        try {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (window as any).gtag?.('event', 'readiness_completed', { pct: r.pct, verdict: r.verdict });
        } catch { /* analytics is optional */ }
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrent(current + 1);
        setPicked(null);
      }
    }, 350);
  }, [answers, current, picked, questions]);

  if (stage === 'intro') return <Intro onStart={start} />;
  if (stage === 'quiz') {
    const q = questions[current];
    return (
      <Quiz
        question={q}
        index={current}
        total={questions.length}
        picked={picked}
        onPick={choose}
      />
    );
  }
  return <Results result={result!} questions={questions} answers={answers} onRetake={start} />;
}

// ── Intro ────────────────────────────────────────────────────────────────────
function Intro({ onStart }: { onStart: () => void }) {
  return (
    <div>
      <div className="text-center mb-8">
        <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Free · no account needed</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-primary leading-tight mb-4">
          Am I ready for the <span className="text-accent">inburgeringsexamen</span>?
        </h1>
        <p className="text-lg text-muted max-w-xl mx-auto">
          12 questions, under 8 minutes. Find out your Dutch level, where your gaps are, and exactly
          which lessons to start with.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-3 mb-8">
        {[
          { n: '4', label: 'A1 grammar', sub: 'the foundation' },
          { n: '4', label: 'A2 grammar', sub: 'exam level' },
          { n: '4', label: 'KNM', sub: 'Dutch society' },
        ].map((b) => (
          <div key={b.label} className="rounded-xl border border-border bg-surface p-4 text-center">
            <p className="text-2xl font-extrabold text-accent">{b.n}</p>
            <p className="text-sm font-semibold text-primary">{b.label}</p>
            <p className="text-xs text-muted">{b.sub}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button size="lg" onClick={onStart}>Start the test →</Button>
        <p className="mt-3 text-xs text-muted">Questions are drawn from real NederPro lessons and the KNM question bank. Different every time.</p>
      </div>

      <div className="mt-10 rounded-xl border border-border bg-surface p-5 text-sm text-primary-light leading-relaxed">
        <p className="font-semibold text-primary mb-1">What the real exam requires</p>
        <p>
          The inburgeringsexamen tests Dutch at <strong>A2</strong> level (reading, listening, writing, speaking)
          plus <strong>KNM</strong>, knowledge of Dutch society. This quick check covers the grammar that
          underpins the language parts and a sample of KNM. It is a guide, not an official result.
        </p>
      </div>
    </div>
  );
}

// ── Quiz ─────────────────────────────────────────────────────────────────────
function Quiz({
  question, index, total, picked, onPick,
}: {
  question: ReadinessQuestion; index: number; total: number; picked: number | null; onPick: (i: number) => void;
}) {
  const pct = Math.round((index / total) * 100);
  return (
    <div>
      <div className="flex items-center justify-between text-xs text-muted mb-2">
        <span>Question {index + 1} of {total}</span>
        <span className="font-medium text-accent">{AREA_LABELS[question.area]}</span>
      </div>
      <div className="h-1.5 rounded-full bg-border overflow-hidden mb-8">
        <div className="h-full bg-accent rounded-full transition-[width] duration-300" style={{ width: `${pct}%` }} />
      </div>

      <h2 className="text-xl sm:text-2xl font-bold text-primary leading-snug mb-6">{question.question}</h2>

      <div className="space-y-2.5">
        {question.options.map((opt, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onPick(i)}
            disabled={picked !== null}
            className={cn(
              'w-full text-left px-4 py-3.5 rounded-xl border-2 transition-all text-sm sm:text-base',
              picked === i
                ? 'border-accent bg-accent-light text-primary'
                : 'border-border bg-surface hover:border-accent/50 hover:bg-surface-hover text-primary',
              picked !== null && picked !== i && 'opacity-60'
            )}
          >
            <span className="inline-flex w-6 h-6 mr-3 items-center justify-center rounded-full border border-border text-xs font-semibold text-muted">
              {String.fromCharCode(65 + i)}
            </span>
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

// ── Results ──────────────────────────────────────────────────────────────────
function Results({
  result, questions, answers, onRetake,
}: {
  result: ReadinessResult; questions: ReadinessQuestion[]; answers: (number | null)[]; onRetake: () => void;
}) {
  const copy = VERDICT_COPY[result.verdict];
  const [email, setEmail] = useState('');
  const [emailState, setEmailState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [showReview, setShowReview] = useState(false);

  useEffect(() => { window.scrollTo({ top: 0 }); }, []);

  async function sendResults() {
    if (!EMAIL_RE.test(email)) { setEmailState('error'); return; }
    setEmailState('sending');
    try {
      const res = await fetch('/api/readiness-results', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          pct: result.pct,
          verdict: result.verdict,
          startLevel: result.startLevel,
          startLevelLabel: result.startLevelLabel,
          byArea: result.byArea,
          gaps: result.gaps,
          attribution: getAttribution(),
        }),
      });
      setEmailState(res.ok ? 'sent' : 'error');
    } catch {
      setEmailState('error');
    }
  }

  const areas: ReadinessArea[] = ['a1', 'a2', 'knm'];

  return (
    <div className="space-y-6">
      {/* Verdict */}
      <div className={cn(
        'rounded-2xl border p-6 text-center',
        result.verdict === 'ready' ? 'border-green-300 bg-green-50 dark:bg-green-900/20 dark:border-green-800'
          : result.verdict === 'nearly' ? 'border-accent/40 bg-accent-light/40'
          : 'border-amber-300 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-800'
      )}>
        <p className="text-5xl mb-2">{copy.emoji}</p>
        <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">Your result</p>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-primary mb-2">{copy.title}</h1>
        <p className="text-4xl font-black text-accent my-3">{result.correct}<span className="text-xl text-muted font-semibold">/{result.total}</span></p>
        <p className="text-sm text-primary-light max-w-lg mx-auto">{copy.body}</p>
      </div>

      {/* Breakdown */}
      <div className="rounded-2xl border border-border bg-surface p-5">
        <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-4">Breakdown</p>
        <div className="space-y-4">
          {areas.map((a) => (
            <div key={a}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-primary">{AREA_LABELS[a]}</span>
                <span className="text-muted">{result.byArea[a].correct}/{result.byArea[a].total}</span>
              </div>
              <div className="h-2 rounded-full bg-border overflow-hidden">
                <div
                  className={cn('h-full rounded-full', result.byArea[a].pct >= 75 ? 'bg-green-500' : result.byArea[a].pct >= 50 ? 'bg-accent' : 'bg-amber-500')}
                  style={{ width: `${Math.max(4, result.byArea[a].pct)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Where to start + gaps */}
      <div className="rounded-2xl border border-border bg-surface p-5">
        <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">Where to start</p>
        <Link href={`/levels/${result.startLevel}`} className="block rounded-xl border border-accent/40 bg-accent-light/40 px-4 py-3 hover:bg-accent-light transition-colors">
          <p className="font-semibold text-primary">{result.startLevelLabel} →</p>
          <p className="text-xs text-muted">Free grammar lessons, in the order that builds up to the exam.</p>
        </Link>
        {result.gaps.length > 0 && (
          <>
            <p className="text-xs font-semibold text-muted uppercase tracking-wider mt-5 mb-2">Topics you missed</p>
            <ul className="space-y-1.5">
              {result.gaps.map((g) => (
                <li key={g.href}>
                  <Link href={g.href} className="flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors">
                    <span className="text-amber-500">•</span>{g.title}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      {/* Email results */}
      <div className="rounded-2xl border border-border bg-surface p-5">
        <p className="font-semibold text-primary mb-1">Email me my results and a 4-week plan</p>
        <p className="text-xs text-muted mb-3">One email, no newsletter. Includes links to every topic above.</p>
        {emailState === 'sent' ? (
          <p className="text-sm text-green-700 dark:text-green-400 font-medium">✓ Sent — check your inbox.</p>
        ) : (
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); if (emailState === 'error') setEmailState('idle'); }}
              placeholder="you@example.com"
              className="flex-1 px-4 py-2.5 rounded-xl border border-border bg-background text-sm text-primary placeholder:text-muted focus:outline-none focus:border-accent"
            />
            <Button onClick={sendResults} disabled={emailState === 'sending'}>
              {emailState === 'sending' ? 'Sending…' : 'Send my results'}
            </Button>
          </div>
        )}
        {emailState === 'error' && <p className="mt-2 text-xs text-error">Please enter a valid email address and try again.</p>}
      </div>

      {/* CTAs */}
      <div className="rounded-2xl border border-accent/30 bg-accent-light/30 p-6 text-center">
        <p className="text-lg font-bold text-primary mb-1">Turn the gaps into passes</p>
        <p className="text-sm text-muted mb-4">Exercises for every topic, KNM practice, full mock exams and AI feedback. 7 days free, cancel any time.</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/signup"><Button size="lg">Start free trial →</Button></Link>
          <Button size="lg" variant="outline" onClick={onRetake}>Retake the test</Button>
        </div>
      </div>

      {/* Review answers */}
      <div className="text-center">
        <button type="button" onClick={() => setShowReview((v) => !v)} className="text-sm text-muted hover:text-accent underline underline-offset-4">
          {showReview ? 'Hide my answers' : 'Review my answers'}
        </button>
      </div>
      {showReview && (
        <ol className="space-y-4">
          {questions.map((q, i) => {
            const ok = answers[i] === q.correctIndex;
            return (
              <li key={q.id} className={cn('rounded-xl border p-4 text-sm', ok ? 'border-green-200 dark:border-green-800' : 'border-amber-200 dark:border-amber-800')}>
                <p className="font-medium text-primary mb-1">{ok ? '✓' : '✗'} {q.question}</p>
                {!ok && <p className="text-muted">Your answer: {answers[i] !== null ? q.options[answers[i]!] : '—'}</p>}
                <p className="text-primary-light">Correct: <strong>{q.options[q.correctIndex]}</strong></p>
                <p className="text-xs text-muted mt-1">{q.explanation}</p>
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
}
