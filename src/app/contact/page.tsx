import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with the NederPro team. We\'re happy to help with questions about lessons, exams, or your account.',
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="mb-10">
        <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Get in touch</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-primary mb-3">Contact</h1>
        <p className="text-primary-light leading-relaxed">
          Have a question, found a bug, or just want to say something? We read every message.
        </p>
      </div>

      <div className="space-y-5">

        {/* Email card */}
        <div className="rounded-2xl border border-border bg-background p-6 flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center">
            <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-primary mb-0.5">Email us</p>
            <p className="text-sm text-muted mb-2">
              For general questions, account help, or feedback.
            </p>
            <a
              href="mailto:nederprohelp@gmail.com"
              className="text-sm font-medium text-accent hover:underline"
            >
              nederprohelp@gmail.com
            </a>
          </div>
        </div>

        {/* Response time */}
        <div className="rounded-2xl border border-border bg-surface p-5 flex items-start gap-3">
          <svg className="w-4 h-4 text-muted flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm text-muted">
            We typically respond within <strong className="text-primary">1–2 business days</strong>.
          </p>
        </div>

        {/* Common topics */}
        <div className="rounded-2xl border border-border bg-background p-6">
          <p className="font-semibold text-primary mb-3">Common topics</p>
          <ul className="space-y-2">
            {[
              ['Account & login issues', '/account'],
              ['Password reset', '/forgot-password'],
              ['Privacy & data requests', '/privacy'],
              ['Bug reports or content errors', null],
              ['Feature suggestions', null],
            ].map(([label, href]) => (
              <li key={label as string} className="flex items-center gap-2 text-sm text-primary-light">
                <span className="text-accent flex-shrink-0">•</span>
                {href ? (
                  <Link href={href as string} className="hover:text-accent hover:underline transition-colors">
                    {label}
                  </Link>
                ) : (
                  label
                )}
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className="mt-10 pt-8 border-t border-border flex flex-wrap gap-4 text-sm text-muted">
        <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
        <Link href="/terms" className="hover:text-primary transition-colors">Terms &amp; Conditions</Link>
        <Link href="/" className="hover:text-primary transition-colors">← Back to home</Link>
      </div>
    </div>
  );
}
