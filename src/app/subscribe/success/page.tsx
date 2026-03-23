'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function SubscribeSuccessPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [attempts, setAttempts] = useState(0);

  // Poll Supabase every 2 seconds until the subscription record appears (max 20s)
  useEffect(() => {
    const supabase = createClient();
    let tries = 0;

    async function check() {
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
        // Auto-redirect after a short moment
        setTimeout(() => router.push('/levels'), 1500);
      } else {
        tries++;
        setAttempts(tries);
        if (tries < 10) {
          setTimeout(check, 2000);
        } else {
          // After 20s just let them proceed — webhook may be delayed
          setReady(true);
          setTimeout(() => router.push('/levels'), 1500);
        }
      }
    }

    check();
  }, [router]);

  return (
    <div className="max-w-lg mx-auto px-4 py-16">
      <Card>
        {ready ? (
          <>
            {/* Success state */}
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
        ) : (
          <>
            {/* Loading state */}
            <div className="w-12 h-12 rounded-full bg-accent-light flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-accent animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-primary mb-2">Activating your account…</h1>
            <p className="text-primary-light text-sm">
              {attempts < 3
                ? 'Setting up your subscription, this only takes a moment.'
                : 'Almost there, just a few more seconds…'}
            </p>
          </>
        )}
      </Card>
    </div>
  );
}
