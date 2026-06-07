'use client';

import Link from 'next/link';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import QuizBanner from '@/components/vocabulary/QuizBanner';
import VocabularySearch from '@/components/vocabulary/VocabularySearch';
import SearchResults from '@/components/vocabulary/SearchResults';
import LessonSignupNudge from '@/components/lesson/LessonSignupNudge';
import { vocabularyCategories } from '@/content/vocabulary';
import { useVocabularySearch } from '@/hooks/useVocabularySearch';
import { getAllVerbs } from '@/content/verbs/verb-database';

export default function VocabularyPageContent() {
  const { query, setQuery, results, isSearching } = useVocabularySearch();
  const verbCount = new Set(getAllVerbs().map((v) => v.infinitive)).size;

  return (
    <>
      <VocabularySearch
        query={query}
        onQueryChange={setQuery}
        resultCount={results.length}
        isSearching={isSearching}
      />

      {isSearching ? (
        <SearchResults results={results} query={query} />
      ) : (
        <>
          <QuizBanner />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {vocabularyCategories.map((category) => (
              <Link key={category.id} href={`/vocabulary/${category.id}`}>
                <Card hover>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl" role="img" aria-label={category.name}>
                      {category.icon}
                    </span>
                    <Badge variant="accent">{category.words.length} words</Badge>
                  </div>
                  <h3 className="font-semibold text-primary mb-0.5">{category.name}</h3>
                  <p className="text-xs text-accent font-medium mb-1">{category.nameDutch}</p>
                  <p className="text-sm text-muted leading-relaxed">{category.description}</p>
                </Card>
              </Link>
            ))}

            {/* Verbs card */}
            <Link href="/verbs/practice">
              <Card hover>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl" role="img" aria-label="Verbs">🔤</span>
                  <Badge variant="accent">{verbCount} verbs</Badge>
                </div>
                <h3 className="font-semibold text-primary mb-0.5">Verbs</h3>
                <p className="text-xs text-accent font-medium mb-1">Werkwoorden</p>
                <p className="text-sm text-muted leading-relaxed">Regular, irregular, modal and separable verbs with conjugations.</p>
              </Card>
            </Link>
          </div>

          <LessonSignupNudge />
        </>
      )}
    </>
  );
}
