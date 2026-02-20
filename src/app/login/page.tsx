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

  useEffect(() => {
    if (searchParams.get('error') === 'confirmation_failed') {
      setError('The confirmation link has expired or is invalid. Please sign up again or try signing in.');
    }
  }, [searchParams]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const { error } = await signIn(email, password);
    setLoading(false);

    if (error) {
      if (error.toLowerCase().includes('email not confirmed')) {
        setError('Please check your email and click the confirmation link first before signing in.');
      } else {
        setError(error);
      }
    } else {
      const next = searchParams.get('next') || '/progress';
      router.push(next);
    }
  }

  return (
    <Card>
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
          <label className="block text-sm font-medium text-primary mb-1" htmlFor="password">
            Password
          </label>
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
          <p className="text-sm text-red-500 bg-red-50 dark:bg-red-950/30 rounded-lg px-3 py-2">
            {error}
          </p>
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
