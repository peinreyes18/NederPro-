import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vocabulary Quiz — NederPro',
  description: 'Test yourself on Dutch vocabulary you\'ve practised across all categories. Multiple choice and type-answer modes.',
};

export default function VocabularyQuizLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
