import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Account — NederPro',
  description: 'Manage your NederPro account settings, change your password, or delete your account.',
  robots: { index: false },
};

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
