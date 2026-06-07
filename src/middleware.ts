import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * ACCESS TIERS
 *
 * 1. SUBSCRIBER_ONLY — requires active auth + subscription (checked first, highest priority)
 *    - Exercise pages:  /levels/[levelId]/[topicId]/exercises
 *    - Practice pages:  /vocabulary/[categoryId]/practice
 *    - Vocab quiz:      /vocabulary/quiz
 *    - User pages:      /progress, /account
 *
 * 2. PUBLIC_BROWSING — no auth needed (SEO pages, free preview of content)
 *    - /levels, /levels/[levelId], /levels/[levelId]/[topicId]  (lesson reading)
 *    - /exams, /exams/[examId]  (exam overview — actual exam requires subscription)
 *    - /vocabulary, /vocabulary/[categoryId]  (word lists)
 *    - /reference, /reference/[topic]
 *    - /culture, /culture/[tipId]
 *    - /history, /history/[eraId]
 *
 * 3. AUTH_PAGES — always public (login, signup, etc.)
 */

// Subscriber-only path patterns (checked FIRST — highest priority)
function isSubscriberOnly(pathname: string): boolean {
  // Exercise pages under any level/topic
  if (/^\/levels\/[^/]+\/[^/]+\/exercises(\/.*)?$/.test(pathname)) return true;
  // Vocabulary practice and quiz
  if (/^\/vocabulary\/[^/]+\/practice(\/.*)?$/.test(pathname)) return true;
  if (pathname === '/vocabulary/quiz' || pathname.startsWith('/vocabulary/quiz/')) return true;
  // Individual exam pages (taking an exam requires subscription)
  if (/^\/exams\/[^/]+(\/.*)?$/.test(pathname)) return true;
  // User account pages
  if (pathname === '/progress' || pathname.startsWith('/progress/')) return true;
  if (pathname === '/account' || pathname.startsWith('/account/')) return true;
  // Practice & exam tools
  if (pathname === '/speaking' || pathname.startsWith('/speaking/')) return true;
  if (pathname === '/knm' || pathname.startsWith('/knm/')) return true;
  if (pathname === '/mock-exam' || pathname.startsWith('/mock-exam/')) return true;
  if (pathname === '/reading' || pathname.startsWith('/reading/')) return true;
  if (pathname === '/listening' || pathname.startsWith('/listening/')) return true;
  if (pathname === '/verbs' || pathname.startsWith('/verbs/')) return true;
  return false;
}

// Free browsing paths (no auth required)
const PUBLIC_PREFIXES = [
  '/',
  '/login',
  '/signup',
  '/forgot-password',
  '/reset-password',
  '/onboarding',
  '/auth',
  '/subscribe',
  '/privacy',
  '/cookies',
  '/terms',
  '/contact',
  // Content pages — publicly readable
  '/levels',
  '/exams',
  '/vocabulary',
  '/reference',
  '/culture',
  '/history',
  // Exam guide pages — high-intent SEO landing pages
  '/inburgeringsexamen',
  '/staatsexamen-nt2',
  // Info pages
  '/pricing',
  '/about',
  // Blog
  '/blog',
  // Daily practice landing (actual practice requires subscription via isSubscriberOnly)
  '/daily-practice',
];

function isPublic(pathname: string): boolean {
  return PUBLIC_PREFIXES.some(
    (p) => pathname === p || pathname.startsWith(p + '/')
  );
}

/** Returns true only if the subscription grants access right now.
 *  For trialing subscriptions, also verifies trial_end has not passed —
 *  so a missed/delayed Stripe webhook can't keep a user permanently unlocked.
 *  Trials also require a card on file (has_payment_method) — no-card trials are blocked. */
function isSubscriptionActive(
  sub: { status: string; trial_end?: string | null; has_payment_method?: boolean | null } | null | undefined
): boolean {
  if (!sub) return false;
  if (sub.status === 'active') return true;
  if (sub.status === 'trialing') {
    if (!sub.has_payment_method) return false; // trial requires a card on file
    if (!sub.trial_end) return true; // no end date recorded yet — Stripe hasn't confirmed yet
    return new Date(sub.trial_end) > new Date();
  }
  return false;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Always allow Next.js internals and static assets
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Subscriber-only pages: require auth + active subscription
  if (isSubscriberOnly(pathname)) {
    const response = NextResponse.next({
      request: { headers: request.headers },
    });

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() { return request.cookies.getAll(); },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) => {
              response.cookies.set(name, value, options);
            });
          },
        },
      }
    );

    const { data: { session } } = await supabase.auth.getSession();

    if (!session) {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('next', pathname);
      return NextResponse.redirect(loginUrl);
    }

    const { data: subscription } = await supabase
      .from('subscriptions')
      .select('status, trial_end, has_payment_method')
      .eq('user_id', session.user.id)
      .single();

    const hasAccess = isSubscriptionActive(subscription);

    if (!hasAccess) {
      return NextResponse.redirect(new URL('/subscribe', request.url));
    }

    return response;
  }

  // Redirect logged-in subscribers away from /subscribe to /levels
  if (pathname === '/subscribe' || pathname.startsWith('/subscribe/')) {
    const response = NextResponse.next({ request: { headers: request.headers } });
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() { return request.cookies.getAll(); },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) => {
              response.cookies.set(name, value, options);
            });
          },
        },
      }
    );
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      const { data: sub } = await supabase
        .from('subscriptions')
        .select('status, trial_end, has_payment_method')
        .eq('user_id', session.user.id)
        .single();
      const hasAccess = isSubscriptionActive(sub);
      if (hasAccess) {
        return NextResponse.redirect(new URL('/levels', request.url));
      }
    }
    return NextResponse.next();
  }

  // Public browsing pages: allow through without any auth check
  if (isPublic(pathname)) {
    return NextResponse.next();
  }

  // Everything else (unknown routes): require auth + subscription
  const response = NextResponse.next({
    request: { headers: request.headers },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return request.cookies.getAll(); },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('next', pathname);
    return NextResponse.redirect(loginUrl);
  }

  const { data: subscription } = await supabase
    .from('subscriptions')
    .select('status, trial_end')
    .eq('user_id', session.user.id)
    .single();

  if (!isSubscriptionActive(subscription)) {
    return NextResponse.redirect(new URL('/subscribe', request.url));
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimisation)
     * - favicon.ico, robots.txt, sitemap.xml
     */
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
};
