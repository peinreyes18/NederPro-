import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Breadcrumb from '@/components/layout/Breadcrumb';
import LessonSignupNudge from '@/components/lesson/LessonSignupNudge';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nederpro.com';

export const metadata: Metadata = {
  title: 'Staatsexamen NT2 — Complete Preparation Guide',
  description:
    'Everything you need to pass the Staatsexamen NT2 Programma I (B1) or Programma II (B2). Understand the exam structure, who needs it, and how to prepare with structured Dutch grammar lessons.',
  openGraph: {
    title: 'How to Pass the Staatsexamen NT2 | NederPro',
    description:
      'Complete guide to the Dutch State Exam for non-native speakers: B1 and B2 levels, exam components, and a structured study path.',
    url: `${BASE_URL}/staatsexamen-nt2`,
    type: 'article',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the Staatsexamen NT2?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Staatsexamen NT2 (Staatsexamen Nederlands als Tweede Taal) is a Dutch language exam for non-native speakers. It is available at two levels: Programma I (B1) and Programma II (B2). It is administered by DUO and is widely accepted for university admission, professional registration, and immigration purposes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Programma I and Programma II?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Programma I tests Dutch at CEFR B1 level and is used for vocational education (MBO), basic professional registration, and some immigration purposes. Programma II tests at CEFR B2 level and is required for university admission (HBO and WO), advanced professional registration (such as doctors and lawyers), and higher immigration pathways.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who needs the Staatsexamen NT2?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Staatsexamen NT2 is needed by non-native Dutch speakers who want to study at a Dutch university or college, register as a professional in regulated fields (medicine, law, teaching), or demonstrate advanced Dutch proficiency for immigration or employment purposes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the components of the Staatsexamen NT2?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Staatsexamen NT2 tests four language skills: Reading (Lezen), Writing (Schrijven), Listening (Luisteren), and Speaking (Spreken). Each skill is tested separately. You can take components individually and combine passes over time.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to prepare for Staatsexamen NT2 Programma II (B2)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Starting from A2 level, reaching B2 typically requires 12–24 months of structured study. NederPro\'s B1 and B2 grammar courses cover the advanced grammar structures tested in the exam.',
      },
    },
  ],
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Staatsexamen NT2 Guide', item: `${BASE_URL}/staatsexamen-nt2` },
  ],
};

const programmaComparison = [
  {
    id: 'programma-i',
    label: 'Programma I',
    level: 'B1',
    badgeVariant: 'default' as const,
    description: 'Dutch at B1 (threshold) level. Required for MBO, basic professional registration, and some residence permit purposes.',
    useCases: ['MBO study admission', 'Practical nursing / zorg professions', 'Some residence permit extensions', 'Professional certificates requiring B1'],
    studyHref: '/levels/b1',
  },
  {
    id: 'programma-ii',
    label: 'Programma II',
    level: 'B2',
    badgeVariant: 'accent' as const,
    description: 'Dutch at B2 (vantage) level. Required for university admission, advanced professions, and higher immigration pathways.',
    useCases: ['HBO & WO university admission', 'Doctors, lawyers, teachers (BIG register)', 'Advanced professional registration', 'Permanent residence / naturalisation'],
    studyHref: '/levels/b2',
  },
];

const examSkills = [
  {
    icon: '📖',
    skill: 'Lezen',
    english: 'Reading',
    description: 'Reading comprehension of Dutch texts. Articles, letters, notices, and longer documents. Multiple choice and short answer.',
  },
  {
    icon: '✍️',
    skill: 'Schrijven',
    english: 'Writing',
    description: 'Written Dutch production. Formal letters, summaries, and argumentation tasks. Marked for grammar, vocabulary, and coherence.',
  },
  {
    icon: '🎧',
    skill: 'Luisteren',
    english: 'Listening',
    description: 'Listening comprehension of spoken Dutch. Conversations, news items, and instructions. Multiple choice questions.',
  },
  {
    icon: '🗣️',
    skill: 'Spreken',
    english: 'Speaking',
    description: 'Spoken Dutch production. Telephone conversations, presentations, and picture descriptions. Recorded and assessed by examiners.',
  },
];

const studyPath = [
  {
    level: 'A2',
    label: 'A2 — Waystage',
    description: 'If you\'ve passed the Inburgeringsexamen, you\'re at A2. This is your starting point for NT2 preparation.',
    href: '/levels/a2',
    forTarget: 'both',
  },
  {
    level: 'B1',
    label: 'B1 — Threshold',
    description: 'Intermediate grammar: passive voice, relative clauses, conditionals, reported speech, and professional communication.',
    href: '/levels/b1',
    forTarget: 'both',
  },
  {
    level: 'B2',
    label: 'B2 — Vantage',
    description: 'Advanced Dutch: complex word order, formal writing, discourse markers, nominalisation, and register variation.',
    href: '/levels/b2',
    forTarget: 'programma-ii',
  },
];

export default function StaatsexamenNT2Page() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-background border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-light/50 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <Breadcrumb items={[{ label: 'Staatsexamen NT2 Guide' }]} />
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Complete Preparation Guide
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary leading-[1.1] mb-4">
            How to Pass the<br />
            <span className="text-accent">Staatsexamen NT2</span>
          </h1>
          <p className="text-lg text-primary-light leading-relaxed max-w-2xl mb-8">
            The Staatsexamen NT2 is the Dutch state language exam for non-native speakers. It comes in two levels — B1 (Programma I) and B2 (Programma II) — and opens the door to Dutch universities, regulated professions, and permanent residency.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/levels/b1">
              <Button size="sm">Start B1 lessons — free</Button>
            </Link>
            <Link href="/exams">
              <Button variant="outline" size="sm">Practice exams</Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        {/* What is it */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-4">What is the Staatsexamen NT2?</h2>
          <div className="space-y-4 text-primary-light leading-relaxed">
            <p>
              The <strong>Staatsexamen NT2</strong> (Staatsexamen Nederlands als Tweede Taal — State Exam Dutch as a Second Language) is an official Dutch government exam administered by <strong>DUO</strong>. Unlike the Inburgeringsexamen, it is not a citizenship requirement — it is a <em>qualification exam</em> that proves advanced Dutch proficiency.
            </p>
            <p>
              The exam is internationally recognised and accepted by Dutch institutions as proof of language ability for admissions and professional registration. You can take it regardless of nationality or residence status.
            </p>
          </div>
        </section>

        {/* Programma I vs II */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-2">Programma I (B1) vs Programma II (B2)</h2>
          <p className="text-muted mb-6">Choose the level that matches your goal.</p>
          <div className="grid gap-5 sm:grid-cols-2">
            {programmaComparison.map((prog) => (
              <Card key={prog.id} className="flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="font-bold text-primary text-lg">{prog.label}</h3>
                  <Badge variant={prog.badgeVariant}>{prog.level}</Badge>
                </div>
                <p className="text-sm text-primary-light leading-relaxed mb-4">{prog.description}</p>
                <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-2">Typically required for:</p>
                <ul className="space-y-1 mb-5 flex-1">
                  {prog.useCases.map((use) => (
                    <li key={use} className="text-sm text-muted flex gap-2">
                      <span className="text-accent flex-shrink-0">✓</span>
                      {use}
                    </li>
                  ))}
                </ul>
                <Link href={prog.studyHref}>
                  <Button size="sm" variant="outline" className="w-full">
                    Study {prog.level} grammar →
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </section>

        {/* Exam skills */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-2">The four exam skills</h2>
          <p className="text-muted mb-6">Both programmes test the same four language skills. You can take them separately and combine passes over time — there is no expiry on individual component passes.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {examSkills.map((s) => (
              <div key={s.skill} className="flex gap-3 p-4 rounded-xl border border-border bg-background">
                <span className="text-2xl flex-shrink-0">{s.icon}</span>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-bold text-primary">{s.skill}</p>
                    <span className="text-xs text-muted">({s.english})</span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Study path */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-2">Your study path</h2>
          <p className="text-muted mb-6">Start from your current level and work up. All lessons are free to read.</p>
          <div className="space-y-4">
            {studyPath.map((step, i) => (
              <Card key={step.level}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm">
                    {step.level}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-bold text-primary">{step.label}</h3>
                      {step.forTarget === 'programma-ii' && (
                        <Badge variant="accent">Programma II only</Badge>
                      )}
                    </div>
                    <p className="text-sm text-primary-light mb-3">{step.description}</p>
                    <Link href={step.href}>
                      <Button size="sm" variant={i === studyPath.length - 1 ? 'default' : 'outline'}>
                        Study {step.level} →
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Exam practice */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-4">Practice exams</h2>
          <p className="text-primary-light leading-relaxed mb-6">
            NederPro offers practice exams for both NT2 Programma I (B1) and Programma II (B2), covering reading, writing, and listening skills under timed, realistic conditions.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 mb-6">
            <Card>
              <h3 className="font-bold text-primary mb-1">NT2 Programma I — B1</h3>
              <p className="text-sm text-muted mb-4">Reading, writing, and listening practice at B1 level, aligned with the real Staatsexamen format.</p>
              <Link href="/exams">
                <Button size="sm" className="w-full">Practice Programma I</Button>
              </Link>
            </Card>
            <Card>
              <h3 className="font-bold text-primary mb-1">NT2 Programma II — B2</h3>
              <p className="text-sm text-muted mb-4">Advanced reading comprehension, formal writing tasks, and listening exercises at B2 level.</p>
              <Link href="/exams">
                <Button size="sm" className="w-full">Practice Programma II</Button>
              </Link>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-6">Frequently asked questions</h2>
          <div className="space-y-4">
            {[
              ['How do I register for the Staatsexamen NT2?', 'Register at duo.nl. You choose which skills to take, select a test centre (there are centres across the Netherlands), and pay the exam fee. Components can be taken on different dates.'],
              ['How much does the exam cost?', 'Each skill component costs approximately €50–€80. Prices are set by DUO and may change — check duo.nl for current fees.'],
              ['Do passes on individual skills expire?', 'Officially, individual skill passes do not expire. However, some institutions may require that all components were passed within a certain timeframe. Check with your specific institution.'],
              ['Can I use the Staatsexamen NT2 instead of IELTS or TOEFL?', 'Yes — for admission to Dutch universities (HBO and WO), the Staatsexamen NT2 Programma II (B2) is accepted as proof of Dutch language proficiency, replacing the need for an English exam for Dutch-taught programmes.'],
              ['Is there a minimum age to take the exam?', 'There is no official minimum age, but the exam is designed for adults. Secondary school students sometimes take it to qualify for university admission.'],
              ['Can I prepare on my own without a language school?', 'Yes. Many candidates prepare independently using structured grammar resources, practice exams, and language exchange. NederPro\'s B1 and B2 lessons are designed for exactly this kind of self-directed preparation.'],
            ].map(([q, a]) => (
              <details key={String(q)} className="group border border-border rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-primary text-sm hover:bg-accent-light/40 transition-colors">
                  {q}
                  <span className="ml-4 flex-shrink-0 text-accent group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <div className="px-5 pb-4 pt-1 text-sm text-muted leading-relaxed border-t border-border">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Also see */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-4">Also preparing for the Inburgeringsexamen?</h2>
          <p className="text-primary-light mb-4 text-sm leading-relaxed">
            If you have an integration obligation (inburgeringsplicht), you may also need to pass the Inburgeringsexamen at A2 level before working toward the Staatsexamen NT2.
          </p>
          <Link href="/inburgeringsexamen">
            <Button variant="outline" size="sm">Inburgeringsexamen guide →</Button>
          </Link>
        </section>

        <LessonSignupNudge />
      </div>
    </div>
  );
}
