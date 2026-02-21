import type { Metadata } from 'next';
import { getExamById } from '@/content/exams';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nederpro.nl';

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

export default function ExamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
