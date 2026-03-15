import type { Metadata } from 'next';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Welcome to NederPro!',
  robots: { index: false, follow: false },
};

export default function SubscribeSuccessPage() {
  return (
    <div className="max-w-lg mx-auto px-4 py-16">
      <Card>
        {/* Success icon */}
        <div className="w-12 h-12 rounded-full bg-accent-light flex items-center justify-center mb-5">
          <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-primary mb-2">You&apos;re all set!</h1>
        <p className="text-primary-light text-sm mb-6">
          Your 7-day free trial has started. Enjoy full access to everything NederPro has to offer.
        </p>

        <div className="rounded-lg bg-surface border border-border px-4 py-3 mb-6 space-y-1">
          <p className="text-sm text-primary font-medium">What&apos;s next?</p>
          <p className="text-sm text-muted">
            Start with your current level or explore topics you want to work on. Your progress is saved automatically.
          </p>
        </div>

        <Link href="/levels">
          <Button className="w-full">Start learning →</Button>
        </Link>
      </Card>
    </div>
  );
}
