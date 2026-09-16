import { getTopicsForLevel } from '@/lib/content-loader';
import { knmQuestions } from '@/data/knm-questions';
import type { MultipleChoiceContent } from '@/content/types';

/**
 * "Am I ready for the inburgeringsexamen?" — a free 12-question test built from
 * content that already exists (A1 + A2 multiple-choice grammar exercises and
 * the KNM question bank). It is the shareable hook for community posts and
 * search: no account needed, ends with a level estimate, a gap list linking to
 * the matching free lessons, and a trial / email CTA.
 */

export type ReadinessArea = 'a1' | 'a2' | 'knm';

export interface ReadinessQuestion {
  id: string;
  area: ReadinessArea;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  /** Grammar questions link back to the lesson they came from */
  topicId?: string;
  topicTitle?: string;
  topicHref?: string;
}

export const AREA_LABELS: Record<ReadinessArea, string> = {
  a1: 'A1 grammar',
  a2: 'A2 grammar (exam level)',
  knm: 'KNM — Dutch society',
};

const PER_AREA = 4; // 4 + 4 + 4 = 12 questions ≈ 6–8 minutes

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** One random multiple-choice question from each of `count` random topics of a level. */
function grammarQuestions(levelId: 'a1' | 'a2', count: number): ReadinessQuestion[] {
  const topics = shuffle(getTopicsForLevel(levelId));
  const out: ReadinessQuestion[] = [];
  for (const topic of topics) {
    if (out.length >= count) break;
    const mc = topic.exercises.filter((e) => e.type === 'multiple-choice');
    if (mc.length === 0) continue;
    const ex = mc[Math.floor(Math.random() * mc.length)];
    const qs = (ex.content as MultipleChoiceContent).questions;
    if (!qs?.length) continue;
    const q = qs[Math.floor(Math.random() * qs.length)];
    out.push({
      id: `${topic.id}:${ex.id}:${qs.indexOf(q)}`,
      area: levelId,
      question: q.question,
      options: q.options,
      correctIndex: q.correctIndex,
      explanation: q.explanation,
      topicId: topic.id,
      topicTitle: topic.title,
      topicHref: `/levels/${levelId}/${topic.id}`,
    });
  }
  return out;
}

export function buildReadinessQuestions(): ReadinessQuestion[] {
  const knm: ReadinessQuestion[] = shuffle(knmQuestions).slice(0, PER_AREA).map((q) => ({
    id: `knm:${q.id}`,
    area: 'knm',
    question: q.question,
    options: q.options,
    correctIndex: q.answer,
    explanation: q.explanation,
    topicHref: '/knm',
    topicTitle: 'KNM — Kennis van de Nederlandse Maatschappij',
  }));
  // Fixed order (A1 → A2 → KNM) so the test feels like it ramps up.
  return [...grammarQuestions('a1', PER_AREA), ...grammarQuestions('a2', PER_AREA), ...knm];
}

export type Verdict = 'ready' | 'nearly' | 'not-yet';

export interface ReadinessResult {
  total: number;
  correct: number;
  pct: number;
  byArea: Record<ReadinessArea, { correct: number; total: number; pct: number }>;
  verdict: Verdict;
  /** Where to start studying */
  startLevel: 'a0' | 'a1' | 'a2';
  startLevelLabel: string;
  gaps: { title: string; href: string }[];
}

export function scoreReadiness(questions: ReadinessQuestion[], answers: (number | null)[]): ReadinessResult {
  const byArea: ReadinessResult['byArea'] = {
    a1: { correct: 0, total: 0, pct: 0 },
    a2: { correct: 0, total: 0, pct: 0 },
    knm: { correct: 0, total: 0, pct: 0 },
  };
  const gapMap = new Map<string, { title: string; href: string }>();
  let correct = 0;

  questions.forEach((q, i) => {
    const ok = answers[i] === q.correctIndex;
    byArea[q.area].total++;
    if (ok) { byArea[q.area].correct++; correct++; }
    else if (q.topicHref && q.topicTitle) gapMap.set(q.topicHref, { title: q.topicTitle, href: q.topicHref });
  });
  (Object.keys(byArea) as ReadinessArea[]).forEach((k) => {
    const a = byArea[k];
    a.pct = a.total ? Math.round((a.correct / a.total) * 100) : 0;
  });

  const total = questions.length;
  const pct = total ? Math.round((correct / total) * 100) : 0;

  // The real exam needs A2 language + a KNM pass. Be honest, not flattering.
  const verdict: Verdict =
    pct >= 75 && byArea.a2.pct >= 75 && byArea.knm.pct >= 50 ? 'ready'
    : pct >= 50 ? 'nearly'
    : 'not-yet';

  const startLevel: ReadinessResult['startLevel'] =
    byArea.a2.pct >= 75 ? 'a2' : byArea.a1.pct >= 75 ? 'a2' : byArea.a1.pct >= 50 ? 'a1' : 'a0';
  const startLevelLabel = startLevel === 'a2' ? 'A2 — exam level' : startLevel === 'a1' ? 'A1 — Breakthrough' : 'A0 — Starter';

  // Grammar gaps first (specific lessons), KNM last (one entry)
  const gaps = [...gapMap.values()].sort((a, b) => (a.href === '/knm' ? 1 : b.href === '/knm' ? -1 : 0)).slice(0, 5);

  return { total, correct, pct, byArea, verdict, startLevel, startLevelLabel, gaps };
}

export const VERDICT_COPY: Record<Verdict, { title: string; emoji: string; body: string }> = {
  ready: {
    title: 'You look ready for the inburgeringsexamen',
    emoji: '🎉',
    body: 'Your A2 grammar and KNM knowledge are at exam level. Sharpen up with full mock exams and timed practice so nothing surprises you on the day.',
  },
  nearly: {
    title: 'Nearly there — a few gaps to close',
    emoji: '💪',
    body: 'You have the foundation. Close the specific gaps below and you can be exam-ready in a few weeks of focused practice.',
  },
  'not-yet': {
    title: 'Not yet — but you know exactly where to start',
    emoji: '🌱',
    body: 'That is what this test is for. Start at the level below, work through the topics in order, and retake this test in a month to see the difference.',
  },
};
