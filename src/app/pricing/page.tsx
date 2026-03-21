import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Pricing — NederPro',
  description:
    'NederPro is free to browse. Unlock all exercises, vocabulary drills, exam practice, and AI writing feedback from €2.49 — with a 7-day free trial.',
};

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nederpro.com';

const included = [
  { icon: '📚', text: 'All grammar lessons A0 – B2 (69 topics, always free to read)' },
  { icon: '✏️', text: 'Interactive exercises for every lesson' },
  { icon: '🗂️', text: 'Vocabulary drills — 920+ words across 18 categories' },
  { icon: '📋', text: 'Exam practice — 30 full mock exam sets' },
  { icon: '🤖', text: 'AI writing feedback on open-answer questions' },
  { icon: '🌍', text: 'Culture, history & grammar reference guides' },
  { icon: '📈', text: 'Progress tracking across all devices' },
];

const freeItems = [
  'All 69 grammar lessons (read only)',
  'Vocabulary lists & reference tables',
  'Exam overview & study guides',
  'Culture & history content',
];

const paidItems = [
  'Everything in Free, plus:',
  'All interactive exercises',
  'Vocabulary practice & quizzes',
  'Full exam practice sets',
  'AI writing feedback',
  'Progress tracking',
];

const faqs = [
  {
    q: 'Do I need a credit card to start the trial?',
    a: 'No. You create a free account with just your email. You only enter payment details when you choose to upgrade — and you won\'t be charged until the 7-day trial ends.',
  },
  {
    q: 'What happens after the trial?',
    a: 'After 7 days, your chosen plan (€2.49/2 weeks or €3.49/month) begins automatically. If you cancel before the trial ends, you won\'t be charged anything.',
  },
  {
    q: 'Can I cancel at any time?',
    a: 'Yes. Cancel any time from your account settings — no hoops, no retention flows. If you cancel mid-period, you keep access until the end of that billing cycle.',
  },
  {
    q: 'Are all lessons really free?',
    a: 'Yes — all 69 grammar lessons are free to read. The paywall applies to interactive exercises, vocabulary practice, and exam sets. We want you to experience the content quality before deciding to subscribe.',
  },
  {
    q: 'Which plan should I choose?',
    a: 'Both plans include everything. The monthly plan (€3.49/month) saves about 30% compared to the biweekly plan over the same period — it\'s the better deal for most learners.',
  },
  {
    q: 'Is there a student discount?',
    a: 'Not currently. The prices are already set intentionally low — less than a cup of coffee per week — to be accessible to everyone.',
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

export default function PricingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Pricing</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-primary mb-3">
          Simple, honest pricing
        </h1>
        <p className="text-muted max-w-lg mx-auto leading-relaxed">
          All grammar lessons are free to read. Upgrade to unlock exercises, exam practice,
          and AI feedback — with a 7-day free trial, no credit card required.
        </p>
      </div>

      {/* Free vs Paid comparison */}
      <div className="grid sm:grid-cols-2 gap-4 mb-12">
        {/* Free tier */}
        <Card className="relative">
          <div className="mb-4">
            <h2 className="text-lg font-bold text-primary mb-0.5">Free</h2>
            <p className="text-2xl font-extrabold text-primary">€0 <span className="text-sm font-normal text-muted">forever</span></p>
          </div>
          <ul className="space-y-2.5 mb-6">
            {freeItems.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-primary-light">
                <svg className="w-4 h-4 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <Link href="/signup">
            <Button variant="outline" className="w-full">Create free account</Button>
          </Link>
        </Card>

        {/* Paid tier */}
        <Card className="relative border-accent/50 bg-accent-light/10">
          <div className="absolute top-4 right-4">
            <span className="text-xs font-semibold bg-accent text-white px-2 py-0.5 rounded-full">
              7-day free trial
            </span>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-bold text-primary mb-0.5">Full access</h2>
            <div className="flex items-end gap-1">
              <p className="text-2xl font-extrabold text-primary">from €2.49</p>
              <span className="text-sm text-muted mb-0.5">/ 2 weeks</span>
            </div>
          </div>
          <ul className="space-y-2.5 mb-6">
            {paidItems.map((item, i) => (
              <li key={item} className={`flex items-start gap-2 text-sm ${i === 0 ? 'text-muted font-medium' : 'text-primary-light'}`}>
                {i === 0 ? (
                  <span className="w-4 h-4 flex-shrink-0" />
                ) : (
                  <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                )}
                {item}
              </li>
            ))}
          </ul>
          <Link href="/signup">
            <Button className="w-full">Start free trial →</Button>
          </Link>
        </Card>
      </div>

      {/* Plan selector detail */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-primary mb-1 text-center">Choose your billing cycle</h2>
        <p className="text-sm text-muted text-center mb-6">Both plans include every feature. Pick whatever fits your learning pace.</p>
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <Card className="text-center">
            <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">Every 2 weeks</p>
            <p className="text-3xl font-extrabold text-primary mb-1">€2.49</p>
            <p className="text-sm text-muted mb-4">per 2-week period</p>
            <p className="text-xs text-muted">≈ €6.43/month · flexible cadence</p>
          </Card>
          <Card className="text-center border-accent/40 bg-accent-light/10 relative">
            <span className="absolute top-3 right-3 text-xs font-semibold text-accent bg-accent-light px-2 py-0.5 rounded-full">Best value</span>
            <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">Monthly</p>
            <p className="text-3xl font-extrabold text-primary mb-1">€3.49</p>
            <p className="text-sm text-muted mb-4">per month</p>
            <p className="text-xs text-muted">~45% cheaper than biweekly</p>
          </Card>
        </div>
        <p className="text-center text-xs text-muted mt-4">
          7-day free trial on both plans. No credit card required at signup. Cancel any time.
        </p>
      </div>

      {/* What's included */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-primary mb-6 text-center">Everything in the subscription</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {included.map(({ icon, text }) => (
            <div key={text} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-surface">
              <span className="text-xl flex-shrink-0">{icon}</span>
              <p className="text-sm text-primary-light leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-primary mb-6 text-center">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="rounded-xl border border-border px-5 py-4">
              <p className="text-sm font-semibold text-primary mb-1">{q}</p>
              <p className="text-sm text-primary-light leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center rounded-2xl border border-accent/30 bg-accent-light/20 px-6 py-10">
        <h2 className="text-2xl font-bold text-primary mb-2">Ready to start?</h2>
        <p className="text-muted mb-6 max-w-md mx-auto">
          Create a free account in 30 seconds. No credit card needed — try everything for 7 days.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/signup">
            <Button size="lg">Start free trial →</Button>
          </Link>
          <Link href="/levels">
            <Button variant="outline" size="lg">Browse free lessons</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
