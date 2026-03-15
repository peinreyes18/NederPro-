import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">

        {/* Main footer grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-0.5 mb-2">
              <span className="text-sm font-bold text-accent">Neder</span>
              <span className="text-sm font-bold text-primary">Pro</span>
            </div>
            <p className="text-xs text-muted leading-relaxed">
              Structured Dutch grammar learning for adults. CEFR A0–B2.
            </p>
          </div>

          {/* Learn */}
          <div>
            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Learn</p>
            <nav className="flex flex-col gap-2 text-sm text-muted">
              <Link href="/levels" className="hover:text-primary transition-colors">Levels</Link>
              <Link href="/vocabulary" className="hover:text-primary transition-colors">Vocabulary</Link>
              <Link href="/reference" className="hover:text-primary transition-colors">Reference</Link>
              <Link href="/culture" className="hover:text-primary transition-colors">Culture</Link>
              <Link href="/history" className="hover:text-primary transition-colors">History</Link>
            </nav>
          </div>

          {/* Exam Guides */}
          <div>
            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Exam Guides</p>
            <nav className="flex flex-col gap-2 text-sm text-muted">
              <Link href="/exams" className="hover:text-primary transition-colors">Exam Practice</Link>
              <Link href="/inburgeringsexamen" className="hover:text-primary transition-colors">Inburgeringsexamen</Link>
              <Link href="/staatsexamen-nt2" className="hover:text-primary transition-colors">Staatsexamen NT2</Link>
              <Link href="/progress" className="hover:text-primary transition-colors">My Progress</Link>
              <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Start */}
          <div>
            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Start Learning</p>
            <nav className="flex flex-col gap-2 text-sm text-muted">
              <Link href="/levels/a0" className="hover:text-primary transition-colors">A0 — Starter</Link>
              <Link href="/levels/a1" className="hover:text-primary transition-colors">A1 — Breakthrough</Link>
              <Link href="/levels/a2" className="hover:text-primary transition-colors">A2 — Waystage</Link>
              <Link href="/levels/b1" className="hover:text-primary transition-colors">B1 — Threshold</Link>
              <Link href="/levels/b2" className="hover:text-primary transition-colors">B2 — Vantage</Link>
            </nav>
          </div>
        </div>

        <div className="pt-6 border-t border-border">
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
