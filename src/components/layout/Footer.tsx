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
            <p className="text-xs text-muted leading-relaxed mb-4">
              Structured Dutch grammar learning for adults. CEFR A0–B2.
            </p>
            <a
              href="https://discord.gg/nederpro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-medium text-muted hover:text-accent transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              Join our Discord
            </a>
          </div>

          {/* Learn */}
          <div>
            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Learn</p>
            <nav className="flex flex-col gap-2 text-sm text-muted">
              <Link href="/levels" className="hover:text-primary transition-colors">Levels</Link>
              <Link href="/vocabulary" className="hover:text-primary transition-colors">Vocabulary</Link>
              <Link href="/daily-practice" className="hover:text-primary transition-colors">Daily Practice</Link>
              <Link href="/reference" className="hover:text-primary transition-colors">Reference</Link>
              <Link href="/culture" className="hover:text-primary transition-colors">Culture</Link>
              <Link href="/history" className="hover:text-primary transition-colors">History</Link>
              <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
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
              <Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
              <Link href="/about" className="hover:text-primary transition-colors">About</Link>
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
