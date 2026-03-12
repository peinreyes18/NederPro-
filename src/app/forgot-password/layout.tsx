import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Forgot Password — NederPro',
  description: 'Reset your NederPro password. Enter your email address and we\'ll send you a reset link.',
  robots: { index: false },
};

export default function ForgotPasswordLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
