import { cn } from '@/lib/utils';

interface AlertProps {
  variant: 'info' | 'success' | 'warning' | 'error' | 'tip';
  children: React.ReactNode;
  className?: string;
}

export default function Alert({ variant, children, className }: AlertProps) {
  return (
    <div
      className={cn(
        'rounded-md p-4 text-sm',
        variant === 'info' && 'bg-accent-light/40 border border-accent/20 text-primary',
        variant === 'success' && 'bg-success-light border border-success/20 text-primary',
        variant === 'warning' && 'bg-warning-light border border-warning/20 text-primary',
        variant === 'error' && 'bg-error-light border border-error/20 text-primary',
        variant === 'tip' && 'bg-accent-light/30 border-l-4 border-accent text-primary',
        className
      )}
    >
      {children}
    </div>
  );
}
