'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

function LoginForm() {
  const { signIn } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Banner shown when arriving after ?confirmed=1 (future use — for magic link / OTP flows)
  const confirmed = searchParams.get('confirmed') === '1';

  // Show a soft nudge when redirected from a protected page
  const nextPath = searchParams.get('next');
  const protectedPaths = ['/levels', '/vocabulary', '/exams', '/reference', '/culture', '/history', '/progress', '/account'];
  const isProtectedRedirect = nextPath && protectedPaths.some((p) => nextPath.startsWith(p));

  useEffect(() => {
    if (searchParams.get('error') === 'confirmation_failed') {
      setError(
        'The confirmation link has expired or is invalid. Please request a new one below or try signing in.'
      );
    }
  }, [searchParams]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const { error, user } = await signIn(email, password);

    if (error) {
      setLoading(false);
      if (error.toLowerCase().includes('email not confirmed')) {
        setError(
          'Please check your email and click the confirmation link first before signing in.'
        );
      } else {
        setError(error);
      }
      return;
    }

    // Check if this user still needs to do onboarding
    if (user && !user.user_metadata?.onboarding_completed) {
      router.push('/onboarding');
      return;
    }

    // If there's a specific page they were trying to reach, go there
    const next = searchParams.get('next');
    if (next) {
      router.push(next);
      return;
    }

    // Check subscription status and redirect accordingly
    try {
      const { createClient } = await import('@/lib/supabase');
      const supabase = createClient();
      const { data: sub } = await supabase
        .from('subscriptions')
        .select('status')
        .eq('user_id', user!.id)
        .single();

      const hasSubscription = sub?.status === 'active' || sub?.status === 'trialing';
      router.push(hasSubscription ? '/levels' : '/subscribe');
    } catch {
      router.push('/levels');
    }
  }

  return (
    <Card>
      {/* Soft gate nudge — shown when redirected from a protected page */}
      {isProtectedRedirect && !confirmed && (
        <div className="rounded-xl border border-accent/30 bg-accent-light px-4 py-3 mb-5 flex items-start gap-2.5">
          <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <p className="text-sm text-accent font-medium">
            Sign in to access this page — or{' '}
            <a href="/signup" className="underline font-semibold">start a free trial</a> if you don&apos;t have an account yet.
          </p>
        </div>
      )}

      {/* Email confirmed banner */}
      {confirmed && (
        <div className="rounded-xl border border-success/30 bg-success-light px-4 py-3 mb-5 flex items-start gap-2.5">
          <svg className="w-4 h-4 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <p className="text-sm text-success font-medium">
            Email confirmed! Sign in to continue.
          </p>
        </div>
      )}

      <h1 className="text-2xl font-bold text-primary mb-2">Sign in</h1>
      <p className="text-primary-light text-sm mb-6">
        Welcome back. Your progress will sync automatically.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-primary mb-1" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-border bg-background text-primary text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="block text-sm font-medium text-primary" htmlFor="password">
              Password
            </label>
            <Link
              href="/forgot-password"
              className="text-xs text-accent hover:underline font-medium"
            >
              Forgot password?
            </Link>
          </div>
          <input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-border bg-background text-primary text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Your password"
          />
        </div>

        {error && (
          <div className="text-sm text-error bg-error-light rounded-lg px-3 py-2 space-y-1">
            <p>{error}</p>
            {error.includes('confirmation link') && (
              <p>
                <Link href="/signup" className="underline font-medium">
                  Back to sign up
                </Link>{' '}
                to resend the confirmation email.
              </p>
            )}
          </div>
        )}

        <Button type="submit" disabled={loading} className="w-full">
          {loading ? 'Signing in...' : 'Sign in'}
        </Button>
      </form>

      <p className="text-sm text-primary-light text-center mt-5">
        No account yet?{' '}
        <Link href="/signup" className="text-accent hover:underline font-medium">
          Create one
        </Link>
      </p>
    </Card>
  );
}

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <Suspense fallback={<div className="text-muted text-sm">Loading...</div>}>
        <LoginForm />
      </Suspense>
    </div>
  );
}
