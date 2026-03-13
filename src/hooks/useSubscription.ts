'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase';
import { useAuth } from '@/contexts/AuthContext';

interface Subscription {
  status: string;
  trial_end: string | null;
  current_period_end: string | null;
  stripe_customer_id: string | null;
}

export function useSubscription() {
  const { user } = useAuth();
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setSubscription(null);
      setIsLoading(false);
      return;
    }

    const supabase = createClient();
    supabase
      .from('subscriptions')
      .select('status, trial_end, current_period_end, stripe_customer_id')
      .eq('user_id', user.id)
      .single()
      .then(({ data }) => {
        setSubscription(data);
        setIsLoading(false);
      });
  }, [user]);

  const isActive =
    subscription?.status === 'active' || subscription?.status === 'trialing';
  const isTrialing = subscription?.status === 'trialing';

  return {
    subscription,
    isActive,
    isTrialing,
    trialEndsAt: subscription?.trial_end ?? null,
    currentPeriodEnd: subscription?.current_period_end ?? null,
    isLoading,
  };
}
