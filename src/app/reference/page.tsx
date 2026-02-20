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
  {
    id: 'past-tenses',
    title: 'Past Tenses',
    description: 'Perfectum and imperfectum formation, hebben vs. zijn, and common irregular past participles.',
    level: 'A2+',
  },
  {
    id: 'modal-verbs',
    title: 'Modal Verbs',
    description: 'Full conjugation of kunnen, mogen, moeten, willen, zullen, and hoeven with usage notes.',
    level: 'A2+',
  },
  {
    id: 'separable-verbs',
    title: 'Separable Verbs',
    description: 'How separable verbs split in different clause types, with a list of common examples.',
    level: 'A2+',
  },
  {
    id: 'adjectives',
    title: 'Adjectives',
    description: 'Inflection rules (de/het, definite/indefinite), spelling changes, and comparative/superlative forms.',
    level: 'A2+',
  },
  {
    id: 'pronouns',
    title: 'Pronouns',
    description: 'Personal, reflexive, and possessive pronoun tables with usage notes.',
    level: 'A1+',
  },
  {
    id: 'negation',
    title: 'Negation',
    description: 'When to use niet vs. geen, position of niet, and other negative words.',
    level: 'A1+',
  },
  {
    id: 'conjunctions',
    title: 'Conjunctions',
    description: 'Coordinating conjunctions (no word order change) and subordinating conjunctions (verb to end).',
    level: 'A2+',
  },
  {
    id: 'irregular-verbs',
    title: 'Irregular Verbs',
    description: 'Full conjugation table for 20 essential irregular verbs — present, imperfectum, and perfectum.',
    level: 'A2+',
  },
  {
    id: 'subordinate-clauses',
    title: 'Subordinate Clauses',
    description: 'Verb position in subordinate clauses, relative pronouns (die/dat/wie/waar), and clause types.',
    level: 'B1+',
  },
  {
    id: 'numbers-quantities',
    title: 'Numbers & Quantities',
    description: 'Cardinal and ordinal numbers, plus useful quantity expressions like een beetje, veel, and genoeg.',
    level: 'A0+',
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
