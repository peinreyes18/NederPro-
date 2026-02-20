import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — NederPro',
  description: 'How NederPro collects, uses, and protects your personal data under GDPR.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="mb-10">
        <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Legal</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-primary mb-3">Privacy Policy</h1>
        <p className="text-sm text-muted">Last updated: February 2026</p>
      </div>

      <div className="prose-custom space-y-8 text-primary-light text-sm leading-relaxed">

        <section>
          <h2 className="text-lg font-bold text-primary mb-3">1. Who we are</h2>
          <p>
            NederPro (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is an online Dutch language learning platform.
            For the purposes of the General Data Protection Regulation (GDPR), we are the data controller
            of your personal information.
          </p>
          <p className="mt-2">
            If you have any questions about this policy or how we handle your data, you can contact us at:{' '}
            <a href="mailto:privacy@nederpro.nl" className="text-accent hover:underline">
              privacy@nederpro.nl
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-primary mb-3">2. What data we collect</h2>
          <p className="mb-2">We collect the following categories of personal data:</p>
          <ul className="space-y-2 list-none">
            {[
              ['Account data', 'Your email address and encrypted password when you register.'],
              ['Usage data', 'Which lessons, exams, and vocabulary sets you access, and your progress scores.'],
              ['Writing submissions', 'Text you submit in writing exam tasks for AI feedback purposes. These are processed by the Anthropic API and are not stored permanently on our servers.'],
              ['Payment data', 'Billing is handled by our payment processor (Stripe). We do not store your card details.'],
              ['Technical data', 'IP address, browser type, device type, and session identifiers — collected automatically when you use the service.'],
            ].map(([title, desc], i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-accent mt-0.5 flex-shrink-0">•</span>
                <span><strong className="text-primary">{title}:</strong> {desc}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-primary mb-3">3. Legal basis for processing</h2>
          <p className="mb-2">Under GDPR, we rely on the following legal bases:</p>
          <ul className="space-y-2 list-none">
            {[
              ['Contract', 'Processing your account data is necessary to provide the service you signed up for.'],
              ['Legitimate interests', 'We use technical data to maintain security, prevent fraud, and improve the platform.'],
              ['Consent', 'Where we use cookies for analytics, we ask for your consent first.'],
            ].map(([basis, desc], i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-accent mt-0.5 flex-shrink-0">•</span>
                <span><strong className="text-primary">{basis}:</strong> {desc}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-primary mb-3">4. How we use your data</h2>
          <p className="mb-2">We use your data to:</p>
          <ul className="space-y-1.5 list-none">
            {[
              'Create and manage your account',
              'Provide and personalise the learning experience',
              'Track your progress across lessons and exams',
              'Process payments and manage subscriptions',
              'Send transactional emails (e.g. password reset)',
              'Improve the platform based on aggregated, anonymised usage patterns',
              'Comply with legal obligations',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-success mt-0.5 flex-shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-3">We do <strong className="text-primary">not</strong> sell your personal data to third parties.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-primary mb-3">5. Third-party processors</h2>
          <p className="mb-2">We share data with the following sub-processors, all of whom are GDPR-compliant:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-surface text-primary font-semibold text-left">
                  <th className="px-4 py-2 border-b border-border">Provider</th>
                  <th className="px-4 py-2 border-b border-border">Purpose</th>
                  <th className="px-4 py-2 border-b border-border">Location</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ['Supabase', 'Authentication & database', 'EU (AWS Frankfurt)'],
                  ['Anthropic', 'AI writing feedback (Claude API)', 'USA (Standard Contractual Clauses)'],
                  ['Stripe', 'Payment processing', 'USA / EU (SCC)'],
                  ['Vercel', 'Hosting & CDN', 'USA / EU (SCC)'],
                ].map(([provider, purpose, location], i) => (
                  <tr key={i} className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2 font-medium text-primary">{provider}</td>
                    <td className="px-4 py-2">{purpose}</td>
                    <td className="px-4 py-2 text-muted">{location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-primary mb-3">6. Data retention</h2>
          <p>
            We retain your account data for as long as your account is active. If you delete your account,
            we will delete your personal data within 30 days, except where we are required to retain it
            for legal or accounting purposes (up to 7 years for financial records under Dutch law).
          </p>
          <p className="mt-2">
            Writing submissions sent to the AI feedback service are not stored by us after the response
            is delivered. Anthropic&rsquo;s own data retention policy applies to data processed through their API.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-primary mb-3">7. Your rights under GDPR</h2>
          <p className="mb-2">You have the right to:</p>
          <ul className="space-y-1.5 list-none">
            {[
              ['Access', 'Request a copy of the personal data we hold about you.'],
              ['Rectification', 'Ask us to correct inaccurate or incomplete data.'],
              ['Erasure', 'Request deletion of your personal data ("right to be forgotten").'],
              ['Restriction', 'Ask us to limit how we process your data in certain circumstances.'],
              ['Portability', 'Receive your data in a machine-readable format.'],
              ['Object', 'Object to processing based on legitimate interests.'],
              ['Withdraw consent', 'Where processing is based on consent, you can withdraw it at any time.'],
            ].map(([right, desc], i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-accent mt-0.5 flex-shrink-0">•</span>
                <span><strong className="text-primary">{right}:</strong> {desc}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3">
            To exercise any of these rights, email us at{' '}
            <a href="mailto:privacy@nederpro.nl" className="text-accent hover:underline">
              privacy@nederpro.nl
            </a>. We will respond within 30 days.
          </p>
          <p className="mt-2">
            You also have the right to lodge a complaint with the Dutch Data Protection Authority (Autoriteit
            Persoonsgegevens) at{' '}
            <a href="https://www.autoriteitpersoonsgegevens.nl" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
              autoriteitpersoonsgegevens.nl
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-primary mb-3">8. Security</h2>
          <p>
            We use industry-standard measures to protect your data, including HTTPS encryption,
            hashed passwords, and access controls. Supabase row-level security restricts data
            access to authenticated users only. No system is 100% secure; if you discover a
            security issue please contact us immediately.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-primary mb-3">9. Children</h2>
          <p>
            NederPro is intended for users aged 16 and over. We do not knowingly collect personal
            data from children under 16. If you believe a child has provided us with personal data,
            please contact us and we will delete it promptly.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-primary mb-3">10. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we make material changes we
            will notify you by email or by displaying a prominent notice on the platform. Continued
            use of NederPro after changes take effect constitutes acceptance of the updated policy.
          </p>
        </section>

      </div>

      <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-4 text-sm text-muted">
        <Link href="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link>
        <Link href="/terms" className="hover:text-primary transition-colors">Terms &amp; Conditions</Link>
        <Link href="/" className="hover:text-primary transition-colors">← Back to home</Link>
      </div>
    </div>
  );
}
