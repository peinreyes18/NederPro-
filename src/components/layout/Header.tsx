'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { useAuth } from '@/contexts/AuthContext';

const navItems = [
  { href: '/levels', label: 'Levels' },
  { href: '/vocabulary', label: 'Vocabulary' },
  { href: '/exams', label: 'Exams' },
  { href: '/reference', label: 'Reference' },
  { href: '/culture', label: 'Culture' },
  { href: '/history', label: 'History' },
  { href: '/progress', label: 'Progress' },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, signOut, isLoading } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            <ThemeToggle />
            {!isLoading && (
              user ? (
                <div className="flex items-center gap-2 ml-1">
                  <span className="text-xs text-muted hidden lg:block max-w-[120px] truncate" title={user.email}>
                    {user.email}
                  </span>
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
            {!isLoading && (
              user ? (
                <button
                  onClick={() => { setMobileMenuOpen(false); handleSignOut(); }}
                  className="block w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-medium text-primary-light hover:bg-surface-hover transition-all duration-200"
                >
                  Sign out ({user.email})
                </button>
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
