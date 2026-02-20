import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <div className="flex items-center gap-0.5">
              <span className="text-sm font-bold text-accent">Neder</span>
              <span className="text-sm font-bold text-primary">Pro</span>
            </div>
            <span className="hidden sm:inline text-border">|</span>
            <span className="text-sm text-muted">
              Structured Dutch Grammar Learning
            </span>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted">
            <Link href="/levels" className="hover:text-primary transition-colors">
              Levels
            </Link>
            <Link href="/vocabulary" className="hover:text-primary transition-colors">
              Vocabulary
            </Link>
            <Link href="/reference" className="hover:text-primary transition-colors">
              Reference
            </Link>
            <Link href="/exams" className="hover:text-primary transition-colors">
              Exams
            </Link>
            <Link href="/progress" className="hover:text-primary transition-colors">
              Progress
            </Link>
          </nav>
        </div>

        <div className="mt-6 pt-6 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-muted order-2 sm:order-1">
              &copy; {new Date().getFullYear()} NederPro. All rights reserved.
            </p>
            <nav className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted order-1 sm:order-2">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="hover:text-primary transition-colors">
                Cookie Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms &amp; Conditions
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
