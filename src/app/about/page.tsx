import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'About NederPro — Structured Dutch Learning for Adults',
  description:
    'NederPro is a structured Dutch grammar platform for adult learners, built around the CEFR framework and aligned with the Inburgeringsexamen and Staatsexamen NT2.',
};

const values = [
  {
    icon: '🧱',
    title: 'Structure first',
    desc: 'Dutch grammar has rules. We teach them explicitly — not buried in conversation practice, but front and centre, in a logical CEFR progression from A0 to B2.',
  },
  {
    icon: '🎯',
    title: 'Exam-aligned',
    desc: 'Every topic maps to the Inburgeringsexamen (A2) or Staatsexamen NT2 (B1/B2). If you have a test date, you\'ll always know where you stand.',
  },
  {
    icon: '🧑‍💼',
    title: 'Built for adults',
    desc: 'Adult learners need clear explanations and meaningful context — not games built for children. NederPro is designed for people with jobs, responsibilities, and real motivation.',
  },
  {
    icon: '🔬',
    title: 'Grammar before guesswork',
    desc: 'Understanding why something is correct is more durable than memorising what sounds right. We explain the rule, show examples, then give you exercises to test it.',
  },
  {
    icon: '🤖',
    title: 'AI where it helps',
    desc: 'Writing practice with immediate AI feedback closes the gap between passive reading and active production — the part most learning tools skip.',
  },
  {
    icon: '💶',
    title: 'Affordable by design',
    desc: 'All grammar lessons are free. The subscription — from €2.49 per two weeks — unlocks exercises and exam practice. Priced for learners, not enterprises.',
  },
];

const stats = [
  { value: '69', label: 'grammar topics' },
  { value: 'A0–B2', label: 'CEFR levels covered' },
  { value: '920+', label: 'vocabulary words' },
  { value: '30', label: 'exam practice sets' },
];

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

      {/* Header */}
      <div className="mb-10">
        <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">About</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4">
          Dutch grammar, done properly
        </h1>
        <p className="text-lg text-primary-light leading-relaxed">
          NederPro is a structured Dutch learning platform for adult learners — built around
          the CEFR framework, aligned with Dutch official exams, and designed to give you
          grammar confidence, not just vocabulary lists.
        </p>
      </div>

      {/* Why NederPro exists */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-primary mb-4">Why we built this</h2>
        <div className="space-y-4 text-sm text-primary-light leading-relaxed">
          <p>
            Most Dutch learning tools are built for tourists or children. They teach you
            to order coffee and count to ten. That&apos;s fine — but it doesn&apos;t help you
            pass the Inburgeringsexamen, write a formal email to your employer, or follow
            a meeting in Dutch.
          </p>
          <p>
            Adult learners — especially those who need Dutch for work, integration, or academic
            study — need something different: explicit grammar instruction, structured progression,
            and practice that reflects real-world use. NederPro was built to fill that gap.
          </p>
          <p>
            Every lesson follows the same pattern: explain the rule, show it in context, practise
            it. Every topic maps to a CEFR level. Every level maps to an exam. You always know
            where you are and where you&apos;re going.
          </p>
        </div>
      </section>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
        {stats.map(({ value, label }) => (
          <div key={label} className="text-center rounded-xl border border-border bg-surface px-4 py-5">
            <p className="text-2xl font-extrabold text-accent mb-0.5">{value}</p>
            <p className="text-xs text-muted">{label}</p>
          </div>
        ))}
      </div>

      {/* Values */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-primary mb-6">What we believe</h2>
        <div className="space-y-4">
          {values.map(({ icon, title, desc }) => (
            <div key={title} className="flex items-start gap-4 p-4 rounded-xl border border-border bg-surface">
              <span className="text-2xl flex-shrink-0">{icon}</span>
              <div>
                <p className="text-sm font-semibold text-primary mb-1">{title}</p>
                <p className="text-sm text-primary-light leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Content coverage */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-primary mb-4">What&apos;s on NederPro</h2>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          {[
            ['Grammar lessons', '69 topics across A0–B2, fully written'],
            ['Interactive exercises', 'Multiple choice, gap-fill, reordering, writing'],
            ['Vocabulary', '920+ words in 18 thematic categories'],
            ['Exam practice', '30 mock exam sets (Inburgeringsexamen & NT2)'],
            ['Grammar reference', '14 quick-reference tables always available'],
            ['Culture & history', '12 culture tips and 9 historical eras'],
            ['AI writing feedback', 'Open-answer questions with instant AI review'],
            ['Progress tracking', 'Lesson completion and exercise scores saved'],
          ].map(([title, desc]) => (
            <div key={title as string} className="rounded-xl border border-border px-4 py-3">
              <p className="font-semibold text-primary text-sm">{title}</p>
              <p className="text-xs text-muted mt-0.5">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-primary mb-3">Get in touch</h2>
        <p className="text-sm text-primary-light leading-relaxed mb-3">
          Questions, feedback, or bug reports? We read every message and typically
          reply within 1–2 business days.
        </p>
        <p className="text-sm text-primary-light">
          Email:{' '}
          <a href="mailto:nederprohelp@gmail.com" className="text-accent hover:underline font-medium">
            nederprohelp@gmail.com
          </a>
        </p>
      </section>

      {/* CTA */}
      <div className="rounded-2xl border border-accent/30 bg-accent-light/20 px-6 py-8 text-center">
        <h2 className="text-xl font-bold text-primary mb-2">Start learning Dutch today</h2>
        <p className="text-sm text-muted mb-5">
          All grammar lessons are free. Exercises and exam practice from €2.49.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/levels">
            <Button size="lg">Browse free lessons</Button>
          </Link>
          <Link href="/signup">
            <Button variant="outline" size="lg">Start free trial</Button>
          </Link>
        </div>
      </div>

      {/* Footer links */}
      <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-4 text-sm text-muted">
        <Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
        <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
        <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
        <Link href="/" className="hover:text-primary transition-colors">← Back to home</Link>
      </div>
    </div>
  );
}
