import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nederpro.nl';

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
          '/auth/',
          '/api/',
          '/preview',
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
