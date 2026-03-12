import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In — NederPro',
  description: 'Sign in to your NederPro account to continue your Dutch learning journey and access your progress.',
  robots: { index: false },
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
