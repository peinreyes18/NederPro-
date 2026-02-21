import { MetadataRoute } from 'next';
import { allExams } from '@/content/exams';
import { levels } from '@/content/levels';
import { vocabularyCategories } from '@/content/vocabulary';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nederpro.nl';

// Culture tip IDs (from culture/page.tsx)
const cultureTipIds = [
  'greetings-social-norms',
  'dutch-directness',
  'workplace-culture',
  'holidays-celebrations',
  'food-dining',
  'cycling-culture',
  'housing-registration',
  'healthcare',
  'birthday-songs-traditions',
  'dutch-golden-age',
  'dutch-independence',
  'dutch-water-management',
  'world-war-2-netherlands',
];

// History era IDs (from history/page.tsx)
const historyEraIds = [
  'early-history',
  'medieval-period',
  'habsburg-rule',
  'eighty-years-war',
  'golden-age',
  'decline-and-french',
  'kingdom-19th-century',
  'world-war-2',
  'postwar-modern',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // ── Static public pages ──────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/levels`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/exams`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/vocabulary`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/reference`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/culture`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/history`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/cookies`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // ── Level pages ──────────────────────────────────────────────────────────
  const levelPages: MetadataRoute.Sitemap = levels.flatMap((level) => {
    const levelPage = {
      url: `${BASE_URL}/levels/${level.id}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    };
    const topicPages = level.topicIds.map((topicId) => ({
      url: `${BASE_URL}/levels/${level.id}/${topicId}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
    return [levelPage, ...topicPages];
  });

  // ── Exam pages ───────────────────────────────────────────────────────────
  const examPages: MetadataRoute.Sitemap = allExams.map((exam) => ({
    url: `${BASE_URL}/exams/${exam.id}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // ── Vocabulary pages ─────────────────────────────────────────────────────
  const vocabPages: MetadataRoute.Sitemap = vocabularyCategories.map((cat) => ({
    url: `${BASE_URL}/vocabulary/${cat.id}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // ── Culture tip pages ────────────────────────────────────────────────────
  const culturePages: MetadataRoute.Sitemap = cultureTipIds.map((id) => ({
    url: `${BASE_URL}/culture/${id}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // ── History era pages ────────────────────────────────────────────────────
  const historyPages: MetadataRoute.Sitemap = historyEraIds.map((id) => ({
    url: `${BASE_URL}/history/${id}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...levelPages,
    ...examPages,
    ...vocabPages,
    ...culturePages,
    ...historyPages,
  ];
}
