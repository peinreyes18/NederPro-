import type { Metadata } from 'next';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import TeamsRequestForm from '@/components/teams/TeamsRequestForm';

/**
 * /teams — B2B landing page ("NederPro for Teams").
 *
 * WHY this exists: employers, relocation agencies and recruiters buy seats for their
 * international staff. Fulfilment is the existing gift-code flow (one code = one year),
 * so this page only has to explain the offer and collect a pilot request.
 * Public route: registered in middleware PUBLIC_PREFIXES and the sitemap.
 */

export const metadata: Metadata = {
  title: 'NederPro for Teams — Dutch exam prep for your international staff',
  description:
    'Give relocated colleagues a year of Dutch integration-exam preparation for €49 per seat. Codes by email, one invoice, a usage report. Start with 10 free pilot seats.',
};

const packages = [
  {
    name: 'Pilot',
    price: '€0',
    unit: '10 seats, one year',
    who: 'For the first companies that try NederPro with their team.',
    items: [
      '10 one-year access codes',
      'Codes by email within one working day',
      'One 20-minute feedback call after a month',
    ],
    highlight: true,
  },
  {
    name: 'Team',
    price: '€49',
    unit: 'per seat, per year',
    who: 'For HR, People and Global Mobility teams.',
    items: [
      'Any number of seats, one VAT invoice',
      'Quarterly usage report: seats redeemed, lessons completed',
      'Direct line to the founder for support',
    ],
    highlight: false,
  },
  {
    name: 'Partner',
    price: '€29',
    unit: 'per seat, per year · 25+ seats',
    who: 'For relocation agencies and recruiters who include NederPro in their welcome package.',
    items: [
      'Bundle a code into every relocation or placement',
      'Co-branded welcome note for your clients',
      'Same invoice and usage report as Team',
    ],
    highlight: false,
  },
];

const steps = [
  { n: '1', title: 'Tell us how many seats', text: 'Use the form below. We reply within one working day with codes and, for paid packs, an invoice.' },
  { n: '2', title: 'Forward the codes', text: 'Each colleague creates a free account and enters their code at nederpro.com/redeem. No card is asked for.' },
  { n: '3', title: 'See what happened', text: 'Every quarter you get a short report: seats redeemed and lessons completed. No individual tracking of who has not started.' },
];

const faqs = [
  {
    q: 'Our international staff are exempt from inburgering. Why would they need this?',
    a: 'Highly skilled migrants are exempt from the integration duty, but a permanent residence permit or Dutch citizenship still requires passing the inburgeringsexamen or Staatsexamen NT2. Most people discover this in year three or four, when the deadline is close.',
  },
  {
    q: 'We already work with a language school.',
    a: 'Keep it. NederPro is what people do between lessons and in the weeks before the exam: reading, listening and speaking practice built on real past exam papers, plus grammar A0 to B2 with interactive exercises.',
  },
  {
    q: 'What does a seat include?',
    a: 'Everything an individual subscriber gets for one year: all lessons and exercises, vocabulary practice, 30 mock exam sets, AI writing feedback, speaking practice and progress tracking, on any device.',
  },
  {
    q: 'Is the app available in other languages than English?',
    a: 'Not yet. Lessons are in Dutch with English explanations. If your team needs another interface language, tell us in the form; it helps us decide what to build next.',
  },
  {
    q: 'How do you invoice?',
    a: 'One invoice per pack, payable by bank transfer or card, with VAT listed. Seats are valid to redeem for twelve months from purchase.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function TeamsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">NederPro for Teams</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-primary mb-3">
          Dutch exam prep for your international colleagues
        </h1>
        <p className="text-muted max-w-xl mx-auto leading-relaxed">
          A year of self-paced preparation for the inburgeringsexamen and Staatsexamen NT2, built on
          real past exams. Codes by email, one invoice, a usage report. No classes to schedule.
        </p>
        <p className="mt-4 text-sm text-muted">
          Typical in-company Dutch courses cost €400 to €800 per employee for twelve weeks. A NederPro
          seat is €49 for a full year.
        </p>
      </div>

      {/* Packages */}
      <div className="grid sm:grid-cols-3 gap-4 mb-14">
        {packages.map((p) => (
          <Card key={p.name} className={p.highlight ? 'border-accent ring-1 ring-accent/30' : ''}>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">{p.name}</p>
            <p className="text-3xl font-extrabold text-primary">{p.price}</p>
            <p className="text-sm text-muted mb-3">{p.unit}</p>
            <p className="text-sm text-primary mb-4">{p.who}</p>
            <ul className="space-y-2 text-sm text-primary">
              {p.items.map((it) => (
                <li key={it} className="flex gap-2">
                  <span className="text-accent" aria-hidden="true">✓</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      {/* How it works */}
      <div className="mb-14">
        <h2 className="text-2xl font-extrabold text-primary mb-6 text-center">How it works</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {steps.map((s) => (
            <div key={s.n} className="rounded-xl border border-border p-5 bg-background">
              <p className="text-accent font-extrabold text-xl mb-2">{s.n}</p>
              <h3 className="font-semibold text-primary mb-1">{s.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Request form */}
      <div id="request" className="mb-14 scroll-mt-24">
        <Card className="sm:p-8">
          <h2 className="text-2xl font-extrabold text-primary mb-2">Request seats</h2>
          <p className="text-muted text-sm mb-6">
            Ask for the free pilot or a paid pack. We reply within one working day from a real person.
          </p>
          <TeamsRequestForm />
        </Card>
      </div>

      {/* FAQ */}
      <div className="mb-10">
        <h2 className="text-2xl font-extrabold text-primary mb-6 text-center">Questions HR asks us</h2>
        <div className="space-y-3">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group rounded-xl border border-border bg-background p-5">
              <summary className="cursor-pointer font-semibold text-primary list-none flex justify-between items-center gap-4">
                <span>{q}</span>
                <span className="text-muted group-open:rotate-45 transition-transform" aria-hidden="true">+</span>
              </summary>
              <p className="text-sm text-muted leading-relaxed mt-3">{a}</p>
            </details>
          ))}
        </div>
      </div>

      <p className="text-center text-sm text-muted">
        Looking for a subscription for yourself? See <Link href="/pricing" className="text-accent hover:underline">individual pricing</Link>.
      </p>
    </div>
  );
}
