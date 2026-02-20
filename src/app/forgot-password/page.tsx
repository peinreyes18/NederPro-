'use client';

import { useState, Suspense } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/callback?next=/reset-password`,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      setSent(true);
    }
  }

  if (sent) {
    return (
      <Card>
        <div className="text-center py-2">
          <div className="w-12 h-12 rounded-full bg-success-light flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-primary mb-2">Check your email</h2>
          <p className="text-sm text-muted mb-1">
            We sent a password reset link to:
          </p>
          <p className="text-sm font-medium text-primary mb-5">{email}</p>
          <p className="text-xs text-muted mb-6">
            Click the link in the email to set a new password. The link expires after 1 hour.
            If you don&apos;t see the email, check your spam folder.
          </p>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => { setSent(false); setEmail(''); }}
          >
            Send again
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <h1 className="text-2xl font-bold text-primary mb-2">Reset your password</h1>
      <p className="text-primary-light text-sm mb-6">
        Enter your email and we&apos;ll send you a link to reset your password.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-primary mb-1" htmlFor="email">
            Email address
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

        {error && (
          <p className="text-sm text-error bg-error-light rounded-lg px-3 py-2">
            {error}
          </p>
        )}

        <Button type="submit" disabled={loading} className="w-full">
          {loading ? 'Sending...' : 'Send reset link'}
        </Button>
      </form>

      <p className="text-sm text-primary-light text-center mt-5">
        Remember your password?{' '}
        <Link href="/login" className="text-accent hover:underline font-medium">
          Sign in
        </Link>
      </p>
    </Card>
  );
}

export default function ForgotPasswordPage() {
  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <Suspense fallback={<div className="text-muted text-sm">Loading...</div>}>
        <ForgotPasswordForm />
      </Suspense>
    </div>
  );
}
