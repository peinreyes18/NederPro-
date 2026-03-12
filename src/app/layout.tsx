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
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NederPro — Learn Dutch Systematically',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NederPro — Structured Dutch Grammar Learning',
    description:
      'CEFR-aligned Dutch grammar learning for adults. Practice exams, vocabulary, and AI writing feedback.',
    images: ['/og-image.png'],
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
      </head>
      <body className={`${inter.variable} antialiased font-sans min-h-screen flex flex-col`}>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
