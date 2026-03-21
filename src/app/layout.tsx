import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutShell from "@/components/layout/LayoutShell";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nederpro.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'NederPro — Structured Dutch Grammar Learning',
    template: '%s | NederPro',
  },
  description:
    'A structured, grammar-focused Dutch learning program for adults preparing to work and live in the Netherlands. Aligned with CEFR levels and official Dutch exam standards.',
  keywords: [
    'learn Dutch',
    'Dutch learning',
    'Dutch grammar',
    'NT2',
    'Inburgeringsexamen',
    'Staatsexamen NT2',
    'KNM exam',
    'CEFR Dutch',
    'Nederlands leren',
    'Dutch for beginners',
    'Dutch language course',
    'Dutch online',
    'Dutch A1 A2 B1 B2',
    'Dutch exam practice',
    'Dutch vocabulary',
    'integrate Netherlands',
    'inburgering',
    'Dutch for immigrants',
    'learn Dutch online free',
    'Dutch grammar exercises',
  ],
  authors: [{ name: 'NederPro' }],
  creator: 'NederPro',
  verification: {
    google: 'yIYuxjoUECMQ_TPZGNxJyHFhbsEUA_avOG3VaGHJLpk',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: BASE_URL,
    siteName: 'NederPro',
    title: 'NederPro — Structured Dutch Grammar Learning',
    description:
      'Structured, grammar-focused Dutch learning for adults. CEFR-aligned, exam-ready. KNM, Inburgeringsexamen, and Staatsexamen NT2 practice.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NederPro — Structured Dutch Grammar Learning',
    description:
      'CEFR-aligned Dutch grammar learning for adults. Practice exams, vocabulary, and AI writing feedback.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'NederPro',
  url: BASE_URL,
  description: 'Structured Dutch learning for adults — grammar, vocabulary, exam prep aligned with CEFR and Dutch inburgering standards.',
  potentialAction: {
    '@type': 'SearchAction',
    target: `${BASE_URL}/vocabulary?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('nederpro_theme');
                  var dark = theme === 'dark' || (theme !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches);
                  if (dark) document.documentElement.classList.add('dark');
                } catch(e) {}
              })();
            `,
          }}
        />
        {/* Google Analytics 4 — consent mode default deny (GDPR compliant for EU users) */}
        {GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('consent', 'default', {
                    analytics_storage: 'denied',
                    ad_storage: 'denied',
                    ad_user_data: 'denied',
                    ad_personalization: 'denied',
                    wait_for_update: 500
                  });
                  (function() {
                    try {
                      var c = localStorage.getItem('nederpro_cookie_consent');
                      if (c === 'accepted') {
                        gtag('consent', 'update', { analytics_storage: 'granted' });
                      }
                    } catch(e) {}
                  })();
                  gtag('config', '${GA_ID}', { page_path: window.location.pathname });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className={`${inter.variable} antialiased font-sans min-h-screen flex flex-col`}>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
