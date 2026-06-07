'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import type { User, Session } from '@supabase/supabase-js';
import { createClient } from '@/lib/supabase';

interface SubscriptionData {
  status: string;
  trial_end: string | null;
  current_period_end: string | null;
  has_payment_method: boolean | null;
}

interface AuthContextValue {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  subscription: SubscriptionData | null;
  subscriptionLoaded: boolean;
  isSubscribed: boolean;
  signUp: (email: string, password: string) => Promise<{ error: string | null; session: import('@supabase/supabase-js').Session | null }>;
  signIn: (email: string, password: string) => Promise<{ error: string | null; user: User | null }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [subscription, setSubscription] = useState<SubscriptionData | null>(null);
  const [subscriptionLoaded, setSubscriptionLoaded] = useState(false);

  useEffect(() => {
    const supabase = createClient();

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setIsLoading(false);

      if (session?.user) {
        const uid = session.user.id;
        (async () => {
          try {
            const { data } = await supabase
              .from('subscriptions')
              .select('status, trial_end, current_period_end, has_payment_method')
              .eq('user_id', uid)
              .maybeSingle();
            setSubscription(data);
          } catch {
            // keep subscription null
          } finally {
            setSubscriptionLoaded(true);
          }
        })();
      } else {
        setSubscriptionLoaded(true);
      }
    });

    const { data: { subscription: authSub } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);

      if (session?.user) {
        const uid = session.user.id;
        (async () => {
          try {
            const { data } = await supabase
              .from('subscriptions')
              .select('status, trial_end, current_period_end, has_payment_method')
              .eq('user_id', uid)
              .maybeSingle();
            setSubscription(data);
          } catch {
            // keep subscription null
          } finally {
            setSubscriptionLoaded(true);
          }
        })();
      } else {
        setSubscription(null);
        setSubscriptionLoaded(true);
      }
    });

    return () => authSub.unsubscribe();
  }, []);

  const signUp = useCallback(async (email: string, password: string) => {
    const supabase = createClient();
    const redirectTo = `${window.location.origin}/auth/callback`;
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: redirectTo },
    });
    const msg = error?.message;
    const clean = !msg || msg === '{}' ? 'Something went wrong. Please try again.' : msg;
    if (!error) {
      fetch('/api/notify-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      }).catch(() => {});
    }
    return { error: error ? clean : null, session: data?.session ?? null };
  }, []);

  const signIn = useCallback(async (email: string, password: string) => {
    const supabase = createClient();
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    return { error: error?.message ?? null, user: data?.user ?? null };
  }, []);

  const signOut = useCallback(async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
  }, []);

  const isSubscribed = (() => {
    if (!subscription) return false;
    if (subscription.status === 'active') return true;
    if (subscription.status === 'trialing') {
      if (!subscription.has_payment_method) return false; // trial requires a card on file
      if (!subscription.trial_end) return true;
      return new Date(subscription.trial_end) > new Date();
    }
    return false;
  })();

  return (
    <AuthContext.Provider value={{ user, session, isLoading, subscription, subscriptionLoaded, isSubscribed, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}
