import { Topic } from '@/content/types';
import { presentTenseRegular } from './topics/present-tense-regular';
import { subjectPronouns } from './topics/subject-pronouns';
import { deHetArticles } from './topics/de-het-articles';
import { wordOrderMainClause } from './topics/word-order-main-clause';
import { hebbenZijn } from './topics/hebben-zijn';
import { negationNietGeen } from './topics/negation-niet-geen';
import { questionWords } from './topics/question-words';
import { adjectivesBasics } from './topics/adjectives-basics';

export const a1Topics: Topic[] = [
  presentTenseRegular,
  subjectPronouns,
  deHetArticles,
  wordOrderMainClause,
  hebbenZijn,
  negationNietGeen,
  questionWords,
  adjectivesBasics,
];
