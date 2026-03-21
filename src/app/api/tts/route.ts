import { NextRequest, NextResponse } from 'next/server';

// Server-side TTS using Google Cloud TTS.
// Set GOOGLE_CLOUD_TTS_API_KEY in your Vercel env vars to enable.
// Without it, the client falls back to the Web Speech API.
//
// Google Cloud TTS docs: https://cloud.google.com/text-to-speech/docs/reference/rest
// Free tier: 4 million characters/month for standard voices
// Neural voices ("nl-NL-Wavenet-*") are charged after 1M chars/month free

const GOOGLE_TTS_KEY = process.env.GOOGLE_CLOUD_TTS_API_KEY;
const CACHE: Map<string, Buffer> = new Map();

export async function GET(request: NextRequest) {
  if (!GOOGLE_TTS_KEY) {
    return NextResponse.json({ error: 'TTS not configured' }, { status: 501 });
  }

  const text = request.nextUrl.searchParams.get('text');
  if (!text || text.length > 300) {
    return NextResponse.json({ error: 'Invalid text' }, { status: 400 });
  }

  const cacheKey = text.toLowerCase().trim();
  if (CACHE.has(cacheKey)) {
    const cached = CACHE.get(cacheKey)!;
    return new NextResponse(cached, {
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
    const audioBuffer = Buffer.from(audioContent, 'base64');

    // Cache in-memory (resets on server restart)
    if (CACHE.size < 1000) CACHE.set(cacheKey, audioBuffer);

    return new NextResponse(audioBuffer, {
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
