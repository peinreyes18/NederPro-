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

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nederpro.com';

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
    title: `${level?.name || 'Level'} Dutch Grammar`,
    description: `${level?.description || 'Dutch grammar topics'} Free Dutch grammar lessons at ${level?.shortName || ''} level, aligned with CEFR and the Dutch inburgering exam.`,
    openGraph: {
      title: `${level?.name} Dutch Grammar | NederPro`,
      description: `${level?.description} Free Dutch grammar lessons at ${level?.shortName} level.`,
      url: `${BASE_URL}/levels/${levelId}`,
      type: 'website',
    },
  };
}

// Per-level FAQ questions
const levelFaqs: Record<string, { question: string; answer: string }[]> = {
  a0: [
    {
      question: 'What is A0 Dutch level?',
      answer:
        'A0 is the absolute beginner level — below the official CEFR scale. At A0 you learn the Dutch alphabet, pronunciation, basic greetings, numbers 1–100, colours, days of the week, and essential everyday phrases. No prior Dutch knowledge is needed.',
    },
    {
      question: 'How long does it take to complete A0 Dutch?',
      answer:
        'Most learners complete the A0 level in 2–4 weeks with 30 minutes of study per day. The A0 topics on NederPro cover approximately 3–4 hours of lesson content plus exercises.',
    },
    {
      question: 'What comes after A0 Dutch?',
      answer:
        'After A0 you move to A1 (Breakthrough), where you begin learning Dutch grammar: present tense verbs, articles (de/het), word order, negation, and simple sentence construction.',
    },
  ],
  a1: [
    {
      question: 'What is A1 Dutch level?',
      answer:
        'A1 (Breakthrough) is the first official CEFR level. At A1 you can understand and use familiar everyday expressions, introduce yourself, and interact in a simple way. NederPro\'s A1 covers present tense, articles, word order, and basic grammar.',
    },
    {
      question: 'How long does it take to reach A1 Dutch?',
      answer:
        'From zero, most learners reach A1 in 3–6 months with regular study. NederPro\'s structured A0 and A1 courses provide all the grammar foundation you need.',
    },
    {
      question: 'Is A1 enough for the Inburgeringsexamen?',
      answer:
        'No — the Inburgeringsexamen (civic integration exam) requires A2 level Dutch. A1 is an important stepping stone toward A2. Complete both A1 and A2 on NederPro to prepare for the exam.',
    },
  ],
  a2: [
    {
      question: 'What is A2 Dutch level?',
      answer:
        'A2 (Waystage) is the level required for the Dutch Inburgeringsexamen. At A2 you can understand sentences about familiar topics, communicate in routine tasks, and describe your background in simple terms. NederPro\'s A2 covers perfect tense, modal verbs, separable verbs, and formal writing.',
    },
    {
      question: 'What is the Inburgeringsexamen?',
      answer:
        'The Inburgeringsexamen (civic integration exam) is a mandatory Dutch language and society test for immigrants in the Netherlands. It tests Dutch at A2 level across reading, listening, writing, and speaking. NederPro\'s A1 and A2 levels prepare you for this exam.',
    },
    {
      question: 'How long does it take to reach A2 Dutch?',
      answer:
        'From zero, reaching A2 typically takes 6–12 months of consistent study. With NederPro\'s structured A0, A1, and A2 courses, you build all the grammar skills needed for the Inburgeringsexamen.',
    },
  ],
  b1: [
    {
      question: 'What is B1 Dutch level?',
      answer:
        'B1 (Threshold) is the intermediate level of Dutch. At B1 you can understand the main points of clear standard speech on familiar topics, deal with most travel situations, produce simple connected text, and describe experiences and opinions. NederPro\'s B1 covers passive voice, relative clauses, conditional sentences, and professional communication.',
    },
    {
      question: 'What is the Staatsexamen NT2 Programma I?',
      answer:
        'The Staatsexamen NT2 Programma I is a Dutch language state exam at B1 level. It is often required for admission to vocational education (MBO) or for professional purposes in the Netherlands. NederPro\'s B1 level prepares you for this exam.',
    },
    {
      question: 'How long does it take to reach B1 Dutch?',
      answer:
        'From zero, reaching B1 typically takes 1–2 years of regular study. If you already have A2, moving to B1 usually takes 6–12 months of focused grammar and vocabulary work.',
    },
  ],
  b2: [
    {
      question: 'What is B2 Dutch level?',
      answer:
        'B2 (Vantage) is the upper-intermediate / advanced level. At B2 you can understand complex texts, interact with native speakers fluently, and write clear detailed text on a wide range of subjects. NederPro\'s B2 covers complex word order, formal writing style, advanced modals, and discourse markers.',
    },
    {
      question: 'What is the Staatsexamen NT2 Programma II?',
      answer:
        'The Staatsexamen NT2 Programma II is a Dutch state exam at B2 level. It is required for admission to universities (HBO/WO) and many professional registrations in the Netherlands. NederPro\'s B2 level helps you prepare for this demanding exam.',
    },
    {
      question: 'Is B2 Dutch considered fluent?',
      answer:
        'B2 is considered upper-intermediate to advanced. At B2 you can communicate fluently with native speakers on most topics. True native-level fluency corresponds to C1/C2 on the CEFR scale.',
    },
  ],
};

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

  const courseJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: `${level.name} Dutch Grammar`,
    description: level.description,
    url: `${BASE_URL}/levels/${levelId}`,
    provider: {
      '@type': 'Organization',
      name: 'NederPro',
      url: BASE_URL,
    },
    educationalLevel: level.shortName,
    teaches: `Dutch grammar at ${level.shortName} level`,
    inLanguage: 'en',
    isAccessibleForFree: true,
    courseCode: level.shortName,
    numberOfCredits: 0,
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      inLanguage: 'en',
    },
    hasPart: topics.map((topic) => ({
      '@type': 'Course',
      name: topic.title,
      description: topic.subtitle ?? topic.title,
      url: `${BASE_URL}/levels/${levelId}/${topic.id}`,
    })),
    ...(level.examInfo ? { coursePrerequisites: level.examInfo } : {}),
  };

  const faqs = levelFaqs[levelId] ?? [];
  const faqJsonLd = faqs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      }
    : null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

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
