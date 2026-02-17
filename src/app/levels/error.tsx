'use client';

import Button from '@/components/ui/Button';

export default function LevelsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
      <div className="text-4xl mb-4">😵</div>
      <h2 className="text-xl font-bold text-primary mb-2">Something went wrong</h2>
      <p className="text-muted mb-6 max-w-md mx-auto">
        We encountered an error loading this page. Please try again.
      </p>
      <div className="flex items-center justify-center gap-3">
        <Button onClick={reset}>Try again</Button>
        <a href="/levels">
          <Button variant="outline">Back to Levels</Button>
        </a>
      </div>
    </div>
  );
}
