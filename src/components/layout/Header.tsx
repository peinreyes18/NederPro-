'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { useAuth } from '@/contexts/AuthContext';

function useStreak() {
  const [streak, setStreak] = useState(0);
  useEffect(() => {
    try {
      const raw = localStorage.getItem('nederpro_progress');
      if (raw) {
        const parsed = JSON.parse(raw);
        setStreak(parsed?.stats?.currentStreak ?? 0);
      }
    } catch {
      // ignore
    }
  }, []);
  return streak;
}

const navItems = [
  { href: '/levels', label: 'Levels' },
  { href: '/vocabulary', label: 'Vocabulary' },
  { href: '/exams', label: 'Exams' },
  { href: '/daily-practice', label: 'Daily Practice' },
  { href: '/reference', label: 'Reference' },
  { href: '/progress', label: 'Progress' },
];

const exploreItems = [
  { href: '/culture', emoji: '🌷', label: 'Culture',  sub: 'Dutch customs & society' },
  { href: '/history', emoji: '📜', label: 'History',  sub: 'The Netherlands through time' },
  { href: '/blog',    emoji: '✍️', label: 'Blog',     sub: 'Tips, guides & news' },
];

const practiceItems = [
  { href: '/listening',  emoji: '🎧', label: 'Listening',       sub: 'Audio comprehension' },
  { href: '/reading',    emoji: '📖', label: 'Reading',          sub: 'Timed text exercises' },
  { href: '/speaking',   emoji: '🦉', label: 'Speaking',         sub: 'Talk to the owl' },
  { href: '/knm',        emoji: '🏛️', label: 'KNM Quiz',         sub: 'Civic knowledge' },
  { href: '/mock-exam',  emoji: '🇳🇱', label: 'Mock Exam',        sub: 'Full 50-min simulation' },
];

function NavDropdown({ label, items, pathname }: {
  label: string;
  items: { href: string; emoji: string; label: string; sub: string }[];
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isActive = items.some((p) => pathname.startsWith(p.href));

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className={cn(
          'flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200',
          isActive || open
            ? 'bg-accent-light text-accent-hover font-semibold'
            : 'text-primary-light hover:bg-surface-hover hover:text-primary'
        )}
      >
        {label}
        <svg
          className={cn('w-3.5 h-3.5 transition-transform duration-200', open && 'rotate-180')}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-1.5 w-56 rounded-xl border border-border bg-background shadow-lg z-50 overflow-hidden">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                'flex items-center gap-3 px-4 py-2.5 text-sm transition-colors',
                pathname.startsWith(item.href)
                  ? 'bg-accent-light text-accent font-medium'
                  : 'text-primary hover:bg-surface-hover'
              )}
            >
              <span className="text-base w-5 text-center">{item.emoji}</span>
              <div>
                <p className="font-medium leading-none">{item.label}</p>
                <p className="text-xs text-muted mt-0.5">{item.sub}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function PracticeDropdown({ pathname }: { pathname: string }) {
  return <NavDropdown label="Practice" items={practiceItems} pathname={pathname} />;
}

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, signOut, isLoading } = useAuth();
  const streak = useStreak();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobilePracticeOpen, setMobilePracticeOpen] = useState(false);
  const [mobileExploreOpen, setMobileExploreOpen] = useState(false);

  async function handleSignOut() {
    await signOut();
    router.push('/');
  }

  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="text-xl font-bold text-accent">Neder</span>
            <span className="text-xl font-bold text-primary -ml-2.5">Pro</span>
            <span className="text-[10px] text-muted font-semibold uppercase tracking-wider bg-surface px-2 py-0.5 rounded-md border border-border">
              Dutch
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  pathname.startsWith(item.href)
                    ? 'bg-accent-light text-accent-hover font-semibold'
                    : 'text-primary-light hover:bg-surface-hover hover:text-primary'
                )}
              >
                {item.label}
              </Link>
            ))}

            {/* Practice dropdown */}
            <PracticeDropdown pathname={pathname} />

            {/* Explore dropdown */}
            <NavDropdown label="Explore" items={exploreItems} pathname={pathname} />

            <ThemeToggle />
            {!isLoading && (
              user ? (
                <div className="flex items-center gap-1 ml-1">
                  {streak > 0 && (
                    <Link
                      href="/daily-practice"
                      className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-sm font-semibold text-orange-500 hover:bg-surface-hover transition-all duration-200"
                      title={`${streak}-day streak`}
                    >
                      🔥 {streak}
                    </Link>
                  )}
                  <Link
                    href="/account"
                    className={cn(
                      'px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200',
                      pathname.startsWith('/account')
                        ? 'bg-accent-light text-accent-hover font-semibold'
                        : 'text-primary-light hover:bg-surface-hover hover:text-primary'
                    )}
                    title={user.email}
                  >
                    Account
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium text-primary-light hover:bg-surface-hover hover:text-primary transition-all duration-200"
                  >
                    Sign out
                  </button>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="ml-1 px-3.5 py-2 rounded-lg text-sm font-medium bg-accent text-white hover:bg-accent-hover transition-all duration-200"
                >
                  Sign in
                </Link>
              )
            )}
          </nav>

          {/* Mobile: theme toggle + menu button */}
          <div className="flex sm:hidden items-center gap-1">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-primary-light hover:bg-surface-hover transition-colors"
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileMenuOpen && (
          <nav className="sm:hidden pb-4 border-t border-border pt-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'block px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200',
                  pathname.startsWith(item.href)
                    ? 'bg-accent-light text-accent-hover font-semibold'
                    : 'text-primary-light hover:bg-surface-hover'
                )}
              >
                {item.label}
              </Link>
            ))}

            {/* Practice section in mobile */}
            <div>
              <button
                onClick={() => setMobilePracticeOpen((v) => !v)}
                className={cn(
                  'w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200',
                  practiceItems.some((p) => pathname.startsWith(p.href))
                    ? 'bg-accent-light text-accent-hover font-semibold'
                    : 'text-primary-light hover:bg-surface-hover'
                )}
              >
                <span>Practice</span>
                <svg className={cn('w-4 h-4 transition-transform', mobilePracticeOpen && 'rotate-180')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobilePracticeOpen && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-border pl-3">
                  {practiceItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => { setMobileMenuOpen(false); setMobilePracticeOpen(false); }}
                      className={cn(
                        'flex items-center gap-2 px-2 py-2 rounded-lg text-sm transition-colors',
                        pathname.startsWith(item.href)
                          ? 'text-accent font-medium'
                          : 'text-primary-light hover:text-primary'
                      )}
                    >
                      <span>{item.emoji}</span>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Explore section in mobile */}
            <div>
              <button
                onClick={() => setMobileExploreOpen((v) => !v)}
                className={cn(
                  'w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200',
                  exploreItems.some((p) => pathname.startsWith(p.href))
                    ? 'bg-accent-light text-accent-hover font-semibold'
                    : 'text-primary-light hover:bg-surface-hover'
                )}
              >
                <span>Explore</span>
                <svg className={cn('w-4 h-4 transition-transform', mobileExploreOpen && 'rotate-180')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileExploreOpen && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-border pl-3">
                  {exploreItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => { setMobileMenuOpen(false); setMobileExploreOpen(false); }}
                      className={cn(
                        'flex items-center gap-2 px-2 py-2 rounded-lg text-sm transition-colors',
                        pathname.startsWith(item.href)
                          ? 'text-accent font-medium'
                          : 'text-primary-light hover:text-primary'
                      )}
                    >
                      <span>{item.emoji}</span>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {!isLoading && (
              user ? (
                <>
                  <Link
                    href="/account"
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'block px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200',
                      pathname.startsWith('/account')
                        ? 'bg-accent-light text-accent-hover font-semibold'
                        : 'text-primary-light hover:bg-surface-hover'
                    )}
                  >
                    Account
                  </Link>
                  <button
                    onClick={() => { setMobileMenuOpen(false); handleSignOut(); }}
                    className="block w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-medium text-primary-light hover:bg-surface-hover transition-all duration-200"
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3.5 py-2.5 rounded-lg text-sm font-medium text-accent hover:bg-surface-hover transition-all duration-200"
                >
                  Sign in / Create account
                </Link>
              )
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
