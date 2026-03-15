'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'nederpro_cookie_consent';

type ConsentState = 'accepted' | 'declined' | null;

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag?: (...args: any[]) => void;
  }
}

function updateGAConsent(granted: boolean) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('consent', 'update', {
    analytics_storage: granted ? 'granted' : 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
}

export default function CookieConsent() {
  const [consent, setConsent] = useState<ConsentState>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ConsentState;
    if (stored === 'accepted' || stored === 'declined') {
      setConsent(stored);
      // Apply stored consent to GA immediately on load
      updateGAConsent(stored === 'accepted');
    } else {
      // No prior choice — show the banner after a short delay
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setConsent('accepted');
    setVisible(false);
    updateGAConsent(true);
  }

  function handleDecline() {
    localStorage.setItem(STORAGE_KEY, 'declined');
    setConsent('declined');
    setVisible(false);
    updateGAConsent(false);
  }

  if (!visible || consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6 pointer-events-none"
    >
      <div className="max-w-2xl mx-auto pointer-events-auto">
        <div className="bg-background border border-border rounded-2xl shadow-2xl p-5 sm:p-6">
          <div className="flex items-start gap-3 mb-4">
            <span className="text-xl flex-shrink-0">🍪</span>
            <div>
              <p className="text-sm font-semibold text-primary mb-1">We use analytics cookies</p>
              <p className="text-sm text-muted leading-relaxed">
                We use Google Analytics to understand how visitors use NederPro — which pages are popular and where people get stuck. No advertising, no tracking across other sites.{' '}
                <Link href="/cookies" className="text-accent hover:underline">
                  Cookie policy
                </Link>
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 justify-end">
            <button
              onClick={handleDecline}
              className="px-4 py-2 rounded-lg text-sm font-medium border-2 border-border text-primary-light hover:border-accent/40 hover:bg-accent-light/40 transition-all duration-200"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 rounded-lg text-sm font-medium bg-accent text-white hover:bg-accent-hover shadow-sm transition-all duration-200"
            >
              Accept analytics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
