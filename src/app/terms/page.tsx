import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions — NederPro',
  description: 'Terms and conditions governing use of the NederPro Dutch learning platform.',
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="mb-10">
        <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Legal</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-primary mb-3">Terms &amp; Conditions</h1>
        <p className="text-sm text-muted">Last updated: February 2026</p>
      </div>

      <div className="space-y-8 text-primary-light text-sm leading-relaxed">

        <section>
          <h2 className="text-lg font-bold text-primary mb-3">1. About these terms</h2>
          <p>
            These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your use of the NederPro website and services
            (&ldquo;Service&rdquo;). By creating an account or using NederPro, you agree to these Terms.
            If you do not agree, do not use the Service.
          </p>
          <p className="mt-2">
            NederPro is operated as a personal project. For questions, contact us at{' '}
            <a href="mailto:hello@nederpro.nl" className="text-accent hover:underline">
              hello@nederpro.nl
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-primary mb-3">2. Eligibility</h2>
          <p>
            You must be at least 16 years old to use NederPro. By using the Service, you confirm
            that you meet this requirement. If you are under 16, please ask a parent or guardian
            to use the Service on your behalf.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-primary mb-3">3. Accounts</h2>
          <ul className="space-y-2 list-none">
            {[
              'You are responsible for keeping your login credentials secure.',
              'You must provide accurate information when creating your account.',
              'One account per person. Creating multiple accounts to circumvent subscription limits is not permitted.',
              'We may suspend or terminate accounts that violate these Terms.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-accent mt-0.5 flex-shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-primary mb-3">4. Free trial and subscriptions</h2>

          <h3 className="font-semibold text-primary mb-2 mt-4">4.1 Free trial</h3>
          <p>
            New users may start a 7-day free trial with full access to the Service. A valid
            payment method is required to activate the trial. At the end of the 7-day period,
            your chosen plan will begin automatically and your card will be charged unless you
            cancel before the trial expires. You can cancel at any time from your account settings.
          </p>

          <h3 className="font-semibold text-primary mb-2 mt-4">4.2 Paid plans</h3>
          <p className="mb-2">We currently offer two paid plans:</p>
          <ul className="space-y-1.5 list-none mb-3">
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5 flex-shrink-0">•</span>
              <span><strong className="text-primary">2-Week Plan</strong> — €3.49, valid for 14 days from activation.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5 flex-shrink-0">•</span>
              <span><strong className="text-primary">Monthly Plan</strong> — €4.49 per month, billed monthly, cancel anytime.</span>
            </li>
          </ul>
          <p>
            Prices include applicable VAT. We reserve the right to change pricing with at least
            30 days&rsquo; notice to existing subscribers.
          </p>

          <h3 className="font-semibold text-primary mb-2 mt-4">4.3 Cancellation and refunds</h3>
          <p>
            You may cancel your subscription at any time from your account settings. Cancellation
            takes effect at the end of the current billing period — you retain access until then.
            We do not offer refunds for partial periods except where required by EU consumer law.
          </p>
          <p className="mt-2">
            Under EU consumer law, you have a 14-day right of withdrawal from the date of purchase,
            unless you have already accessed paid content — in which case the right of withdrawal
            may be waived. By accessing paid content immediately after subscribing, you acknowledge
            this waiver.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-primary mb-3">5. Acceptable use</h2>
          <p className="mb-2">When using NederPro you agree not to:</p>
          <ul className="space-y-1.5 list-none">
            {[
              'Attempt to access systems or data you are not authorised to access.',
              'Use automated tools to scrape, copy, or reproduce our content.',
              'Share your account credentials with others.',
              'Reverse-engineer or decompile any part of the Service.',
              'Use the AI feedback feature to submit content that is harmful, illegal, or violates third-party rights.',
              'Attempt to manipulate or abuse the AI feedback API.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-error mt-0.5 flex-shrink-0">✗</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-primary mb-3">6. Intellectual property</h2>
          <p>
            All content on NederPro — including lesson text, exam questions, audio scripts,
            illustrations, and code — is owned by NederPro or its licensors and is protected
            by copyright law.
          </p>
          <p className="mt-2">
            You may use the content for your own personal, non-commercial learning. You may
            not copy, redistribute, sell, or publish NederPro content without our prior
            written permission.
          </p>
          <p className="mt-2">
            Text you write in the writing exam tasks remains yours. By submitting it for AI
            feedback, you grant us a limited licence to process it via the Anthropic API for
            that purpose only.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-primary mb-3">7. AI-generated feedback</h2>
          <p>
            The writing feedback feature is powered by an AI model (Anthropic Claude). AI feedback
            is provided for educational guidance only and does not constitute professional language
            assessment or certification. Scores and grades are indicative and may not reflect official
            exam outcomes.
          </p>
          <p className="mt-2">
            We are not responsible for inaccuracies in AI-generated feedback. Do not rely solely
            on AI feedback for important language certification decisions.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-primary mb-3">8. Disclaimers and limitation of liability</h2>
          <p>
            NederPro is provided &ldquo;as is&rdquo; without warranties of any kind. We do not guarantee
            that the Service will be uninterrupted or error-free. We are not responsible for
            outcomes of official language exams.
          </p>
          <p className="mt-2">
            To the maximum extent permitted by Dutch law, our total liability for any claim
            arising from use of the Service is limited to the amount you paid us in the three
            months preceding the claim.
          </p>
          <p className="mt-2">
            Nothing in these Terms excludes liability for death or personal injury caused by
            negligence, or for fraud or fraudulent misrepresentation.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-primary mb-3">9. Governing law and disputes</h2>
          <p>
            These Terms are governed by the laws of the Netherlands. Any disputes will be subject
            to the exclusive jurisdiction of the courts of the Netherlands, without prejudice to
            your rights as an EU consumer to bring proceedings in your country of residence.
          </p>
          <p className="mt-2">
            The European Commission provides an online dispute resolution platform at{' '}
            <a href="https://ec.europa.eu/consumers/odr" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
              ec.europa.eu/consumers/odr
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-primary mb-3">10. Changes to these terms</h2>
          <p>
            We may update these Terms from time to time. We will notify you of material changes
            by email or via a notice on the platform at least 14 days before the changes take
            effect. Your continued use of the Service after that date constitutes acceptance.
          </p>
        </section>

      </div>

      <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-4 text-sm text-muted">
        <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
        <Link href="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link>
        <Link href="/" className="hover:text-primary transition-colors">← Back to home</Link>
      </div>
    </div>
  );
}
