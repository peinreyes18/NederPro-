'use server';

import { createServerClient } from '@supabase/ssr';
import { createClient as createAdminClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';
import Stripe from 'stripe';

export async function deleteAccount(): Promise<{ error: string | null }> {
  const cookieStore = await cookies();

  // Regular client to get the current session / user ID
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
            // Ignore in Server Components
          }
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: 'Not authenticated.' };
  }

  // Admin client (service role) — never exposed to the browser
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceRoleKey) {
    return { error: 'Server configuration error. Please contact support.' };
  }

  const adminSupabase = createAdminClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    serviceRoleKey,
    { auth: { autoRefreshToken: false, persistSession: false } }
  );

  // Cancel any active Stripe subscription before deleting the user.
  // Without this, the user would keep getting billed after deletion because
  // the DB row cascades away but Stripe has no knowledge of the deletion.
  const { data: sub } = await adminSupabase
    .from('subscriptions')
    .select('stripe_subscription_id, status')
    .eq('user_id', user.id)
    .maybeSingle();

  if (sub?.stripe_subscription_id && (sub.status === 'active' || sub.status === 'trialing' || sub.status === 'past_due')) {
    try {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
      await stripe.subscriptions.cancel(sub.stripe_subscription_id);
    } catch {
      // If Stripe cancel fails (e.g. already canceled), proceed anyway
    }
  }

  const { error } = await adminSupabase.auth.admin.deleteUser(user.id);

  if (error) {
    return { error: error.message };
  }

  // Sign out the session on the regular client too
  await supabase.auth.signOut();

  return { error: null };
}
