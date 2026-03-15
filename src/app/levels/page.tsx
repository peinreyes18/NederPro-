import type { Metadata } from 'next';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Breadcrumb from '@/components/layout/Breadcrumb';
import LevelCardProgress from '@/components/progress/LevelCardProgress';
import LessonSignupNudge from '@/components/lesson/LessonSignupNudge';
import { levels } from '@/content/levels';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nederpro.com';

export const metadata: Metadata = {
  title: 'Dutch Grammar Levels',
  description:
    'Structured Dutch grammar lessons from A0 to B2. Follow the CEFR path from absolute beginner to advanced — aligned with Inburgeringsexamen and Staatsexamen NT2.',
  openGraph: {
    title: 'Dutch Grammar Levels — NederPro',
    description:
      'CEFR-aligned Dutch grammar lessons from A0 to B2. Structured progression toward official Dutch exam certification.',
    url: `${BASE_URL}/levels`,
    type: 'website',
  },
};

const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Dutch Grammar Levels — CEFR A0 to B2',
  description:
    'Free structured Dutch grammar lessons from A0 to B2, aligned with the CEFR framework and Dutch integration exams (Inburgeringsexamen, Staatsexamen NT2).',
  url: `${BASE_URL}/levels`,
  numberOfItems: levels.length,
  itemListElement: levels.map((level, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: `${level.name} Dutch Grammar`,
    description: level.description,
    url: `${BASE_URL}/levels/${level.id}`,
  })),
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What CEFR levels does NederPro cover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NederPro covers Dutch grammar from A0 (absolute beginner) through B2 (advanced), following the Common European Framework of Reference for Languages (CEFR). Each level builds on the previous one.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which level should I start with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you have never studied Dutch before, start at A0 (Starter). If you know basic greetings and simple phrases, try A1 (Breakthrough). If you can hold simple conversations, start at A2 (Waystage).',
      },
    },
    {
      '@type': 'Question',
      name: 'Is NederPro free to use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All Dutch grammar lessons on NederPro are free to read. Interactive exercises, exam practice, vocabulary quizzes, and progress tracking require a subscription, which starts with a 7-day free trial. No credit card is required to start.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Inburgeringsexamen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Inburgeringsexamen (civic integration exam) is a Dutch language and society exam required for immigrants living in the Netherlands. It tests Dutch at A2 level. NederPro\'s A1 and A2 levels prepare you for this exam.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Staatsexamen NT2?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Staatsexamen NT2 (State Exam Dutch as a Second Language) is a higher-level Dutch exam available at B1 (Programma I) and B2 (Programma II). It is often required for university admission or professional registration in the Netherlands.',
      },
    },
  ],
};

export default function LevelsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb items={[{ label: 'Levels' }]} />

      <h1 className="text-3xl font-bold text-primary mb-2">Choose Your Level</h1>
      <p className="text-muted mb-8">
        Select a CEFR level to view its grammar topics and start learning.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {levels.map((level) => {
          const hasContent = level.topicIds.length > 0;

          return (
            <Link
              key={level.id}
              href={hasContent ? `/levels/${level.id}` : '#'}
              className={!hasContent ? 'pointer-events-none' : ''}
            >
              <Card hover={hasContent} className={!hasContent ? 'opacity-60' : ''}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-bold text-accent">
                    {level.shortName}
                  </span>
                  {hasContent ? (
                    <Badge variant="accent">{level.topicIds.length} topics</Badge>
                  ) : (
                    <Badge>Coming soon</Badge>
                  )}
                </div>
                <h3 className="font-semibold text-primary mb-1">{level.name}</h3>
                <p className="text-sm text-muted leading-relaxed mb-3">
                  {level.description}
                </p>
                {hasContent && (
                  <LevelCardProgress levelId={level.id} topicCount={level.topicIds.length} />
                )}
                {level.examInfo && (
                  <p className="text-xs text-accent mt-3 font-medium">
                    {level.examInfo}
                  </p>
                )}
              </Card>
            </Link>
          );
        })}
      </div>

      <LessonSignupNudge />
    </div>
  );
}
