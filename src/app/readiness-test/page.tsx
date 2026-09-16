import type { Metadata } from 'next';
import ReadinessTest from '@/components/readiness/ReadinessTest';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nederpro.com';

export const metadata: Metadata = {
  title: 'Am I Ready for the Inburgeringsexamen? Free 12-Question Test',
  description:
    'Free readiness test for the Dutch inburgeringsexamen: 12 questions on A1/A2 grammar and KNM in under 8 minutes. Get your level, your gaps, and exactly where to start. No account needed.',
  openGraph: {
    title: 'Am I ready for the inburgeringsexamen? Free test | NederPro',
    description: '12 questions, under 8 minutes, no account. Find your level and your gaps.',
    url: `${BASE_URL}/readiness-test`,
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'Inburgeringsexamen readiness test',
  description: 'A free 12-question self-assessment covering A1/A2 Dutch grammar and KNM (Kennis van de Nederlandse Maatschappij).',
  url: `${BASE_URL}/readiness-test`,
  educationalLevel: 'A1–A2',
  inLanguage: 'en',
  isAccessibleForFree: true,
  provider: { '@type': 'Organization', name: 'NederPro', url: BASE_URL },
};

export default function ReadinessTestPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ReadinessTest />
    </div>
  );
}
