import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Card from '@/components/ui/Card';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { getLevel, getTopicsForLevel } from '@/lib/content-loader';
import { levels } from '@/content/levels';
import {
  TopicStatusCircle,
  TopicStatusBadge,
  TopicExerciseProgress,
} from '@/components/progress/TopicListProgress';

export function generateStaticParams() {
  return levels.filter((l) => l.topicIds.length > 0).map((l) => ({ levelId: l.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ levelId: string }>;
}): Promise<Metadata> {
  const { levelId } = await params;
  const level = getLevel(levelId);
  return {
    title: `${level?.name || 'Level'} | NederPro`,
    description: level?.description || 'Dutch grammar topics',
  };
}

export default async function LevelDashboardPage({
  params,
}: {
  params: Promise<{ levelId: string }>;
}) {
  const { levelId } = await params;
  const level = getLevel(levelId);
  const topics = getTopicsForLevel(levelId);

  if (!level || topics.length === 0) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <Breadcrumb
        items={[
          { label: 'Levels', href: '/levels' },
          { label: level.name },
        ]}
      />

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl font-bold text-accent">{level.shortName}</span>
          <h1 className="text-3xl font-bold text-primary">{level.name}</h1>
        </div>
        <p className="text-muted">{level.description}</p>
        {level.examInfo && (
          <p className="text-sm text-accent mt-2 font-medium">{level.examInfo}</p>
        )}
      </div>

      <div className="space-y-3">
        {topics.map((topic, index) => (
          <Link key={topic.id} href={`/levels/${levelId}/${topic.id}`}>
            <Card hover className="flex items-center gap-4">
              <TopicStatusCircle levelId={levelId} topicId={topic.id} index={index} />

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <h3 className="font-semibold text-primary truncate">{topic.title}</h3>
                  <TopicStatusBadge levelId={levelId} topicId={topic.id} />
                </div>
                {topic.subtitle && (
                  <p className="text-sm text-muted truncate">{topic.subtitle}</p>
                )}
                <TopicExerciseProgress levelId={levelId} topicId={topic.id} />
              </div>

              <div className="text-xs text-muted flex-shrink-0 hidden sm:block">
                ~{topic.estimatedMinutes} min
              </div>

              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-muted flex-shrink-0"
              >
                <path d="M7 4l6 6-6 6" />
              </svg>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
