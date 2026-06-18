import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/layout/Breadcrumb';
import LessonContent from '@/components/lesson/LessonContent';
import LockedLessonContent from '@/components/lesson/LockedLessonContent';
import LessonSignupNudge from '@/components/lesson/LessonSignupNudge';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import MarkLessonRead from '@/components/progress/MarkLessonRead';
import { getTopic, getAdjacentTopics, getLevel, getTopicsForLevel } from '@/lib/content-loader';
import { levels } from '@/content/levels';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nederpro.com';

/**
 * Levels whose lessons are half-locked for non-subscribers.
 * A0 + A1 stay fully free — they're the SEO/Google funnel that brings people in.
 * The second half of each A2/B1/B2 lesson is gated behind a free trial.
 */
const GATED_LEVELS = new Set(['a2', 'b1', 'b2']);

/** Split point: everything up to (but not including) this index is free. */
function freeSplit(total: number): number {
  return Math.max(1, Math.ceil(total / 2));
}

export function generateStaticParams() {
  return levels.flatMap((level) =>
    getTopicsForLevel(level.id).map((topic) => ({
      levelId: level.id,
      topicId: topic.id,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ levelId: string; topicId: string }>;
}): Promise<Metadata> {
  const { levelId, topicId } = await params;
  const topic = getTopic(levelId, topicId);
  const level = getLevel(levelId);
  const title = `${topic?.title || 'Topic'} — ${level?.shortName || ''} Dutch Grammar`;
  const description = `${topic?.subtitle || `Learn ${topic?.title} in Dutch`} — Free Dutch grammar lesson at ${level?.shortName || ''} level with exercises. Part of NederPro's structured Dutch learning programme.`;
  return {
    title,
    description,
    openGraph: {
      title: `${title} | NederPro`,
      description,
      url: `${BASE_URL}/levels/${levelId}/${topicId}`,
      type: 'article',
    },
  };
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ levelId: string; topicId: string }>;
}) {
  const { levelId, topicId } = await params;
  const topic = getTopic(levelId, topicId);
  const level = getLevel(levelId);
  const { prev, next } = getAdjacentTopics(levelId, topicId);

  if (!topic || !level) {
    notFound();
  }

  const isGated = GATED_LEVELS.has(levelId);

  const learningResourceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    name: `${topic.title} — ${level.shortName} Dutch Grammar`,
    description:
      topic.subtitle ??
      `Learn ${topic.title} in Dutch. Free grammar lesson at ${level.shortName} level with interactive exercises.`,
    url: `${BASE_URL}/levels/${levelId}/${topicId}`,
    educationalLevel: level.shortName,
    teaches: topic.title,
    timeRequired: `PT${topic.estimatedMinutes}M`,
    inLanguage: 'en',
    isAccessibleForFree: !isGated,
    // For gated levels, tell Google which part is paywalled so the blurred
    // second half isn't treated as cloaking (Google's metered-paywall spec).
    ...(isGated
      ? {
          hasPart: {
            '@type': 'WebPageElement',
            isAccessibleForFree: false,
            cssSelector: '.npaywall',
          },
        }
      : {}),
    learningResourceType: 'lesson',
    isPartOf: {
      '@type': 'Course',
      name: `${level.name} Dutch Grammar`,
      url: `${BASE_URL}/levels/${levelId}`,
      provider: {
        '@type': 'Organization',
        name: 'NederPro',
        url: BASE_URL,
      },
    },
    ...(prev
      ? { position: undefined }
      : {}),
    author: {
      '@type': 'Organization',
      name: 'NederPro',
      url: BASE_URL,
    },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(learningResourceJsonLd) }}
      />

      <MarkLessonRead levelId={levelId} topicId={topicId} />

      <Breadcrumb
        items={[
          { label: 'Levels', href: '/levels' },
          { label: level.name, href: `/levels/${levelId}` },
          { label: topic.title },
        ]}
      />

      {/* Topic header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="accent">{level.shortName}</Badge>
          <span className="text-sm text-muted">~{topic.estimatedMinutes} min</span>
        </div>
        <h1 className="text-3xl font-bold text-primary mb-1">{topic.title}</h1>
        {topic.subtitle && (
          <p className="text-lg text-muted italic">{topic.subtitle}</p>
        )}
      </div>

      {/* Exam-aligned callout */}
      {level.examInfo && (
        <div className="mb-6 flex items-start gap-3 rounded-xl border border-accent/30 bg-accent-light/20 px-4 py-3 text-sm">
          <span className="flex-shrink-0 text-base">📋</span>
          <p className="text-primary-light leading-relaxed">
            <strong className="text-primary">Exam relevant:</strong>{' '}
            {level.examInfo.includes('Inburgeringsexamen') ? (
              <>
                This topic is covered in the{' '}
                <Link href="/inburgeringsexamen" className="text-accent hover:underline font-medium">
                  Inburgeringsexamen
                </Link>
                . {levelId === 'a1' ? 'You\'re building the foundation now — A2 is the target level.' : 'You\'re studying at the required exam level.'}
              </>
            ) : (
              <>
                This topic is covered in the{' '}
                <Link href="/staatsexamen-nt2" className="text-accent hover:underline font-medium">
                  Staatsexamen NT2
                </Link>{' '}
                ({level.examInfo.includes('Programma II') ? 'Programma II — B2 level' : 'Programma I — B1 level'}).
              </>
            )}
          </p>
        </div>
      )}

      {/* Lesson content */}
      {(() => {
        // Renders a single units block (used for the `topic.lessons` shape).
        const renderUnit = (unit: NonNullable<typeof topic.lessons>[number]) => (
          <div key={unit.id} className="mb-8">
            <h2 className="text-xl font-semibold text-primary mb-4">{unit.title}</h2>
            <LessonContent lesson={{ sections: unit.sections }} />
          </div>
        );

        // Non-gated levels (A0/A1) — render the whole lesson, fully free.
        if (!isGated) {
          return topic.lesson ? (
            <LessonContent lesson={topic.lesson} />
          ) : (
            topic.lessons?.map(renderUnit)
          );
        }

        // Gated levels (A2/B1/B2) — first half free, second half behind the gate.
        if (topic.lesson) {
          const secs = topic.lesson.sections;
          const split = freeSplit(secs.length);
          const free = secs.slice(0, split);
          const locked = secs.slice(split);
          return (
            <>
              <LessonContent lesson={{ sections: free }} />
              {locked.length > 0 && (
                <LockedLessonContent>
                  <LessonContent lesson={{ sections: locked }} />
                </LockedLessonContent>
              )}
            </>
          );
        }

        const units = topic.lessons ?? [];
        const split = freeSplit(units.length);
        const freeUnits = units.slice(0, split);
        const lockedUnits = units.slice(split);
        return (
          <>
            {freeUnits.map(renderUnit)}
            {lockedUnits.length > 0 && (
              <LockedLessonContent>
                {lockedUnits.map(renderUnit)}
              </LockedLessonContent>
            )}
          </>
        );
      })()}

      {/* Sign-up nudge for unauthenticated visitors.
          On gated levels the locked-content gate already shows a trial CTA,
          so we skip the extra nudge there to avoid two stacked CTAs. */}
      {!isGated && <LessonSignupNudge />}

      {/* Navigation */}
      <div className="border-t border-border pt-6 mt-8 mb-24 sm:mb-0">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            {prev && (
              <Link href={`/levels/${levelId}/${prev.id}`}>
                <Button variant="ghost" size="sm">
                  &larr; {prev.title}
                </Button>
              </Link>
            )}
          </div>

          <Link href={`/levels/${levelId}/${topicId}/exercises`}>
            <Button size="lg">Start Exercises →</Button>
          </Link>

          <div>
            {next && (
              <Link href={`/levels/${levelId}/${next.id}`}>
                <Button variant="ghost" size="sm">
                  {next.title} &rarr;
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Sticky exercises bar — visible on mobile while scrolling */}
      <div className="fixed bottom-0 left-0 right-0 sm:hidden bg-background/95 backdrop-blur border-t border-border px-4 py-3 z-40">
        <Link href={`/levels/${levelId}/${topicId}/exercises`} className="block">
          <Button size="lg" className="w-full">Start Exercises →</Button>
        </Link>
      </div>
    </div>
  );
}
