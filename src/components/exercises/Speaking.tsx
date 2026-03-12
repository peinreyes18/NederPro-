'use client';

import { useState, useEffect, useRef } from 'react';
import { SpeakingContent } from '@/content/types';
import Button from '@/components/ui/Button';

// Levenshtein distance for fuzzy pronunciation matching
function levenshtein(a: string, b: string): number {
  const matrix: number[][] = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      matrix[i][j] =
        b[i - 1] === a[j - 1]
          ? matrix[i - 1][j - 1]
          : 1 + Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]);
    }
  }
  return matrix[b.length][a.length];
}

function isMatch(heard: string, target: string, acceptable?: string[]): boolean {
  const norm = (s: string) => s.toLowerCase().trim();
  const h = norm(heard);
  const t = norm(target);
  if (h === t) return true;
  const threshold = Math.max(1, Math.floor(t.length * 0.3));
  if (levenshtein(h, t) <= threshold) return true;
  if (acceptable) {
    for (const ans of acceptable) {
      const a = norm(ans);
      if (h === a || levenshtein(h, a) <= Math.max(1, Math.floor(a.length * 0.3))) return true;
    }
  }
  return false;
}

interface SpeakingProps {
  content: SpeakingContent;
  instruction: string;
  onSubmit: (correct: boolean, userAnswer: string, explanation?: string, correctAnswer?: string) => void;
  disabled: boolean;
}

const MAX_ATTEMPTS = 3;

export default function Speaking({ content, instruction, onSubmit, disabled }: SpeakingProps) {
  const items = content.items;

  // Refs for values needed inside async recognition callbacks
  const indexRef = useRef(0);
  const attemptsRef = useRef(0);
  const correctCountRef = useRef(0);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  const [index, setIndex] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [listening, setListening] = useState(false);
  const [heardText, setHeardText] = useState<string | null>(null);
  const [itemStatus, setItemStatus] = useState<'idle' | 'correct' | 'wrong' | 'out-of-attempts'>('idle');
  const [supported, setSupported] = useState<boolean | null>(null);

  useEffect(() => {
    const SpeechRec =
      typeof window !== 'undefined'
        ? (window as unknown as { SpeechRecognition?: typeof SpeechRecognition; webkitSpeechRecognition?: typeof SpeechRecognition }).SpeechRecognition ||
          (window as unknown as { webkitSpeechRecognition?: typeof SpeechRecognition }).webkitSpeechRecognition
        : undefined;
    setSupported(!!SpeechRec);
    return () => {
      recognitionRef.current?.abort();
    };
  }, []);

  const currentItem = items[index];

  const handleNext = (wasCorrect: boolean, finalCorrectCount: number) => {
    const nextIndex = indexRef.current + 1;
    if (nextIndex >= items.length) {
      const passing = finalCorrectCount >= Math.ceil(items.length * 0.6);
      onSubmit(
        passing,
        `${finalCorrectCount}/${items.length} words correct`,
        `You correctly pronounced ${finalCorrectCount} out of ${items.length} words.`,
        items[indexRef.current].dutchText
      );
    } else {
      indexRef.current = nextIndex;
      attemptsRef.current = 0;
      setIndex(nextIndex);
      setAttempts(0);
      setHeardText(null);
      setItemStatus('idle');
    }
  };

  const startListening = () => {
    if (listening || !supported) return;

    const SpeechRec =
      (window as unknown as { SpeechRecognition?: typeof SpeechRecognition }).SpeechRecognition ||
      (window as unknown as { webkitSpeechRecognition?: typeof SpeechRecognition }).webkitSpeechRecognition;

    if (!SpeechRec) return;

    const recognition = new SpeechRec();
    recognitionRef.current = recognition;
    recognition.lang = 'nl-NL';
    recognition.interimResults = false;
    recognition.maxAlternatives = 5;

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);

    recognition.onerror = () => {
      setListening(false);
      attemptsRef.current += 1;
      setAttempts(attemptsRef.current);
    };

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      setListening(false);

      // Gather all alternative transcripts
      const transcripts: string[] = [];
      for (let i = 0; i < event.results[0].length; i++) {
        transcripts.push(event.results[0][i].transcript);
      }
      const heard = transcripts[0] || '';
      setHeardText(heard);

      const item = items[indexRef.current];
      const correct = transcripts.some((t) => isMatch(t, item.dutchText, item.acceptableAnswers));

      attemptsRef.current += 1;
      const newAttempts = attemptsRef.current;
      setAttempts(newAttempts);

      if (correct) {
        correctCountRef.current += 1;
        const newCorrectCount = correctCountRef.current;
        setItemStatus('correct');
        setTimeout(() => handleNext(true, newCorrectCount), 1500);
      } else if (newAttempts >= MAX_ATTEMPTS) {
        setItemStatus('out-of-attempts');
      } else {
        setItemStatus('wrong');
        setTimeout(() => {
          setItemStatus('idle');
          setHeardText(null);
        }, 2000);
      }
    };

    recognition.start();
  };

  if (supported === null) return null;

  if (!supported) {
    return (
      <div className="text-center py-8">
        <p className="text-4xl mb-3">🎤</p>
        <p className="text-muted mb-1 font-medium">Speech recognition is not available in your browser.</p>
        <p className="text-sm text-muted mb-6">Please use Google Chrome or Microsoft Edge to complete this exercise.</p>
        <Button
          variant="ghost"
          onClick={() =>
            onSubmit(true, 'skipped', 'Speech recognition not supported — exercise skipped.')
          }
        >
          Skip Exercise
        </Button>
      </div>
    );
  }

  if (disabled) {
    return (
      <div className="text-center py-4 text-muted text-sm">
        Speaking exercise completed.
      </div>
    );
  }

  return (
    <div>
      {instruction && <p className="text-sm text-muted mb-4">{instruction}</p>}

      {/* Progress indicator */}
      <p className="text-xs text-muted mb-1">
        Word {index + 1} of {items.length}
      </p>

      {/* Word card */}
      <div className="text-center py-8 px-4 bg-surface rounded-lg mb-6">
        <p className="text-sm text-muted mb-3">Pronounce this Dutch word:</p>
        <p className="text-5xl font-bold text-primary mb-2">{currentItem.dutchText}</p>
        <p className="text-lg text-muted italic mb-2">({currentItem.englishTranslation})</p>
        {currentItem.hint && (
          <p className="text-sm text-accent mt-2">💡 {currentItem.hint}</p>
        )}
      </div>

      {/* Mic area — only shown when idle */}
      {itemStatus === 'idle' && (
        <div className="flex flex-col items-center gap-3">
          <button
            onClick={startListening}
            disabled={listening}
            aria-label={listening ? 'Listening…' : 'Start speaking'}
            className={`w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl shadow-md transition-all duration-200 ${
              listening
                ? 'bg-red-500 animate-pulse scale-110 cursor-default'
                : 'bg-accent hover:bg-accent/90 hover:scale-105 active:scale-95'
            }`}
          >
            🎤
          </button>
          <p className="text-sm text-muted">
            {listening ? 'Listening…' : 'Tap the mic and speak'}
          </p>
          {attempts > 0 && attempts < MAX_ATTEMPTS && (
            <p className="text-xs text-muted">
              {MAX_ATTEMPTS - attempts} attempt{MAX_ATTEMPTS - attempts !== 1 ? 's' : ''} remaining
            </p>
          )}
        </div>
      )}

      {/* Wrong — brief feedback before reset */}
      {itemStatus === 'wrong' && (
        <div className="text-center mt-2">
          <p className="text-orange-500 font-medium mb-1">Not quite — try again!</p>
          {heardText && (
            <p className="text-sm text-muted">
              I heard: &ldquo;<span className="font-medium">{heardText}</span>&rdquo;
            </p>
          )}
        </div>
      )}

      {/* Correct */}
      {itemStatus === 'correct' && (
        <div className="text-center mt-2">
          <p className="text-3xl mb-1">✅</p>
          <p className="text-green-600 font-semibold">Great pronunciation!</p>
          {heardText && (
            <p className="text-sm text-muted mt-1">
              Heard: &ldquo;<span className="font-medium">{heardText}</span>&rdquo;
            </p>
          )}
        </div>
      )}

      {/* Out of attempts */}
      {itemStatus === 'out-of-attempts' && (
        <div className="text-center mt-2">
          <p className="text-3xl mb-1">❌</p>
          <p className="text-red-500 font-medium mb-1">No more attempts</p>
          <p className="text-sm text-muted mb-1">
            The correct word is:{' '}
            <span className="font-bold text-primary">{currentItem.dutchText}</span>
          </p>
          {heardText && (
            <p className="text-sm text-muted mb-4">
              Last heard: &ldquo;<span className="font-medium">{heardText}</span>&rdquo;
            </p>
          )}
          <Button
            size="sm"
            onClick={() => handleNext(false, correctCountRef.current)}
          >
            {index + 1 < items.length ? 'Next Word →' : 'Finish'}
          </Button>
        </div>
      )}
    </div>
  );
}
