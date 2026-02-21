import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'NederPro – Learn Dutch',
    short_name: 'NederPro',
    description:
      'Structured Dutch learning for adults — grammar, vocabulary, exam prep, and cultural insights. Aligned with CEFR A0–B2 and Dutch inburgering exam standards.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    orientation: 'portrait-primary',
    lang: 'en',
    categories: ['education', 'language'],
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
    shortcuts: [
      {
        name: 'Exam Practice',
        short_name: 'Exams',
        description: 'Practice Dutch language exams',
        url: '/exams',
      },
      {
        name: 'Grammar Levels',
        short_name: 'Levels',
        description: 'Study Dutch grammar by CEFR level',
        url: '/levels',
      },
    ],
  };
}
