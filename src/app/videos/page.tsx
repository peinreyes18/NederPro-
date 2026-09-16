import type { Metadata } from 'next';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import { levels } from '@/content/levels';
import { getTopicsForLevel } from '@/lib/content-loader';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nederpro.com';

export const metadata: Metadata = {
  title: 'Dutch Grammar Explainers',
  description:
    'One-minute Dutch grammar explainers for every topic from A0 to B2 — the rule, real examples read aloud, and the mistake to avoid. Free to watch.',
  openGraph: {
    title: 'Dutch Grammar Explainers | NederPro',
    description: 'Short, spoken explainers for every Dutch grammar topic, A0 to B2. Free.',
    url: `${BASE_URL}/videos`,
    type: 'website',
  },
};

export default function VideosPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-10 text-center">
        <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Watch &amp; listen</p>
        <h1 className="text-3xl font-bold text-primary mb-3">Grammar Explainers ▶</h1>
        <p className="text-muted text-lg max-w-xl mx-auto">
          Every topic in about a minute: the rule, real Dutch examples read aloud, and the
          mistake to avoid. Watch one, then open the full lesson and practise.
        </p>
      </div>

      <div className="space-y-10">
        {levels
          .filter((l) => l.topicIds.length > 0)
          .map((level) => {
            const topics = getTopicsForLevel(level.id);
            return (
              <section key={level.id}>
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="accent">{level.shortName}</Badge>
                  <h2 className="text-lg font-semibold text-primary">{level.name}</h2>
                  <span className="text-sm text-muted">{topics.length} explainers</span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {topics.map((topic) => (
                    <Link
                      key={topic.id}
                      href={`/levels/${level.id}/${topic.id}#watch`}
                      className="group block p-4 rounded-xl border border-border bg-surface hover:bg-surface-hover hover:border-accent transition-all duration-200"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex w-9 h-9 shrink-0 items-center justify-center rounded-full bg-accent text-white text-sm shadow-sm group-hover:scale-105 transition-transform">
                          ▶
                        </span>
                        <div className="min-w-0">
                          <h3 className="font-semibold text-primary group-hover:text-accent transition-colors leading-snug">
                            {topic.title}
                          </h3>
                          {topic.subtitle && (
                            <p className="text-xs text-muted italic mt-0.5 truncate">{topic.subtitle}</p>
                          )}
                          <p className="text-xs text-muted mt-2">≈ 1 min · spoken Dutch examples</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
      </div>
    </div>
  );
}
