import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reset Password — NederPro',
  description: 'Set a new password for your NederPro account.',
  robots: { index: false },
};

export default function ResetPasswordLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
