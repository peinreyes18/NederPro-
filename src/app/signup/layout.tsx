import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Account — NederPro',
  description: 'Create a free NederPro account to save your Dutch learning progress and access it from any device.',
  robots: { index: false },
};

export default function SignupLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
