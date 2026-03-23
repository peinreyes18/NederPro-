'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

function SuccessContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    async function activate() {
      // Step 1: Try direct session verification (fastest, most reliable)
      if (sessionId) {
        try {
          const res = await fetch('/api/stripe/verify-session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sessionId }),
          });

          const data = await res.json();
          console.log('[verify-session response]', res.status, data);

          if (res.ok) {
            setReady(true);
            setTimeout(() => router.push('/levels'), 1500);
            return;
          }
          // Show the actual error on the page
          setErrorMsg(`API error ${res.status}: ${data?.error ?? 'unknown'}`);
        } catch (e) {
          console.error('[verify-session fetch error]', e);
          setErrorMsg(String(e));
          // Fall through to polling
        }
      }

      // Step 2: Fall back to polling Supabase (webhook may have already fired)
      const { createClient } = await import('@/lib/supabase');
      const supabase = createClient();
      let tries = 0;

      async function poll() {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) return;

        const { data: sub } = await supabase
          .from('subscriptions')
          .select('status')
          .eq('user_id', session.user.id)
          .single();

        const hasAccess = sub?.status === 'active' || sub?.status === 'trialing';

        if (hasAccess) {
          setReady(true);
          setTimeout(() => router.push('/levels'), 1500);
        } else {
          tries++;
          if (tries < 8) {
            setTimeout(poll, 2000);
          } else {
            // After ~16s give up and show error
            setError(true);
          }
        }
      }

      poll();
    }

    activate();
  }, [sessionId, router]);

  if (error) {
    return (
      <>
        <div className="w-12 h-12 rounded-full bg-error-light flex items-center justify-center mb-5">
          <svg className="w-6 h-6 text-error" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M12 2a10 10 0 100 20A10 10 0 0012 2z" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-primary mb-2">Something went wrong</h1>
        <p className="text-primary-light text-sm mb-3">
          Your payment was processed but we couldn&apos;t activate your account automatically.
          Please contact <a href="mailto:hello@nederpro.com" className="text-accent underline">hello@nederpro.com</a> and we&apos;ll fix it right away.
        </p>
        {errorMsg && (
          <p className="text-xs text-muted font-mono bg-surface border border-border rounded px-3 py-2 mb-3 break-all">
            {errorMsg}
          </p>
        )}
      </>
    );
  }

  if (ready) {
    return (
      <>
        <div className="w-12 h-12 rounded-full bg-accent-light flex items-center justify-center mb-5">
          <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-primary mb-2">You&apos;re all set!</h1>
        <p className="text-primary-light text-sm mb-6">
          Your 7-day free trial has started. Redirecting you now…
        </p>
        <Button className="w-full" onClick={() => router.push('/levels')}>
          Start learning →
        </Button>
      </>
    );
  }

  return (
    <>
      <div className="w-12 h-12 rounded-full bg-accent-light flex items-center justify-center mb-5">
        <svg className="w-6 h-6 text-accent animate-spin" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
        </svg>
      </div>
      <h1 className="text-2xl font-bold text-primary mb-2">Activating your account…</h1>
      <p className="text-primary-light text-sm">
        Just a moment while we set everything up.
      </p>
    </>
  );
}

export default function SubscribeSuccessPage() {
  return (
    <div className="max-w-lg mx-auto px-4 py-16">
      <Card>
        <Suspense fallback={
          <div className="text-center py-8">
            <p className="text-muted text-sm">Loading…</p>
          </div>
        }>
          <SuccessContent />
        </Suspense>
      </Card>
    </div>
  );
}
