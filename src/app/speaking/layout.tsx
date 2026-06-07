import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Speaking Practice — NederPro',
  description: 'Practice speaking Dutch with an AI conversation partner. Get instant feedback on your pronunciation and grammar.',
};

export default function SpeakingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
