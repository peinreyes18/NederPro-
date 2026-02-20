import Link from 'next/link';
import type { Metadata } from 'next';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: '404 — Page Not Found | NederPro',
};

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center">
      <p className="text-8xl font-extrabold text-accent mb-4">404</p>
      <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-3">
        Pagina niet gevonden
      </h1>
      <p className="text-muted mb-2 text-sm">
        <span className="italic">(Page not found)</span>
      </p>
      <p className="text-primary-light mb-10 max-w-sm mx-auto">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link href="/">
          <Button>← Back to Home</Button>
        </Link>
        <Link href="/levels">
          <Button variant="outline">Start Learning</Button>
        </Link>
        <Link href="/exams">
          <Button variant="outline">Exam Practice</Button>
        </Link>
      </div>
    </div>
  );
}
