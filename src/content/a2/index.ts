import { Topic } from '@/content/types';
import { perfectumRegular } from './topics/perfectum-regular';
import { perfectumIrregular } from './topics/perfectum-irregular';
import { separableVerbs } from './topics/separable-verbs';
import { modalVerbs } from './topics/modal-verbs';
import { prepositionsTime } from './topics/prepositions-time';
import { conjunctionsSubordinate } from './topics/conjunctions-subordinate';
import { imperfectum } from './topics/imperfectum';
import { reflexiveVerbs } from './topics/reflexive-verbs';
import { comparativeSuperlative } from './topics/comparative-superlative';
import { formalEmailWriting } from './topics/formal-email-writing';

export const a2Topics: Topic[] = [
  perfectumRegular,
  perfectumIrregular,
  separableVerbs,
  modalVerbs,
  prepositionsTime,
  conjunctionsSubordinate,
  imperfectum,
  reflexiveVerbs,
  comparativeSuperlative,
  formalEmailWriting,
];
