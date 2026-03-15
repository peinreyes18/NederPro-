import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Breadcrumb from '@/components/layout/Breadcrumb';
import LessonSignupNudge from '@/components/lesson/LessonSignupNudge';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nederpro.com';

export const metadata: Metadata = {
  title: 'Inburgeringsexamen — Complete Preparation Guide',
  description:
    'Everything you need to pass the Inburgeringsexamen. Understand the exam structure (KNM, ONA, MAP), the A2 language requirement, and follow a structured study plan with NederPro.',
  openGraph: {
    title: 'How to Pass the Inburgeringsexamen | NederPro',
    description:
      'Complete guide to the Dutch civic integration exam: what it tests, how to prepare, and a structured A0–A2 study path aligned with the official requirements.',
    url: `${BASE_URL}/inburgeringsexamen`,
    type: 'article',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the Inburgeringsexamen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Inburgeringsexamen (civic integration exam) is a mandatory Dutch language and society exam for most non-EU immigrants in the Netherlands. It tests Dutch language skills at A2 level and knowledge of Dutch society.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the components of the Inburgeringsexamen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Inburgeringsexamen consists of three main parts: KNM (Kennis van de Nederlandse Maatschappij — knowledge of Dutch society), ONA (Oriëntatie op de Nederlandse Arbeidsmarkt — orientation to the Dutch labour market), and MAP (Maatschappelijke Participatie — civic participation). Language skills are tested through reading, writing, listening, and speaking at A2 level.',
      },
    },
    {
      '@type': 'Question',
      name: 'What Dutch level do I need for the Inburgeringsexamen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Inburgeringsexamen requires Dutch at CEFR A2 level. This means you can understand simple sentences, communicate in basic situations, and describe your background and immediate environment.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to prepare for the Inburgeringsexamen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Preparation typically takes 6–18 months depending on your starting level and how much time you study each week. Starting from zero Dutch (A0), reaching A2 requires roughly 200–300 hours of study. NederPro\'s A0–A2 grammar path covers all the grammar you need.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who must take the Inburgeringsexamen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most non-EU/EEA immigrants who received a residence permit after 1 January 2022 must complete the inburgeringsplicht (integration obligation). There are exemptions for people who completed Dutch secondary education or certain other qualifications.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I practice for the KNM exam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NederPro offers KNM practice exams covering Dutch society, customs, politics, healthcare, and more. These timed practice tests simulate the real exam conditions.',
      },
    },
  ],
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Inburgeringsexamen Guide', item: `${BASE_URL}/inburgeringsexamen` },
  ],
};

const studyPath = [
  {
    level: 'A0',
    label: 'A0 — Starter',
    badge: 'Start here',
    badgeVariant: 'accent' as const,
    description: 'Zero Dutch? Begin here. Alphabet, pronunciation, numbers, greetings, and time.',
    topics: ['Alphabet & Pronunciation', 'Basic Greetings', 'Numbers', 'Everyday Phrases', 'Days & Months', 'Telling the Time'],
    href: '/levels/a0',
    weeks: '4–6 weeks',
  },
  {
    level: 'A1',
    label: 'A1 — Breakthrough',
    badge: 'Foundation',
    badgeVariant: 'default' as const,
    description: 'Core grammar: verbs, articles, word order, negation — the building blocks you\'ll use every day.',
    topics: ['Present Tense', 'De / Het Articles', 'Word Order', 'Hebben & Zijn', 'Negation', 'Questions'],
    href: '/levels/a1',
    weeks: '6–8 weeks',
  },
  {
    level: 'A2',
    label: 'A2 — Waystage',
    badge: 'Exam level',
    badgeVariant: 'accent' as const,
    description: 'The grammar required for the Inburgeringsexamen: perfect tense, modal verbs, subordinate clauses, formal writing.',
    topics: ['Perfectum', 'Separable Verbs', 'Modal Verbs', 'Conjunctions', 'Formal Emails', 'Imperfectum'],
    href: '/levels/a2',
    weeks: '8–10 weeks',
  },
];

const examComponents = [
  {
    code: 'KNM',
    name: 'Kennis van de Nederlandse Maatschappij',
    description: 'Knowledge of Dutch society: history, politics, healthcare, housing, customs, and civic life. 45 multiple-choice questions.',
    icon: '🏛️',
    practiceHref: '/exams',
  },
  {
    code: 'ONA',
    name: 'Oriëntatie op de Nederlandse Arbeidsmarkt',
    description: 'Orientation to the Dutch labour market. Includes a personal development plan (PIP) with guidance from your municipality.',
    icon: '💼',
    practiceHref: null,
  },
  {
    code: 'MAP',
    name: 'Maatschappelijke Participatie',
    description: 'Civic participation: demonstrating involvement in Dutch society through volunteering, work, or education.',
    icon: '🤝',
    practiceHref: null,
  },
  {
    code: 'Taal A2',
    name: 'Dutch Language at A2 Level',
    description: 'Reading, listening, writing, and speaking assessments at CEFR A2 level. Tested across all four language skills.',
    icon: '🗣️',
    practiceHref: '/levels/a2',
  },
];

export default function InburgeringsexamenPage() {
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
          <Breadcrumb items={[{ label: 'Inburgeringsexamen Guide' }]} />
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Complete Preparation Guide
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary leading-[1.1] mb-4">
            How to Pass the<br />
            <span className="text-accent">Inburgeringsexamen</span>
          </h1>
          <p className="text-lg text-primary-light leading-relaxed max-w-2xl mb-8">
            The Dutch civic integration exam is required for most non-EU immigrants settling in the Netherlands. This guide explains what it tests, who must take it, and how to prepare systematically from A0 to A2.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/levels/a0">
              <Button size="sm">Start A0 lessons — free</Button>
            </Link>
            <Link href="/exams">
              <Button variant="outline" size="sm">Practice KNM exam</Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        {/* What is it */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-4">What is the Inburgeringsexamen?</h2>
          <div className="prose prose-neutral max-w-none text-primary-light leading-relaxed space-y-4">
            <p>
              The <strong>Inburgeringsexamen</strong> (civic integration exam) is a mandatory test for most non-EU/EEA immigrants who receive a Dutch residence permit. It demonstrates that you can function in Dutch society — both linguistically and culturally.
            </p>
            <p>
              Since the <em>Wet Inburgering 2021</em> came into effect on 1 January 2022, inburgeringsplichtigen (those with an integration obligation) must complete their inburgering within <strong>three years</strong> of receiving their residence permit. Your municipality (gemeente) coordinates your integration programme and arranges a personal plan.
            </p>
            <p>
              The exam is administered by <strong>DUO</strong> (Dienst Uitvoering Onderwijs), the Dutch government's education agency.
            </p>
          </div>
        </section>

        {/* Exam components */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-2">What does the exam consist of?</h2>
          <p className="text-muted mb-6">The Inburgeringsexamen has four components. You must pass all of them.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {examComponents.map((comp) => (
              <Card key={comp.code} className="flex flex-col">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">{comp.icon}</span>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-primary">{comp.code}</h3>
                    </div>
                    <p className="text-xs text-accent font-semibold">{comp.name}</p>
                  </div>
                </div>
                <p className="text-sm text-muted leading-relaxed flex-1">{comp.description}</p>
                {comp.practiceHref && (
                  <div className="mt-4">
                    <Link href={comp.practiceHref}>
                      <Button size="sm" variant="outline" className="w-full">
                        Practice →
                      </Button>
                    </Link>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Who must take it */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-4">Who must take the Inburgeringsexamen?</h2>
          <div className="space-y-3 text-primary-light leading-relaxed">
            <p>You have an <strong>inburgeringsplicht</strong> (integration obligation) if you:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 text-sm">
              <li>Are a non-EU/EEA national who received a Dutch residence permit after 1 January 2022</li>
              <li>Are between 18 and state pension age</li>
              <li>Are not already exempt (see below)</li>
            </ul>
            <p className="mt-4">You may be <strong>exempt</strong> if you:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 text-sm">
              <li>Completed Dutch secondary education (voortgezet onderwijs)</li>
              <li>Hold a Dutch higher education diploma (HBO or university)</li>
              <li>Can prove equivalent Dutch language proficiency (B1 level or higher)</li>
              <li>Have a medical reason that prevents participation</li>
            </ul>
            <p className="mt-4 text-sm">
              <em>Note: Requirements can change. Always verify your specific situation with your gemeente or DUO.</em>
            </p>
          </div>
        </section>

        {/* Study path */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-2">Your study path: A0 → A2</h2>
          <p className="text-muted mb-8">
            The language component requires A2 Dutch. NederPro's structured lessons take you from zero to A2 step by step, with all grammar topics aligned to the exam requirements.
          </p>
          <div className="space-y-4">
            {studyPath.map((step, i) => (
              <Card key={step.level} className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm">
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-bold text-primary">{step.label}</h3>
                      <Badge variant={step.badgeVariant}>{step.badge}</Badge>
                      <span className="text-xs text-muted">~{step.weeks}</span>
                    </div>
                    <p className="text-sm text-primary-light mb-3">{step.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {step.topics.map((topic) => (
                        <span
                          key={topic}
                          className="text-xs bg-accent-light text-accent font-medium px-2 py-0.5 rounded-full border border-accent/20"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                    <Link href={step.href}>
                      <Button size="sm" variant={i === 2 ? 'primary' : 'outline'}>
                        {i === 0 ? 'Start A0 — free' : i === 1 ? 'Go to A1 lessons' : 'Go to A2 lessons'}
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* KNM section */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-4">Preparing for the KNM</h2>
          <p className="text-primary-light leading-relaxed mb-4">
            The <strong>KNM</strong> (Kennis van de Nederlandse Maatschappij) tests your knowledge of Dutch society. It covers:
          </p>
          <div className="grid gap-3 sm:grid-cols-2 mb-6">
            {[
              ['🏛️', 'Dutch government & politics', 'How the Netherlands is governed, elections, municipalities'],
              ['🏥', 'Healthcare system', 'The huisarts, health insurance, eigen risico, referrals'],
              ['🏠', 'Housing & registration', 'Renting, BSN, gemeente registration, DigiD'],
              ['📚', 'Education system', 'Dutch schools, basisonderwijs, VO, MBO/HBO/WO'],
              ['💼', 'Work & benefits', 'Employment rights, UWV, social security, taxes'],
              ['🌊', 'History & culture', 'Dutch history, values, customs, and national identity'],
            ].map(([icon, title, desc]) => (
              <div key={String(title)} className="flex gap-3 p-3 rounded-xl border border-border bg-background">
                <span className="text-xl flex-shrink-0">{icon}</span>
                <div>
                  <p className="text-sm font-semibold text-primary">{title}</p>
                  <p className="text-xs text-muted">{String(desc)}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/exams">
            <Button size="sm">Practice KNM exams →</Button>
          </Link>
        </section>

        {/* Tips */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-4">Practical tips for passing</h2>
          <div className="space-y-3">
            {[
              ['📅', 'Start early', 'You have 3 years but most people who pass do so within 18 months. Starting immediately gives you time to retake components if needed.'],
              ['📋', 'Work with your gemeente', 'Your municipality provides a personal integration plan (PIP), connects you with a language provider, and can grant extensions for valid reasons.'],
              ['🔁', 'Practice KNM questions regularly', 'The KNM is multiple-choice with 45 questions. Regular timed practice is the fastest way to prepare — use NederPro\'s KNM practice exams.'],
              ['🗣️', 'Speak Dutch daily', 'Grammar lessons help, but daily conversation practice accelerates progress more than anything else. Find a language exchange partner or conversation group.'],
              ['📖', 'Read Dutch news', 'After reaching A2, reading simple Dutch news sites (e.g. NOS op 3) builds vocabulary and keeps you current on the society topics tested in KNM.'],
              ['📝', 'Register with DUO', 'Once you\'re ready, register for your exams at duo.nl. You can take components separately and in any order.'],
            ].map(([icon, title, body]) => (
              <div key={String(title)} className="flex gap-3 p-4 rounded-xl border border-border bg-background">
                <span className="text-xl flex-shrink-0 mt-0.5">{icon}</span>
                <div>
                  <p className="font-semibold text-primary text-sm mb-0.5">{title}</p>
                  <p className="text-sm text-muted leading-relaxed">{String(body)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-6">Frequently asked questions</h2>
          <div className="space-y-4">
            {[
              ['How long do I have to complete the inburgering?', 'You have 3 years from the date your residence permit was granted. Your gemeente can extend this if you have a valid reason (e.g. illness, childcare, or insufficient language course availability).'],
              ['What happens if I fail?', 'You can retake individual components. There is a fee for each attempt after the first. Your gemeente can advise on repeat attempts and additional support.'],
              ['Can I do self-study or do I need a language school?', 'Under the Wet Inburgering 2021, most inburgeraars are directed to a formal language provider through their gemeente. However, self-study with tools like NederPro is an excellent supplement — especially for grammar, vocabulary, and KNM practice.'],
              ['Is the exam in Dutch or English?', 'The language exam is in Dutch. The KNM exam is also in Dutch, though an audio version is available. Instructions are given in Dutch.'],
              ['What is the passing score?', 'For the KNM, you need a minimum score (typically 70%). Language components have their own pass thresholds. Your gemeente will provide full details.'],
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
          <h2 className="text-2xl font-bold text-primary mb-4">Also preparing for Staatsexamen NT2?</h2>
          <p className="text-primary-light mb-4 text-sm leading-relaxed">
            If your goal is university admission, professional registration, or advanced Dutch proficiency, the Staatsexamen NT2 (B1 or B2) may also be relevant. NederPro covers B1 and B2 grammar as well.
          </p>
          <Link href="/staatsexamen-nt2">
            <Button variant="outline" size="sm">Staatsexamen NT2 guide →</Button>
          </Link>
        </section>

        <LessonSignupNudge />
      </div>
    </div>
  );
}
