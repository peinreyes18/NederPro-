import { Topic } from '@/content/types';
import { pluralFormation } from './topics/plural-formation';
import { passiveVoice } from './topics/passive-voice';
import { relativeClauses } from './topics/relative-clauses';
import { infinitiveConstructions } from './topics/infinitive-constructions';
import { prepositionsPlace } from './topics/prepositions-place';
import { wordFormation } from './topics/word-formation';
import { conditionalSentences } from './topics/conditional-sentences';
import { reportedSpeech } from './topics/reported-speech';
import { conjunctionsConnectors } from './topics/conjunctions-connectors';
import { participlesAdjectives } from './topics/participles-adjectives';

export const b1Topics: Topic[] = [
  pluralFormation,
  passiveVoice,
  relativeClauses,
  infinitiveConstructions,
  prepositionsPlace,
  wordFormation,
  conditionalSentences,
  reportedSpeech,
  conjunctionsConnectors,
  participlesAdjectives,
];
