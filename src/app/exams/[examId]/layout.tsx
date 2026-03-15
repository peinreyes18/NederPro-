import type { Metadata } from 'next';
import { getExamById } from '@/content/exams';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nederpro.com';

const examTypeLabels: Record<string, string> = {
  knm: 'KNM – Kennis van de Nederlandse Maatschappij',
  'inburgering-a2': 'Inburgeringsexamen A2',
  'staatsexamen-nt2-i': 'Staatsexamen NT2 Programma I (B1)',
  'staatsexamen-nt2-ii': 'Staatsexamen NT2 Programma II (B2)',
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ examId: string }>;
}): Promise<Metadata> {
  const { examId } = await params;
  const exam = getExamById(examId);

  if (!exam) {
    return {
      title: 'Exam Not Found',
      description: 'This exam could not be found.',
    };
  }

  const examTypeLabel = examTypeLabels[exam.examType] ?? exam.examType;
  const skillLabel =
    exam.skill === 'reading'
      ? 'Reading'
      : exam.skill === 'listening'
      ? 'Listening'
      : exam.skill === 'writing'
      ? 'Writing'
      : 'Knowledge';

  const description = `Practice ${skillLabel.toLowerCase()} exam for the ${examTypeLabel}. ${exam.totalQuestions} questions, ${exam.timeLimitMinutes} minutes, ${exam.passingScore}% pass mark. ${exam.description}`;

  return {
    title: exam.title,
    description: description.slice(0, 160),
    openGraph: {
      title: `${exam.title} | NederPro`,
      description: description.slice(0, 160),
      url: `${BASE_URL}/exams/${examId}`,
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ExamLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ examId: string }>;
}) {
  const { examId } = await params;
  const exam = getExamById(examId);

  const jsonLd = exam
    ? {
        '@context': 'https://schema.org',
        '@type': 'Quiz',
        name: exam.title,
        description: exam.description,
        url: `${BASE_URL}/exams/${examId}`,
        educationalAlignment: {
          '@type': 'AlignmentObject',
          alignmentType: 'educationalLevel',
          targetName:
            exam.examType === 'staatsexamen-nt2-ii'
              ? 'B2'
              : exam.examType === 'staatsexamen-nt2-i'
              ? 'B1'
              : 'A2',
        },
        timeRequired: `PT${exam.timeLimitMinutes}M`,
        numberOfQuestions: exam.totalQuestions,
        isAccessibleForFree: true,
        inLanguage: 'nl',
        author: {
          '@type': 'Organization',
          name: 'NederPro',
          url: BASE_URL,
        },
        isPartOf: {
          '@type': 'WebSite',
          name: 'NederPro',
          url: BASE_URL,
        },
      }
    : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      {children}
    </>
  );
}
