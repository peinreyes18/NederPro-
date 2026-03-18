'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { ListeningComprehensionContent } from '@/content/types';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';

interface ListeningComprehensionProps {
  content: ListeningComprehensionContent;
  instruction: string;
  onSubmit: (correct: boolean, userAnswer: string, explanation?: string, correctAnswer?: string) => void;
  disabled: boolean;
}

export default function ListeningComprehension({
  content,
  instruction,
  onSubmit,
  disabled,
}: ListeningComprehensionProps) {
  const maxPlays = content.maxPlays ?? 2;

  const [playsUsed, setPlaysUsed] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [selectedIndices, setSelectedIndices] = useState<(number | null)[]>(
    content.questions.map(() => null)
  );
  const dutchVoiceRef = useRef<SpeechSynthesisVoice | null>(null);

  // Detect TTS support and pick a Dutch voice
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!window.speechSynthesis) return;

    setIsSupported(true);

    const pickVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      const nlNL = voices.find((v) => v.lang === 'nl-NL');
      const nlAny = voices.find((v) => v.lang.startsWith('nl'));
      dutchVoiceRef.current = nlNL ?? nlAny ?? null;
    };

    pickVoice();
    window.speechSynthesis.onvoiceschanged = pickVoice;

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
      window.speechSynthesis.cancel();
    };
  }, []);

  const handlePlay = useCallback(() => {
    if (!isSupported || playsUsed >= maxPlays || isPlaying) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(content.audioText);
    utterance.lang = 'nl-NL';
    utterance.rate = 0.88;
    if (dutchVoiceRef.current) {
      utterance.voice = dutchVoiceRef.current;
    }

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => {
      setIsPlaying(false);
      setPlaysUsed((n) => n + 1);
    };
    utterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(utterance);
  }, [isSupported, playsUsed, maxPlays, isPlaying, content.audioText]);

  const handleStop = useCallback(() => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setPlaysUsed((n) => n + 1);
  }, []);

  const playsLeft = maxPlays - playsUsed;
  const exhausted = playsUsed >= maxPlays;

  const handleSubmit = () => {
    let allCorrect = true;
    const explanations: string[] = [];

    content.questions.forEach((q, i) => {
      if (selectedIndices[i] !== q.correctIndex) {
        allCorrect = false;
        explanations.push(q.explanation);
      }
    });

    const userAnswer = selectedIndices
      .map((idx, i) => (idx !== null ? content.questions[i].options[idx] : ''))
      .join(', ');
    const correctAnswer = content.questions
      .map((q) => q.options[q.correctIndex])
      .join(', ');

    onSubmit(
      allCorrect,
      userAnswer,
      allCorrect ? undefined : explanations.join(' '),
      allCorrect ? undefined : correctAnswer
    );
  };

  return (
    <div>
      <p className="text-sm font-medium text-muted mb-4">{instruction}</p>

      {/* Situation context */}
      {content.situation && (
        <div className="bg-surface border border-border rounded-lg px-4 py-3 mb-4 text-sm text-primary-light">
          <span className="font-semibold text-primary">Situatie: </span>
          {content.situation}
        </div>
      )}

      {/* Audio player */}
      <div className="bg-surface border border-border rounded-xl p-5 mb-6">
        <div className="flex items-center gap-3 mb-3">
          {/* Headphones icon */}
          <div className="flex-shrink-0 w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center">
            <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-primary">Luisterfragment</p>
            <p className="text-xs text-muted">
              {exhausted
                ? 'Geen afspeelingen meer beschikbaar'
                : playsLeft === 1
                ? 'Nog 1 afspeling over'
                : `Nog ${playsLeft} van ${maxPlays} afspelingen`}
            </p>
          </div>
        </div>

        {/* Waveform animation while playing */}
        {isPlaying && (
          <div className="flex items-center gap-0.5 mb-3 h-6">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="flex-1 bg-accent rounded-full animate-pulse"
                style={{
                  height: `${30 + Math.sin(i * 0.8) * 50}%`,
                  animationDelay: `${i * 60}ms`,
                  animationDuration: `${600 + (i % 3) * 120}ms`,
                }}
              />
            ))}
          </div>
        )}

        {/* Play / Stop button */}
        <div className="flex gap-2">
          {isPlaying ? (
            <button
              onClick={handleStop}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-error/10 text-error border border-error/20 text-sm font-medium hover:bg-error/20 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <rect x="6" y="6" width="12" height="12" rx="1" />
              </svg>
              Stop
            </button>
          ) : (
            <button
              onClick={handlePlay}
              disabled={!isSupported || exhausted || disabled}
              className={cn(
                'flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-colors',
                !isSupported || exhausted || disabled
                  ? 'bg-surface border-border text-muted cursor-not-allowed opacity-60'
                  : 'bg-accent text-white border-accent hover:bg-accent/90'
              )}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              {exhausted ? 'Afgespeeld' : 'Afspelen'}
            </button>
          )}

          {/* Play counter dots */}
          <div className="flex items-center gap-1 ml-2">
            {Array.from({ length: maxPlays }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  'w-2 h-2 rounded-full transition-colors',
                  i < playsUsed ? 'bg-muted' : 'bg-accent'
                )}
              />
            ))}
          </div>
        </div>

        {!isSupported && (
          <p className="text-xs text-warning mt-2">
            Tekst-naar-spraak wordt niet ondersteund door uw browser. Gebruik Chrome of Edge voor de beste ervaring.
          </p>
        )}
      </div>

      {/* Questions — only show once the user has played at least once */}
      {playsUsed > 0 || disabled ? (
        <div className="space-y-6">
          {content.questions.map((question, qi) => (
            <div key={qi}>
              <p className="text-primary font-medium mb-3">
                <span className="text-muted font-normal mr-1">{qi + 1}.</span>
                {question.question}
              </p>
              <div className="space-y-2">
                {question.options.map((option, oi) => (
                  <button
                    key={oi}
                    onClick={() => {
                      if (disabled) return;
                      const newSelections = [...selectedIndices];
                      newSelections[qi] = oi;
                      setSelectedIndices(newSelections);
                    }}
                    disabled={disabled}
                    className={cn(
                      'w-full text-left px-4 py-3 rounded-lg border transition-colors text-sm',
                      selectedIndices[qi] === oi
                        ? 'border-accent bg-accent-light/30 text-primary font-medium'
                        : 'border-border hover:border-accent/30 hover:bg-surface text-primary-light',
                      disabled && 'opacity-50 pointer-events-none'
                    )}
                  >
                    <span className="text-muted mr-2 font-medium">
                      {String.fromCharCode(65 + oi)}.
                    </span>
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}

          {!disabled && (
            <div className="mt-6">
              <Button
                onClick={handleSubmit}
                disabled={selectedIndices.some((idx) => idx === null)}
              >
                Check Answer
              </Button>
            </div>
          )}
        </div>
      ) : (
        <p className="text-sm text-muted italic">
          Speel het fragment af om de vragen te zien.
        </p>
      )}
    </div>
  );
}
