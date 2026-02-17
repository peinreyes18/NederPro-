'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import Link from 'next/link';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import PronunciationButton from '@/components/ui/PronunciationButton';
import { useVocabProgress, MasteredWord } from '@/hooks/useVocabProgress';
import { vocabularyCategories, VocabularyWord } from '@/content/vocabulary';
import { shuffleArray, normalizeAnswer } from '@/lib/utils';

// --- Utilities ---

type PracticeMode = 'multiple-choice' | 'type-answer';
type QuestionDirection = 'dutch-to-english' | 'english-to-dutch';

interface QuizQuestion {
  word: VocabularyWord;
  categoryId: string;
  categoryName: string;
  categoryIcon: string;
  direction: QuestionDirection;
  options: string[];
  correctAnswer: string;
}

// Lazily computed — only created when quiz questions are generated
let _allWords: VocabularyWord[] | null = null;
function getAllWords(): VocabularyWord[] {
  if (!_allWords) _allWords = vocabularyCategories.flatMap((c) => c.words);
  return _allWords;
}

function generateQuizQuestions(masteredWords: MasteredWord[], count: number): QuizQuestion[] {
  const selected = shuffleArray(masteredWords).slice(0, count);

  return selected.map((mw) => {
    const direction: QuestionDirection =
      Math.random() > 0.5 ? 'dutch-to-english' : 'english-to-dutch';
    const correctAnswer = direction === 'dutch-to-english' ? mw.word.english : mw.word.dutch;

    const field = direction === 'dutch-to-english' ? 'english' : 'dutch';
    const distractors = shuffleArray(
      getAllWords().filter((w) => w[field] !== mw.word[field]).map((w) => w[field])
    ).slice(0, 3);
    const options = shuffleArray([correctAnswer, ...distractors]);

    return {
      word: mw.word,
      categoryId: mw.categoryId,
      categoryName: mw.categoryName,
      categoryIcon: mw.categoryIcon,
      direction,
      options,
      correctAnswer,
    };
  });
}

// --- Mode Selector ---

function ModeSelector({
  selected,
  onSelect,
}: {
  selected: PracticeMode;
  onSelect: (mode: PracticeMode) => void;
}) {
  const modes: { id: PracticeMode; label: string; icon: string }[] = [
    { id: 'multiple-choice', label: 'Multiple Choice', icon: 'A' },
    { id: 'type-answer', label: 'Type Answer', icon: '⌨' },
  ];

  return (
    <div className="grid grid-cols-2 gap-2 mb-6">
      {modes.map((mode) => (
        <button
          key={mode.id}
          onClick={() => onSelect(mode.id)}
          className={`px-3 py-2.5 rounded-lg border-2 text-sm font-medium transition-all text-center ${
            selected === mode.id
              ? 'border-accent bg-accent-light text-accent-hover'
              : 'border-border hover:border-accent/30 text-muted hover:text-primary'
          }`}
        >
          <span className="block text-lg mb-0.5">{mode.icon}</span>
          {mode.label}
        </button>
      ))}
    </div>
  );
}

// --- Multiple Choice Mode ---

function MultipleChoiceMode({
  question,
  onAnswer,
}: {
  question: QuizQuestion;
  onAnswer: (correct: boolean) => void;
}) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleSelect = (answer: string) => {
    if (isAnswered) return;
    setSelectedAnswer(answer);
    setIsAnswered(true);
    onAnswer(answer === question.correctAnswer);
  };

  const prompt =
    question.direction === 'dutch-to-english' ? question.word.dutch : question.word.english;
  const promptLabel =
    question.direction === 'dutch-to-english'
      ? 'What does this mean in English?'
      : 'What is this in Dutch?';

  return (
    <>
      <div className="text-center mb-8">
        <p className="text-sm text-muted mb-2">{promptLabel}</p>
        <div className="flex items-center justify-center gap-2">
          {question.direction === 'dutch-to-english' && <PronunciationButton text={prompt} />}
          <span className="text-2xl font-bold text-primary">{prompt}</span>
        </div>
        <div className="flex items-center justify-center gap-2 mt-2">
          <Badge variant="accent">
            {question.direction === 'dutch-to-english' ? 'Dutch → English' : 'English → Dutch'}
          </Badge>
          <Badge>
            {question.categoryIcon} {question.categoryName}
          </Badge>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {question.options.map((option, index) => {
          const isCorrect = option === question.correctAnswer;
          const isSelected = option === selectedAnswer;

          let optionStyle = 'border-border hover:border-accent/50 hover:bg-surface-hover';
          if (isAnswered) {
            if (isCorrect) {
              optionStyle = 'border-success bg-success/5 text-success';
            } else if (isSelected && !isCorrect) {
              optionStyle = 'border-error bg-error/5 text-error';
            } else {
              optionStyle = 'border-border opacity-50';
            }
          }

          return (
            <button
              key={index}
              onClick={() => handleSelect(option)}
              disabled={isAnswered}
              className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all text-sm font-medium ${optionStyle} ${
                !isAnswered ? 'cursor-pointer' : 'cursor-default'
              }`}
            >
              <div className="flex items-center gap-2">
                {isAnswered && isCorrect && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
                {isAnswered && isSelected && !isCorrect && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                )}
                <span>{option}</span>
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
}

// --- Type Answer Mode ---

function TypeAnswerMode({
  question,
  onAnswer,
}: {
  question: QuizQuestion;
  onAnswer: (correct: boolean) => void;
}) {
  const [input, setInput] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isAnswered || !input.trim()) return;

    const userAnswer = normalizeAnswer(input);
    const acceptedAnswers = question.correctAnswer.split('/').map((a) => normalizeAnswer(a));
    const correct = acceptedAnswers.some((a) => a === userAnswer);
    setIsCorrect(correct);
    setIsAnswered(true);
    onAnswer(correct);
  };

  const prompt =
    question.direction === 'dutch-to-english' ? question.word.dutch : question.word.english;
  const promptLabel =
    question.direction === 'dutch-to-english'
      ? 'Type the English translation:'
      : 'Type the Dutch translation:';

  return (
    <>
      <div className="text-center mb-8">
        <p className="text-sm text-muted mb-2">{promptLabel}</p>
        <div className="flex items-center justify-center gap-2">
          {question.direction === 'dutch-to-english' && <PronunciationButton text={prompt} />}
          <span className="text-2xl font-bold text-primary">{prompt}</span>
        </div>
        <div className="flex items-center justify-center gap-2 mt-2">
          <Badge variant="accent">
            {question.direction === 'dutch-to-english' ? 'Dutch → English' : 'English → Dutch'}
          </Badge>
          <Badge>
            {question.categoryIcon} {question.categoryName}
          </Badge>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isAnswered}
            placeholder="Type your answer..."
            className={`w-full px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all outline-none ${
              isAnswered
                ? isCorrect
                  ? 'border-success bg-success/5 text-success'
                  : 'border-error bg-error/5 text-error'
                : 'border-border focus:border-accent focus:ring-1 focus:ring-accent'
            }`}
          />
        </div>

        {!isAnswered && (
          <Button type="submit" className="w-full" disabled={!input.trim()}>
            Check Answer
          </Button>
        )}

        {isAnswered && !isCorrect && (
          <div className="bg-surface rounded-lg p-3 mt-2">
            <p className="text-sm text-muted">
              Correct answer: <span className="font-bold text-primary">{question.correctAnswer}</span>
            </p>
          </div>
        )}
      </form>
    </>
  );
}

// --- Results Screen ---

interface MissedQuizWord {
  word: VocabularyWord;
  categoryIcon: string;
  categoryName: string;
  categoryId: string;
}

function QuizResults({
  correctCount,
  totalCount,
  missedWords,
  onRestart,
  onReviewMissed,
}: {
  correctCount: number;
  totalCount: number;
  missedWords: MissedQuizWord[];
  onRestart: () => void;
  onReviewMissed: () => void;
}) {
  const scorePercent = Math.round((correctCount / totalCount) * 100);

  return (
    <Card className="text-center py-12">
      <h1 className="text-3xl font-bold text-primary mb-2">Quiz Complete!</h1>
      <p className="text-muted mb-6">🏆 Cross-Category Vocabulary Quiz</p>

      <div className="text-5xl font-bold mb-2">
        <span className={scorePercent >= 70 ? 'text-success' : scorePercent >= 40 ? 'text-warning' : 'text-error'}>
          {scorePercent}%
        </span>
      </div>
      <p className="text-muted mb-6">
        {correctCount} of {totalCount} correct
      </p>

      {missedWords.length > 0 && (
        <div className="max-w-sm mx-auto mb-6 text-left">
          <p className="text-sm font-semibold text-primary mb-2">Words you missed:</p>
          <div className="space-y-1">
            {missedWords.map((mw, i) => (
              <div key={i} className="flex items-center justify-between bg-surface rounded px-3 py-1.5 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-xs">{mw.categoryIcon}</span>
                  <span className="font-medium text-primary">{mw.word.dutch}</span>
                </div>
                <span className="text-muted">{mw.word.english}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-wrap justify-center gap-3">
        {missedWords.length > 0 && (
          <Button onClick={onReviewMissed}>Review Missed Words</Button>
        )}
        <Button variant={missedWords.length > 0 ? 'outline' : 'primary'} onClick={onRestart}>
          New Quiz
        </Button>
        <Link href="/vocabulary">
          <Button variant="ghost">All Categories</Button>
        </Link>
      </div>
    </Card>
  );
}

// --- Empty State ---

function EmptyState() {
  return (
    <Card className="text-center py-12">
      <span className="text-5xl mb-4 block">📚</span>
      <h2 className="text-2xl font-bold text-primary mb-3">No Mastered Words Yet</h2>
      <p className="text-muted mb-2 max-w-md mx-auto">
        Practice vocabulary in any category first! Words you get correct will appear here in the cross-category quiz.
      </p>
      <p className="text-sm text-muted mb-6">
        Go to a category and click <span className="font-semibold">&quot;Practice These Words&quot;</span> to get started.
      </p>
      <Link href="/vocabulary">
        <Button>Browse Categories</Button>
      </Link>
    </Card>
  );
}

// --- Quiz Size Selector ---

function QuizSizeSelector({
  maxWords,
  selected,
  onSelect,
}: {
  maxWords: number;
  selected: number;
  onSelect: (size: number) => void;
}) {
  const sizes = [10, 20, 30, 50].filter((s) => s <= maxWords);
  if (maxWords > 0 && !sizes.includes(maxWords) && maxWords < 50) {
    sizes.push(maxWords);
    sizes.sort((a, b) => a - b);
  }
  // Always include an "All" option if there are more than 10
  const showAll = maxWords > 10;

  return (
    <div className="flex flex-wrap items-center gap-2 mb-6">
      <span className="text-sm text-muted font-medium">Questions:</span>
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => onSelect(size)}
          className={`px-3 py-1.5 rounded-lg border text-sm font-medium transition-all ${
            selected === size
              ? 'border-accent bg-accent-light text-accent-hover'
              : 'border-border hover:border-accent/30 text-muted hover:text-primary'
          }`}
        >
          {size}
        </button>
      ))}
      {showAll && (
        <button
          onClick={() => onSelect(maxWords)}
          className={`px-3 py-1.5 rounded-lg border text-sm font-medium transition-all ${
            selected === maxWords && !sizes.includes(maxWords)
              ? 'border-accent bg-accent-light text-accent-hover'
              : selected === maxWords
              ? 'border-accent bg-accent-light text-accent-hover'
              : 'border-border hover:border-accent/30 text-muted hover:text-primary'
          }`}
        >
          All ({maxWords})
        </button>
      )}
    </div>
  );
}

// --- Main Page ---

export default function VocabularyQuizPage() {
  const { getMasteredWords, recordWordResult, isLoaded } = useVocabProgress();
  const masteredWords = getMasteredWords;

  const [quizSize, setQuizSize] = useState(20);
  const [practiceMode, setPracticeMode] = useState<PracticeMode>('multiple-choice');
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [missedWords, setMissedWords] = useState<MissedQuizWord[]>([]);
  const [answered, setAnswered] = useState(false);
  const [lastCorrect, setLastCorrect] = useState(false);
  const [finished, setFinished] = useState(false);
  const [isReviewRound, setIsReviewRound] = useState(false);

  const effectiveSize = Math.min(quizSize, masteredWords.length);

  const startQuiz = useCallback(() => {
    const qs = generateQuizQuestions(masteredWords, effectiveSize);
    setQuestions(qs);
    setCurrentIndex(0);
    setCorrectCount(0);
    setMissedWords([]);
    setAnswered(false);
    setLastCorrect(false);
    setFinished(false);
    setStarted(true);
    setIsReviewRound(false);
  }, [masteredWords, effectiveSize]);

  const handleAnswer = useCallback(
    (correct: boolean) => {
      setAnswered(true);
      setLastCorrect(correct);
      const q = questions[currentIndex];
      recordWordResult(q.categoryId, q.word.dutch, correct);
      if (correct) {
        setCorrectCount((c) => c + 1);
      } else {
        setMissedWords((prev) => {
          if (prev.find((mw) => mw.word.dutch === q.word.dutch)) return prev;
          return [
            ...prev,
            {
              word: q.word,
              categoryIcon: q.categoryIcon,
              categoryName: q.categoryName,
              categoryId: q.categoryId,
            },
          ];
        });
      }
    },
    [currentIndex, questions, recordWordResult]
  );

  const handleNext = useCallback(() => {
    if (currentIndex + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrentIndex((i) => i + 1);
      setAnswered(false);
      setLastCorrect(false);
    }
  }, [currentIndex, questions.length]);

  const handleRestart = useCallback(() => {
    const qs = generateQuizQuestions(masteredWords, effectiveSize);
    setQuestions(qs);
    setCurrentIndex(0);
    setCorrectCount(0);
    setMissedWords([]);
    setAnswered(false);
    setLastCorrect(false);
    setFinished(false);
    setIsReviewRound(false);
  }, [masteredWords, effectiveSize]);

  const handleReviewMissed = useCallback(() => {
    // Build MasteredWord-like objects from missed words to reuse question generation
    const missedMastered: MasteredWord[] = missedWords.map((mw) => ({
      word: mw.word,
      categoryId: mw.categoryId,
      categoryName: mw.categoryName,
      categoryIcon: mw.categoryIcon,
      correctCount: 0,
      incorrectCount: 0,
      lastPracticed: '',
    }));
    const qs = generateQuizQuestions(missedMastered, missedMastered.length);
    setQuestions(qs);
    setCurrentIndex(0);
    setCorrectCount(0);
    setMissedWords([]);
    setAnswered(false);
    setLastCorrect(false);
    setFinished(false);
    setIsReviewRound(true);
  }, [missedWords]);

  const handleModeChange = useCallback(
    (mode: PracticeMode) => {
      setPracticeMode(mode);
      if (started) {
        const qs = generateQuizQuestions(masteredWords, effectiveSize);
        setQuestions(qs);
        setCurrentIndex(0);
        setCorrectCount(0);
        setMissedWords([]);
        setAnswered(false);
        setLastCorrect(false);
        setFinished(false);
        setIsReviewRound(false);
      }
    },
    [masteredWords, effectiveSize, started]
  );

  // Loading state
  if (!isLoaded) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        <Breadcrumb
          items={[
            { label: 'Vocabulary', href: '/vocabulary' },
            { label: 'Quiz' },
          ]}
        />
        <div className="text-center py-12 text-muted">Loading...</div>
      </div>
    );
  }

  // Empty state
  if (masteredWords.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        <Breadcrumb
          items={[
            { label: 'Vocabulary', href: '/vocabulary' },
            { label: 'Quiz' },
          ]}
        />
        <EmptyState />
      </div>
    );
  }

  // Setup screen (before quiz starts)
  if (!started) {
    // Group mastered words by category for the summary
    const categoryBreakdown: Record<string, { icon: string; name: string; count: number }> = {};
    for (const mw of masteredWords) {
      if (!categoryBreakdown[mw.categoryId]) {
        categoryBreakdown[mw.categoryId] = { icon: mw.categoryIcon, name: mw.categoryName, count: 0 };
      }
      categoryBreakdown[mw.categoryId].count++;
    }

    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        <Breadcrumb
          items={[
            { label: 'Vocabulary', href: '/vocabulary' },
            { label: 'Quiz' },
          ]}
        />

        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">🏆</span>
          <h1 className="text-3xl font-bold text-primary">Vocabulary Quiz</h1>
        </div>
        <p className="text-muted mb-8">
          Test yourself on words you&apos;ve mastered across all categories.
        </p>

        <Card className="mb-6">
          <h2 className="font-semibold text-primary mb-3">Your Mastered Words</h2>
          <div className="grid gap-2 sm:grid-cols-2">
            {Object.entries(categoryBreakdown).map(([catId, info]) => (
              <div
                key={catId}
                className="flex items-center justify-between bg-surface rounded-lg px-3 py-2"
              >
                <div className="flex items-center gap-2">
                  <span>{info.icon}</span>
                  <span className="text-sm font-medium text-primary">{info.name}</span>
                </div>
                <Badge variant="accent">{info.count}</Badge>
              </div>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-border flex items-center justify-between">
            <span className="text-sm font-medium text-primary">Total mastered</span>
            <Badge variant="accent">{masteredWords.length} words</Badge>
          </div>
        </Card>

        <QuizSizeSelector
          maxWords={masteredWords.length}
          selected={effectiveSize}
          onSelect={setQuizSize}
        />

        <ModeSelector selected={practiceMode} onSelect={handleModeChange} />

        <Button onClick={startQuiz} className="w-full" size="lg">
          Start Quiz ({effectiveSize} questions)
        </Button>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  // Results screen
  if (finished) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        <Breadcrumb
          items={[
            { label: 'Vocabulary', href: '/vocabulary' },
            { label: 'Quiz' },
          ]}
        />
        {isReviewRound && (
          <div className="mb-4 px-3 py-2 bg-accent-light rounded-lg text-sm text-accent-hover font-medium text-center">
            Review Round Complete
          </div>
        )}
        <QuizResults
          correctCount={correctCount}
          totalCount={questions.length}
          missedWords={missedWords}
          onRestart={handleRestart}
          onReviewMissed={handleReviewMissed}
        />
      </div>
    );
  }

  // Quiz in progress
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
      <Breadcrumb
        items={[
          { label: 'Vocabulary', href: '/vocabulary' },
          { label: 'Quiz' },
        ]}
      />

      <ModeSelector selected={practiceMode} onSelect={handleModeChange} />

      {isReviewRound && (
        <div className="mb-4 px-3 py-2 bg-accent-light rounded-lg text-sm text-accent-hover font-medium text-center">
          Reviewing missed words
        </div>
      )}

      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm text-muted mb-1.5">
          <span>
            Question {currentIndex + 1} of {questions.length}
          </span>
          <span>{correctCount} correct</span>
        </div>
        <div className="w-full bg-surface rounded-full h-2">
          <div
            className="bg-accent h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <Card>
        {practiceMode === 'multiple-choice' && (
          <MultipleChoiceMode
            key={`mc-${currentIndex}`}
            question={currentQuestion}
            onAnswer={handleAnswer}
          />
        )}

        {practiceMode === 'type-answer' && (
          <TypeAnswerMode
            key={`ta-${currentIndex}`}
            question={currentQuestion}
            onAnswer={handleAnswer}
          />
        )}

        {/* Feedback & next */}
        {answered && (
          <div className="mt-6 pt-4 border-t border-border">
            {lastCorrect ? (
              <p className="text-success font-medium text-sm mb-3">Correct!</p>
            ) : (
              <p className="text-error font-medium text-sm mb-3">
                Incorrect. The answer is:{' '}
                <span className="font-bold">{currentQuestion.correctAnswer}</span>
              </p>
            )}

            {currentQuestion.word.example && (
              <div className="bg-surface rounded-lg p-3 mb-4">
                <div className="flex items-center gap-1.5">
                  <PronunciationButton text={currentQuestion.word.example} />
                  <span className="text-sm text-primary">{currentQuestion.word.example}</span>
                </div>
                {currentQuestion.word.exampleTranslation && (
                  <p className="text-xs text-muted mt-1 ml-7">
                    {currentQuestion.word.exampleTranslation}
                  </p>
                )}
              </div>
            )}

            <Button onClick={handleNext} className="w-full">
              {currentIndex + 1 >= questions.length ? 'See Results' : 'Next Question'}
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}
