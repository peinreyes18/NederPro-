import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/content/blog/posts';
import Breadcrumb from '@/components/layout/Breadcrumb';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nederpro.com';

export const metadata: Metadata = {
  title: 'Dutch Learning Blog',
  description: 'Tips, guides, and resources for learning Dutch — from grammar basics to exam preparation for the Inburgeringsexamen and Staatsexamen NT2.',
  openGraph: {
    title: 'Dutch Learning Blog — NederPro',
    description: 'Practical guides for learning Dutch, preparing for the Inburgeringsexamen, and mastering Dutch grammar.',
    url: `${BASE_URL}/blog`,
    type: 'website',
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <Breadcrumb items={[{ label: 'Blog' }]} />

      <h1 className="text-3xl font-bold text-primary mb-2">Dutch Learning Blog</h1>
      <p className="text-muted mb-10">
        Practical guides for learning Dutch, understanding the grammar, and passing the official exams.
      </p>

      <div className="space-y-6">
        {sorted.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <article className="group rounded-2xl border border-border bg-background p-6 hover:border-accent/40 hover:shadow-sm transition-all duration-200 cursor-pointer">
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-accent bg-accent-light px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                {post.title}
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-4">{post.description}</p>
              <div className="flex items-center gap-4 text-xs text-muted">
                <span>{formatDate(post.publishedAt)}</span>
                <span>·</span>
                <span>{post.readingTime} min read</span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
