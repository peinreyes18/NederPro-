'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { knmQuestions } from '@/data/knm-questions';
import { readingExercises } from '@/data/reading-exercises';
import { listeningExercises } from '@/data/listening-exercises';
import { useActivityProgress } from '@/hooks/useActivityProgress';

// ── Types ────────────────────────────────────────────────────────────────────

type Section = 'reading' | 'listening' | 'knm';
type Stage = 'intro' | 'exam' | 'results';

interface ExamQuestion {
  id: string;
  section: Section;
  passageTitle?: string;
  passageText?: string;        // reading
  passageTranscript?: string;  // listening
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildExam(): ExamQuestion[] {
  // 4 reading passages × 4 questions each = 16 reading questions
  const readingSample = shuffle(readingExercises).slice(0, 4);
  const readingQs: ExamQuestion[] = readingSample.flatMap((ex) =>
    ex.questions.map((q, qi) => ({
      id: `reading-${ex.id}-${qi}`,
      section: 'reading' as Section,
      passageTitle: ex.title,
      passageText: ex.text,
      question: q.question,
      options: q.options,
      answer: q.answer,
      explanation: q.explanation,
    }))
  );

  // 3 listening passages × 4 questions each = 12 listening questions
  const listeningSample = shuffle(listeningExercises).slice(0, 3);
  const listeningQs: ExamQuestion[] = listeningSample.flatMap((ex) =>
    ex.questions.map((q, qi) => ({
      id: `listening-${ex.id}-${qi}`,
      section: 'listening' as Section,
      passageTitle: ex.title,
      passageTranscript: ex.transcript,
      question: q.question,
      options: q.options,
      answer: q.answer,
      explanation: q.explanation,
    }))
  );

  // 22 KNM questions
  const knmQs: ExamQuestion[] = shuffle(knmQuestions)
    .slice(0, 22)
    .map((q) => ({
      id: `knm-${q.id}`,
      section: 'knm' as Section,
      question: q.question,
      options: q.options,
      answer: q.answer,
      explanation: q.explanation,
    }));

  return [...readingQs, ...listeningQs, ...knmQs];
}

const EXAM_DURATION = 50 * 60; // 50 minutes in seconds
const RESUME_KEY = 'nederpro_resume_mock_exam';

interface ResumeData {
  questions: ExamQuestion[];
  answers: (number | null)[];
  current: number;
  timeLeft: number;
  savedAt: number;
}

function saveResume(questions: ExamQuestion[], answers: (number | null)[], current: number, timeLeft: number) {
  try {
    localStorage.setItem(RESUME_KEY, JSON.stringify({ questions, answers, current, timeLeft, savedAt: Date.now() }));
  } catch { /* storage full */ }
}

function loadResume(): ResumeData | null {
  try {
    const raw = localStorage.getItem(RESUME_KEY);
    if (!raw) return null;
    const d = JSON.parse(raw) as ResumeData;
    if (!d.questions?.length || !Array.isArray(d.answers)) return null;
    return d;
  } catch { return null; }
}

function clearResume() {
  try { localStorage.removeItem(RESUME_KEY); } catch { /* ignore */ }
}

const SECTION_INFO: Record<Section, { label: string; emoji: string; color: string }> = {
  reading: { label: 'Reading',   emoji: '📖', color: 'text-blue-600 dark:text-blue-400' },
  listening: { label: 'Listening', emoji: '🎧', color: 'text-purple-600 dark:text-purple-400' },
  knm:     { label: 'KNM',       emoji: '🏛️', color: 'text-orange-600 dark:text-orange-400' },
};

// ── Main page ────────────────────────────────────────────────────────────────

export default function MockExamPage() {
  const [stage, setStage] = useState<Stage>('intro');
  const [questions, setQuestions] = useState<ExamQuestion[]>([]);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [current, setCurrent] = useState(0);
  const [timeLeft, setTimeLeft] = useState(EXAM_DURATION);
  const [timedOut, setTimedOut] = useState(false);
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [limitMsg, setLimitMsg] = useState<string | null>(null);

  const { completeMockExam } = useActivityProgress();

  // Check for saved resume on mount
  useEffect(() => { setResumeData(loadResume()); }, []);

  // Refs to avoid stale closures in the timer effect
  const answersRef = useRef(answers);
  const questionsRef = useRef(questions);
  useEffect(() => { answersRef.current = answers; }, [answers]);
  useEffect(() => { questionsRef.current = questions; }, [questions]);

  // TTS for listening passages
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const synthRef = useRef<any>(null);
  const [playedPassages, setPlayedPassages] = useState<Set<string>>(new Set());
  const [isPlaying, setIsPlaying] = useState(false);
  const [dutchVoice, setDutchVoice] = useState<SpeechSynthesisVoice | null>(null);

  // Load Dutch voice
  useEffect(() => {
    const load = () => {
      const voices = window.speechSynthesis.getVoices();
      const nl = voices.find((v) => v.lang === 'nl-NL') ?? voices.find((v) => v.lang.startsWith('nl')) ?? null;
      setDutchVoice(nl);
    };
    load();
    window.speechSynthesis.addEventListener('voiceschanged', load);
    return () => window.speechSynthesis.removeEventListener('voiceschanged', load);
  }, []);

  // Save progress every 10 seconds while exam is running
  useEffect(() => {
    if (stage !== 'exam' || !questions.length) return;
    saveResume(questions, answers, current, timeLeft);
  }, [answers, current]); // eslint-disable-line react-hooks/exhaustive-deps

  // Timer — uses refs so score always reflects latest answers
  useEffect(() => {
    if (stage !== 'exam') return;
    if (timeLeft <= 0) {
      clearResume();
      setTimedOut(true);
      setStage('results');
      const qs = questionsRef.current;
      const ans = answersRef.current;
      const correct = ans.filter((a, i) => a === qs[i]?.answer).length;
      if (qs.length > 0) completeMockExam(Math.round((correct / qs.length) * 100));
      return;
    }
    const t = setInterval(() => setTimeLeft((s) => s - 1), 1000);
    return () => clearInterval(t);
  }, [stage, timeLeft]);

  // Cleanup TTS on unmount
  useEffect(() => () => { window.speechSynthesis?.cancel(); }, []);

  const startExam = async () => {
    // Daily trial cap — consume one mock-exam credit before building the exam.
    // Paid users always pass (server never increments their counter); trial
    // users are blocked after their daily cap. Fails open on any error.
    setLimitMsg(null);
    try {
      const res = await fetch('/api/usage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ kind: 'mock_exam' }),
      });
      if (res.ok) {
        const data = await res.json();
        if (!data.allowed) {
          setLimitMsg(
            `You've used your ${data.cap} mock exam for today on the free trial. Subscribe for unlimited exams, or come back tomorrow.`
          );
          setStage('intro'); // ensure the banner is visible (e.g. from "Try again")
          return;
        }
      }
    } catch {
      /* network error → fail open, let them start */
    }

    clearResume();
    setResumeData(null);
    const qs = buildExam();
    setQuestions(qs);
    setAnswers(new Array(qs.length).fill(null));
    setCurrent(0);
    setTimeLeft(EXAM_DURATION);
    setTimedOut(false);
    setPlayedPassages(new Set());
    setStage('exam');
  };

  const continueExam = () => {
    if (!resumeData) return;
    setQuestions(resumeData.questions);
    setAnswers(resumeData.answers);
    setCurrent(resumeData.current);
    setTimeLeft(resumeData.timeLeft);
    setTimedOut(false);
    setPlayedPassages(new Set());
    setResumeData(null);
    setStage('exam');
  };

  const handleAnswer = (oi: number) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[current] = oi;
      return next;
    });
  };

  const handleNext = () => {
    if (current + 1 >= questions.length) {
      window.speechSynthesis.cancel();
      clearResume();
      const qs = questionsRef.current;
      const ans = answersRef.current;
      const correct = ans.filter((a, i) => a === qs[i]?.answer).length;
      if (qs.length > 0) completeMockExam(Math.round((correct / qs.length) * 100));
      setStage('results');
    } else {
      setCurrent((c) => c + 1);
    }
  };

  const handlePrev = () => setCurrent((c) => Math.max(0, c - 1));

  const playPassage = useCallback((text: string, passageId: string) => {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    if (dutchVoice) utter.voice = dutchVoice;
    utter.lang = 'nl-NL';
    utter.rate = 0.85;
    setIsPlaying(true);
    utter.onend = () => {
      setIsPlaying(false);
      setPlayedPassages((p) => new Set(p).add(passageId));
    };
    utter.onerror = () => setIsPlaying(false);
    synthRef.current = utter;
    window.speechSynthesis.speak(utter);
  }, [dutchVoice]);

  const stopPassage = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  };

  // ── INTRO ──────────────────────────────────────────────────────────────────
  if (stage === 'intro') {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Practice Test</p>
          <h1 className="text-3xl font-extrabold text-primary mb-3">Mock Inburgeringsexamen 🇳🇱</h1>
          <p className="text-muted max-w-lg mx-auto">
            A full timed practice exam covering Reading, Listening, and KNM — just like the real inburgeringsexamen.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 mb-8">
          {([
            { icon: '📖', label: 'Reading',   sub: '4 texts · 16 questions' },
            { icon: '🎧', label: 'Listening', sub: '3 recordings · 12 questions' },
            { icon: '🏛️', label: 'KNM',       sub: '22 civic knowledge questions' },
          ] as const).map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-surface p-4 text-center">
              <div className="text-3xl mb-2">{s.icon}</div>
              <p className="font-semibold text-primary">{s.label}</p>
              <p className="text-xs text-muted mt-1">{s.sub}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-border bg-surface p-5 mb-8 space-y-3 text-sm text-muted">
          <div className="flex items-center gap-3">
            <span className="text-xl">⏱️</span>
            <span><strong className="text-primary">50 minutes</strong> — timer starts when you begin</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xl">✅</span>
            <span><strong className="text-primary">Pass threshold: 70%</strong> — same as the real exam</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xl">🔀</span>
            <span>Questions are <strong className="text-primary">randomised</strong> each attempt</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xl">🎧</span>
            <span>Listening passages are read aloud — use headphones for best results</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xl">⬅️➡️</span>
            <span>You can go back and change answers before submitting</span>
          </div>
        </div>

        {resumeData && (
          <div className="rounded-xl border border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-900/20 p-5 mb-5">
            <p className="font-semibold text-amber-800 dark:text-amber-200 mb-1">📌 Unfinished exam found</p>
            <p className="text-sm text-amber-700 dark:text-amber-300 mb-4">
              {Math.floor(resumeData.timeLeft / 60)}m {resumeData.timeLeft % 60}s remaining &middot;{' '}
              {resumeData.answers.filter((a) => a !== null).length} / {resumeData.questions.length} answered
            </p>
            <div className="flex gap-3">
              <button
                onClick={continueExam}
                className="flex-1 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm transition-colors"
              >
                Continue exam →
              </button>
              <button
                onClick={() => { clearResume(); setResumeData(null); }}
                className="flex-1 py-2.5 rounded-xl border border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-300 text-sm hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors"
              >
                Start fresh
              </button>
            </div>
          </div>
        )}

        {limitMsg && (
          <div className="rounded-xl border border-accent/30 bg-accent-light/30 px-6 py-6 mb-5 text-center">
            <div className="text-3xl mb-2">⏳</div>
            <p className="font-semibold text-primary mb-1">Daily trial limit reached</p>
            <p className="text-sm text-muted mb-4 max-w-sm mx-auto">{limitMsg}</p>
            <Link
              href="/subscribe"
              className="inline-block px-5 py-2.5 rounded-xl bg-accent hover:bg-accent-hover text-white text-sm font-semibold transition-colors"
            >
              Subscribe for unlimited access →
            </Link>
          </div>
        )}

        {!resumeData && (
          <button
            onClick={startExam}
            className="w-full py-4 rounded-2xl bg-accent hover:bg-accent-hover text-white font-bold text-lg transition-colors shadow-md"
          >
            Start Mock Exam →
          </button>
        )}
        {resumeData && (
          <button
            onClick={startExam}
            className="w-full py-3 rounded-2xl border border-border text-muted text-sm hover:bg-surface-hover transition-colors"
          >
            Start a new exam instead
          </button>
        )}
      </div>
    );
  }

  // ── RESULTS ────────────────────────────────────────────────────────────────
  if (stage === 'results') {
    const total = questions.length;
    const correct = answers.filter((a, i) => a === questions[i]?.answer).length;
    const pct = Math.round((correct / total) * 100);
    const passed = pct >= 70;

    const bySection: Record<Section, { correct: number; total: number }> = {
      reading:   { correct: 0, total: 0 },
      listening: { correct: 0, total: 0 },
      knm:       { correct: 0, total: 0 },
    };
    questions.forEach((q, i) => {
      bySection[q.section].total++;
      if (answers[i] === q.answer) bySection[q.section].correct++;
    });

    return (
      <div className="max-w-2xl mx-auto px-4 py-10">
        {/* Score card */}
        <div className="rounded-2xl border border-border bg-surface p-8 text-center mb-8">
          <div className="text-5xl mb-3">{passed ? '🎉' : '💪'}</div>
          <div className="text-6xl font-extrabold text-primary mb-1">{pct}%</div>
          <div className="text-muted mb-1">{correct} / {total} correct</div>
          {timedOut && <div className="text-sm text-red-500 mb-2">Time ran out</div>}
          <div className={cn(
            'inline-block text-sm font-semibold px-4 py-1.5 rounded-full mt-2 mb-6',
            passed
              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
              : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
          )}>
            {passed ? '✓ Geslaagd (≥70%)' : '✗ Niet geslaagd (<70%)'}
          </div>

          {/* Per-section breakdown */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {(Object.entries(bySection) as [Section, { correct: number; total: number }][]).map(([sec, s]) => {
              const info = SECTION_INFO[sec];
              const secPct = Math.round((s.correct / s.total) * 100);
              return (
                <div key={sec} className="rounded-xl border border-border bg-background p-3">
                  <div className="text-xl mb-1">{info.emoji}</div>
                  <div className={cn('text-xs font-semibold mb-1', info.color)}>{info.label}</div>
                  <div className="text-lg font-bold text-primary">{secPct}%</div>
                  <div className="text-xs text-muted">{s.correct}/{s.total}</div>
                </div>
              );
            })}
          </div>

          <div className="flex gap-3 justify-center">
            <button
              onClick={startExam}
              className="px-5 py-2.5 rounded-xl border border-border text-sm text-muted hover:bg-surface-hover transition-colors"
            >
              Try again
            </button>
            <Link
              href="/"
              className="px-5 py-2.5 rounded-xl bg-accent hover:bg-accent-hover text-white text-sm font-semibold transition-colors"
            >
              Back to home
            </Link>
          </div>
        </div>

        {/* Detailed review */}
        <h2 className="font-bold text-primary mb-4">Full review</h2>
        <div className="space-y-4">
          {questions.map((q, i) => {
            const ua = answers[i];
            const isCorrect = ua === q.answer;
            return (
              <div
                key={q.id}
                className={cn(
                  'rounded-xl border p-4',
                  isCorrect
                    ? 'border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-900/10'
                    : 'border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-900/10'
                )}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className={cn('text-xs font-semibold px-2 py-0.5 rounded-md',
                    q.section === 'reading' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' :
                    q.section === 'listening' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' :
                    'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300'
                  )}>
                    {SECTION_INFO[q.section].emoji} {SECTION_INFO[q.section].label}
                  </span>
                  <span className="text-xs text-muted">Q{i + 1}</span>
                  <span className="ml-auto text-sm">{isCorrect ? '✓' : '✗'}</span>
                </div>
                <p className="font-medium text-primary text-sm mb-2">{q.question}</p>
                {ua !== null && !isCorrect && (
                  <p className="text-xs text-red-600 dark:text-red-400 mb-1">
                    Your answer: {q.options[ua]}
                  </p>
                )}
                <p className="text-xs text-green-700 dark:text-green-400 mb-2">
                  ✓ {q.options[q.answer]}
                </p>
                <p className="text-xs text-muted">{q.explanation}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // ── EXAM ───────────────────────────────────────────────────────────────────
  const q = questions[current];
  if (!q) return null;

  const mins = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const secs = (timeLeft % 60).toString().padStart(2, '0');
  const timerUrgent = timeLeft < 5 * 60;
  const progress = ((current + 1) / questions.length) * 100;

  // Group questions by section for the nav dots
  const sections: Section[] = ['reading', 'listening', 'knm'];

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className={cn(
            'text-xs font-semibold px-2 py-1 rounded-md',
            q.section === 'reading' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' :
            q.section === 'listening' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' :
            'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300'
          )}>
            {SECTION_INFO[q.section].emoji} {SECTION_INFO[q.section].label}
          </span>
          <span className="text-xs text-muted">{current + 1} / {questions.length}</span>
        </div>
        <div className={cn(
          'font-mono font-bold text-lg tabular-nums px-3 py-1 rounded-lg',
          timerUrgent
            ? 'text-red-600 bg-red-50 dark:bg-red-900/20 dark:text-red-400'
            : 'text-primary bg-surface border border-border'
        )}>
          {mins}:{secs}
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-border rounded-full mb-6 overflow-hidden">
        <div
          className="h-full bg-accent rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Passage — reading */}
      {q.section === 'reading' && q.passageText && (
        <div className="rounded-xl border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-900/10 p-4 mb-5">
          <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">
            📖 {q.passageTitle}
          </p>
          <div className="text-sm text-primary leading-7 whitespace-pre-wrap max-h-52 overflow-y-auto">
            {q.passageText}
          </div>
        </div>
      )}

      {/* Passage — listening */}
      {q.section === 'listening' && q.passageTranscript && (
        <div className="rounded-xl border border-purple-200 dark:border-purple-900 bg-purple-50 dark:bg-purple-900/10 p-4 mb-5">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-semibold text-purple-600 dark:text-purple-400">
              🎧 {q.passageTitle}
            </p>
            <button
              onClick={() =>
                isPlaying
                  ? stopPassage()
                  : playPassage(q.passageTranscript!, `${q.passageTitle}-${current}`)
              }
              className={cn(
                'text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors',
                isPlaying
                  ? 'bg-purple-200 text-purple-700 dark:bg-purple-800 dark:text-purple-200'
                  : 'bg-purple-600 text-white hover:bg-purple-700'
              )}
            >
              {isPlaying ? '⏹ Stop' : playedPassages.has(`${q.passageTitle}-${current}`) ? '🔁 Replay' : '▶ Play audio'}
            </button>
          </div>
          <p className="text-xs text-purple-500 dark:text-purple-400 italic">
            Listen to the audio, then answer the question below.
          </p>
        </div>
      )}

      {/* Question */}
      <h2 className="text-base font-bold text-primary mb-4 leading-snug">{q.question}</h2>

      {/* Options */}
      <div className="space-y-2.5 mb-6">
        {q.options.map((opt, oi) => {
          const selected = answers[current] === oi;
          return (
            <button
              key={oi}
              onClick={() => handleAnswer(oi)}
              className={cn(
                'w-full text-left px-4 py-3 rounded-xl border text-sm transition-all duration-150',
                selected
                  ? 'border-accent bg-accent-light text-accent font-medium'
                  : 'border-border text-primary hover:border-accent hover:bg-accent-light cursor-pointer'
              )}
            >
              <span className="font-semibold mr-2">{['A', 'B', 'C', 'D'][oi]}.</span>
              {opt}
            </button>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={handlePrev}
          disabled={current === 0}
          className="px-4 py-2.5 rounded-xl border border-border text-sm text-muted hover:bg-surface-hover transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          ← Previous
        </button>

        {/* Question dot nav for answered/unanswered */}
        <div className="flex gap-1 flex-wrap justify-center max-w-xs">
          {sections.map((sec) => {
            const secQs = questions
              .map((qq, i) => ({ qq, i }))
              .filter(({ qq }) => qq.section === sec);
            return secQs.map(({ i }) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                title={`Question ${i + 1}`}
                className={cn(
                  'w-2.5 h-2.5 rounded-full transition-all',
                  i === current
                    ? 'bg-accent scale-125'
                    : answers[i] !== null
                    ? 'bg-accent/40'
                    : 'bg-border hover:bg-accent/20'
                )}
              />
            ));
          })}
        </div>

        {current + 1 < questions.length ? (
          <button
            onClick={handleNext}
            className="px-4 py-2.5 rounded-xl bg-accent hover:bg-accent-hover text-white text-sm font-semibold transition-colors"
          >
            Next →
          </button>
        ) : (
          <button
            onClick={() => { window.speechSynthesis.cancel(); clearResume(); const qs = questionsRef.current; const ans = answersRef.current; const correct = ans.filter((a, i) => a === qs[i]?.answer).length; if (qs.length > 0) completeMockExam(Math.round((correct / qs.length) * 100)); setStage('results'); }}
            className="px-4 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white text-sm font-semibold transition-colors"
          >
            Submit →
          </button>
        )}
      </div>

      <p className="text-center text-xs text-muted mt-4">
        {answers.filter((a) => a !== null).length} of {questions.length} answered
      </p>
    </div>
  );
}
