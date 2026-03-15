'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { useSubscription } from '@/hooks/useSubscription';
import { createClient } from '@/lib/supabase';
import { deleteAccount } from '@/app/actions/deleteAccount';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

type Tab = 'subscription' | 'password' | 'account';

export default function AccountPage() {
  const { user, signOut } = useAuth();
  const { subscription, isLoading: subLoading } = useSubscription();
  const router = useRouter();
  const [tab, setTab] = useState<Tab>('subscription');
  const [portalLoading, setPortalLoading] = useState(false);
  const [portalError, setPortalError] = useState<string | null>(null);

  async function handleManageBilling() {
    setPortalLoading(true);
    setPortalError(null);
    try {
      const res = await fetch('/api/stripe/portal', { method: 'POST' });
      const data = await res.json();
      if (!res.ok) {
        setPortalError(data.error ?? 'Something went wrong.');
        setPortalLoading(false);
        return;
      }
      window.location.href = data.url;
    } catch {
      setPortalError('Something went wrong. Please try again.');
      setPortalLoading(false);
    }
  }

  // ── Password change state ──
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [passwordSuccess, setPasswordSuccess] = useState(false);
  const [passwordLoading, setPasswordLoading] = useState(false);

  // ── Delete account state ──
  const [deleteConfirm, setDeleteConfirm] = useState('');
  const [deleteError, setDeleteError] = useState<string | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  async function handlePasswordChange(e: React.FormEvent) {
    e.preventDefault();
    setPasswordError(null);
    setPasswordSuccess(false);

    if (newPassword.length < 6) {
      setPasswordError('New password must be at least 6 characters.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordError('New passwords do not match.');
      return;
    }

    setPasswordLoading(true);
    const supabase = createClient();
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    setPasswordLoading(false);

    if (error) {
      setPasswordError(error.message);
    } else {
      setPasswordSuccess(true);
      setNewPassword('');
      setConfirmPassword('');
    }
  }

  async function handleDeleteAccount() {
    if (deleteConfirm !== 'DELETE') {
      setDeleteError('Please type DELETE to confirm.');
      return;
    }
    setDeleteLoading(true);
    setDeleteError(null);

    const { error } = await deleteAccount();

    if (error) {
      setDeleteError(error);
      setDeleteLoading(false);
      return;
    }

    // Server action signs out the session; also clear local auth state
    await signOut();
    router.push('/');
  }

  const tabs: { id: Tab; label: string }[] = [
    { id: 'subscription', label: 'Subscription' },
    { id: 'password', label: 'Password' },
    { id: 'account', label: 'Account' },
  ];

  // Calculate days remaining in trial
  const trialDaysLeft = subscription?.trial_end
    ? Math.max(0, Math.ceil((new Date(subscription.trial_end).getTime() - Date.now()) / (1000 * 60 * 60 * 24)))
    : null;

  const planLabel = subscription?.plan === 'monthly' ? 'Monthly (€3.49/month)'
    : subscription?.plan === 'biweekly' ? 'Every 2 weeks (€2.49/2 weeks)'
    : null;

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-primary">Account Settings</h1>
          <p className="text-sm text-muted mt-1">{user?.email}</p>
        </div>
        <button
          onClick={async () => { await signOut(); router.push('/'); }}
          className="text-sm text-muted hover:text-primary transition-colors flex-shrink-0 mt-1"
        >
          Sign out →
        </button>
      </div>

      {/* Tab bar */}
      <div className="flex gap-1 bg-surface rounded-xl p-1 mb-6 border border-border">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={cn(
              'flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-150',
              tab === t.id
                ? 'bg-background text-primary shadow-sm border border-border'
                : 'text-muted hover:text-primary'
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* ── Subscription tab ── */}
      {tab === 'subscription' && (
        <Card>
          <h2 className="text-lg font-semibold text-primary mb-4">Subscription</h2>

          {subLoading ? (
            <p className="text-sm text-muted">Loading…</p>
          ) : !subscription || subscription.status === 'canceled' ? (
            <div>
              <p className="text-sm text-muted mb-4">
                {subscription?.status === 'canceled'
                  ? 'Your subscription has been canceled. Resubscribe anytime to regain full access.'
                  : 'You don\'t have an active subscription.'}
              </p>
              <Button onClick={() => router.push('/subscribe')}>
                {subscription?.status === 'canceled' ? 'Resubscribe' : 'Start free trial'}
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Trial countdown banner */}
              {subscription.status === 'trialing' && trialDaysLeft !== null && (
                <div className={cn(
                  'rounded-xl px-4 py-3 border',
                  trialDaysLeft <= 2
                    ? 'bg-error-light border-error/30'
                    : 'bg-accent-light border-accent/30'
                )}>
                  <p className={cn('text-sm font-semibold', trialDaysLeft <= 2 ? 'text-error' : 'text-accent')}>
                    {trialDaysLeft === 0
                      ? 'Your trial ends today'
                      : trialDaysLeft === 1
                      ? '1 day left in your free trial'
                      : `${trialDaysLeft} days left in your free trial`}
                  </p>
                  <p className="text-xs text-muted mt-0.5">
                    Add a payment method to keep access after your trial ends — no charge until{' '}
                    {new Date(subscription.trial_end!).toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })}.
                  </p>
                </div>
              )}

              {/* Status + plan */}
              <div className="flex flex-wrap items-center gap-3">
                <span className={cn(
                  'text-xs font-semibold px-2.5 py-1 rounded-full',
                  subscription.status === 'active' && 'bg-accent-light text-accent',
                  subscription.status === 'trialing' && 'bg-accent-light text-accent',
                  subscription.status === 'past_due' && 'bg-error-light text-error',
                )}>
                  {subscription.status === 'trialing' ? 'Free trial'
                    : subscription.status === 'active' ? 'Active'
                    : 'Payment failed'}
                </span>
                {planLabel && (
                  <span className="text-sm text-muted">{planLabel}</span>
                )}
              </div>

              {/* Past due recovery */}
              {subscription.status === 'past_due' && (
                <div className="rounded-xl bg-error-light border border-error/30 px-4 py-3">
                  <p className="text-sm font-semibold text-error mb-1">Payment failed</p>
                  <p className="text-xs text-muted mb-3">
                    Your last payment didn&apos;t go through. Update your payment method to keep access.
                  </p>
                  <Button onClick={handleManageBilling} disabled={portalLoading}>
                    {portalLoading ? 'Opening portal…' : 'Update payment method'}
                  </Button>
                </div>
              )}

              {/* Active billing info */}
              {subscription.status === 'active' && subscription.current_period_end && (
                <p className="text-sm text-muted">
                  Next billing date:{' '}
                  <span className="text-primary font-medium">
                    {new Date(subscription.current_period_end).toLocaleDateString('en-GB', {
                      day: 'numeric', month: 'long', year: 'numeric',
                    })}
                  </span>
                </p>
              )}

              {portalError && (
                <p className="text-sm text-error bg-error-light rounded-lg px-3 py-2">
                  {portalError}
                </p>
              )}

              {subscription.status !== 'past_due' && (
                <>
                  <Button variant="outline" onClick={handleManageBilling} disabled={portalLoading}>
                    {portalLoading ? 'Opening portal…' : 'Manage billing'}
                  </Button>
                  <p className="text-xs text-muted">
                    Update your payment method, view invoices, or cancel via the Stripe billing portal.
                  </p>
                </>
              )}
            </div>
          )}
        </Card>
      )}

      {/* ── Password tab ── */}
      {tab === 'password' && (
        <Card>
          <h2 className="text-lg font-semibold text-primary mb-4">Change Password</h2>

          {passwordSuccess ? (
            <div className="rounded-xl border border-success/30 bg-success-light p-4 mb-4">
              <p className="text-sm font-medium text-success">Password updated successfully.</p>
            </div>
          ) : null}

          <form onSubmit={handlePasswordChange} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-primary mb-1" htmlFor="new-password">
                New password
              </label>
              <input
                id="new-password"
                type="password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="At least 6 characters"
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-primary text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary mb-1" htmlFor="confirm-password">
                Confirm new password
              </label>
              <input
                id="confirm-password"
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Repeat new password"
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-primary text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            {passwordError && (
              <p className="text-sm text-error bg-error-light rounded-lg px-3 py-2">
                {passwordError}
              </p>
            )}

            <Button type="submit" disabled={passwordLoading}>
              {passwordLoading ? 'Updating...' : 'Update password'}
            </Button>
          </form>
        </Card>
      )}

      {/* ── Account tab ── */}
      {tab === 'account' && (
        <div className="space-y-4">
          {/* Sign out */}
          <Card>
            <h2 className="text-lg font-semibold text-primary mb-1">Sign out</h2>
            <p className="text-sm text-muted mb-4">
              Sign out from NederPro on this device.
            </p>
            <Button
              variant="outline"
              onClick={async () => {
                await signOut();
                router.push('/');
              }}
            >
              Sign out
            </Button>
          </Card>

          {/* Delete account */}
          <Card className="border-error/30">
            <h2 className="text-lg font-semibold text-error mb-1">Delete account</h2>
            <p className="text-sm text-muted mb-4">
              Permanently delete your account and all progress data. This cannot be undone.
            </p>

            <div className="bg-error-light border border-error/20 rounded-lg p-3 mb-4">
              <p className="text-xs text-error">
                Type <strong>DELETE</strong> in the box below to confirm permanent deletion.
              </p>
            </div>

            <input
              type="text"
              value={deleteConfirm}
              onChange={(e) => setDeleteConfirm(e.target.value)}
              placeholder="Type DELETE to confirm"
              className="w-full px-3 py-2 rounded-lg border border-error/30 bg-background text-primary text-sm focus:outline-none focus:ring-2 focus:ring-error mb-3"
            />

            {deleteError && (
              <p className="text-sm text-error bg-error-light rounded-lg px-3 py-2 mb-3">
                {deleteError}
              </p>
            )}

            <Button
              variant="outline"
              className="border-error/40 text-error hover:bg-error-light"
              disabled={deleteLoading || deleteConfirm !== 'DELETE'}
              onClick={handleDeleteAccount}
            >
              {deleteLoading ? 'Deleting...' : 'Delete my account'}
            </Button>
          </Card>
        </div>
      )}
    </div>
  );
}
