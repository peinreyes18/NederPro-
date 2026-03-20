import { useMemo } from 'react';
import { getAllVerbs } from '@/content/verbs/verb-database';
import type { VerbConjugation, TenseConjugation } from '@/content/verbs/types';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type DrillTense = 'present' | 'pastSimple' | 'participle' | 'random';
export type DrillCategory =
  | 'all'
  | 'regular'
  | 'irregular'
  | 'separable'
  | 'modals'
  | 'zijn-verbs';

export interface DrillQuestion {
  /** The verb being drilled */
  verb: VerbConjugation;
  /** Which tense this question is for */
  tense: 'present' | 'pastSimple' | 'participle';
  /**
   * Which person/slot within the tense.
   * keyof TenseConjugation for present/pastSimple,
   * 'participle' or 'auxiliary' for participle questions.
   */
  person: keyof TenseConjugation | 'participle' | 'auxiliary';
  /** Human-readable label shown to the user, e.g. "hij / zij / het" */
  personLabel: string;
  /** The expected answer (may contain "/" for alternate forms) */
  correctAnswer: string;
}

export interface CategoryMeta {
  id: DrillCategory;
  label: string;
  description: string;
  verbCount: number;
}

// ---------------------------------------------------------------------------
// Modal verb infinitives (so we can filter the "modals" category)
// ---------------------------------------------------------------------------

const MODAL_INFINITIVES = new Set([
  'kunnen',
  'mogen',
  'moeten',
  'willen',
  'zullen',
  'hoeven',
]);

// ---------------------------------------------------------------------------
// Category filtering
// ---------------------------------------------------------------------------

function filterVerbs(verbs: VerbConjugation[], category: DrillCategory): VerbConjugation[] {
  switch (category) {
    case 'all':
      return verbs;
    case 'regular':
      return verbs.filter((v) => v.isRegular);
    case 'irregular':
      return verbs.filter((v) => !v.isRegular);
    case 'separable':
      return verbs.filter((v) => v.separablePrefix !== undefined);
    case 'modals':
      return verbs.filter((v) => MODAL_INFINITIVES.has(v.infinitive));
    case 'zijn-verbs':
      return verbs.filter(
        (v) => v.auxiliary === 'zijn' || v.auxiliary === 'hebben/zijn',
      );
  }
}

// ---------------------------------------------------------------------------
// Answer normalisation + checking
// ---------------------------------------------------------------------------

function normalize(s: string): string {
  return s.toLowerCase().trim().replace(/\s+/g, ' ');
}

/**
 * Check whether `input` matches `correctAnswer`.
 * Handles slash-separated alternates like "hebt / heeft".
 */
export function isCorrect(input: string, correctAnswer: string): boolean {
  const normInput = normalize(input);
  return correctAnswer
    .split('/')
    .map(normalize)
    .some((variant) => variant === normInput);
}

// ---------------------------------------------------------------------------
// Simple deterministic shuffle (Fisher-Yates with LCG)
// ---------------------------------------------------------------------------

function lcgNext(seed: number): number {
  return ((seed * 1664525 + 1013904223) & 0xffffffff) >>> 0;
}

function seededShuffle<T>(arr: T[], seed: number): T[] {
  const result = [...arr];
  let s = seed >>> 0;
  for (let i = result.length - 1; i > 0; i--) {
    s = lcgNext(s);
    const j = s % (i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// ---------------------------------------------------------------------------
// Queue builder
// ---------------------------------------------------------------------------

const PERSON_KEYS: (keyof TenseConjugation)[] = [
  'ik',
  'jij',
  'u',
  'hijZijHet',
  'wij',
  'jullie',
  'zij',
];

const PERSON_LABELS: Record<keyof TenseConjugation, string> = {
  ik: 'ik',
  jij: 'jij / je',
  u: 'u',
  hijZijHet: 'hij / zij / het',
  wij: 'wij / we',
  jullie: 'jullie',
  zij: 'zij / ze (plural)',
};

function buildTenseQuestions(
  verb: VerbConjugation,
  tense: 'present' | 'pastSimple',
): DrillQuestion[] {
  const conjugation = verb[tense];
  return PERSON_KEYS.map((person) => ({
    verb,
    tense,
    person,
    personLabel: PERSON_LABELS[person],
    correctAnswer: conjugation[person],
  }));
}

function buildParticipleQuestions(verb: VerbConjugation): DrillQuestion[] {
  return [
    {
      verb,
      tense: 'participle',
      person: 'participle',
      personLabel: 'voltooid deelwoord',
      correctAnswer: verb.pastParticiple,
    },
    {
      verb,
      tense: 'participle',
      person: 'auxiliary',
      personLabel: 'hulpwerkwoord',
      correctAnswer: verb.auxiliary,
    },
  ];
}

/**
 * Build a shuffled drill queue.
 *
 * @param category - Which subset of verbs to draw from
 * @param tense    - Which tense(s) to drill
 * @param count    - How many questions (0 = all)
 * @param seed     - For reproducible shuffling (e.g. Date.now())
 */
export function buildQueue(
  category: DrillCategory,
  tense: DrillTense,
  count: number,
  seed: number,
): DrillQuestion[] {
  const allVerbs = getAllVerbs();
  const verbPool = filterVerbs(allVerbs, category);

  // Build the full question pool for the chosen tense(s)
  let pool: DrillQuestion[] = [];

  const tensesToDrill: ('present' | 'pastSimple' | 'participle')[] =
    tense === 'random'
      ? ['present', 'pastSimple', 'participle']
      : [tense];

  for (const t of tensesToDrill) {
    for (const verb of verbPool) {
      if (t === 'present' || t === 'pastSimple') {
        pool.push(...buildTenseQuestions(verb, t));
      } else {
        pool.push(...buildParticipleQuestions(verb));
      }
    }
  }

  // Shuffle deterministically
  pool = seededShuffle(pool, seed);

  // Trim to requested count (0 = all)
  if (count > 0 && pool.length > count) {
    pool = pool.slice(0, count);
  }

  return pool;
}

// ---------------------------------------------------------------------------
// Category metadata hook
// ---------------------------------------------------------------------------

export function useCategoryMeta(): CategoryMeta[] {
  return useMemo(() => {
    const verbs = getAllVerbs();

    const categories: { id: DrillCategory; label: string; description: string }[] = [
      { id: 'all', label: 'All verbs', description: 'Complete verb database' },
      { id: 'regular', label: 'Regular verbs', description: 'Predictable conjugation patterns' },
      { id: 'irregular', label: 'Irregular verbs', description: 'Verbs with stem changes' },
      { id: 'separable', label: 'Separable verbs', description: 'Verbs with detachable prefixes' },
      { id: 'modals', label: 'Modal verbs', description: 'kunnen, mogen, moeten, willen…' },
      { id: 'zijn-verbs', label: 'zijn-auxiliary', description: 'Verbs that use zijn in perfect tense' },
    ];

    return categories.map((c) => ({
      ...c,
      verbCount: filterVerbs(verbs, c.id).length,
    }));
  }, []);
}
