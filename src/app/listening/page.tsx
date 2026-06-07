'use client';

import Link from 'next/link';
import { listeningExercises, levelColors, type Level } from '@/data/listening-exercises';
import { cn } from '@/lib/utils';

const levels: Level[] = ['A1', 'A2', 'B1', 'B2'];

const levelDescriptions: Record<Level, string> = {
  A1: 'Simple introductions, shopping, and daily routines',
  A2: 'Directions, appointments, and travel',
  B1: 'News, work conversations, and interviews',
  B2: 'Debates, formal announcements, and complex topics',
};

export default function ListeningPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-primary mb-3">Listening Practice 🎧</h1>
        <p className="text-muted text-lg max-w-xl mx-auto">
          Listen to real-exam-style Dutch passages and answer comprehension questions.
          Covers all levels from A1 to B2.
        </p>
      </div>

      <div className="space-y-10">
        {levels.map((level) => {
          const exercises = listeningExercises.filter((e) => e.level === level);
          return (
            <section key={level}>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={cn(
                    'text-sm font-bold px-3 py-1 rounded-full',
                    levelColors[level]
                  )}
                >
                  {level}
                </span>
                <span className="text-muted text-sm">{levelDescriptions[level]}</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {exercises.map((exercise) => (
                  <Link
                    key={exercise.id}
                    href={`/listening/${exercise.id}`}
                    className="block p-4 rounded-xl border border-border bg-surface hover:bg-surface-hover hover:border-accent transition-all duration-200 group"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <span
                        className={cn(
                          'text-xs font-semibold px-2 py-0.5 rounded-md',
                          levelColors[exercise.level]
                        )}
                      >
                        {exercise.level}
                      </span>
                      <span className="text-xs text-muted bg-background px-2 py-0.5 rounded-md border border-border">
                        {exercise.questions.length} questions
                      </span>
                    </div>
                    <h3 className="font-semibold text-primary group-hover:text-accent transition-colors mt-2">
                      {exercise.title}
                    </h3>
                    <p className="text-sm text-muted mt-1">{exercise.description}</p>
                    <div className="flex items-center gap-1 mt-3 text-xs text-accent font-medium">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Start exercise →
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
