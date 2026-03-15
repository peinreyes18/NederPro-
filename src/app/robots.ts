import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nederpro.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/levels',
          '/levels/',
          '/exams',
          '/exams/',
          '/vocabulary',
          '/vocabulary/',
          '/reference',
          '/reference/',
          '/culture',
          '/culture/',
          '/history',
          '/history/',
          '/contact',
          '/pricing',
          '/about',
          '/privacy',
          '/terms',
          '/cookies',
        ],
        disallow: [
          '/progress',
          '/account',
          '/onboarding',
          '/login',
          '/signup',
          '/forgot-password',
          '/reset-password',
          '/subscribe',
          '/auth/',
          '/api/',
          '/preview',
          // Subscriber-only interactive features within public content trees
          '/vocabulary/quiz',
        ],
      },
      {
        // Block AI training crawlers
        userAgent: 'GPTBot',
        disallow: ['/'],
      },
      {
        userAgent: 'Google-Extended',
        disallow: ['/'],
      },
      {
        userAgent: 'CCBot',
        disallow: ['/'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
