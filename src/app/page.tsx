import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { levels } from '@/content/levels';

export const metadata: Metadata = {
  title: 'NederPro — Structured Dutch Grammar Learning',
  description:
    'Learn Dutch systematically — grammar-first, CEFR-aligned, and built for adults preparing to work and live in the Netherlands. Covers A0 to B2, Inburgeringsexamen, and Staatsexamen NT2.',
  openGraph: {
    title: 'NederPro — Structured Dutch Grammar Learning',
    description:
      'Grammar-first Dutch learning for adults. Aligned with CEFR levels and official Dutch exams (Inburgeringsexamen, Staatsexamen NT2). Serious language learning — no childish games.',
    url: 'https://nederpro.com',
    type: 'website',
  },
};

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nederpro.com';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: 'NederPro',
      url: BASE_URL,
      description:
        'Structured Dutch language learning for adults preparing to work and live in the Netherlands. Aligned with CEFR levels and official Dutch exam standards.',
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'nederprohelp@gmail.com',
        contactType: 'customer support',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'NederPro',
      description: 'Learn Dutch online — grammar, vocabulary, exam practice, and cultural insights.',
      publisher: { '@id': `${BASE_URL}/#organization` },
      inLanguage: 'en',
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: `${BASE_URL}/vocabulary?q={search_term_string}` },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'EducationalOrganization',
      '@id': `${BASE_URL}/#educational-org`,
      name: 'NederPro',
      url: BASE_URL,
      description: 'Online Dutch language school for adults. CEFR A0–B2 courses aligned with the Inburgeringsexamen and Staatsexamen NT2.',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Dutch Language Courses',
        itemListElement: [
          { '@type': 'Course', name: 'Dutch A0 – Starter', description: 'Absolute beginner Dutch: alphabet, greetings, numbers, and basic phrases.', url: `${BASE_URL}/levels/a0`, inLanguage: 'nl', educationalLevel: 'Beginner' },
          { '@type': 'Course', name: 'Dutch A1 – Breakthrough', description: 'Foundation Dutch grammar: verbs, articles, word order, and basic sentences.', url: `${BASE_URL}/levels/a1`, inLanguage: 'nl', educationalLevel: 'Beginner' },
          { '@type': 'Course', name: 'Dutch A2 – Elementary', description: 'Intermediate Dutch: past tense, modal verbs, separable verbs. Inburgering exam prep.', url: `${BASE_URL}/levels/a2`, inLanguage: 'nl', educationalLevel: 'Elementary' },
          { '@type': 'Course', name: 'Dutch B1 – Intermediate', description: 'Advanced grammar and fluency building for the Staatsexamen NT2 Programma I.', url: `${BASE_URL}/levels/b1`, inLanguage: 'nl', educationalLevel: 'Intermediate' },
          { '@type': 'Course', name: 'Dutch B2 – Upper Intermediate', description: 'Complex Dutch structures for the Staatsexamen NT2 Programma II.', url: `${BASE_URL}/levels/b2`, inLanguage: 'nl', educationalLevel: 'Upper Intermediate' },
        ],
      },
    },
  ],
};

const features = [
  {
    icon: '📐',
    title: 'Grammar-First Approach',
    description:
      'Deep understanding of Dutch grammar rules, not random vocabulary drills. Every lesson builds on the previous one.',
  },
  {
    icon: '💼',
    title: 'Workplace Ready',
    description:
      'Every grammar topic includes real workplace examples: emails, meetings, conversations with colleagues.',
  },
  {
    icon: '📋',
    title: 'Exam Aligned',
    description:
      'Content structured around the Inburgeringsexamen and Staatsexamen NT2, so your study time counts toward certification.',
  },
  {
    icon: '🎯',
    title: 'Structured Exercises',
    description:
      'Progressive exercises: from controlled drills to open sentence construction. Build real communication skills.',
  },
  {
    icon: '⚠️',
    title: 'Common Mistakes',
    description:
      'Every topic highlights the mistakes Dutch learners actually make, so you avoid them from the start.',
  },
  {
    icon: '🧑‍💻',
    title: 'Adult-Focused',
    description:
      'Professional tone, practical content. No childish games or gamification. Serious language learning for serious goals.',
  },
];

export default function HomePage() {
  return (
    <div>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-light/50 via-transparent to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-12 sm:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Structured Dutch Learning
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary leading-[1.1]">
              Master Dutch Grammar.
              <br />
              <span className="text-accent">Systematically.</span>
            </h1>
            <p className="mt-6 text-lg text-primary-light leading-relaxed max-w-2xl">
              NederPro is a structured, grammar-focused Dutch learning program designed
              for adults who want to work and live in the Netherlands. Built around real
              grammar progression and aligned with official Dutch language exams.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/signup">
                <Button size="lg">Start free trial</Button>
              </Link>
              <Link href="/login">
                <Button size="lg" variant="outline">
                  Sign in
                </Button>
              </Link>
            </div>
            <p className="mt-4 text-sm text-muted">
              From €2.49 · 7-day free trial · Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Level Overview */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">CEFR Level Progression</h2>
          <p className="text-muted max-w-xl">
            Follow a structured path from absolute beginner to advanced, aligned with Dutch
            exam requirements.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {levels.map((level) => {
            const hasContent = level.topicIds.length > 0;
            return (
              <Link
                key={level.id}
                href={hasContent ? `/levels/${level.id}` : '#'}
                className={[
                  !hasContent ? 'pointer-events-none' : '',
                  'last:sm:col-span-2 last:lg:col-span-1',
                ].join(' ').trim()}
              >
                <Card hover={hasContent} className={!hasContent ? 'opacity-50' : ''}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-extrabold text-accent">
                      {level.shortName}
                    </span>
                    {hasContent ? (
                      <Badge variant="accent">{level.topicIds.length} topics</Badge>
                    ) : (
                      <Badge>Coming soon</Badge>
                    )}
                  </div>
                  <h3 className="font-semibold text-primary mb-1">{level.name}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {level.description}
                  </p>
                  {level.examInfo && (
                    <p className="text-xs text-accent mt-3 font-semibold">
                      {level.examInfo}
                    </p>
                  )}
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Features */}
      <section className="bg-surface border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">
              What Makes NederPro Different
            </h2>
            <p className="text-muted max-w-xl">
              Built for adults who are serious about learning Dutch properly.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <Card key={i}>
                <span className="text-2xl mb-3 block">{feature.icon}</span>
                <h3 className="font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="border-t border-border">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">Simple pricing</h2>
          <p className="text-muted mb-8">
            1-week free trial, then choose your plan. Everything included.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {/* Biweekly */}
            <Card>
              <p className="text-sm font-semibold text-muted mb-1">Every 2 weeks</p>
              <div className="flex items-end gap-1.5 mb-4">
                <span className="text-3xl font-extrabold text-primary">€2.49</span>
                <span className="text-muted mb-1">/ 2 weeks</span>
              </div>
              <ul className="space-y-2 mb-6">
                {['All content & exercises', 'AI writing feedback', 'Exam practice', 'Cancel anytime'].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-primary-light">
                    <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/signup">
                <Button variant="outline" className="w-full">Start free trial</Button>
              </Link>
            </Card>

            {/* Monthly */}
            <Card className="border-accent/40 ring-1 ring-accent/20">
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-semibold text-muted">Monthly</p>
                <span className="text-xs font-semibold text-accent bg-accent-light px-2 py-0.5 rounded-full">Best value</span>
              </div>
              <div className="flex items-end gap-1.5 mb-4">
                <span className="text-3xl font-extrabold text-primary">€3.49</span>
                <span className="text-muted mb-1">/ month</span>
              </div>
              <ul className="space-y-2 mb-6">
                {['All content & exercises', 'AI writing feedback', 'Exam practice', 'Cancel anytime'].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-primary-light">
                    <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/signup">
                <Button className="w-full">Start free trial →</Button>
              </Link>
            </Card>
          </div>

          <p className="text-xs text-muted mt-6">
            7-day free trial on all plans. No credit card required at signup.
          </p>
        </div>
      </section>

    </div>
  );
}
