'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

const included = [
  { icon: '📚', text: 'All 69 grammar lessons — A0 through B2' },
  { icon: '🦉', text: 'AI speaking practice — 22 real-life scenarios' },
  { icon: '📋', text: '30 mock exam sets (Inburgeringsexamen & NT2)' },
  { icon: '🎧', text: 'Listening & reading exercises with feedback' },
  { icon: '📈', text: 'Progress tracking across all devices' },
];

export default function GiftPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleBuy() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/stripe/create-gift-checkout', { method: 'POST' });
      const data = await res.json();
      if (!res.ok || !data.url) {
        setError(data.error ?? 'Something went wrong. Please try again.');
        setLoading(false);
        return;
      }
      router.push(data.url);
    } catch {
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  }

  return (
    <div className="max-w-lg mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="text-5xl mb-4">🎁</div>
        <h1 className="text-3xl font-bold text-primary mb-2">Gift NederPro</h1>
        <p className="text-muted text-base leading-relaxed">
          Give someone a full year of structured Dutch learning — perfect for expat partners, new colleagues, or anyone preparing for their inburgeringsexamen.
        </p>
      </div>

      {/* Plan card */}
      <Card className="mb-4 border-accent/30">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-lg font-bold text-primary">1 Year — Full Access</p>
            <p className="text-sm text-muted">Everything included, no restrictions</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-primary">€34.99</p>
            <p className="text-xs text-muted">one-time payment</p>
          </div>
        </div>

        <ul className="space-y-2.5 mb-6">
          {included.map((item) => (
            <li key={item.text} className="flex items-start gap-3 text-sm text-primary">
              <span className="flex-shrink-0">{item.icon}</span>
              <span className="text-muted">{item.text}</span>
            </li>
          ))}
        </ul>

        {error && (
          <p className="text-sm text-error bg-error-light rounded-lg px-3 py-2 mb-4">
            {error}
          </p>
        )}

        <Button className="w-full" onClick={handleBuy} disabled={loading}>
          {loading ? 'Redirecting to checkout…' : 'Buy gift — €34.99 →'}
        </Button>

        <p className="text-xs text-muted text-center mt-3">
          After payment you&apos;ll receive a gift code to share however you like. Secure checkout via Stripe.
        </p>
      </Card>

      {/* How it works */}
      <Card>
        <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">How it works</p>
        <ol className="space-y-3">
          {[
            ['Pay once', 'Complete checkout with your card — takes 30 seconds.'],
            ['Get a code', 'A unique gift code appears on the confirmation page.'],
            ['Share it', 'Send the code by WhatsApp, email, or inside a card.'],
            ['They redeem', 'Recipient goes to nederpro.com/redeem, creates an account, and gets instant access for a full year.'],
          ].map(([title, desc], i) => (
            <li key={title} className="flex gap-3">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-light text-accent text-xs font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              <div>
                <p className="text-sm font-medium text-primary">{title}</p>
                <p className="text-xs text-muted leading-relaxed">{desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </Card>

      <p className="text-center text-xs text-muted mt-4">
        Have a code to redeem?{' '}
        <a href="/redeem" className="text-accent font-medium hover:underline">
          Redeem here →
        </a>
      </p>
    </div>
  );
}
