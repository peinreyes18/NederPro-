'use client';

import { useEffect } from 'react';
import Button from '@/components/ui/Button';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to error reporting service when ready
    console.error(error);
  }, [error]);

  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center">
      <p className="text-6xl mb-4">⚠️</p>
      <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-3">
        Something went wrong
      </h1>
      <p className="text-primary-light mb-10 max-w-sm mx-auto">
        We hit an unexpected error. This has been noted. Try again or head back
        to the home page.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button onClick={reset}>Try again</Button>
        <a href="/">
          <Button variant="outline">← Back to Home</Button>
        </a>
      </div>

      {process.env.NODE_ENV === 'development' && error?.message && (
        <pre className="mt-8 text-left text-xs bg-surface border border-border rounded-xl p-4 overflow-auto text-error max-w-lg mx-auto">
          {error.message}
        </pre>
      )}
    </div>
  );
}
