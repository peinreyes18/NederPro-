import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next') ?? '/progress';

  if (code) {
    const cookieStore = await cookies();
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll();
          },
          setAll(cookiesToSet) {
            try {
              cookiesToSet.forEach(({ name, value, options }) =>
                cookieStore.set(name, value, options)
              );
            } catch {
              // Called from a Server Component — can be ignored
            }
          },
        },
      }
    );

    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      // Password reset links carry next=/reset-password — always honour that
      if (next === '/reset-password') {
        return NextResponse.redirect(`${origin}/reset-password`);
      }

      // Check if this user has completed onboarding yet
      const { data: { user } } = await supabase.auth.getUser();
      const onboardingDone = user?.user_metadata?.onboarding_completed === true;

      if (!onboardingDone) {
        // First-time login after email confirmation → onboarding wizard
        return NextResponse.redirect(`${origin}/onboarding`);
      }

      // Returning user — send to intended destination
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // If something went wrong, send them to login with an error message
  return NextResponse.redirect(`${origin}/login?error=confirmation_failed`);
}
