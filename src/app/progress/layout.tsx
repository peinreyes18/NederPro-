import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your Progress — NederPro',
  description: 'Track your Dutch learning progress. See completed topics, exercise accuracy, study streaks, and your path through the CEFR levels.',
  robots: { index: false },
};

export default function ProgressLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
