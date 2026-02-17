'use client';

import { use, useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import PronunciationButton from '@/components/ui/PronunciationButton';
import { getVocabularyCategory, VocabularyWord } from '@/content/vocabulary';
import { useVocabProgress } from '@/hooks/useVocabProgress';
import { shuffleArray, normalizeAnswer } from '@/lib/utils';

// --- Utilities ---

type PracticeMode = 'multiple-choice' | 'type-answer' | 'flashcards';
type QuestionDirection = 'dutch-to-english' | 'english-to-dutch';

function generateOptions(
  correctWord: VocabularyWord,
  allWords: VocabularyWord[],
  mode: QuestionDirection
): string[] {
  const field = mode === 'dutch-to-english' ? 'english' : 'dutch';
  const correctAnswer = correctWord[field];
  const distractors = allWords
    .filter((w) => w[field] !== correctAnswer)
    .map((w) => w[field]);
  const shuffledDistractors = shuffleArray(distractors).slice(0, 3);
  return shuffleArray([correctAnswer, ...shuffledDistractors]);
}

interface Question {
  word: VocabularyWord;
  direction: QuestionDirection;
  options: string[];
  correctAnswer: string;
}

function generateQuestions(words: VocabularyWord[], allWords: VocabularyWord[]): Question[] {
  const shuffledWords = shuffleArray(words);
  return shuffledWords.map((word) => {
    const direction: QuestionDirection =
      Math.random() > 0.5 ? 'dutch-to-english' : 'english-to-dutch';
    const correctAnswer = direction === 'dutch-to-english' ? word.english : word.dutch;
    const options = generateOptions(word, allWords, direction);
    return { word, direction, options, correctAnswer };
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
    { id: 'flashcards', label: 'Flashcards', icon: '↻' },
  ];

  return (
    <div className="grid grid-cols-3 gap-2 mb-6">
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
  question: Question;
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
        <Badge variant="accent" className="mt-2">
          {question.direction === 'dutch-to-english' ? 'Dutch → English' : 'English → Dutch'}
        </Badge>
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
  question: Question;
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
        <Badge variant="accent" className="mt-2">
          {question.direction === 'dutch-to-english' ? 'Dutch → English' : 'English → Dutch'}
        </Badge>
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

// --- Flashcard Mode ---

function FlashcardMode({
  words,
  categoryName,
  categoryIcon,
  categoryId,
  onRecordWord,
}: {
  words: VocabularyWord[];
  categoryName: string;
  categoryIcon: string;
  categoryId: string;
  onRecordWord?: (dutchWord: string, correct: boolean) => void;
}) {
  const [cards] = useState(() => shuffleArray(words));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [knewCount, setKnewCount] = useState(0);
  const [didntKnowWords, setDidntKnowWords] = useState<VocabularyWord[]>([]);
  const [finished, setFinished] = useState(false);

  const currentCard = cards[currentIndex];

  const handleFlip = () => setFlipped(true);

  const handleKnew = () => {
    setKnewCount((c) => c + 1);
    onRecordWord?.(currentCard.dutch, true);
    advance();
  };

  const handleDidntKnow = () => {
    setDidntKnowWords((prev) => [...prev, currentCard]);
    onRecordWord?.(currentCard.dutch, false);
    advance();
  };

  const advance = () => {
    if (currentIndex + 1 >= cards.length) {
      setFinished(true);
    } else {
      setCurrentIndex((i) => i + 1);
      setFlipped(false);
    }
  };

  if (finished) {
    const scorePercent = Math.round((knewCount / cards.length) * 100);
    return (
      <Card className="text-center py-12">
        <h2 className="text-3xl font-bold text-primary mb-2">Flashcards Complete</h2>
        <p className="text-muted mb-6">
          {categoryIcon} {categoryName}
        </p>
        <div className="text-5xl font-bold mb-2">
          <span className={scorePercent >= 70 ? 'text-success' : scorePercent >= 40 ? 'text-warning' : 'text-error'}>
            {scorePercent}%
          </span>
        </div>
        <p className="text-muted mb-4">
          {knewCount} of {cards.length} known
        </p>

        {didntKnowWords.length > 0 && (
          <div className="max-w-sm mx-auto mb-6 text-left">
            <p className="text-sm font-semibold text-primary mb-2">Words to review:</p>
            <div className="space-y-1">
              {didntKnowWords.map((w, i) => (
                <div key={i} className="flex items-center justify-between bg-surface rounded px-3 py-1.5 text-sm">
                  <span className="font-medium text-primary">{w.dutch}</span>
                  <span className="text-muted">{w.english}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-3">
          <Button onClick={() => { setCurrentIndex(0); setFlipped(false); setKnewCount(0); setDidntKnowWords([]); setFinished(false); }}>
            Try Again
          </Button>
          <Link href={`/vocabulary/${categoryId}`}>
            <Button variant="outline">Back to Word List</Button>
          </Link>
        </div>
      </Card>
    );
  }

  return (
    <>
      {/* Progress */}
      <div className="flex items-center justify-between text-sm text-muted mb-4">
        <span>Card {currentIndex + 1} of {cards.length}</span>
        <span>{knewCount} known</span>
      </div>
      <div className="w-full bg-surface rounded-full h-2 mb-6">
        <div
          className="bg-accent h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / cards.length) * 100}%` }}
        />
      </div>

      {/* Card */}
      <div
        onClick={!flipped ? handleFlip : undefined}
        className={`border-2 rounded-xl p-8 text-center transition-all min-h-[200px] flex flex-col items-center justify-center ${
          !flipped
            ? 'border-accent/30 bg-background cursor-pointer hover:border-accent hover:shadow-md'
            : 'border-border bg-surface'
        }`}
      >
        <div className="flex items-center gap-2 mb-2">
          <PronunciationButton text={currentCard.dutch} />
          <span className="text-2xl font-bold text-primary">{currentCard.dutch}</span>
        </div>

        {!flipped ? (
          <p className="text-sm text-muted mt-4">Tap to reveal translation</p>
        ) : (
          <>
            <div className="w-12 h-px bg-border my-4" />
            <span className="text-xl text-accent-hover font-semibold">{currentCard.english}</span>
            {currentCard.example && (
              <div className="mt-4 bg-background rounded-lg p-3 w-full max-w-md">
                <div className="flex items-center justify-center gap-1.5">
                  <PronunciationButton text={currentCard.example} />
                  <span className="text-sm text-primary">{currentCard.example}</span>
                </div>
                {currentCard.exampleTranslation && (
                  <p className="text-xs text-muted mt-1">{currentCard.exampleTranslation}</p>
                )}
              </div>
            )}
          </>
        )}
      </div>

      {/* Know / Don't know buttons */}
      {flipped && (
        <div className="grid grid-cols-2 gap-3 mt-4">
          <button
            onClick={handleDidntKnow}
            className="px-4 py-3 rounded-lg border-2 border-error/30 text-error hover:bg-error/5 font-medium text-sm transition-all"
          >
            Didn&apos;t Know
          </button>
          <button
            onClick={handleKnew}
            className="px-4 py-3 rounded-lg border-2 border-success/30 text-success hover:bg-success/5 font-medium text-sm transition-all"
          >
            Knew It
          </button>
        </div>
      )}
    </>
  );
}

// --- Results Screen ---

function ResultsScreen({
  correctCount,
  totalCount,
  missedWords,
  categoryIcon,
  categoryName,
  categoryId,
  onRestart,
  onReviewMissed,
}: {
  correctCount: number;
  totalCount: number;
  missedWords: VocabularyWord[];
  categoryIcon: string;
  categoryName: string;
  categoryId: string;
  onRestart: () => void;
  onReviewMissed: () => void;
}) {
  const scorePercent = Math.round((correctCount / totalCount) * 100);

  return (
    <Card className="text-center py-12">
      <h1 className="text-3xl font-bold text-primary mb-2">Practice Complete</h1>
      <p className="text-muted mb-6">
        {categoryIcon} {categoryName}
      </p>

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
            {missedWords.map((w, i) => (
              <div key={i} className="flex items-center justify-between bg-surface rounded px-3 py-1.5 text-sm">
                <span className="font-medium text-primary">{w.dutch}</span>
                <span className="text-muted">{w.english}</span>
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
          Practice Again
        </Button>
        <Link href={`/vocabulary/${categoryId}`}>
          <Button variant="outline">Back to Word List</Button>
        </Link>
        <Link href="/vocabulary">
          <Button variant="ghost">All Categories</Button>
        </Link>
      </div>
    </Card>
  );
}

// --- Main Page ---

export default function VocabularyPracticePage({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) {
  const { categoryId } = use(params);
  const category = getVocabularyCategory(categoryId);

  if (!category) {
    notFound();
  }

  const { recordWordResult } = useVocabProgress();

  const [practiceMode, setPracticeMode] = useState<PracticeMode>('multiple-choice');
  const [questions, setQuestions] = useState<Question[]>(() =>
    generateQuestions(category.words, category.words)
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [missedWords, setMissedWords] = useState<VocabularyWord[]>([]);
  const [answered, setAnswered] = useState(false);
  const [lastCorrect, setLastCorrect] = useState(false);
  const [finished, setFinished] = useState(false);
  const [isReviewRound, setIsReviewRound] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleAnswer = useCallback(
    (correct: boolean) => {
      setAnswered(true);
      setLastCorrect(correct);
      recordWordResult(categoryId, questions[currentIndex].word.dutch, correct);
      if (correct) {
        setCorrectCount((c) => c + 1);
      } else {
        setMissedWords((prev) => {
          if (prev.find((w) => w.dutch === questions[currentIndex].word.dutch)) return prev;
          return [...prev, questions[currentIndex].word];
        });
      }
    },
    [currentIndex, questions, recordWordResult, categoryId]
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
    setQuestions(generateQuestions(category.words, category.words));
    setCurrentIndex(0);
    setCorrectCount(0);
    setMissedWords([]);
    setAnswered(false);
    setLastCorrect(false);
    setFinished(false);
    setIsReviewRound(false);
  }, [category.words]);

  const handleReviewMissed = useCallback(() => {
    setQuestions(generateQuestions(missedWords, category.words));
    setCurrentIndex(0);
    setCorrectCount(0);
    setMissedWords([]);
    setAnswered(false);
    setLastCorrect(false);
    setFinished(false);
    setIsReviewRound(true);
  }, [missedWords, category.words]);

  const handleModeChange = useCallback(
    (mode: PracticeMode) => {
      setPracticeMode(mode);
      setQuestions(generateQuestions(category.words, category.words));
      setCurrentIndex(0);
      setCorrectCount(0);
      setMissedWords([]);
      setAnswered(false);
      setLastCorrect(false);
      setFinished(false);
      setIsReviewRound(false);
    },
    [category.words]
  );

  // Flashcard mode has its own self-contained UI
  if (practiceMode === 'flashcards') {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        <Breadcrumb
          items={[
            { label: 'Vocabulary', href: '/vocabulary' },
            { label: category.name, href: `/vocabulary/${categoryId}` },
            { label: 'Practice' },
          ]}
        />
        <ModeSelector selected={practiceMode} onSelect={handleModeChange} />
        <FlashcardMode
          words={category.words}
          categoryName={category.name}
          categoryIcon={category.icon}
          categoryId={categoryId}
          onRecordWord={(dutchWord, correct) => recordWordResult(categoryId, dutchWord, correct)}
        />
      </div>
    );
  }

  // Results screen for MC / Type modes
  if (finished) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        <Breadcrumb
          items={[
            { label: 'Vocabulary', href: '/vocabulary' },
            { label: category.name, href: `/vocabulary/${categoryId}` },
            { label: 'Practice' },
          ]}
        />
        {isReviewRound && (
          <div className="mb-4 px-3 py-2 bg-accent-light rounded-lg text-sm text-accent-hover font-medium text-center">
            Review Round Complete
          </div>
        )}
        <ResultsScreen
          correctCount={correctCount}
          totalCount={questions.length}
          missedWords={missedWords}
          categoryIcon={category.icon}
          categoryName={category.name}
          categoryId={categoryId}
          onRestart={handleRestart}
          onReviewMissed={handleReviewMissed}
        />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
      <Breadcrumb
        items={[
          { label: 'Vocabulary', href: '/vocabulary' },
          { label: category.name, href: `/vocabulary/${categoryId}` },
          { label: 'Practice' },
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
