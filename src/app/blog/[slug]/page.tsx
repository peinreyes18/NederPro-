import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts, getBlogPost } from '@/content/blog/posts';
import Breadcrumb from '@/components/layout/Breadcrumb';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nederpro.com';

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: `${post.title} | NederPro`,
      description: post.description,
      url: `${BASE_URL}/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.publishedAt,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default async function BlogPostPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    author: { '@type': 'Organization', name: 'NederPro' },
    publisher: { '@type': 'Organization', name: 'NederPro', url: BASE_URL },
    url: `${BASE_URL}/blog/${post.slug}`,
  };

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: post.title }]} />

      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium text-accent bg-accent-light px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-primary leading-tight mb-4">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-muted">
          <span>{formatDate(post.publishedAt)}</span>
          <span>·</span>
          <span>{post.readingTime} min read</span>
          <span>·</span>
          <span>NederPro</span>
        </div>
      </div>

      {/* Article body */}
      <article
        className="
          [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-primary [&_h2]:mt-8 [&_h2]:mb-3
          [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-primary [&_h3]:mt-6 [&_h3]:mb-2
          [&_p]:text-primary-light [&_p]:leading-relaxed [&_p]:mb-4
          [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_ul]:space-y-1
          [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-4 [&_ol]:space-y-1
          [&_li]:text-primary-light
          [&_a]:text-accent [&_a]:no-underline hover:[&_a]:underline
          [&_strong]:font-semibold [&_strong]:text-primary
          [&_table]:w-full [&_table]:text-sm [&_table]:mb-4
          [&_td]:py-1 [&_td]:pr-6 [&_td]:text-primary-light
          [&_em]:italic
        "
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* CTA */}
      <div className="mt-12 rounded-2xl border border-accent/30 bg-accent-light p-6 text-center">
        <p className="font-semibold text-primary mb-1">Start learning Dutch today</p>
        <p className="text-sm text-muted mb-4">
          Structured CEFR A0–B2 lessons, exam practice, and AI writing feedback.
          7-day free trial — no credit card needed.
        </p>
        <Link
          href="/subscribe"
          className="inline-block px-6 py-2.5 rounded-lg bg-accent text-white text-sm font-semibold hover:bg-accent-hover transition-colors"
        >
          Start free trial →
        </Link>
      </div>

      {/* Related posts */}
      {otherPosts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-lg font-bold text-primary mb-4">More articles</h2>
          <div className="space-y-4">
            {otherPosts.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`}>
                <div className="rounded-xl border border-border p-4 hover:border-accent/40 transition-colors cursor-pointer">
                  <p className="font-semibold text-primary text-sm hover:text-accent transition-colors">
                    {p.title}
                  </p>
                  <p className="text-xs text-muted mt-1">{p.readingTime} min read</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
