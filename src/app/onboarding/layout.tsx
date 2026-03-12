import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Started — NederPro',
  description: 'Set up your NederPro learning profile. Tell us your goal and current Dutch level to personalise your experience.',
  robots: { index: false },
};

export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
