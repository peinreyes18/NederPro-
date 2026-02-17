'use client';

import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import PronunciationButton from '@/components/ui/PronunciationButton';
import type { SearchResult } from '@/hooks/useVocabularySearch';

interface SearchResultsProps {
  results: SearchResult[];
  query: string;
}

export default function SearchResults({ results, query }: SearchResultsProps) {
  if (results.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-4xl mb-3">🔍</p>
        <p className="text-muted">
          No words match &ldquo;{query}&rdquo;. Try a different spelling.
        </p>
      </div>
    );
  }

  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-surface border-b border-border">
              <th className="text-left px-4 py-3 font-semibold text-primary">Dutch</th>
              <th className="text-left px-4 py-3 font-semibold text-primary">English</th>
              <th className="text-left px-4 py-3 font-semibold text-primary hidden sm:table-cell">
                Category
              </th>
              <th className="text-left px-4 py-3 font-semibold text-primary hidden md:table-cell">
                Example
              </th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr
                key={`${result.category.id}-${result.word.dutch}-${index}`}
                className="border-b border-border last:border-b-0 hover:bg-surface-hover transition-colors"
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    <PronunciationButton text={result.word.dutch} />
                    <div>
                      <span className="font-medium text-primary">{result.word.dutch}</span>
                      <span className="sm:hidden text-xs text-muted block mt-0.5">
                        {result.category.icon} {result.category.name}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-primary-light">{result.word.english}</td>
                <td className="px-4 py-3 hidden sm:table-cell">
                  <Link href={`/vocabulary/${result.category.id}`}>
                    <Badge variant="accent">
                      {result.category.icon} {result.category.name}
                    </Badge>
                  </Link>
                </td>
                <td className="px-4 py-3 hidden md:table-cell">
                  {result.word.example && (
                    <div>
                      <span className="text-primary text-xs">{result.word.example}</span>
                      {result.word.exampleTranslation && (
                        <p className="text-xs text-muted mt-0.5">
                          {result.word.exampleTranslation}
                        </p>
                      )}
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
