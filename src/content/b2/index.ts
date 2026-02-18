import { Topic } from '@/content/types';
import { complexWordOrder } from './topics/complex-word-order';
import { formalWritingStyle } from './topics/formal-writing-style';
import { advancedModalVerbs } from './topics/advanced-modal-verbs';
import { discourseMarkers } from './topics/discourse-markers';
import { nominalization } from './topics/nominalization';
import { subjectiveIdioms } from './topics/subjunctive-idioms';
import { advancedRelativeClauses } from './topics/advanced-relative-clauses';
import { registerStyle } from './topics/register-style';

export const b2Topics: Topic[] = [
  complexWordOrder,
  formalWritingStyle,
  advancedModalVerbs,
  discourseMarkers,
  nominalization,
  subjectiveIdioms,
  advancedRelativeClauses,
  registerStyle,
];
