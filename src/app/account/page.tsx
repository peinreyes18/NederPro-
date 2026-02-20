'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { createClient } from '@/lib/supabase';
import { deleteAccount } from '@/app/actions/deleteAccount';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

type Tab = 'password' | 'account';

export default function AccountPage() {
  const { user, signOut } = useAuth();
  const router = useRouter();
  const [tab, setTab] = useState<Tab>('password');

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
    { id: 'password', label: 'Password' },
    { id: 'account', label: 'Account' },
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-primary">Account Settings</h1>
        <p className="text-sm text-muted mt-1">{user?.email}</p>
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
