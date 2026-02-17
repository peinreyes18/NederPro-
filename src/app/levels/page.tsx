import Link from 'next/link';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Breadcrumb from '@/components/layout/Breadcrumb';
import LevelCardProgress from '@/components/progress/LevelCardProgress';
import { levels } from '@/content/levels';

export default function LevelsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
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
    </div>
  );
}
