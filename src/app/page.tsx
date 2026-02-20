import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { levels } from '@/content/levels';

const features = [
  {
    icon: '📐',
    title: 'Grammar-First Approach',
    description:
      'Deep understanding of Dutch grammar rules, not random vocabulary drills. Every lesson builds on the previous one.',
  },
  {
    icon: '💼',
    title: 'Workplace Ready',
    description:
      'Every grammar topic includes real workplace examples: emails, meetings, conversations with colleagues.',
  },
  {
    icon: '📋',
    title: 'Exam Aligned',
    description:
      'Content structured around the Inburgeringsexamen and Staatsexamen NT2, so your study time counts toward certification.',
  },
  {
    icon: '🎯',
    title: 'Structured Exercises',
    description:
      'Progressive exercises: from controlled drills to open sentence construction. Build real communication skills.',
  },
  {
    icon: '⚠️',
    title: 'Common Mistakes',
    description:
      'Every topic highlights the mistakes Dutch learners actually make, so you avoid them from the start.',
  },
  {
    icon: '🧑‍💻',
    title: 'Adult-Focused',
    description:
      'Professional tone, practical content. No childish games or gamification. Serious language learning for serious goals.',
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-light/50 via-transparent to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Structured Dutch Learning
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary leading-[1.1]">
              Master Dutch Grammar.
              <br />
              <span className="text-accent">Systematically.</span>
            </h1>
            <p className="mt-6 text-lg text-primary-light leading-relaxed max-w-2xl">
              NederPro is a structured, grammar-focused Dutch learning program designed
              for adults who want to work and live in the Netherlands. Built around real
              grammar progression and aligned with official Dutch language exams.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/levels">
                <Button size="lg">Start Learning</Button>
              </Link>
              <Link href="/vocabulary">
                <Button size="lg" variant="outline">
                  Vocabulary
                </Button>
              </Link>
              <Link href="/reference">
                <Button size="lg" variant="outline">
                  Grammar Reference
                </Button>
              </Link>
              <Link href="/exams">
                <Button size="lg" variant="outline">
                  Exam Practice
                </Button>
              </Link>
              <Link href="/culture">
                <Button size="lg" variant="outline">
                  Culture Tips
                </Button>
              </Link>
              <Link href="/history">
                <Button size="lg" variant="outline">
                  Dutch History
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Level Overview */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">CEFR Level Progression</h2>
          <p className="text-muted max-w-xl">
            Follow a structured path from absolute beginner to advanced, aligned with Dutch
            exam requirements.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {levels.map((level) => {
            const hasContent = level.topicIds.length > 0;
            return (
              <Link
                key={level.id}
                href={hasContent ? `/levels/${level.id}` : '#'}
                className={!hasContent ? 'pointer-events-none' : ''}
              >
                <Card hover={hasContent} className={!hasContent ? 'opacity-50' : ''}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-extrabold text-accent">
                      {level.shortName}
                    </span>
                    {hasContent ? (
                      <Badge variant="accent">{level.topicIds.length} topics</Badge>
                    ) : (
                      <Badge>Coming soon</Badge>
                    )}
                  </div>
                  <h3 className="font-semibold text-primary mb-1">{level.name}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {level.description}
                  </p>
                  {level.examInfo && (
                    <p className="text-xs text-accent mt-3 font-semibold">
                      {level.examInfo}
                    </p>
                  )}
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Features */}
      <section className="bg-surface border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">
              What Makes NederPro Different
            </h2>
            <p className="text-muted max-w-xl">
              Built for adults who are serious about learning Dutch properly.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <Card key={i}>
                <span className="text-2xl mb-3 block">{feature.icon}</span>
                <h3 className="font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">Simple Pricing</h2>
          <p className="text-muted max-w-xl mx-auto">
            Start for free. Unlock everything when you are ready.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
          {/* Free tier */}
          <Card className="flex flex-col">
            <div className="mb-4">
              <Badge>Free</Badge>
            </div>
            <p className="text-3xl font-extrabold text-primary mb-1">€0</p>
            <p className="text-sm text-muted mb-6">No credit card required</p>
            <ul className="space-y-2 text-sm text-primary-light flex-1 mb-8">
              {[
                'A1 grammar lessons',
                'Core vocabulary sets',
                'Exam practice previews',
                'Grammar reference',
                'Culture &amp; history pages',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-success mt-0.5 flex-shrink-0">✓</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
            <Link href="/signup">
              <Button variant="outline" className="w-full">Create Free Account</Button>
            </Link>
          </Card>

          {/* Pro tier */}
          <Card className="flex flex-col border-accent/40 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <Badge variant="accent">Most Popular</Badge>
            </div>
            <div className="mb-4">
              <Badge variant="accent">Pro</Badge>
            </div>
            <p className="text-3xl font-extrabold text-primary mb-1">€9<span className="text-lg font-normal text-muted">/mo</span></p>
            <p className="text-sm text-muted mb-6">Cancel anytime</p>
            <ul className="space-y-2 text-sm text-primary-light flex-1 mb-8">
              {[
                'Everything in Free',
                'All levels: A2, B1, B2',
                'Full exam practice library',
                'AI writing feedback',
                'Listening &amp; writing exams',
                'Progress tracking',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-accent mt-0.5 flex-shrink-0">✓</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
            <Link href="/signup">
              <Button className="w-full">Get Started</Button>
            </Link>
          </Card>
        </div>
      </section>
    </div>
  );
}
