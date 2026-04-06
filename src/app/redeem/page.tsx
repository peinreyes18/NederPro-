'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function RedeemPage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function handleRedeem(e: React.FormEvent) {
    e.preventDefault();
    if (!code.trim()) return;
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/stripe/redeem-gift', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: code.trim() }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? 'Something went wrong. Please try again.');
        setLoading(false);
        return;
      }

      setSuccess(true);
      // Redirect to levels after a short delay
      setTimeout(() => router.push('/levels'), 2500);
    } catch {
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  }

  if (isLoading) {
    return (
      <div className="max-w-md mx-auto px-4 py-16 text-center">
        <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto" />
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <div className="text-center mb-8">
        <div className="text-5xl mb-4">🎁</div>
        <h1 className="text-3xl font-bold text-primary mb-2">Redeem your gift</h1>
        <p className="text-muted text-base leading-relaxed">
          Enter your gift code below to unlock a full year of NederPro.
        </p>
      </div>

      <Card className="mb-4">
        {success ? (
          <div className="text-center py-4">
            <div className="text-4xl mb-3">🇳🇱</div>
            <h2 className="text-xl font-bold text-primary mb-2">Welcome to NederPro!</h2>
            <p className="text-sm text-muted mb-1">Your gift has been activated — you have full access for 1 year.</p>
            <p className="text-xs text-muted">Redirecting to your lessons…</p>
          </div>
        ) : (
          <>
            {!user && (
              <div className="rounded-xl bg-accent-light border border-accent/30 px-4 py-3 mb-4">
                <p className="text-sm font-semibold text-accent mb-1">Sign in to redeem</p>
                <p className="text-xs text-muted">
                  You need a NederPro account to activate your gift.{' '}
                  <Link href={`/signup?redirect=/redeem`} className="text-accent font-medium underline underline-offset-2">
                    Create a free account
                  </Link>{' '}
                  or{' '}
                  <Link href={`/login?redirect=/redeem`} className="text-accent font-medium underline underline-offset-2">
                    sign in
                  </Link>
                  .
                </p>
              </div>
            )}

            <form onSubmit={handleRedeem} className="space-y-3">
              <div>
                <label htmlFor="gift-code" className="block text-sm font-medium text-primary mb-1.5">
                  Gift code
                </label>
                <input
                  id="gift-code"
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value.toUpperCase())}
                  placeholder="GIFT-XXXX-XXXX-XXXX"
                  spellCheck={false}
                  autoComplete="off"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-primary font-mono text-base tracking-widest focus:outline-none focus:ring-2 focus:ring-accent placeholder:font-sans placeholder:tracking-normal placeholder:text-muted/60"
                />
              </div>

              {error && (
                <p className="text-sm text-error bg-error-light rounded-lg px-3 py-2">
                  {error}
                </p>
              )}

              <Button
                type="submit"
                className="w-full"
                disabled={loading || !user || !code.trim()}
              >
                {loading ? 'Activating…' : 'Activate gift →'}
              </Button>
            </form>

            {!user && (
              <p className="text-xs text-muted text-center mt-3">
                Your code will still work after you create an account.
              </p>
            )}
          </>
        )}
      </Card>

      <p className="text-center text-xs text-muted">
        Want to buy a gift?{' '}
        <Link href="/gift" className="text-accent font-medium hover:underline">
          Gift a subscription →
        </Link>
      </p>
    </div>
  );
}
