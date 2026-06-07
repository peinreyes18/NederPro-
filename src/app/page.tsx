import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { levels } from '@/content/levels';
import HeroCta from '@/components/home/HeroCta';
import DailyPracticeBanner from '@/components/home/DailyPracticeBanner';
import TrialButton from '@/components/home/TrialButton';

export const metadata: Metadata = {
  title: 'NederPro — Complete Dutch Exam Preparation',
  description:
    'Prepare for the Inburgeringsexamen and NT2 with NederPro. Practice listening, reading, speaking, KNM, and grammar — all in one place. CEFR A0–B2, mock exams, AI feedback.',
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
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-12 sm:pt-24 sm:pb-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Dutch for adults — serious learning
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary leading-[1.1]">
              Learn Dutch that
              <br />
              <span className="text-accent">actually sticks.</span>
            </h1>
            <p className="mt-6 text-lg text-primary-light leading-relaxed max-w-2xl">
              Grammar-first Dutch learning for adults living and working in the Netherlands.
              Aligned with the Inburgeringsexamen and Staatsexamen NT2 — so every hour you
              spend counts toward a real result.
            </p>
            <HeroCta />

            {/* Trust strip */}
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              {[
                { icon: '📚', text: '69 grammar topics across A0–B2' },
                { icon: '🎯', text: 'Full Inburgeringsexamen & NT2 prep' },
                { icon: '🤖', text: 'AI speaking & writing feedback' },
                { icon: '⚡', text: 'Cancel before day 7, pay nothing' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-muted">
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Daily Practice Banner — client component, shown only for logged-in users */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8">
        <DailyPracticeBanner />
      </div>

      {/* Skills showcase */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 border-t border-border">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">Practice all 4 exam skills</h2>
          <p className="text-muted max-w-xl">
            Everything you need to pass the Inburgeringsexamen — listening, reading, speaking, KNM, and full mock exams.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              href: '/listening',
              emoji: '🎧',
              title: 'Listening Practice',
              desc: '12 Dutch audio exercises from A1 to B2. Listen and answer comprehension questions — just like the real exam.',
              badge: 'A1 → B2',
              color: 'border-purple-200 dark:border-purple-900',
            },
            {
              href: '/reading',
              emoji: '📖',
              title: 'Reading Practice',
              desc: '12 exam-style texts: letters, articles, official documents. Timed with a built-in timer so you train under pressure.',
              badge: 'A1 → B2',
              color: 'border-blue-200 dark:border-blue-900',
            },
            {
              href: '/speaking',
              emoji: '🦉',
              title: 'Speaking Practice',
              desc: 'Speak Dutch with the AI owl. Choose a scenario, press record, and get instant feedback on your Dutch.',
              badge: 'AI powered',
              color: 'border-green-200 dark:border-green-900',
            },
            {
              href: '/knm',
              emoji: '🏛️',
              title: 'KNM Quiz',
              desc: '37 civic knowledge questions across 8 topics: government, healthcare, work, housing, and more.',
              badge: 'Inburgeringsexamen',
              color: 'border-orange-200 dark:border-orange-900',
            },
            {
              href: '/mock-exam',
              emoji: '🇳🇱',
              title: 'Mock Exam',
              desc: 'Full 50-minute timed practice exam: 16 reading + 12 listening + 22 KNM questions. Pass/fail at 70%.',
              badge: 'Full simulation',
              color: 'border-accent/30',
            },
            {
              href: '/daily-practice',
              emoji: '📅',
              title: 'Daily Practice',
              desc: 'Short daily exercises to build your streak and keep vocabulary fresh. Takes 5 minutes a day.',
              badge: 'Streak builder',
              color: 'border-border',
            },
          ].map((item) => (
            <Link key={item.href} href={item.href}
              className={`block rounded-2xl border ${item.color} bg-surface hover:bg-surface-hover hover:border-accent/50 transition-all duration-200 p-5 group`}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{item.emoji}</span>
                <span className="text-xs font-semibold text-accent bg-accent-light px-2 py-0.5 rounded-full">{item.badge}</span>
              </div>
              <h3 className="font-bold text-primary group-hover:text-accent transition-colors mb-1">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
            </Link>
          ))}
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

      {/* Exam Paths */}
      <section className="border-t border-border bg-accent-light/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">Preparing for an official exam?</h2>
            <p className="text-muted max-w-xl">
              NederPro is built around the two main Dutch language exams. Read our complete preparation guides.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Link href="/inburgeringsexamen">
              <Card hover className="h-full">
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">🏛️</span>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-primary">Inburgeringsexamen</h3>
                      <Badge variant="accent">A2</Badge>
                    </div>
                    <p className="text-sm text-muted leading-relaxed mb-3">
                      The Dutch civic integration exam required for most non-EU immigrants. Covers KNM, ONA, MAP, and Dutch at A2 level.
                    </p>
                    <span className="text-sm font-semibold text-accent">Read the full guide →</span>
                  </div>
                </div>
              </Card>
            </Link>
            <Link href="/staatsexamen-nt2">
              <Card hover className="h-full">
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">🎓</span>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-primary">Staatsexamen NT2</h3>
                      <Badge variant="accent">B1 / B2</Badge>
                    </div>
                    <p className="text-sm text-muted leading-relaxed mb-3">
                      The Dutch state language exam for university admission, professional registration, and advanced proficiency.
                    </p>
                    <span className="text-sm font-semibold text-accent">Read the full guide →</span>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
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

      {/* Comparison table */}
      <section className="border-t border-border bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">How NederPro compares</h2>
            <p className="text-muted max-w-xl mx-auto">Not all Dutch learning is equal. Here's how the main options stack up.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 text-muted font-medium w-48"></th>
                  {[
                    { name: 'NederPro', highlight: true },
                    { name: 'Duolingo', highlight: false },
                    { name: 'Babbel', highlight: false },
                    { name: 'Private lessons', highlight: false },
                  ].map((col) => (
                    <th key={col.name} className={`text-center py-3 px-4 font-bold rounded-t-xl ${col.highlight ? 'bg-accent text-white' : 'text-primary-light'}`}>
                      {col.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Explicit grammar explanations',         nederpro: true,  duolingo: false, babbel: '~',   private: true  },
                  { feature: 'Inburgeringsexamen / NT2 aligned',      nederpro: true,  duolingo: false, babbel: false, private: '~'   },
                  { feature: 'AI speaking practice',                  nederpro: true,  duolingo: false, babbel: false, private: false },
                  { feature: 'Mock exams with timed conditions',      nederpro: true,  duolingo: false, babbel: false, private: '~'   },
                  { feature: 'Immediate grammar feedback',            nederpro: true,  duolingo: false, babbel: '~',   private: true  },
                  { feature: 'KNM civic knowledge practice',          nederpro: true,  duolingo: false, babbel: false, private: '~'   },
                  { feature: 'Monthly cost',                          nederpro: '€3.49', duolingo: 'Free / €6.99', babbel: '€9.99', private: '€30–60' },
                ].map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-surface' : 'bg-background'}>
                    <td className="py-3 px-4 text-primary-light font-medium">{row.feature}</td>
                    {[row.nederpro, row.duolingo, row.babbel, row.private].map((val, j) => (
                      <td key={j} className={`text-center py-3 px-4 ${j === 0 ? 'bg-accent/5 font-semibold' : ''}`}>
                        {val === true ? (
                          <span className="text-green-600 dark:text-green-400 text-base">✓</span>
                        ) : val === false ? (
                          <span className="text-muted text-base">✗</span>
                        ) : val === '~' ? (
                          <span className="text-amber-500 text-base">~</span>
                        ) : (
                          <span className={`text-xs ${j === 0 ? 'text-accent font-bold' : 'text-muted'}`}>{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted text-center mt-4">~ = partial or varies by teacher / plan</p>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-t border-border bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid gap-6 sm:grid-cols-3 text-center">
            {[
              { stat: '69', label: 'Grammar topics', sub: 'A0 through B2, all free to read' },
              { stat: '7', label: 'Days free trial', sub: 'Cancel before day 7, pay nothing' },
              { stat: '€3.49', label: 'Per month', sub: 'Less than a coffee, once a month' },
            ].map((item) => (
              <div key={item.stat} className="py-6">
                <p className="text-4xl font-extrabold text-accent mb-1">{item.stat}</p>
                <p className="font-semibold text-primary">{item.label}</p>
                <p className="text-sm text-muted mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Owl speaking spotlight */}
      <section className="border-t border-border bg-accent-light/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">AI Speaking Practice</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-primary mb-4 leading-snug">
                Talk to the Dutch Owl 🦉
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                Pick a real-life scenario — supermarket, doctor, job interview, train station — then speak or type in Dutch. The owl responds at your CEFR level and gives instant, strict grammar corrections. No encouragement for mistakes.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  '22 scenarios across daily life, work, travel & more',
                  'Instant feedback: wrong verb? wrong article? flagged immediately',
                  'Translations so you always know what was said',
                  'Session summary showing every mistake to work on',
                  'Works by voice or text — no microphone required',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-primary-light">
                    <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/signup">
                <Button>Try speaking practice →</Button>
              </Link>
            </div>
            <div className="rounded-2xl border border-accent/20 bg-surface p-6 space-y-3">
              {/* Mock chat preview */}
              <div className="flex items-center gap-2 pb-3 border-b border-border">
                <span className="text-2xl">🦉</span>
                <div>
                  <p className="text-xs font-semibold text-muted uppercase tracking-wider">At the supermarket · A2</p>
                </div>
              </div>
              {[
                { role: 'owl', text: 'Goedemiddag! Heeft u een bonuskaart?', trans: 'Good afternoon! Do you have a loyalty card?' },
                { role: 'user', text: 'Nee, ik heb geen bonuskaart niet.', feedback: '\'geen ... niet\' is double negation — use either \'geen bonuskaart\' or \'niet een bonuskaart\'. Correct: Nee, ik heb geen bonuskaart.' },
                { role: 'owl', text: 'Geen probleem! Dat is dan €12,50.', trans: 'No problem! That\'ll be €12.50.' },
                { role: 'user', text: 'Kan ik met pin betalen?', feedback: 'Correct! Natural phrasing.' },
              ].map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
                    msg.role === 'owl'
                      ? 'bg-accent text-white rounded-tl-sm'
                      : 'bg-background text-primary rounded-tr-sm border border-border'
                  }`}>
                    <p className="font-medium leading-snug">{msg.text}</p>
                    {msg.role === 'owl' && msg.trans && (
                      <p className="text-xs opacity-75 mt-0.5 italic">{msg.trans}</p>
                    )}
                  </div>
                  {msg.role === 'user' && msg.feedback && (
                    <p className={`text-xs mt-1 max-w-[85%] text-right leading-snug ${
                      msg.feedback.startsWith('Correct')
                        ? 'text-green-600 dark:text-green-400'
                        : 'text-amber-600 dark:text-amber-400'
                    }`}>
                      💡 {msg.feedback}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-border bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">What learners say</h2>
            <p className="text-muted max-w-lg mx-auto">
              From complete beginners to exam-ready — NederPro learners share their experience.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                quote: "I tried Duolingo for months and still couldn't form a proper sentence. With NederPro I finally understood why Dutch word order works the way it does. Passed my Inburgeringsexamen on the first try.",
                name: "Amara K.",
                detail: "Inburgeringsexamen — passed A2",
              },
              {
                quote: "The daily grammar lessons are perfect for my schedule. 5–10 minutes every morning, and I can actually feel myself getting better. The speaking practice with the AI is surprisingly good.",
                name: "Daniel F.",
                detail: "Learning Dutch for work",
              },
              {
                quote: "I'd studied Dutch on and off for two years. NederPro gave me the structured approach I was missing. The grammar explanations are clear and the exercises actually test understanding, not just memory.",
                name: "Sofia R.",
                detail: "Preparing for Staatsexamen NT2",
              },
            ].map((t, i) => (
              <div key={i} className="bg-background rounded-2xl border border-border p-6 flex flex-col gap-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, si) => (
                    <svg key={si} className="w-4 h-4 text-warning fill-warning" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-primary-light text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold text-primary text-sm">{t.name}</p>
                  <p className="text-xs text-muted">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="mailto:nederprohelp@gmail.com?subject=My NederPro experience"
              className="text-sm text-accent hover:text-accent-hover font-medium"
            >
              Share your experience →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-8 text-center">
            Common questions
          </h2>
          <div className="space-y-5">
            {[
              {
                q: 'Do I need a credit card to start?',
                a: 'No. You create an account with just your email, then start your 7-day free trial. You only enter payment details when you\'re ready to subscribe — and you can cancel before the trial ends with no charge.',
              },
              {
                q: 'Can I read the lessons before subscribing?',
                a: 'Yes — all 69 grammar lessons are free to read, forever. The subscription unlocks interactive exercises, vocabulary practice with spaced repetition, mock exam sets, and AI writing feedback.',
              },
              {
                q: 'Is this good for the Inburgeringsexamen?',
                a: 'Yes. The curriculum covers A0 through A2 in depth — everything the Inburgeringsexamen tests. The exam section includes dedicated practice sets for all four components (reading, writing, listening, speaking) plus KNM.',
              },
              {
                q: 'What level should I start at?',
                a: 'Start at A0 if you\'re a complete beginner. If you\'ve studied Dutch before, the onboarding quiz helps you find the right entry point. It takes 2 minutes and sets up your learning path automatically.',
              },
              {
                q: 'How is this different from Duolingo?',
                a: 'NederPro teaches grammar explicitly — the rules, the patterns, and why Dutch works the way it does. Duolingo avoids explicit grammar in favour of gamification, which leaves you unable to form sentences you haven\'t seen before. NederPro is for adults who want real proficiency.',
              },
              {
                q: 'Can I cancel easily?',
                a: 'Yes — one click from your account page. No confirmation screens, no retention flows. If you cancel mid-period you keep access until the end of the billing cycle.',
              },
            ].map((item) => (
              <div key={item.q} className="border border-border rounded-xl p-5 bg-background">
                <p className="font-semibold text-primary mb-2">{item.q}</p>
                <p className="text-sm text-muted leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-border bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
          <p className="text-sm font-semibold text-blue-200 uppercase tracking-wider mb-3">Start today</p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4 leading-snug">
            Your Dutch isn't going to learn itself.
          </h2>
          <p className="text-blue-100 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            7-day free trial. Cancel before day 7 and pay nothing. Every day you wait is a day you could be closer to passing the exam or understanding your colleagues.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <TrialButton size="lg" className="bg-white text-accent hover:bg-blue-50 font-bold shadow-lg" />
            <Link href="/levels">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Browse free lessons
              </Button>
            </Link>
          </div>
          <p className="text-blue-200 text-xs mt-6">
            Join learners preparing for the Inburgeringsexamen and Staatsexamen NT2
          </p>
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
            {/* Monthly */}
            <Card>
              <p className="text-sm font-semibold text-muted mb-1">Monthly</p>
              <div className="flex items-end gap-1.5 mb-4">
                <span className="text-3xl font-extrabold text-primary">€3.49</span>
                <span className="text-muted mb-1">/ month</span>
              </div>
              <ul className="space-y-2 mb-6">
                {['All grammar & exercises', 'Listening & reading practice', 'AI speaking & writing feedback', 'KNM quiz + mock exams', 'Cancel anytime'].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-primary-light">
                    <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <TrialButton variant="outline" className="w-full">Start free trial</TrialButton>
            </Card>

            {/* Yearly */}
            <Card className="border-accent/40 ring-1 ring-accent/20">
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-semibold text-muted">Yearly</p>
                <span className="text-xs font-semibold text-accent bg-accent-light px-2 py-0.5 rounded-full">Best value · save 16%</span>
              </div>
              <div className="flex items-end gap-1.5 mb-1">
                <span className="text-3xl font-extrabold text-primary">€34.99</span>
                <span className="text-muted mb-1">/ year</span>
              </div>
              <p className="text-xs text-muted mb-4">≈ €2.92/month</p>
              <ul className="space-y-2 mb-6">
                {['All grammar & exercises', 'Listening & reading practice', 'AI speaking & writing feedback', 'KNM quiz + mock exams', 'Cancel anytime'].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-primary-light">
                    <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <TrialButton className="w-full">Start free trial →</TrialButton>
            </Card>
          </div>

          <p className="text-xs text-muted mt-6">
            7-day free trial on all plans. Cancel before day 7 and pay nothing.
          </p>
        </div>
      </section>

    </div>
  );
}
