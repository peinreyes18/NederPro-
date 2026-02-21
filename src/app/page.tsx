import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { createServerClient } from '@supabase/ssr';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { levels } from '@/content/levels';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nederpro.nl';

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

export default async function HomePage() {
  // Redirect logged-in users straight to their dashboard
  const cookieStore = await cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return cookieStore.getAll(); },
        setAll() {},
      },
    }
  );
  const { data: { session } } = await supabase.auth.getSession();
  if (session) redirect('/progress');

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
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
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
              <Link href="/levels">
                <Button size="lg">Start Learning</Button>
              </Link>
              <Link href="/vocabulary">
                <Button size="lg" variant="outline">
                  Vocabulary
                </Button>
              </Link>
              <Link href="/reference">
                <Button size="lg" variant="outline">
                  Grammar Reference
                </Button>
              </Link>
              <Link href="/exams">
                <Button size="lg" variant="outline">
                  Exam Practice
                </Button>
              </Link>
              <Link href="/culture">
                <Button size="lg" variant="outline">
                  Culture Tips
                </Button>
              </Link>
              <Link href="/history">
                <Button size="lg" variant="outline">
                  Dutch History
                </Button>
              </Link>
            </div>
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
                className={!hasContent ? 'pointer-events-none' : ''}
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

    </div>
  );
}
