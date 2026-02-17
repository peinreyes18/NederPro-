import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/layout/Breadcrumb';
import LessonContent from '@/components/lesson/LessonContent';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import MarkLessonRead from '@/components/progress/MarkLessonRead';
import { getTopic, getAdjacentTopics, getLevel, getTopicsForLevel } from '@/lib/content-loader';
import { levels } from '@/content/levels';

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
  return {
    title: `${topic?.title || 'Topic'} - ${level?.shortName || ''} | NederPro`,
    description: topic?.subtitle || `Learn ${topic?.title} in Dutch`,
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

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
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

      {/* Lesson content */}
      {topic.lesson ? (
        <LessonContent lesson={topic.lesson} />
      ) : (
        topic.lessons?.map((unit) => (
          <div key={unit.id} className="mb-8">
            <h2 className="text-xl font-semibold text-primary mb-4">{unit.title}</h2>
            <LessonContent lesson={{ sections: unit.sections }} />
          </div>
        ))
      )}

      {/* Navigation */}
      <div className="border-t border-border pt-6 mt-8">
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
            <Button size="lg">Start Exercises</Button>
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
    </div>
  );
}
