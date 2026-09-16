import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

// Server-side TTS using Google Cloud Text-to-Speech — gives the owl a real Dutch
// voice instead of whatever the learner's phone happens to have.
//
// Set GOOGLE_CLOUD_TTS_API_KEY in Vercel to enable. Without it this answers 501
// and the speaking page falls back to the browser's Web Speech voice.
//
// Docs: https://cloud.google.com/text-to-speech/docs/reference/rest
// Free tier: 1M characters/month for WaveNet voices (≈ 20,000 owl replies);
// about €14 per further million. Responses are cached in memory and at the CDN.
//
// Signed-in users only — this endpoint spends real quota.

const GOOGLE_TTS_KEY = process.env.GOOGLE_CLOUD_TTS_API_KEY;
const CACHE: Map<string, ArrayBuffer> = new Map();

export async function GET(request: NextRequest) {
  if (!GOOGLE_TTS_KEY) {
    return NextResponse.json({ error: 'TTS not configured' }, { status: 501 });
  }

  const cookieStore = await cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { getAll: () => cookieStore.getAll(), setAll: () => {} } }
  );
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const text = request.nextUrl.searchParams.get('text');
  if (!text || text.length > 300) {
    return NextResponse.json({ error: 'Invalid text' }, { status: 400 });
  }

  const cacheKey = text.toLowerCase().trim();
  if (CACHE.has(cacheKey)) {
    const cached = CACHE.get(cacheKey)!;
    return new NextResponse(new Blob([cached], { type: 'audio/mpeg' }), {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Cache-Control': 'public, max-age=86400',
      },
    });
  }

  try {
    const res = await fetch(
      `https://texttospeech.googleapis.com/v1/text:synthesize?key=${GOOGLE_TTS_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          input: { text },
          voice: {
            languageCode: 'nl-NL',
            name: 'nl-NL-Wavenet-D', // Natural Dutch male voice
            ssmlGender: 'MALE',
          },
          audioConfig: {
            audioEncoding: 'MP3',
            speakingRate: 0.9,
          },
        }),
      }
    );

    if (!res.ok) {
      const err = await res.json();
      console.error('Google TTS error:', err);
      return NextResponse.json({ error: 'TTS request failed' }, { status: 500 });
    }

    const { audioContent } = await res.json();
    const audioBuffer = Uint8Array.from(atob(audioContent), (c) => c.charCodeAt(0)).buffer as ArrayBuffer;

    // Cache in-memory (resets on server restart)
    if (CACHE.size < 1000) CACHE.set(cacheKey, audioBuffer);

    return new NextResponse(new Blob([audioBuffer], { type: 'audio/mpeg' }), {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Cache-Control': 'public, max-age=86400',
      },
    });
  } catch (err) {
    console.error('TTS error:', err);
    return NextResponse.json({ error: 'TTS failed' }, { status: 500 });
  }
}
