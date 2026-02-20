// === LEVEL DEFINITIONS ===

export type CEFRLevel = 'a0' | 'a1' | 'a2' | 'b1' | 'b2';

export interface LevelDefinition {
  id: CEFRLevel;
  name: string;
  shortName: string;
  description: string;
  topicIds: string[];
  examInfo?: string;
}

// === TOPIC / LESSON DEFINITIONS ===

export interface LessonUnit {
  id: string;
  title: string;
  topicId?: string;
  sections: LessonSection[];
}

export type Topic = {
  id: string;
  levelId: CEFRLevel;
  title: string;
  subtitle?: string;
  order: number;
  estimatedMinutes: number;
  prerequisites?: string[];
  exercises: Exercise[];
} & (
  | { lesson: Lesson; lessons?: never }
  | { lessons: LessonUnit[]; lesson?: never }
);

export interface Lesson {
  sections: LessonSection[];
}

export type LessonSection =
  | GrammarRuleSection
  | ExampleSection
  | CommonMistakesSection
  | GrammarTableSection
  | WorkplaceContextSection
  | NoteSection;

interface BaseLessonSection {
  type: string;
  title?: string;
}

export interface GrammarRuleSection extends BaseLessonSection {
  type: 'grammar-rule';
  rule: string;
  explanation: string;
}

export interface ExampleSection extends BaseLessonSection {
  type: 'examples';
  examples: ExampleSentence[];
}

export interface ExampleSentence {
  dutch: string;
  english: string;
  highlight?: string | string[];
  note?: string;
}

export interface CommonMistakesSection extends BaseLessonSection {
  type: 'common-mistakes';
  mistakes: {
    incorrect: string;
    correct: string;
    explanation: string;
  }[];
}

export interface GrammarTableSection extends BaseLessonSection {
  type: 'grammar-table';
  headers: string[];
  rows: string[][];
  caption?: string;
  audioColumns?: number[];
}

export interface WorkplaceContextSection extends BaseLessonSection {
  type: 'workplace-context';
  scenario: string;
  examples: ExampleSentence[];
  note?: string;
}

export interface NoteSection extends BaseLessonSection {
  type: 'note';
  title?: string;
  content: string;
  variant: 'info' | 'tip' | 'warning';
}

// === EXERCISE DEFINITIONS ===

export type ExerciseType =
  | 'fill-in-the-blank'
  | 'word-order'
  | 'multiple-choice'
  | 'sentence-builder'
  | 'translation'
  | 'error-correction'
  | 'writing-prompt'
  | 'reading-comprehension';

export interface Exercise {
  id: string;
  type: ExerciseType;
  instruction?: string;
  topicId?: string;
  difficulty: 'controlled' | 'guided' | 'open';
  content: ExerciseContent;
}

export type ExerciseContent =
  | FillInTheBlankContent
  | WordOrderContent
  | MultipleChoiceContent
  | SentenceBuilderContent
  | TranslationContent
  | ErrorCorrectionContent
  | WritingPromptContent
  | ReadingComprehensionContent;

export interface FillInTheBlankContent {
  type: 'fill-in-the-blank';
  sentences: {
    before: string;
    after: string;
    correctAnswer: string;
    acceptableAnswers?: string[];
    hint?: string;
  }[];
}

export interface WordOrderContent {
  type: 'word-order';
  items: {
    shuffledWords: string[];
    correctOrder: string[];
    translation?: string;
  }[];
}

export interface MultipleChoiceContent {
  type: 'multiple-choice';
  questions: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
}

export interface SentenceBuilderContent {
  type: 'sentence-builder';
  items: {
    availableWords: string[];
    correctSentence: string;
    englishPrompt: string;
  }[];
}

export interface TranslationContent {
  type: 'translation';
  items: {
    english: string;
    correctDutch: string;
    acceptableAnswers?: string[];
    keyVocabulary?: { dutch: string; english: string }[];
  }[];
}

export interface ErrorCorrectionContent {
  type: 'error-correction';
  items: {
    incorrectSentence: string;
    correctedSentence: string;
    errorExplanation: string;
  }[];
}

export interface WritingPromptContent {
  type: 'writing-prompt';
  prompt: string;
  context: string;
  guidelines: string[];
  sampleResponse?: string;
  keyPhrases?: string[];
}

export interface ReadingComprehensionContent {
  type: 'reading-comprehension';
  passage: string;
  passageTitle?: string;
  questions: {
    question: string;
    options?: string[];
    correctAnswer: string;
    explanation?: string;
  }[];
}

// === EXAM PRACTICE DEFINITIONS ===

export interface ExamPracticeTest {
  id: string;
  examType: 'inburgering-a2' | 'staatsexamen-nt2-i' | 'staatsexamen-nt2-ii' | 'knm';
  skill: 'reading' | 'writing' | 'speaking' | 'knowledge';
  year?: number;
  title: string;
  description: string;
  timeLimitMinutes: number;
  passingScore?: number;
  totalQuestions: number;
  sections: ExamSection[];
}

export interface ExamSection {
  id: string;
  title?: string;
  passage?: string;
  passageTitle?: string;
  instructions: string;
  questions: ExamQuestion[];
}

export interface ExamQuestion {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'writing';
  question: string;
  options: string[];
  correctIndex: number;
  // writing-type fields (ignored for multiple-choice / true-false)
  writingPrompt?: string;
  writingContext?: string;
  writingGuidelines?: string[];
  writingSampleResponse?: string;
  writingKeyPhrases?: string[];
  explanation?: string;
  topicArea?: string;
}
