import Link from 'next/link';
import { allExams } from '@/content/exams';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

const examTypeLabels: Record<string, string> = {
  knm: 'KNM \u2013 Kennis van de Nederlandse Maatschappij',
  'inburgering-a2': 'Inburgeringsexamen (A2)',
  'staatsexamen-nt2-i': 'Staatsexamen NT2 Programma I (B1)',
  'staatsexamen-nt2-ii': 'Staatsexamen NT2 Programma II (B2)',
};

const examTypeOrder = [
  'knm',
  'inburgering-a2',
  'staatsexamen-nt2-i',
  'staatsexamen-nt2-ii',
];

const skillIcons: Record<string, string> = {
  reading: 'Reading',
  writing: 'Writing',
  speaking: 'Speaking',
  knowledge: 'Knowledge',
};

export default function ExamsPage() {
  // Group exams by examType
  const groupedExams = examTypeOrder
    .map((type) => ({
      type,
      label: examTypeLabels[type] || type,
      exams: allExams.filter((exam) => exam.examType === type),
    }))
    .filter((group) => group.exams.length > 0);

  return (
    <div>
      {/* Header Section */}
      <section className="relative overflow-hidden bg-background border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-light/50 via-transparent to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Exam Preparation
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary leading-[1.1]">
              Exam Practice
            </h1>
            <p className="mt-4 text-lg text-primary-light leading-relaxed max-w-2xl">
              Prepare for official Dutch exams with realistic practice tests.
              Timed sessions, instant feedback, and detailed score breakdowns
              help you identify weak areas and build exam confidence.
            </p>
            <div className="mt-8">
              <Link href="/">
                <Button variant="outline" size="sm">
                  &larr; Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Groups */}
      {groupedExams.map((group) => (
        <section
          key={group.type}
          className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16"
        >
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2">
              {group.label}
            </h2>
            <div className="w-16 h-1 rounded-full bg-accent" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {group.exams.map((exam) => (
              <Card key={exam.id} hover className="flex flex-col">
                <div className="flex-1">
                  <h3 className="font-semibold text-primary text-lg mb-2">
                    {exam.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {exam.description}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="accent">
                      {skillIcons[exam.skill] || exam.skill}
                    </Badge>
                    <Badge>
                      {exam.timeLimitMinutes} min
                    </Badge>
                    <Badge>
                      {exam.totalQuestions} questions
                    </Badge>
                  </div>

                  {/* Passing score */}
                  {exam.passingScore && (
                    <p className="text-xs text-accent font-semibold mb-4">
                      Passing score: {exam.passingScore}%
                    </p>
                  )}
                </div>

                {/* Action */}
                <div className="pt-2">
                  <Link href={`/exams/${exam.id}`}>
                    <Button className="w-full" size="sm">
                      Start Practice
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </section>
      ))}

      {/* Empty state if no exams at all */}
      {groupedExams.length === 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center">
          <p className="text-muted text-lg">
            No practice exams available yet. Check back soon!
          </p>
        </section>
      )}
    </div>
  );
}
