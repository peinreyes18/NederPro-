import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Pricing — NederPro',
  description: 'Simple, affordable plans for structured Dutch learning. 7-day free trial included.',
};

const features = [
  'All grammar levels: A1 → B2',
  'Full exam practice library (KNM, NT2-I, NT2-II)',
  'AI writing feedback (Claude-powered)',
  'Listening & writing exams',
  'Vocabulary sets & grammar reference',
  'Culture & history pages',
  'Progress tracking',
];

const faqs = [
  {
    q: 'Do I need a credit card for the free trial?',
    a: 'Yes. A valid card is required to start the 7-day trial. You will not be charged until the trial ends. Cancel any time before then and you will never pay anything.',
  },
  {
    q: 'What happens when the trial ends?',
    a: 'Your chosen plan starts automatically and your card is charged. You can cancel before the trial ends from your account settings.',
  },
  {
    q: 'Can I switch plans?',
    a: 'Yes — you can upgrade or downgrade at any time. Changes take effect at the start of your next billing period.',
  },
  {
    q: 'Is there a student or group discount?',
    a: 'Not yet, but we are working on it. Contact us at hello@nederpro.nl if you are interested.',
  },
  {
    q: 'What payment methods are accepted?',
    a: 'All major credit and debit cards (Visa, Mastercard, Maestro, iDEAL) via Stripe.',
  },
  {
    q: 'Can I get a refund?',
    a: 'Under EU consumer law you have a 14-day right of withdrawal from the date of purchase. If you have already accessed paid content this right may be waived. See our Terms & Conditions for details.',
  },
];

export default function PricingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Pricing</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4">
          Simple, affordable pricing
        </h1>
        <p className="text-primary-light max-w-xl mx-auto">
          Start with a 7-day free trial. Then choose how long you want to keep learning.
          Cancel anytime — no hidden fees.
        </p>
      </div>

      {/* Trial badge */}
      <div className="max-w-2xl mx-auto mb-8 rounded-xl border border-success/30 bg-success-light px-5 py-4 flex items-start gap-3">
        <span className="text-lg flex-shrink-0 mt-0.5">🎁</span>
        <div>
          <p className="text-sm font-semibold text-success">7-day free trial on all plans</p>
          <p className="text-xs text-success/80 mt-0.5">
            Full access from day one. Card required — you will only be charged after the trial ends
            unless you cancel first.
          </p>
        </div>
      </div>

      {/* Plans */}
      <div className="grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto mb-16">
        {/* 2-week */}
        <Card className="flex flex-col">
          <div className="mb-4">
            <Badge>2 Weeks</Badge>
          </div>
          <p className="text-3xl font-extrabold text-primary mb-1">
            €3.49<span className="text-lg font-normal text-muted"> / 2 wk</span>
          </p>
          <p className="text-sm text-muted mb-6">Best for a focused exam sprint</p>

          <ul className="space-y-2 text-sm text-primary-light flex-1 mb-6">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-success mt-0.5 flex-shrink-0">✓</span>
                {f}
              </li>
            ))}
          </ul>

          <Link href="/signup?plan=biweekly&trial=true">
            <Button className="w-full mb-2">Try 7 Days Free → €3.49/2wk</Button>
          </Link>
          <Link href="/signup?plan=biweekly">
            <Button variant="outline" className="w-full text-xs">Subscribe now at €3.49</Button>
          </Link>
          <p className="text-center text-xs text-muted mt-3">
            Auto-renews every 2 weeks · cancel anytime
          </p>
        </Card>

        {/* Monthly */}
        <Card className="flex flex-col border-accent/40 relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <Badge variant="accent">Best Value</Badge>
          </div>
          <div className="mb-4">
            <Badge variant="accent">1 Month</Badge>
          </div>
          <p className="text-3xl font-extrabold text-primary mb-1">
            €4.49<span className="text-lg font-normal text-muted"> / mo</span>
          </p>
          <p className="text-sm text-muted mb-6">More time to reach your goal</p>

          <ul className="space-y-2 text-sm text-primary-light flex-1 mb-6">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-accent mt-0.5 flex-shrink-0">✓</span>
                {f}
              </li>
            ))}
          </ul>

          <Link href="/signup?plan=monthly&trial=true">
            <Button className="w-full mb-2">Try 7 Days Free → €4.49/mo</Button>
          </Link>
          <Link href="/signup?plan=monthly">
            <Button variant="outline" className="w-full text-xs">Subscribe now at €4.49</Button>
          </Link>
          <p className="text-center text-xs text-muted mt-3">
            Auto-renews every month · cancel anytime
          </p>
        </Card>
      </div>

      {/* Feature comparison note */}
      <div className="text-center mb-16">
        <p className="text-sm text-muted">
          Both plans include <strong className="text-primary">identical features</strong>.
          The only difference is the billing period.
        </p>
      </div>

      {/* FAQ */}
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl font-bold text-primary mb-6 text-center">
          Frequently asked questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-xl border border-border p-5">
              <p className="text-sm font-semibold text-primary mb-2">{faq.q}</p>
              <p className="text-sm text-primary-light">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Legal links */}
      <div className="mt-12 text-center text-xs text-muted space-x-4">
        <Link href="/terms" className="hover:text-primary transition-colors">Terms &amp; Conditions</Link>
        <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
        <Link href="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link>
      </div>
    </div>
  );
}
