'use client';

import { useEffect, useState, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function GiftSuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

  const [code, setCode] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [attempts, setAttempts] = useState(0);

  const fetchCode = useCallback(async () => {
    if (!sessionId) return;
    try {
      const res = await fetch(`/api/stripe/gift-session?session_id=${sessionId}`);
      const data = await res.json();
      if (data.code) {
        setCode(data.code);
      } else if (data.pending) {
        // Webhook hasn't fired yet — retry up to 8 times (every 1.5s)
        setAttempts((n) => n + 1);
      } else {
        setError(data.error ?? 'Something went wrong. Please contact support.');
      }
    } catch {
      setError('Something went wrong. Please contact support.');
    }
  }, [sessionId]);

  useEffect(() => {
    fetchCode();
  }, [fetchCode]);

  // Retry polling if code is pending
  useEffect(() => {
    if (code || error || attempts === 0 || attempts > 8) return;
    const timer = setTimeout(fetchCode, 1500);
    return () => clearTimeout(timer);
  }, [attempts, code, error, fetchCode]);

  async function handleCopy() {
    if (!code) return;
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const redeemUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/redeem`
    : 'https://nederpro.com/redeem';

  const shareText = code
    ? `I got you a year of NederPro — structured Dutch learning from A0 to B2! 🇳🇱\n\nRedeem your gift here: ${redeemUrl}\nYour code: ${code}`
    : '';

  if (!sessionId) {
    return (
      <div className="max-w-lg mx-auto px-4 py-16 text-center">
        <p className="text-error">Invalid link. Please check your email for the confirmation.</p>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto px-4 py-16">
      <div className="text-center mb-8">
        <div className="text-5xl mb-4">🎁</div>
        <h1 className="text-3xl font-bold text-primary mb-2">Payment confirmed!</h1>
        <p className="text-muted text-base">
          Your gift code is ready. Share it however you like — WhatsApp, email, inside a birthday card, anything.
        </p>
      </div>

      <Card className="mb-4">
        {!code && !error ? (
          <div className="text-center py-4">
            <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-sm text-muted">Generating your gift code…</p>
          </div>
        ) : error ? (
          <div className="text-center py-4">
            <p className="text-sm text-error mb-2">{error}</p>
            <p className="text-xs text-muted">
              Contact us at{' '}
              <a href="mailto:hello@nederpro.com" className="text-accent underline">
                hello@nederpro.com
              </a>{' '}
              with your payment confirmation.
            </p>
          </div>
        ) : (
          <>
            <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">Your gift code</p>

            {/* Code display */}
            <div className="bg-accent-light border-2 border-accent/30 rounded-xl px-6 py-5 text-center mb-4">
              <p className="text-2xl font-mono font-bold text-accent tracking-widest select-all">
                {code}
              </p>
            </div>

            {/* Copy button */}
            <Button className="w-full mb-3" onClick={handleCopy}>
              {copied ? '✓ Copied!' : 'Copy code'}
            </Button>

            {/* Share options */}
            <div className="flex gap-2">
              <a
                href={`https://wa.me/?text=${encodeURIComponent(shareText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2.5 px-3 rounded-lg border border-border text-sm font-medium text-primary hover:bg-surface transition-colors"
              >
                📱 WhatsApp
              </a>
              <a
                href={`mailto:?subject=Your NederPro gift 🇳🇱&body=${encodeURIComponent(shareText)}`}
                className="flex-1 text-center py-2.5 px-3 rounded-lg border border-border text-sm font-medium text-primary hover:bg-surface transition-colors"
              >
                ✉️ Email
              </a>
            </div>
          </>
        )}
      </Card>

      <Card>
        <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">What happens next</p>
        <ol className="space-y-2.5">
          {[
            'Share the code above with your recipient.',
            `They go to ${redeemUrl}`,
            'They create an account (or log in if they have one).',
            'They enter the code and get instant full access for 1 year.',
          ].map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-light text-accent text-xs font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              <p className="text-sm text-muted leading-relaxed">{step}</p>
            </li>
          ))}
        </ol>
      </Card>

      <p className="text-center text-xs text-muted mt-4">
        Questions?{' '}
        <a href="mailto:hello@nederpro.com" className="text-accent hover:underline">
          hello@nederpro.com
        </a>
      </p>
    </div>
  );
}
