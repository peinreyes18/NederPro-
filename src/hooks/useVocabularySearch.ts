'use client';

import { useState, useMemo } from 'react';
import { vocabularyCategories, type VocabularyWord, type VocabularyCategory } from '@/content/vocabulary';

export interface SearchResult {
  word: VocabularyWord;
  category: VocabularyCategory;
}

export function useVocabularySearch() {
  const [query, setQuery] = useState('');

  const results = useMemo((): SearchResult[] => {
    const trimmed = query.trim().toLowerCase();
    if (trimmed.length < 2) return [];

    const matches: SearchResult[] = [];

    for (const category of vocabularyCategories) {
      for (const word of category.words) {
        if (word.dutch.toLowerCase().includes(trimmed)) {
          matches.push({ word, category });
          continue;
        }
        if (word.english.toLowerCase().includes(trimmed)) {
          matches.push({ word, category });
          continue;
        }
        if (
          (word.example && word.example.toLowerCase().includes(trimmed)) ||
          (word.exampleTranslation && word.exampleTranslation.toLowerCase().includes(trimmed))
        ) {
          matches.push({ word, category });
        }
      }
    }

    return matches;
  }, [query]);

  const isSearching = query.trim().length >= 2;

  return { query, setQuery, results, isSearching };
}
