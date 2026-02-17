import Link from 'next/link';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

const referenceTopics = [
  {
    id: 'verb-conjugation',
    title: 'Verb Conjugation',
    description: 'Present tense conjugation patterns for regular and irregular verbs.',
    level: 'A1+',
  },
  {
    id: 'de-het-list',
    title: 'De / Het Word Lists',
    description: 'Common de-woorden and het-woorden with patterns to help you remember.',
    level: 'A1+',
  },
  {
    id: 'word-order-rules',
    title: 'Word Order Rules',
    description: 'Overview of Dutch word order in main clauses and subordinate clauses.',
    level: 'A1+',
  },
  {
    id: 'prepositions',
    title: 'Prepositions',
    description: 'Dutch prepositions of place, time, and direction with usage examples.',
    level: 'A2+',
  },
];

export default function ReferencePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <Breadcrumb items={[{ label: 'Grammar Reference' }]} />

      <h1 className="text-3xl font-bold text-primary mb-2">Grammar Reference</h1>
      <p className="text-muted mb-8">
        Quick-reference tables and summaries for Dutch grammar rules.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {referenceTopics.map((topic) => (
          <Link key={topic.id} href={`/reference/${topic.id}`}>
            <Card hover>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-primary">{topic.title}</h3>
                <Badge variant="accent">{topic.level}</Badge>
              </div>
              <p className="text-sm text-muted">{topic.description}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
