'use client';

import { useEffect } from 'react';

/**
 * Last-resort error boundary. `error.tsx` catches errors inside pages, but if
 * the ROOT layout itself throws, Next.js needs this file — without it the
 * visitor gets a blank white screen with no way back. This must render its own
 * <html> and <body> because the root layout is what failed.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, sans-serif', background: '#fafafa', color: '#1a1a2e', margin: 0 }}>
        <div style={{ maxWidth: 560, margin: '0 auto', padding: '96px 16px', textAlign: 'center' }}>
          <p style={{ fontSize: 56, margin: '0 0 16px' }}>⚠️</p>
          <h1 style={{ fontSize: 28, fontWeight: 700, margin: '0 0 12px' }}>Something went wrong</h1>
          <p style={{ color: '#555', margin: '0 auto 32px', maxWidth: 380 }}>
            NederPro hit an unexpected error. Try again, or go back to the home page.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={reset}
              style={{ padding: '10px 20px', borderRadius: 10, border: 0, background: '#2563eb', color: '#fff', fontWeight: 600, cursor: 'pointer' }}
            >
              Try again
            </button>
            <a
              href="/"
              style={{ padding: '10px 20px', borderRadius: 10, border: '1px solid #ddd', color: '#1a1a2e', textDecoration: 'none', fontWeight: 600 }}
            >
              ← Back to Home
            </a>
          </div>
          {error?.digest && (
            <p style={{ marginTop: 32, fontSize: 12, color: '#999' }}>Reference: {error.digest}</p>
          )}
        </div>
      </body>
    </html>
  );
}
