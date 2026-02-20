import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export interface WritingFeedbackRequest {
  examLevel: string;         // e.g. "A2", "B1", "B2"
  examType: string;          // e.g. "inburgering-a2"
  taskPrompt: string;        // the writing task prompt shown to the user
  taskContext: string;       // the situation/context text
  taskGuidelines: string[];  // bullet-point guidelines
  sampleResponse: string;    // the model answer
  userResponse: string;      // what the user wrote
  keyPhrases: string[];      // expected key phrases
}

export interface WritingFeedbackResponse {
  overallScore: number;       // 0–100
  grade: 'excellent' | 'good' | 'adequate' | 'needs-improvement';
  summary: string;            // 1-2 sentence overall verdict
  strengths: string[];        // what the user did well (2–3 points)
  improvements: string[];     // specific things to fix (2–3 points)
  correctedExcerpt?: string;  // a short corrected version of a problematic sentence (optional)
  cefrComment: string;        // how this response reflects their CEFR level
}

function buildPrompt(req: WritingFeedbackRequest): string {
  return `You are an expert Dutch language examiner assessing a learner's written response for the ${req.examType} exam (CEFR level ${req.examLevel}).

## Writing Task
**Prompt:** ${req.taskPrompt}

**Situation/Context:** ${req.taskContext}

**Guidelines the student was given:**
${req.taskGuidelines.map((g, i) => `${i + 1}. ${g}`).join('\n')}

**Expected key phrases:** ${req.keyPhrases.length > 0 ? req.keyPhrases.join(', ') : 'none specified'}

**Model answer (for reference):**
${req.sampleResponse}

## Student's Response
${req.userResponse || '(no response written)'}

## Your Task
Assess the student's Dutch writing. Respond ONLY with valid JSON matching this exact structure — no markdown, no explanation outside the JSON:

{
  "overallScore": <integer 0-100>,
  "grade": <"excellent" | "good" | "adequate" | "needs-improvement">,
  "summary": "<1–2 sentence overall verdict in English>",
  "strengths": ["<strength 1>", "<strength 2>"],
  "improvements": ["<specific improvement 1>", "<specific improvement 2>"],
  "correctedExcerpt": "<take one problematic sentence from their response and show the corrected Dutch version, prefixed with the original. Format: 'Original: ... → Corrected: ...' Leave empty string if no corrections needed>",
  "cefrComment": "<one sentence on how this writing reflects their ${req.examLevel} level>"
}

Scoring guide:
- 85–100: Excellent — task fully completed, natural Dutch, minor or no errors
- 70–84: Good — task mostly completed, mostly correct Dutch, small errors
- 55–69: Adequate — task partially completed or noticeable errors but understandable
- 0–54: Needs improvement — task not completed, major errors, or response too short

Be honest but constructive. Write all feedback in English. Any Dutch examples should be clearly labelled.`;
}

export async function POST(request: NextRequest) {
  try {
    const body: WritingFeedbackRequest = await request.json();

    if (!body.userResponse?.trim()) {
      return NextResponse.json(
        { error: 'No response provided.' },
        { status: 400 }
      );
    }

    const message = await client.messages.create({
      model: 'claude-haiku-4-5',
      max_tokens: 1024,
      messages: [
        {
          role: 'user',
          content: buildPrompt(body),
        },
      ],
    });

    const raw = message.content[0].type === 'text' ? message.content[0].text : '';

    // Strip any accidental markdown code fences
    const cleaned = raw.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '').trim();

    const feedback: WritingFeedbackResponse = JSON.parse(cleaned);

    return NextResponse.json(feedback);
  } catch (err) {
    console.error('Writing feedback error:', err);
    return NextResponse.json(
      { error: 'Failed to generate feedback. Please try again.' },
      { status: 500 }
    );
  }
}
