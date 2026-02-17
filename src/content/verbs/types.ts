export interface TenseConjugation {
  ik: string;
  jij: string;
  u: string;
  hijZijHet: string;
  wij: string;
  jullie: string;
  zij: string;
}

export interface VerbConjugation {
  /** The infinitive form, e.g. "werken" */
  infinitive: string;
  /** English translation, e.g. "to work" */
  translation: string;
  /** Which auxiliary verb is used in perfect tense */
  auxiliary: 'hebben' | 'zijn' | 'hebben/zijn';
  /** Past participle, e.g. "gewerkt" */
  pastParticiple: string;
  /** For separable verbs, e.g. "op" for "opbellen" */
  separablePrefix?: string;
  /** Whether this is a reflexive verb (zich ...) */
  reflexive?: boolean;
  /** Whether conjugation follows regular patterns */
  isRegular: boolean;
  /** Present tense (Onvoltooid Tegenwoordige Tijd - OTT) */
  present: TenseConjugation;
  /** Simple past (Onvoltooid Verleden Tijd - OVT) */
  pastSimple: TenseConjugation;
  /** Imperative form, e.g. "werk!" */
  imperative: string;
  /** Example sentences showing the verb in use */
  examples: { dutch: string; english: string }[];
  /** Additional notes about usage, spelling, or irregularities */
  notes?: string;
}

/** Pronouns used as row labels in conjugation tables */
export const PRONOUN_LABELS = [
  'ik',
  'jij / je',
  'u',
  'hij / zij / het',
  'wij / we',
  'jullie',
  'zij / ze (plural)',
] as const;
