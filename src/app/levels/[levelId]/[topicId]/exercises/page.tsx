import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/layout/Breadcrumb';
import ExerciseContainer from '@/components/exercises/ExerciseContainer';
import { getTopic, getLevel, getTopicsForLevel } from '@/lib/content-loader';
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
    title: `Exercises: ${topic?.title || 'Topic'} - ${level?.shortName || ''} | NederPro`,
    description: `Practice exercises for ${topic?.title}`,
  };
}

export default async function ExercisesPage({
  params,
}: {
  params: Promise<{ levelId: string; topicId: string }>;
}) {
  const { levelId, topicId } = await params;
  const topic = getTopic(levelId, topicId);
  const level = getLevel(levelId);

  if (!topic || !level) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <Breadcrumb
        items={[
          { label: 'Levels', href: '/levels' },
          { label: level.name, href: `/levels/${levelId}` },
          { label: topic.title, href: `/levels/${levelId}/${topicId}` },
          { label: 'Exercises' },
        ]}
      />

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-primary">
          Exercises: {topic.title}
        </h1>
        {topic.subtitle && (
          <p className="text-muted mt-1">{topic.subtitle}</p>
        )}
      </div>

      <ExerciseContainer
        exercises={topic.exercises}
        levelId={levelId}
        topicId={topicId}
        backUrl={`/levels/${levelId}/${topicId}`}
      />
    </div>
  );
}
