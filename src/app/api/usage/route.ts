import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { consume, getStatus, isUsageKind } from '@/lib/usage';

/**
 * Daily trial-usage endpoint.
 *
 *   GET  /api/usage            → today's caps + counts for the signed-in user
 *   POST /api/usage { kind }   → try to consume one unit of `kind`
 *
 * Only the client-driven content kinds ('exercise', 'mock_exam') are consumable
 * here. The AI kinds ('speaking', 'writing') are consumed server-side inside
 * their own routes, so they can't be drained or faked from the client.
 */

const CLIENT_CONSUMABLE = new Set(['exercise', 'mock_exam']);

async function getUserId(): Promise<string | null> {
  const cookieStore = await cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { getAll: () => cookieStore.getAll(), setAll: () => {} } }
  );
  const { data: { session } } = await supabase.auth.getSession();
  return session?.user.id ?? null;
}

export async function GET() {
  const userId = await getUserId();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const status = await getStatus(userId);
  return NextResponse.json(status);
}

export async function POST(request: NextRequest) {
  const userId = await getUserId();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  let kind: unknown;
  try {
    ({ kind } = await request.json());
  } catch {
    return NextResponse.json({ error: 'Invalid body' }, { status: 400 });
  }

  if (!isUsageKind(kind) || !CLIENT_CONSUMABLE.has(kind)) {
    return NextResponse.json({ error: 'Invalid kind' }, { status: 400 });
  }

  const result = await consume(userId, kind);
  // 200 with allowed:false when over the cap — the client branches on `allowed`.
  return NextResponse.json(result);
}
