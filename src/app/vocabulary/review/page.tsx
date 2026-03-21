'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import Link from 'next/link';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import PronunciationButton from '@/components/ui/PronunciationButton';
import SubscriptionGate from '@/components/ui/SubscriptionGate';
import { useAuth } from '@/contexts/AuthContext';
import { useVocabProgress, DueWord } from '@/hooks/useVocabProgress';
import { vocabularyCategories, VocabularyWord } from '@/content/vocabulary';
import { shuffleArray, normalizeAnswer } from '@/lib/utils';
import { cn } from '@/lib/utils';

// ---------------------------------------------------------------------------
// Utilities
// ---------------------------------------------------------------------------

type ReviewMode = 'flashcard' | 'multiple-choice' | 'type-answer';
type QuestionDirection = 'dutch-to-english' | 'english-to-dutch';

interface ReviewCard {
  dueWord: DueWord;
  direction: QuestionDirection;
  options: string[];
  correctAnswer: string;
}

let _allWords: VocabularyWord[] | null = null;
function getAllWords(): VocabularyWord[] {
  if (!_allWords) _allWords = vocabularyCategories.flatMap((c) => c.words);
  return _allWords;
}

function buildCards(dueWords: DueWord[]): ReviewCard[] {
  return dueWords.map((dw) => {
    // Harder words (lower ease factor) get english-to-dutch (harder direction)
    const direction: QuestionDirection =
      dw.srs.easeFactor < 1.8 ? 'english-to-dutch' : Math.random() > 0.5 ? 'dutch-to-english' : 'english-to-dutch';
    const correctAnswer = direction === 'dutch-to-english' ? dw.word.english : dw.word.dutch;
    const field = direction === 'dutch-to-english' ? 'english' : 'dutch';
    const distractors = shuffleArray(
      getAllWords().filter((w) => w[field] !== dw.word[field]).map((w) => w[field])
    ).slice(0, 3);
    return { dueWord: dw, direction, options: shuffleArray([correctAnswer, ...distractors]), correctAnswer };
  });
}

function intervalLabel(interval: number): string {
  if (interval <= 1) return 'Tomorrow';
  if (interval < 7) return `${interval} days`;
  if (interval < 14) return '1 week';
  if (interval < 30) return `${Math.round(interval / 7)} weeks`;
  return `${Math.round(interval / 30)} months`;
}

// ---------------------------------------------------------------------------
// Flashcard component
// ---------------------------------------------------------------------------

function FlashCard({
  card,
  onResult,
}: {
  card: ReviewCard;
  onResult: (correct: boolean) => void;
}) {
  const [flipped, setFlipped] = useState(false);
  const prompt = card.direction === 'dutch-to-english' ? card.dueWord.word.dutch : card.dueWord.word.english;
  const answer = card.correctAnswer;

  return (
    <div className="space-y-4">
      {/* Flip card */}
      <div
        className="cursor-pointer select-none"
        onClick={() => !flipped && setFlipped(true)}
      >
        <div
          className={cn(
            'rounded-2xl border-2 transition-all duration-300 p-8 text-center min-h-[180px] flex flex-col items-center justify-center gap-3',
            flipped
              ? 'border-accent bg-accent/5'
              : 'border-border bg-surface hover:border-accent/40'
          )}
        >
          {!flipped ? (
            <>
              <p className="text-xs text-muted uppercase tracking-wide font-medium">
                {card.direction === 'dutch-to-english' ? 'Dutch' : 'English'}
              </p>
              <div className="flex items-center gap-2">
                {card.direction === 'dutch-to-english' && (
                  <PronunciationButton text={prompt} />
                )}
                <span className="text-3xl font-bold text-primary">{prompt}</span>
              </div>
              {card.dueWord.word.example && card.direction === 'dutch-to-english' && (
                <p className="text-sm text-muted italic mt-1">{card.dueWord.word.example}</p>
              )}
              <p className="text-xs text-accent mt-2">Tap to reveal →</p>
            </>
          ) : (
            <>
              <p className="text-xs text-muted uppercase tracking-wide font-medium">
                {card.direction === 'dutch-to-english' ? 'English' : 'Dutch'}
              </p>
              <div className="flex items-center gap-2">
                {card.direction === 'english-to-dutch' && (
                  <PronunciationButton text={answer} />
                )}
                <span className="text-3xl font-bold text-accent">{answer}</span>
              </div>
              {card.dueWord.word.exampleTranslation && card.direction === 'dutch-to-english' && (
                <p className="text-sm text-muted italic mt-1">{card.dueWord.word.exampleTranslation}</p>
              )}
            </>
          )}
        </div>
      </div>

      {/* Category badge */}
      <div className="flex justify-center">
        <span className="text-xs text-muted">
          {card.dueWord.categoryIcon} {card.dueWord.categoryName}
        </span>
      </div>

      {/* Result buttons (shown after flip) */}
      {flipped && (
        <div className="grid grid-cols-2 gap-3 mt-2">
          <button
            onClick={() => onResult(false)}
            className="flex flex-col items-center gap-1 px-4 py-3 rounded-xl border-2 border-error/30 bg-error/5 text-error hover:bg-error/10 transition-colors"
          >
            <span className="text-xl">✗</span>
            <span className="text-sm font-semibold">Didn&apos;t know</span>
            <span className="text-xs text-error/60">Review again tomorrow</span>
          </button>
          <button
            onClick={() => onResult(true)}
            className="flex flex-col items-center gap-1 px-4 py-3 rounded-xl border-2 border-success/30 bg-success/5 text-success hover:bg-success/10 transition-colors"
          >
            <span className="text-xl">✓</span>
            <span className="text-sm font-semibold">Got it!</span>
            <span className="text-xs text-success/60">Schedule next review</span>
          </button>
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Multiple Choice component
// ---------------------------------------------------------------------------

function MultipleChoiceCard({
  card,
  onResult,
}: {
  card: ReviewCard;
  onResult: (correct: boolean) => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const prompt = card.direction === 'dutch-to-english' ? card.dueWord.word.dutch : card.dueWord.word.english;

  const handleSelect = (option: string) => {
    if (selected !== null) return;
    setSelected(option);
    setTimeout(() => onResult(option === card.correctAnswer), 900);
  };

  return (
    <div className="space-y-4">
      <div className="text-center py-6">
        <p className="text-xs text-muted uppercase tracking-wide font-medium mb-2">
          {card.direction === 'dutch-to-english' ? 'What does this mean in English?' : 'What is this in Dutch?'}
        </p>
        <div className="flex items-center justify-center gap-2">
          {card.direction === 'dutch-to-english' && <PronunciationButton text={prompt} />}
          <span className="text-3xl font-bold text-primary">{prompt}</span>
        </div>
        <p className="text-xs text-muted mt-1">{card.dueWord.categoryIcon} {card.dueWord.categoryName}</p>
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        {card.options.map((option, i) => {
          const isCorrect = option === card.correctAnswer;
          const isSelected = option === selected;
          let style = 'border-border hover:border-accent/40 hover:bg-surface text-primary-light';
          if (selected !== null) {
            if (isCorrect) style = 'border-success bg-success/5 text-success font-semibold';
            else if (isSelected) style = 'border-error bg-error/5 text-error';
            else style = 'border-border opacity-40 text-muted';
          }
          return (
            <button
              key={i}
              onClick={() => handleSelect(option)}
              disabled={selected !== null}
              className={cn('w-full text-left px-4 py-3 rounded-xl border-2 transition-all text-sm', style)}
            >
              <span className="text-muted mr-2 font-medium">{String.fromCharCode(65 + i)}.</span>
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Type Answer component
// ---------------------------------------------------------------------------

function TypeAnswerCard({
  card,
  onResult,
}: {
  card: ReviewCard;
  onResult: (correct: boolean) => void;
}) {
  const [input, setInput] = useState('');
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const prompt = card.direction === 'dutch-to-english' ? card.dueWord.word.dutch : card.dueWord.word.english;

  useEffect(() => { inputRef.current?.focus(); }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (answered || !input.trim()) return;
    const userAnswer = normalizeAnswer(input);
    const accepted = card.correctAnswer.split('/').map((a) => normalizeAnswer(a));
    const isCorrect = accepted.some((a) => a === userAnswer);
    setCorrect(isCorrect);
    setAnswered(true);
    setTimeout(() => onResult(isCorrect), 1200);
  };

  return (
    <div className="space-y-4">
      <div className="text-center py-6">
        <p className="text-xs text-muted uppercase tracking-wide font-medium mb-2">
          {card.direction === 'dutch-to-english' ? 'Translate to English:' : 'Translate to Dutch:'}
        </p>
        <div className="flex items-center justify-center gap-2">
          {card.direction === 'dutch-to-english' && <PronunciationButton text={prompt} />}
          <span className="text-3xl font-bold text-primary">{prompt}</span>
        </div>
        <p className="text-xs text-muted mt-1">{card.dueWord.categoryIcon} {card.dueWord.categoryName}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => !answered && setInput(e.target.value)}
          disabled={answered}
          placeholder="Type your answer…"
          className={cn(
            'w-full px-4 py-3 rounded-xl border-2 bg-background text-primary text-base transition-colors outline-none',
            answered
              ? correct
                ? 'border-success bg-success/5'
                : 'border-error bg-error/5'
              : 'border-border focus:border-accent'
          )}
        />
        {answered && !correct && (
          <p className="text-sm text-center">
            <span className="text-muted">Correct answer: </span>
            <span className="font-semibold text-accent">{card.correctAnswer}</span>
          </p>
        )}
        {!answered && (
          <Button type="submit" disabled={!input.trim()} className="w-full">
            Check
          </Button>
        )}
      </form>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Results screen
// ---------------------------------------------------------------------------

function ReviewResults({
  total,
  correct,
  again,
  onDone,
}: {
  total: number;
  correct: number;
  again: number;
  onDone: () => void;
}) {
  const pct = Math.round((correct / total) * 100);
  return (
    <div className="text-center py-8 space-y-6">
      <div>
        <div className={cn('text-6xl font-bold mb-2', pct >= 80 ? 'text-success' : pct >= 60 ? 'text-warning' : 'text-error')}>
          {pct}%
        </div>
        <p className="text-muted text-lg">Session complete</p>
      </div>
      <div className="grid grid-cols-3 gap-4 max-w-xs mx-auto">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">{total}</div>
          <div className="text-xs text-muted">Reviewed</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-success">{correct}</div>
          <div className="text-xs text-muted">Correct</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-error">{again}</div>
          <div className="text-xs text-muted">Again</div>
        </div>
      </div>
      <div className={cn('inline-block px-4 py-2 rounded-full text-sm font-medium', pct >= 80 ? 'bg-success/10 text-success' : pct >= 60 ? 'bg-warning/10 text-warning' : 'bg-error/10 text-error')}>
        {pct >= 80 ? '🎉 Great work! Words rescheduled.' : pct >= 60 ? '👍 Good effort. Keep reviewing.' : '💪 Keep practising — it gets easier!'}
      </div>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button onClick={onDone}>Back to Vocabulary</Button>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main page
// ---------------------------------------------------------------------------

export default function VocabularyReviewPage() {
  const { getDueWords, getDueTodayCount, recordSRSResult, enqueueForSRS, isLoaded } = useVocabProgress();
  const { isSubscribed, isLoading: authLoading } = useAuth();

  const [mode, setMode] = useState<ReviewMode>('flashcard');
  const [cards, setCards] = useState<ReviewCard[] | null>(null);
  const [index, setIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [againCount, setAgainCount] = useState(0);
  const [done, setDone] = useState(false);

  const dueWords = getDueWords;
  const dueCount = getDueTodayCount;

  const startSession = useCallback(() => {
    const built = buildCards(dueWords);
    setCards(built);
    setIndex(0);
    setCorrectCount(0);
    setAgainCount(0);
    setDone(false);
  }, [dueWords]);

  const handleResult = useCallback(
    (correct: boolean) => {
      if (!cards) return;
      const card = cards[index];
      recordSRSResult(card.dueWord.categoryId, card.dueWord.word.dutch, correct);
      if (correct) setCorrectCount((n) => n + 1);
      else setAgainCount((n) => n + 1);

      if (index + 1 >= cards.length) {
        setDone(true);
      } else {
        setIndex((i) => i + 1);
      }
    },
    [cards, index, recordSRSResult]
  );

  if (!isLoaded) {
    return (
      <div className="max-w-lg mx-auto px-4 py-12 text-center">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-surface rounded w-1/2 mx-auto" />
          <div className="h-48 bg-surface rounded-2xl" />
        </div>
      </div>
    );
  }

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Vocabulary', href: '/vocabulary' },
    { label: 'Daily Review', href: '/vocabulary/review' },
  ];

  if (!authLoading && !isSubscribed) {
    return (
      <div className="max-w-lg mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbs} />
        <SubscriptionGate feature="vocabulary review" />
      </div>
    );
  }

  // ---- Setup screen ----
  if (!cards) {
    return (
      <div className="max-w-lg mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbs} />

        <div className="mb-8">
          <h1 className="text-2xl font-bold text-primary mb-1">Daily Review</h1>
          <p className="text-muted text-sm">Words scheduled by spaced repetition — review them to lock in long-term memory.</p>
        </div>

        {dueCount === 0 ? (
          <Card className="text-center py-12 px-6">
            <div className="text-5xl mb-4">🎯</div>
            <h2 className="text-xl font-bold text-primary mb-2">All caught up!</h2>
            <p className="text-muted text-sm mb-6">
              No words are due for review right now. Come back later or practise new words to build your queue.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/vocabulary">
                <Button variant="outline">Browse vocabulary</Button>
              </Link>
            </div>
          </Card>
        ) : (
          <div className="space-y-6">
            {/* Due count banner */}
            <Card className="bg-accent/5 border-accent/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-primary">{dueCount} word{dueCount !== 1 ? 's' : ''} due today</p>
                  <p className="text-xs text-muted mt-0.5">
                    {dueWords.filter((w) => w.daysOverdue > 0).length} overdue · {dueWords.filter((w) => w.daysOverdue === 0).length} new today
                  </p>
                </div>
                <div className="text-3xl">📅</div>
              </div>
            </Card>

            {/* Preview of hardest words */}
            <div>
              <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-2">Words to review</p>
              <div className="space-y-1.5 max-h-52 overflow-y-auto pr-1">
                {dueWords.slice(0, 10).map((dw, i) => (
                  <div key={i} className="flex items-center justify-between px-3 py-2 rounded-lg bg-surface border border-border text-sm">
                    <span className="font-medium text-primary">{dw.word.dutch}</span>
                    <div className="flex items-center gap-2 text-xs text-muted">
                      <span>{dw.categoryIcon}</span>
                      {dw.daysOverdue > 0 && (
                        <Badge variant="warning">{dw.daysOverdue}d overdue</Badge>
                      )}
                      <span className="text-muted">×{dw.srs.repetitions}</span>
                    </div>
                  </div>
                ))}
                {dueWords.length > 10 && (
                  <p className="text-xs text-center text-muted py-1">+{dueWords.length - 10} more</p>
                )}
              </div>
            </div>

            {/* Mode selector */}
            <div>
              <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-2">Review mode</p>
              <div className="grid grid-cols-3 gap-2">
                {([
                  { id: 'flashcard' as ReviewMode, label: 'Flashcards', icon: '🃏', desc: 'Flip & self-grade' },
                  { id: 'multiple-choice' as ReviewMode, label: 'Multiple Choice', icon: 'A', desc: '4 options' },
                  { id: 'type-answer' as ReviewMode, label: 'Type Answer', icon: '⌨', desc: 'Hardest mode' },
                ] as const).map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setMode(m.id)}
                    className={cn(
                      'px-3 py-3 rounded-xl border-2 text-sm font-medium transition-all text-center',
                      mode === m.id
                        ? 'border-accent bg-accent/5 text-accent'
                        : 'border-border hover:border-accent/30 text-muted hover:text-primary'
                    )}
                  >
                    <span className="block text-xl mb-0.5">{m.icon}</span>
                    <span className="block text-xs font-semibold">{m.label}</span>
                    <span className="block text-xs text-muted">{m.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            <Button onClick={startSession} className="w-full" size="lg">
              Start Review ({dueCount} words)
            </Button>
          </div>
        )}
      </div>
    );
  }

  // ---- Results screen ----
  if (done) {
    return (
      <div className="max-w-lg mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbs} />
        <ReviewResults
          total={cards.length}
          correct={correctCount}
          again={againCount}
          onDone={() => setCards(null)}
        />
      </div>
    );
  }

  // ---- Active review ----
  const card = cards[index];
  const progressPct = Math.round((index / cards.length) * 100);

  return (
    <div className="max-w-lg mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbs} />

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-muted">{index + 1} / {cards.length}</span>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-success font-medium">{correctCount} ✓</span>
          <span className="text-error font-medium">{againCount} ✗</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1.5 bg-surface rounded-full mb-6 overflow-hidden">
        <div
          className="h-full bg-accent rounded-full transition-all duration-300"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      {/* Next review info */}
      <div className="flex justify-end mb-3">
        <span className="text-xs text-muted">
          Current interval: <span className="font-medium text-primary">{intervalLabel(card.dueWord.srs.interval)}</span>
        </span>
      </div>

      {/* Card */}
      <Card>
        {mode === 'flashcard' && <FlashCard card={card} onResult={handleResult} />}
        {mode === 'multiple-choice' && (
          <MultipleChoiceCard key={card.dueWord.word.dutch + index} card={card} onResult={handleResult} />
        )}
        {mode === 'type-answer' && (
          <TypeAnswerCard key={card.dueWord.word.dutch + index} card={card} onResult={handleResult} />
        )}
      </Card>

      {/* Skip */}
      <div className="text-center mt-4">
        <button
          onClick={() => handleResult(false)}
          className="text-xs text-muted hover:text-primary transition-colors"
        >
          Skip (mark as incorrect)
        </button>
      </div>
    </div>
  );
}
