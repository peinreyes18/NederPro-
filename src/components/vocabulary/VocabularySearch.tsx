'use client';

import { cn } from '@/lib/utils';

interface VocabularySearchProps {
  query: string;
  onQueryChange: (query: string) => void;
  resultCount: number;
  isSearching: boolean;
}

export default function VocabularySearch({
  query,
  onQueryChange,
  resultCount,
  isSearching,
}: VocabularySearchProps) {
  return (
    <div className="mb-6">
      <div className="relative">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>

        <input
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search all vocabulary (Dutch or English)..."
          className={cn(
            'w-full pl-10 pr-10 py-3 rounded-xl border border-border',
            'bg-background text-primary placeholder:text-muted',
            'focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent',
            'transition-all duration-200 text-sm'
          )}
          aria-label="Search vocabulary"
        />

        {query && (
          <button
            onClick={() => onQueryChange('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-primary transition-colors p-1"
            aria-label="Clear search"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {isSearching && (
        <p className="text-xs text-muted mt-2 ml-1">
          {resultCount === 0
            ? 'No words found'
            : `${resultCount} word${resultCount !== 1 ? 's' : ''} found`}
        </p>
      )}
    </div>
  );
}
