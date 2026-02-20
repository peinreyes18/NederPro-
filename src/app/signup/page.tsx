'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase';
import { useAuth } from '@/contexts/AuthContext';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

function SignUpForm() {
  const { signUp } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Resend confirmation email
  const [resendLoading, setResendLoading] = useState(false);
  const [resendSent, setResendSent] = useState(false);

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

  async function handleResend() {
    setResendLoading(true);
    setResendSent(false);
    const supabase = createClient();
    await supabase.auth.resend({
      type: 'signup',
      email,
      options: { emailRedirectTo: `${window.location.origin}/auth/callback` },
    });
    setResendLoading(false);
    setResendSent(true);
  }

  if (success) {
    return (
      <Card>
        {/* Icon */}
        <div className="w-12 h-12 rounded-full bg-accent-light flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-primary mb-2">Check your email</h1>
        <p className="text-primary-light text-sm mb-1">We sent a confirmation link to:</p>
        <p className="font-semibold text-primary text-sm mb-5">{email}</p>

        {/* Steps */}
        <ol className="space-y-2.5 mb-6">
          {[
            'Open the email from NederPro',
            'Click the "Confirm your email" link',
            "You'll be taken straight to account setup",
          ].map((step, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-primary-light">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>

        {/* Spam hint */}
        <div className="rounded-lg bg-surface border border-border px-3 py-2.5 mb-5">
          <p className="text-xs text-muted">
            💡 <strong className="text-primary">Can&apos;t find it?</strong>{' '}
            Check your spam or junk folder. The email comes from{' '}
            <span className="font-mono text-primary">no-reply@mail.app.supabase.io</span>.
          </p>
        </div>

        {/* Resend */}
        {resendSent ? (
          <p className="text-sm text-success text-center mb-4 font-medium">
            ✓ New confirmation email sent!
          </p>
        ) : (
          <p className="text-sm text-muted text-center mb-4">
            Didn&apos;t receive it?{' '}
            <button
              onClick={handleResend}
              disabled={resendLoading}
              className="text-accent hover:underline font-medium disabled:opacity-50"
            >
              {resendLoading ? 'Sending…' : 'Resend email'}
            </button>
          </p>
        )}

        <Button variant="outline" className="w-full" onClick={() => router.push('/login')}>
          Go to sign in
        </Button>
      </Card>
    );
  }

  return (
    <Card>
      <h1 className="text-2xl font-bold text-primary mb-2">Create an account</h1>
      <p className="text-primary-light text-sm mb-6">
        Save your progress and access it from any device.
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
          {loading ? 'Creating account...' : 'Create account'}
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
