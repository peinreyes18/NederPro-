'use client';

import Link from 'next/link';
import { readingExercises, levelColors, type Level } from '@/data/reading-exercises';
import { cn } from '@/lib/utils';

const levels: Level[] = ['A1', 'A2', 'B1', 'B2'];

const levelDescriptions: Record<Level, string> = {
  A1: 'Short notes, signs, and simple forms',
  A2: 'Letters, announcements, and basic information texts',
  B1: 'News articles, official letters, and informational texts',
  B2: 'Opinion pieces, policy documents, and academic texts',
};

export default function ReadingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-primary mb-3">Reading Practice 📖</h1>
        <p className="text-muted text-lg max-w-xl mx-auto">
          Read exam-style Dutch texts and answer comprehension questions.
          Covers letters, articles, and official documents from A1 to B2.
        </p>
      </div>

      <div className="space-y-10">
        {levels.map((level) => {
          const exercises = readingExercises.filter((e) => e.level === level);
          return (
            <section key={level}>
              <div className="flex items-center gap-3 mb-4">
                <span className={cn('text-sm font-bold px-3 py-1 rounded-full', levelColors[level])}>
                  {level}
                </span>
                <span className="text-muted text-sm">{levelDescriptions[level]}</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {exercises.map((exercise) => (
                  <Link
                    key={exercise.id}
                    href={`/reading/${exercise.id}`}
                    className="block p-4 rounded-xl border border-border bg-surface hover:bg-surface-hover hover:border-accent transition-all duration-200 group"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <span className={cn('text-xs font-semibold px-2 py-0.5 rounded-md', levelColors[exercise.level])}>
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
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
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
