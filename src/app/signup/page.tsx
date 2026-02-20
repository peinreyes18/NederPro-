'use client';

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

const planLabels: Record<string, { name: string; price: string; period: string }> = {
  biweekly: { name: '2-Week Plan', price: '€3.49', period: '/ 2 weeks' },
  monthly:  { name: 'Monthly Plan', price: '€4.49', period: '/ month' },
};

function SignUpForm() {
  const { signUp } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();

  const plan = searchParams.get('plan') ?? null;
  const withTrial = searchParams.get('trial') === 'true';
  const planInfo = plan ? planLabels[plan] : null;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
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
    } else {
      setSuccess(true);
    }
  }

  if (success) {
    return (
      <Card>
        <h1 className="text-2xl font-bold text-primary mb-3">Check your email</h1>
        <p className="text-primary-light mb-6">
          We sent a confirmation link to <strong>{email}</strong>. Click it to activate your
          account, then{' '}
          <Link href="/login" className="text-accent hover:underline">
            sign in
          </Link>
          .
        </p>
        {planInfo && (
          <p className="text-xs text-muted mb-6">
            After confirming your email, you will be taken to complete your{' '}
            <strong className="text-primary">{planInfo.name}</strong> setup.
          </p>
        )}
        <Button variant="outline" onClick={() => router.push('/login')}>
          Go to sign in
        </Button>
      </Card>
    );
  }

  return (
    <Card>
      {/* Plan context banner */}
      {planInfo && (
        <div className="mb-5 rounded-lg border border-accent/20 bg-accent-light/10 px-4 py-3">
          <div className="flex items-center justify-between mb-1">
            <p className="text-sm font-semibold text-primary">{planInfo.name}</p>
            <Badge variant="accent">
              {planInfo.price} {planInfo.period}
            </Badge>
          </div>
          {withTrial ? (
            <p className="text-xs text-primary-light">
              🎁 7-day free trial included · card charged after trial ends · cancel anytime
            </p>
          ) : (
            <p className="text-xs text-primary-light">
              Subscription starts immediately after signup · cancel anytime
            </p>
          )}
        </div>
      )}

      <h1 className="text-2xl font-bold text-primary mb-2">Create an account</h1>
      <p className="text-primary-light text-sm mb-6">
        {planInfo
          ? 'Create your account to continue with your plan selection.'
          : 'Save your progress and access it from any device.'}
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
          {loading ? 'Creating account...' : planInfo ? `Create account & continue` : 'Create account'}
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
      <Suspense fallback={<div className="text-muted text-sm">Loading...</div>}>
        <SignUpForm />
      </Suspense>
    </div>
  );
}
