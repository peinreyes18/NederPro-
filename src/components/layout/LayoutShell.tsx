'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import { ThemeContext, useThemeProvider } from '@/hooks/useTheme';
import dynamic from 'next/dynamic';
import { VerbProvider } from '@/components/verbs/VerbContext';
import { AuthProvider } from '@/contexts/AuthContext';

const VerbModal = dynamic(() => import('@/components/verbs/VerbModal'), { ssr: false });

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPreview = pathname === '/preview';
  const themeValue = useThemeProvider();

  if (isPreview) {
    return (
      <AuthProvider>
        <ThemeContext.Provider value={themeValue}>
          <VerbProvider>
            {children}
            <VerbModal />
          </VerbProvider>
        </ThemeContext.Provider>
      </AuthProvider>
    );
  }

  return (
    <AuthProvider>
      <ThemeContext.Provider value={themeValue}>
        <VerbProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <VerbModal />
        </VerbProvider>
      </ThemeContext.Provider>
    </AuthProvider>
  );
}
