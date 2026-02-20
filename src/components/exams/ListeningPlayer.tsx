'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface ListeningPlayerProps {
  text: string;
  sectionTitle?: string;
  maxPlays?: number; // default 2, like the real exam
}

export default function ListeningPlayer({
  text,
  sectionTitle,
  maxPlays = 2,
}: ListeningPlayerProps) {
  const [isSupported, setIsSupported] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playsUsed, setPlaysUsed] = useState(0);
  const [speed, setSpeed] = useState<0.75 | 1 | 1.25>(1);
  const dutchVoiceRef = useRef<SpeechSynthesisVoice | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    setIsSupported(true);

    const pickVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      dutchVoiceRef.current =
        voices.find((v) => v.lang === 'nl-NL') ||
        voices.find((v) => v.lang.startsWith('nl')) ||
        null;
    };

    pickVoice();
    window.speechSynthesis.addEventListener('voiceschanged', pickVoice);
    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', pickVoice);
      window.speechSynthesis.cancel();
    };
  }, []);

  const handlePlay = useCallback(() => {
    if (!isSupported || playsUsed >= maxPlays || isPlaying) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'nl-NL';
    utterance.rate = speed;
    if (dutchVoiceRef.current) {
      utterance.voice = dutchVoiceRef.current;
    }

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => {
      setIsPlaying(false);
      setPlaysUsed((prev) => prev + 1);
    };
    utterance.onerror = () => setIsPlaying(false);

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }, [isSupported, playsUsed, maxPlays, isPlaying, text, speed]);

  const handleStop = useCallback(() => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  }, []);

  const playsLeft = maxPlays - playsUsed;
  const exhausted = playsUsed >= maxPlays;

  if (!isSupported) {
    return (
      <div className="bg-surface border border-border rounded-xl p-4 mb-6">
        <p className="text-sm text-muted">
          Audio is not supported in your browser. Please use Chrome, Edge, or Firefox for listening exercises.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-surface border border-border rounded-xl p-5 mb-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-0.5">
            Luisterfragment
          </p>
          {sectionTitle && (
            <p className="text-sm font-medium text-primary">{sectionTitle}</p>
          )}
        </div>
        {/* Plays counter */}
        <div className={cn(
          'text-xs font-semibold px-2.5 py-1 rounded-full border',
          exhausted
            ? 'bg-error-light text-error border-error/30'
            : playsLeft === 1
            ? 'bg-warning-light text-warning border-warning/30'
            : 'bg-accent-light text-accent border-accent/20'
        )}>
          {exhausted ? 'Geen plays meer' : `${playsLeft} play${playsLeft !== 1 ? 's' : ''} over`}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3">
        {/* Play / Stop button */}
        {isPlaying ? (
          <button
            onClick={handleStop}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-error text-white text-sm font-medium hover:bg-error/90 transition-colors"
          >
            {/* Stop icon */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <rect x="4" y="4" width="16" height="16" rx="2" />
            </svg>
            Stop
          </button>
        ) : (
          <button
            onClick={handlePlay}
            disabled={exhausted}
            className={cn(
              'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors',
              exhausted
                ? 'bg-surface-hover text-muted cursor-not-allowed border border-border'
                : 'bg-accent text-white hover:bg-accent-hover'
            )}
          >
            {/* Play icon */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5,3 19,12 5,21" />
            </svg>
            {playsUsed === 0 ? 'Afspelen' : 'Opnieuw afspelen'}
          </button>
        )}

        {/* Speed selector */}
        <div className="flex items-center gap-1 border border-border rounded-lg overflow-hidden">
          {([0.75, 1, 1.25] as const).map((s) => (
            <button
              key={s}
              onClick={() => setSpeed(s)}
              disabled={isPlaying}
              className={cn(
                'px-2.5 py-1.5 text-xs font-medium transition-colors',
                speed === s
                  ? 'bg-accent text-white'
                  : 'text-muted hover:bg-surface-hover disabled:opacity-50'
              )}
            >
              {s === 0.75 ? '0.75×' : s === 1 ? '1×' : '1.25×'}
            </button>
          ))}
        </div>

        {/* Animated waveform while playing */}
        {isPlaying && (
          <div className="flex items-center gap-0.5 ml-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-1 bg-accent rounded-full animate-bounce"
                style={{
                  height: `${8 + (i % 3) * 6}px`,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '0.6s',
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Instruction */}
      <p className="text-xs text-muted mt-3">
        {exhausted
          ? 'U heeft het fragment al het maximale aantal keren afgespeeld.'
          : `U kunt het fragment maximaal ${maxPlays} keer afspelen. Luister goed — u kunt geen notities maken in het echte examen.`}
      </p>
    </div>
  );
}
