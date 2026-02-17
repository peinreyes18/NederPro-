'use client';

import { usePronunciation } from '@/hooks/usePronunciation';
import { cn } from '@/lib/utils';

interface PronunciationButtonProps {
  text: string;
  className?: string;
}

export default function PronunciationButton({ text, className }: PronunciationButtonProps) {
  const { speak, isSpeaking, isSupported } = usePronunciation();

  if (!isSupported) return null;

  return (
    <button
      type="button"
      onClick={() => speak(text)}
      aria-label="Hear pronunciation"
      title="Hear pronunciation"
      className={cn(
        'inline-flex items-center justify-center rounded-md p-1 text-muted hover:text-accent transition-colors focus:outline-none focus:ring-1 focus:ring-accent shrink-0',
        isSpeaking && 'text-accent animate-pulse',
        className
      )}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
      </svg>
    </button>
  );
}
