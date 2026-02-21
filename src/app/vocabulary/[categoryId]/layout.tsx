import type { Metadata } from 'next';
import { getVocabularyCategory } from '@/content/vocabulary';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nederpro.nl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}): Promise<Metadata> {
  const { categoryId } = await params;
  const category = getVocabularyCategory(categoryId);

  if (!category) {
    return {
      title: 'Vocabulary Category Not Found',
      description: 'This vocabulary category could not be found.',
    };
  }

  const wordCount = category.words.length;
  const description = `Learn ${wordCount} Dutch ${category.name.toLowerCase()} words with examples and pronunciation. ${category.description} Part of the NederPro Dutch vocabulary programme.`;

  return {
    title: `${category.name} – Dutch Vocabulary`,
    description: description.slice(0, 160),
    openGraph: {
      title: `${category.name} – Dutch Vocabulary | NederPro`,
      description: description.slice(0, 160),
      url: `${BASE_URL}/vocabulary/${categoryId}`,
      type: 'website',
    },
  };
}

export default function VocabularyCategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
