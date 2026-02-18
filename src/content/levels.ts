import { LevelDefinition } from './types';

export const levels: LevelDefinition[] = [
  {
    id: 'a0',
    name: 'A0 - Starter',
    shortName: 'A0',
    description:
      'Absolute beginner level. Learn the Dutch alphabet, pronunciation, basic greetings, numbers, and essential everyday phrases needed to get started.',
    topicIds: [
      'alphabet-pronunciation',
      'basic-greetings',
      'numbers-counting',
      'everyday-phrases',
      'days-months-seasons',
      'telling-time',
      'colors-descriptions',
      'family-members',
    ],
  },
  {
    id: 'a1',
    name: 'A1 - Breakthrough',
    shortName: 'A1',
    description:
      'Build your foundation in Dutch grammar. Learn present tense verbs, articles, word order, negation, and basic sentence construction for everyday and workplace situations.',
    topicIds: [
      'present-tense-regular',
      'subject-pronouns',
      'de-het-articles',
      'word-order-main-clause',
      'hebben-zijn',
      'negation-niet-geen',
      'question-words',
      'adjectives-basics',
    ],
    examInfo: 'Preparation for Inburgeringsexamen (A2 target)',
  },
  {
    id: 'a2',
    name: 'A2 - Waystage',
    shortName: 'A2',
    description:
      'Expand your Dutch with more complex grammar: perfect tense, separable verbs, modal verbs, conjunctions, and formal communication skills required for the Inburgeringsexamen.',
    topicIds: [
      'perfectum-regular',
      'perfectum-irregular',
      'separable-verbs',
      'modal-verbs',
      'prepositions-time',
      'conjunctions-subordinate',
      'imperfectum',
      'reflexive-verbs',
      'comparative-superlative',
      'formal-email-writing',
    ],
    examInfo: 'Inburgeringsexamen level',
  },
  {
    id: 'b1',
    name: 'B1 - Threshold',
    shortName: 'B1',
    description:
      'Intermediate Dutch grammar including subordinate clauses, passive voice, conditionals, and professional communication for the workplace.',
    topicIds: [
      'plural-formation',
      'passive-voice',
      'relative-clauses',
      'infinitive-constructions',
      'prepositions-place',
      'word-formation',
      'conditional-sentences',
      'reported-speech',
      'conjunctions-connectors',
      'participles-adjectives',
    ],
    examInfo: 'Staatsexamen NT2 Programma I',
  },
  {
    id: 'b2',
    name: 'B2 - Vantage',
    shortName: 'B2',
    description:
      'Advanced grammar and nuanced language use. Complex sentence structures, formal writing, and professional Dutch at an advanced level.',
    topicIds: [
      'complex-word-order',
      'formal-writing-style',
      'advanced-modal-verbs',
      'discourse-markers',
      'nominalization',
      'subjunctive-idioms',
      'advanced-relative-clauses',
      'register-style',
    ],
    examInfo: 'Staatsexamen NT2 Programma II',
  },
];

export function getLevelDefinition(levelId: string): LevelDefinition | undefined {
  return levels.find((l) => l.id === levelId);
}
