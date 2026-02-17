'use client';

import { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface ExamTimerProps {
  totalMinutes: number;
  onTimeUp: () => void;
  isRunning: boolean;
}

export default function ExamTimer({ totalMinutes, onTimeUp, isRunning }: ExamTimerProps) {
  const [secondsLeft, setSecondsLeft] = useState(totalMinutes * 60);

  const handleTimeUp = useCallback(() => {
    onTimeUp();
  }, [onTimeUp]);

  useEffect(() => {
    setSecondsLeft(totalMinutes * 60);
  }, [totalMinutes]);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, handleTimeUp]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const display = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  const isLowTime = secondsLeft < 5 * 60;

  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 px-4 py-2 rounded-lg border bg-surface border-border font-mono text-lg font-semibold tabular-nums',
        isLowTime && 'text-error animate-pulse',
        !isLowTime && 'text-primary'
      )}
    >
      <svg
        className={cn('w-5 h-5', isLowTime ? 'text-error' : 'text-muted')}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
        />
      </svg>
      <span>{display}</span>
    </div>
  );
}
