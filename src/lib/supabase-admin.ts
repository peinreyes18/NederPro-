import { createClient } from '@supabase/supabase-js';

/**
 * Supabase admin client — uses the service role key.
 * Server-side only. Never import this in client components.
 */
export function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}
