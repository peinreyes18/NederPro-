'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Button from '@/components/ui/Button';
import PronunciationButton from '@/components/ui/PronunciationButton';
import { getVocabularyCategory } from '@/content/vocabulary';
import { lookupVerb } from '@/content/verbs/verb-database';
import { useVerb } from '@/components/verbs/VerbContext';

export default function VocabularyCategoryPage({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) {
  const { categoryId } = use(params);
  const category = getVocabularyCategory(categoryId);
  const { openVerb } = useVerb();

  if (!category) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <Breadcrumb
        items={[
          { label: 'Vocabulary', href: '/vocabulary' },
          { label: category.name },
        ]}
      />

      <div className="flex items-center gap-3 mb-1">
        <span className="text-3xl" role="img" aria-label={category.name}>
          {category.icon}
        </span>
        <div>
          <h1 className="text-3xl font-bold text-primary">{category.name}</h1>
          <p className="text-sm text-accent font-medium">{category.nameDutch}</p>
        </div>
      </div>
      <p className="text-muted mb-6">{category.description}</p>

      <div className="mb-6">
        <Link href={`/vocabulary/${categoryId}/practice`}>
          <Button>Practice These Words</Button>
        </Link>
      </div>

      {/* Word list table */}
      <div className="border border-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface border-b border-border">
                <th className="text-left px-4 py-3 font-semibold text-primary">Dutch</th>
                <th className="text-left px-4 py-3 font-semibold text-primary">English</th>
                <th className="text-left px-4 py-3 font-semibold text-primary hidden sm:table-cell">
                  Example
                </th>
              </tr>
            </thead>
            <tbody>
              {category.words.map((word, index) => (
                <tr
                  key={index}
                  className="border-b border-border last:border-b-0 hover:bg-surface-hover transition-colors"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1.5">
                      <PronunciationButton text={word.dutch} />
                      {(() => {
                        const verb = lookupVerb(word.dutch);
                        if (verb) {
                          return (
                            <button
                              type="button"
                              onClick={() => openVerb(verb)}
                              className="font-medium text-primary underline decoration-dotted decoration-accent/50 underline-offset-4 hover:decoration-accent hover:text-accent transition-colors cursor-pointer text-left"
                              title={`${verb.infinitive} — ${verb.translation}`}
                            >
                              {word.dutch}
                            </button>
                          );
                        }
                        return <span className="font-medium text-primary">{word.dutch}</span>;
                      })()}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-primary-light">{word.english}</td>
                  <td className="px-4 py-3 hidden sm:table-cell">
                    {word.example && (
                      <div>
                        <div className="flex items-center gap-1.5">
                          <PronunciationButton text={word.example} className="shrink-0" />
                          <span className="text-primary">{word.example}</span>
                        </div>
                        {word.exampleTranslation && (
                          <p className="text-xs text-muted mt-0.5 ml-7">
                            {word.exampleTranslation}
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

      {/* Mobile: show examples below the table */}
      <div className="sm:hidden mt-6 space-y-3">
        <h2 className="text-lg font-semibold text-primary">Example Sentences</h2>
        {category.words
          .filter((w) => w.example)
          .map((word, index) => (
            <div key={index} className="bg-surface rounded-lg p-3">
              <div className="flex items-center gap-1.5 mb-1">
                <PronunciationButton text={word.example!} />
                <span className="font-medium text-primary text-sm">{word.example}</span>
              </div>
              {word.exampleTranslation && (
                <p className="text-xs text-muted ml-7">{word.exampleTranslation}</p>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
