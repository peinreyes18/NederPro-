import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie Policy — NederPro',
  description: 'Information about how NederPro uses cookies and similar technologies.',
};

export default function CookiePolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="mb-10">
        <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Legal</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-primary mb-3">Cookie Policy</h1>
        <p className="text-sm text-muted">Last updated: February 2026</p>
      </div>

      <div className="space-y-8 text-primary-light text-sm leading-relaxed">

        <section>
          <h2 className="text-lg font-bold text-primary mb-3">1. What are cookies?</h2>
          <p>
            Cookies are small text files placed on your device when you visit a website. They are
            widely used to make websites work, remember your preferences, and provide information
            to the site owner. Similar technologies include local storage and session storage,
            which we also use.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-primary mb-3">2. How we use cookies</h2>
          <p className="mb-4">NederPro uses the following categories of cookies:</p>

          {/* Strictly necessary */}
          <div className="rounded-xl border border-border overflow-hidden mb-4">
            <div className="bg-surface px-4 py-3 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-primary">Strictly Necessary</h3>
              <span className="text-xs bg-success-light text-success border border-success/30 px-2 py-0.5 rounded-full font-medium">
                Always on
              </span>
            </div>
            <div className="px-4 py-3 space-y-3">
              <p>
                These cookies are essential for the website to function. They cannot be switched off.
                They are set in response to actions you take, such as logging in or filling in forms.
              </p>
              <table className="w-full text-xs border border-border rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-surface text-primary font-semibold text-left">
                    <th className="px-3 py-2 border-b border-border">Cookie</th>
                    <th className="px-3 py-2 border-b border-border">Purpose</th>
                    <th className="px-3 py-2 border-b border-border">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ['sb-access-token', 'Supabase authentication session', 'Session'],
                    ['sb-refresh-token', 'Supabase session renewal', '1 week'],
                    ['nederpro_theme', 'Remembers your dark/light mode preference (local storage)', 'Persistent'],
                  ].map(([name, purpose, duration], i) => (
                    <tr key={i}>
                      <td className="px-3 py-2 font-mono text-primary">{name}</td>
                      <td className="px-3 py-2">{purpose}</td>
                      <td className="px-3 py-2 text-muted">{duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Analytics */}
          <div className="rounded-xl border border-border overflow-hidden mb-4">
            <div className="bg-surface px-4 py-3 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-primary">Analytics (Optional)</h3>
              <span className="text-xs bg-warning-light text-warning border border-warning/30 px-2 py-0.5 rounded-full font-medium">
                Consent required
              </span>
            </div>
            <div className="px-4 py-3">
              <p>
                We may use analytics tools to understand how users interact with NederPro in aggregate.
                This helps us identify which lessons are most useful and where users encounter difficulties.
                All analytics data is anonymised before processing — we never see individual user behaviour.
              </p>
              <p className="mt-2 text-muted italic">
                Currently, no third-party analytics cookies are set. If this changes we will update
                this policy and ask for your consent.
              </p>
            </div>
          </div>

          {/* Marketing */}
          <div className="rounded-xl border border-border overflow-hidden">
            <div className="bg-surface px-4 py-3 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-primary">Marketing / Advertising</h3>
              <span className="text-xs bg-error-light text-error border border-error/30 px-2 py-0.5 rounded-full font-medium">
                Not used
              </span>
            </div>
            <div className="px-4 py-3">
              <p>
                We do not use advertising or tracking cookies. We do not share data with ad networks.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-primary mb-3">3. Managing cookies</h2>
          <p className="mb-2">You can control cookies in several ways:</p>
          <ul className="space-y-2 list-none">
            {[
              ['Browser settings', 'All modern browsers allow you to block or delete cookies via their settings menus. Note that blocking strictly necessary cookies will prevent you from logging in.'],
              ['Our cookie banner', 'When analytics cookies are introduced, you will be able to accept or decline them via the consent banner shown on your first visit.'],
              ['Account deletion', 'Deleting your account removes all authentication cookies associated with it.'],
            ].map(([title, desc], i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-accent mt-0.5 flex-shrink-0">•</span>
                <span><strong className="text-primary">{title}:</strong> {desc}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3">
            For more information on managing cookies visit{' '}
            <a href="https://www.allaboutcookies.org" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
              allaboutcookies.org
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-primary mb-3">4. Changes to this policy</h2>
          <p>
            We may update this Cookie Policy when we introduce new technologies or change our
            practices. Material changes will be communicated via the platform or by email.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-primary mb-3">5. Contact</h2>
          <p>
            Questions about our use of cookies? Email us at{' '}
            <a href="mailto:nederprohelp@gmail.com" className="text-accent hover:underline">
              nederprohelp@gmail.com
            </a>.
          </p>
        </section>

      </div>

      <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-4 text-sm text-muted">
        <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
        <Link href="/terms" className="hover:text-primary transition-colors">Terms &amp; Conditions</Link>
        <Link href="/" className="hover:text-primary transition-colors">← Back to home</Link>
      </div>
    </div>
  );
}
