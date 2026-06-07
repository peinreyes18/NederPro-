import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SCENARIOS: Record<string, { name: string; role: string }> = {
  // Daily life
  shopping:     { name: 'At the supermarket',       role: 'supermarket employee' },
  cafe:         { name: 'At a café',                role: 'friendly barista' },
  restaurant:   { name: 'At a restaurant',          role: 'restaurant waiter' },
  pharmacy:     { name: 'At the pharmacy',          role: 'pharmacist' },
  hairsalon:    { name: 'At the hair salon',        role: 'hairdresser' },
  market:       { name: 'At the market',            role: 'market vendor selling fresh produce' },
  library:      { name: 'At the library',           role: 'librarian' },
  // Official & admin
  municipality: { name: 'At the municipality',      role: 'civil servant at the gemeente' },
  bank:         { name: 'At the bank',              role: 'bank employee' },
  phone:        { name: 'Phone call',               role: 'customer service agent' },
  postoffice:   { name: 'At the post office',       role: 'post office employee' },
  housing:      { name: 'Talking to the landlord',  role: 'landlord discussing the rental property' },
  // Work & education
  work:         { name: 'Job interview',            role: 'HR manager conducting a job interview' },
  school:       { name: 'Parent-teacher meeting',   role: 'school teacher discussing a student' },
  colleague:    { name: 'Chat with a colleague',    role: 'Dutch-speaking colleague at the office' },
  // Social
  neighbors:    { name: 'Talking to neighbors',     role: 'friendly Dutch neighbor' },
  party:        { name: 'At a birthday party',      role: 'friendly Dutch host at a birthday party' },
  sportsclub:   { name: 'Joining a sports club',    role: 'sports club receptionist' },
  // Travel & emergencies
  transport:    { name: 'Public transport',         role: 'NS train station employee' },
  doctor:       { name: 'At the doctor',            role: 'GP doctor at a Dutch huisartsenpraktijk' },
  dentist:      { name: 'At the dentist',           role: 'dentist assistant scheduling and discussing treatment' },
  airport:      { name: 'At the airport',           role: 'airline check-in employee at a Dutch airport' },
};

const rateLimitStore = new Map<string, { count: number; windowStart: number }>();
const RATE_LIMIT_MAX = 40;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;

function extractJSON(raw: string): { dutchResponse: string; translation: string; feedback: string } {
  const stripped = raw
    .replace(/^```(?:json)?\s*/im, '')
    .replace(/\s*```\s*$/im, '')
    .trim();
  try {
    return JSON.parse(stripped);
  } catch {
    const match = stripped.match(/\{[\s\S]*\}/);
    if (match) return JSON.parse(match[0]);
    throw new Error('No JSON found in response');
  }
}

export async function POST(request: NextRequest) {
  const cookieStore = await cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { getAll: () => cookieStore.getAll(), setAll: () => {} } }
  );
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const userId = session.user.id;
  const now = Date.now();
  const entry = rateLimitStore.get(userId);
  if (entry && now - entry.windowStart < RATE_LIMIT_WINDOW_MS) {
    if (entry.count >= RATE_LIMIT_MAX) {
      return NextResponse.json({ error: 'Rate limit reached. Try again in an hour.' }, { status: 429 });
    }
    entry.count++;
  } else {
    rateLimitStore.set(userId, { count: 1, windowStart: now });
  }

  const { scenario, level, messages, userTranscript } = await request.json();
  const scenarioInfo = SCENARIOS[scenario] ?? SCENARIOS.shopping;
  const isOpening = !messages || messages.length === 0;

  const systemPrompt = `You are a ${scenarioInfo.role} in a Dutch conversation with a language learner at CEFR level ${level}.

CRITICAL: Respond with ONLY a raw JSON object — no markdown, no code fences, no explanation outside the JSON.

JSON format (exact keys required):
{"dutchResponse":"...","translation":"...","feedback":"..."}

Rules for dutchResponse:
- Natural Dutch, max 2 short sentences, appropriate for level ${level}
- A1: very simple words, present tense only
- A2: basic past tense, simple sentences
- B1: modal verbs, varied tenses
- B2: formal register, complex structures

Rules for feedback — THIS IS THE MOST IMPORTANT PART:
- You are a Dutch grammar teacher. Your job is to catch mistakes, not to make the learner feel good.
- ALWAYS check the learner's Dutch for: wrong word order, wrong verb conjugation, wrong tense, wrong article (de/het), missing inversion after adverbs, incorrect prepositions, and unnatural phrasing.
- If there is ANY grammar or vocabulary error, you MUST point it out. Show the correct form.
- When there are multiple errors, format feedback as a numbered list: "1. [error + correction] 2. [error + correction]" — each item on its own numbered point.
- When there is only one error, write it as a single sentence without numbering.
- Keep each item short and specific: state what was wrong and what the correct form is.
- Never praise a sentence that contains errors. Never write "Uitstekend!" or "Perfect!" if there is a mistake.
- Only say the Dutch was correct if you have verified there are no errors. If correct, one short encouraging sentence.
- If this is the opening message (no learner input yet), write exactly: "Listen and try to reply in Dutch!"`;

  const convoMessages: { role: 'user' | 'assistant'; content: string }[] = isOpening
    ? [{
        role: 'user',
        content: `Start the "${scenarioInfo.name}" conversation as the ${scenarioInfo.role} at ${level} level. Give a natural Dutch opening line.`,
      }]
    : [
        ...(messages as { role: 'user' | 'assistant'; content: string }[]).slice(-8),
        {
          role: 'user',
          content: `The learner said in Dutch: "${userTranscript}"\n\nRespond as the ${scenarioInfo.role} and give feedback on their Dutch.`,
        },
      ];

  try {
    const response = await client.messages.create({
      model: 'claude-haiku-4-5',
      max_tokens: 350,
      system: systemPrompt,
      messages: convoMessages,
    });

    const raw = response.content[0].type === 'text' ? response.content[0].text.trim() : '';

    let result: { dutchResponse: string; translation: string; feedback: string };
    try {
      result = extractJSON(raw);
    } catch (parseErr) {
      console.error('JSON parse failed. Raw response:', raw, parseErr);
      return NextResponse.json({ error: 'Failed to generate response.' }, { status: 500 });
    }

    if (!result.dutchResponse || !result.translation) {
      console.error('Missing keys in response:', result);
      return NextResponse.json({ error: 'Failed to generate response.' }, { status: 500 });
    }

    return NextResponse.json(result);
  } catch (err) {
    console.error('Speaking API error:', err);
    return NextResponse.json({ error: 'Failed to generate response.' }, { status: 500 });
  }
}
