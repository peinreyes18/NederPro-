import { cn } from '@/lib/utils';

interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'accent';
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ variant = 'default', children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold',
        variant === 'default' && 'bg-surface text-muted',
        variant === 'success' && 'bg-success-light text-success',
        variant === 'warning' && 'bg-warning-light text-warning',
        variant === 'error' && 'bg-error-light text-error',
        variant === 'accent' && 'bg-accent-light text-accent-hover',
        className
      )}
    >
      {children}
    </span>
  );
}
