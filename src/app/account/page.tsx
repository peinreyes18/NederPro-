'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { useSubscription } from '@/hooks/useSubscription';
import { createClient } from '@/lib/supabase';
import { deleteAccount } from '@/app/actions/deleteAccount';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

type Tab = 'subscription' | 'password' | 'account';

interface CardInfo {
  brand: string;
  last4: string;
  exp_month: number;
  exp_year: number;
}

function formatCardBrand(brand: string) {
  const map: Record<string, string> = {
    visa: 'Visa',
    mastercard: 'Mastercard',
    amex: 'American Express',
    discover: 'Discover',
    jcb: 'JCB',
    unionpay: 'UnionPay',
    diners: 'Diners Club',
  };
  return map[brand] ?? brand.charAt(0).toUpperCase() + brand.slice(1);
}

function TrialCountdown({ trialEnd }: { trialEnd: string }) {
  const [, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((n) => n + 1), 60_000);
    return () => clearInterval(id);
  }, []);

  const msLeft = Math.max(0, new Date(trialEnd).getTime() - Date.now());
  const totalHours = Math.floor(msLeft / (1000 * 60 * 60));
  const days = Math.floor(totalHours / 24);
  const hours = totalHours % 24;

  const isUrgent = days < 2;

  let label: string;
  if (msLeft === 0) {
    label = 'Trial ended';
  } else if (days === 0) {
    label = hours <= 1 ? 'Less than 1 hour left' : `${hours} hours left`;
  } else if (days === 1) {
    label = hours > 0 ? `1 day ${hours}h left` : '1 day left';
  } else {
    label = `${days} days left`;
  }

  return (
    <div className={cn(
      'rounded-xl px-4 py-3 border',
      isUrgent ? 'bg-error-light border-error/30' : 'bg-accent-light border-accent/30'
    )}>
      <p className={cn('text-sm font-semibold', isUrgent ? 'text-error' : 'text-accent')}>
        {label} in your free trial
      </p>
      <p className="text-xs text-muted mt-0.5">
        No charge until{' '}
        <span className="font-medium text-primary">
          {new Date(trialEnd).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })}
        </span>
        . Cancel any time before then.
      </p>
    </div>
  );
}

export default function AccountPage() {
  const { user, signOut } = useAuth();
  const { subscription, isLoading: subLoading } = useSubscription();
  const router = useRouter();
  const [tab, setTab] = useState<Tab>('subscription');
  const [portalLoading, setPortalLoading] = useState(false);
  const [portalError, setPortalError] = useState<string | null>(null);

  // Payment method state
  const [cardInfo, setCardInfo] = useState<CardInfo | null>(null);
  const [cardLoading, setCardLoading] = useState(false);

  // Cancel trial state
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);
  const [cancelLoading, setCancelLoading] = useState(false);
  const [cancelError, setCancelError] = useState<string | null>(null);

  // Fetch card info when subscription is loaded
  useEffect(() => {
    if (!subscription?.stripe_customer_id) return;
    setCardLoading(true);
    fetch('/api/stripe/payment-method')
      .then((r) => r.json())
      .then((d) => { setCardInfo(d.card ?? null); })
      .catch(() => {})
      .finally(() => setCardLoading(false));
  }, [subscription?.stripe_customer_id]);

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

  async function handleCancelTrial() {
    setCancelLoading(true);
    setCancelError(null);
    try {
      const res = await fetch('/api/stripe/cancel', { method: 'POST' });
      const data = await res.json();
      if (!res.ok) {
        setCancelError(data.error ?? 'Something went wrong.');
        setCancelLoading(false);
        return;
      }
      // Reload to show canceled state
      window.location.reload();
    } catch {
      setCancelError('Something went wrong. Please try again.');
      setCancelLoading(false);
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

    await signOut();
    router.push('/');
  }

  const tabs: { id: Tab; label: string }[] = [
    { id: 'subscription', label: 'Subscription' },
    { id: 'password', label: 'Password' },
    { id: 'account', label: 'Account' },
  ];

  const planLabel = subscription?.plan === 'monthly' ? 'Monthly plan · €3.49/month'
    : subscription?.plan === 'biweekly' ? 'Biweekly plan · €2.49/2 weeks'
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
        <div className="space-y-4">
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
                {subscription.status === 'trialing' && subscription.trial_end && (
                  <TrialCountdown trialEnd={subscription.trial_end} />
                )}

                {/* Status badge + plan */}
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

                {/* Key dates */}
                <div className="rounded-xl border border-border bg-surface p-4 space-y-2.5">
                  {subscription.created_at && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted">Started</span>
                      <span className="text-primary font-medium">
                        {new Date(subscription.created_at).toLocaleDateString('en-GB', {
                          day: 'numeric', month: 'long', year: 'numeric',
                        })}
                      </span>
                    </div>
                  )}
                  {subscription.status === 'trialing' && subscription.trial_end && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted">Trial ends</span>
                      <span className="text-primary font-medium">
                        {new Date(subscription.trial_end).toLocaleDateString('en-GB', {
                          day: 'numeric', month: 'long', year: 'numeric',
                        })}
                      </span>
                    </div>
                  )}
                  {subscription.status === 'active' && subscription.current_period_end && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted">Next billing date</span>
                      <span className="text-primary font-medium">
                        {new Date(subscription.current_period_end).toLocaleDateString('en-GB', {
                          day: 'numeric', month: 'long', year: 'numeric',
                        })}
                      </span>
                    </div>
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

                {portalError && (
                  <p className="text-sm text-error bg-error-light rounded-lg px-3 py-2">
                    {portalError}
                  </p>
                )}

                {/* Manage billing (for active/past_due) */}
                {subscription.status !== 'trialing' && (
                  <>
                    <Button variant="outline" onClick={handleManageBilling} disabled={portalLoading}>
                      {portalLoading ? 'Opening portal…' : 'Manage billing'}
                    </Button>
                    <p className="text-xs text-muted">
                      Update your payment method, view invoices, or cancel via the Stripe billing portal.
                    </p>
                  </>
                )}

                {/* Cancel trial (inline for trialing) */}
                {subscription.status === 'trialing' && (
                  <>
                    {!showCancelConfirm ? (
                      <button
                        onClick={() => setShowCancelConfirm(true)}
                        className="text-sm text-muted hover:text-error transition-colors underline underline-offset-2"
                      >
                        Cancel free trial
                      </button>
                    ) : (
                      <div className="rounded-xl border border-error/30 bg-error-light p-4 space-y-3">
                        <p className="text-sm font-semibold text-error">Cancel your free trial?</p>
                        <p className="text-xs text-muted leading-relaxed">
                          Your access will end immediately and you won&apos;t be charged. Your progress will be saved if you resubscribe later.
                        </p>
                        {cancelError && (
                          <p className="text-xs text-error">{cancelError}</p>
                        )}
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            className="border-error/40 text-error hover:bg-error-light text-sm"
                            onClick={handleCancelTrial}
                            disabled={cancelLoading}
                          >
                            {cancelLoading ? 'Cancelling…' : 'Yes, cancel trial'}
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => { setShowCancelConfirm(false); setCancelError(null); }}
                            disabled={cancelLoading}
                          >
                            Keep trial
                          </Button>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}
          </Card>

          {/* Payment method card — shown when subscribed */}
          {!subLoading && subscription && subscription.status !== 'canceled' && (
            <Card>
              <h2 className="text-lg font-semibold text-primary mb-4">Payment method</h2>
              {cardLoading ? (
                <p className="text-sm text-muted">Loading…</p>
              ) : cardInfo ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    {/* Card icon */}
                    <div className="w-10 h-7 rounded border border-border bg-surface flex items-center justify-center flex-shrink-0">
                      <svg width="20" height="14" viewBox="0 0 24 16" fill="none" className="text-muted">
                        <rect x="0.5" y="0.5" width="23" height="15" rx="2.5" stroke="currentColor"/>
                        <rect y="3" width="24" height="3" fill="currentColor" opacity="0.3"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-primary">
                        {formatCardBrand(cardInfo.brand)} ending in {cardInfo.last4}
                      </p>
                      <p className="text-xs text-muted">
                        Expires {String(cardInfo.exp_month).padStart(2, '0')}/{cardInfo.exp_year}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleManageBilling}
                    disabled={portalLoading}
                    className="text-sm text-accent hover:text-accent/80 transition-colors font-medium"
                  >
                    {portalLoading ? 'Opening portal…' : 'Update payment method →'}
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <p className="text-sm text-muted">No payment method on file yet.</p>
                  <Button onClick={handleManageBilling} disabled={portalLoading}>
                    {portalLoading ? 'Opening portal…' : 'Add payment method'}
                  </Button>
                </div>
              )}
            </Card>
          )}
        </div>
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
