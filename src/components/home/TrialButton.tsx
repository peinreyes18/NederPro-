'use client';

import Link from 'next/link';
import Button from '@/components/ui/Button';
import { useAuth } from '@/contexts/AuthContext';
import { cn } from '@/lib/utils';

/**
 * Auth-aware "Start free trial" button.
 * Guests → /signup
 * Logged-in (not subscribed) → /subscribe (auto-starts trial)
 * Logged-in + subscribed → /levels
 */
export default function TrialButton({
  className,
  variant,
  size,
  children = 'Start free trial →',
}: {
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
}) {
  const { user, isSubscribed } = useAuth();

  const href = !user ? '/signup' : isSubscribed ? '/levels' : '/subscribe';

  return (
    <Link href={href}>
      <Button variant={variant} size={size} className={cn(className)}>
        {children}
      </Button>
    </Link>
  );
}
