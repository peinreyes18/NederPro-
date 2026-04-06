'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { trackSignUp } from '@/lib/analytics';

function SignUpForm() {
  const { signUp, signIn } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (password !== confirm) {
      setError('Passwords do not match.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setLoading(true);
    const { error } = await signUp(email, password);
    setLoading(false);

    if (error) {
      setError(error);
      return;
    }

    trackSignUp();

    // Sign in immediately (email confirmation is disabled)
    const { error: signInError } = await signIn(email, password);
    if (!signInError) {
      router.push('/subscribe');
    } else {
      router.push('/login');
    }
  }

  return (
    <Card>
      <h1 className="text-2xl font-bold text-primary mb-2">Start your free trial</h1>
      <p className="text-primary-light text-sm mb-6">
        7 days free — no credit card required at signup. Then from €3.49/month.
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
            placeholder="At least 6 characters"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-primary mb-1" htmlFor="confirm">
            Confirm password
          </label>
          <input
            id="confirm"
            type="password"
            required
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-border bg-background text-primary text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Repeat your password"
          />
        </div>

        {error && (
          <p className="text-sm text-error bg-error-light rounded-lg px-3 py-2">
            {error}
          </p>
        )}

        <Button type="submit" disabled={loading} className="w-full">
          {loading ? 'Creating account...' : 'Create account & start trial'}
        </Button>
      </form>

      <p className="text-xs text-muted text-center mt-4">
        By creating an account you agree to our{' '}
        <Link href="/terms" className="text-accent hover:underline">Terms</Link>
        {' & '}
        <Link href="/privacy" className="text-accent hover:underline">Privacy Policy</Link>.
      </p>

      <p className="text-sm text-primary-light text-center mt-4">
        Already have an account?{' '}
        <Link href="/login" className="text-accent hover:underline font-medium">
          Sign in
        </Link>
      </p>
    </Card>
  );
}

export default function SignUpPage() {
  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <SignUpForm />
    </div>
  );
}
