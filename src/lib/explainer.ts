import type { Topic, LessonSection, ExampleSentence } from '@/content/types';

/**
 * Auto-generated "explainer" slides.
 *
 * NederPro has no recorded videos, and producing 69 of them is weeks of work.
 * Instead we build a short, story-style explainer for EVERY topic directly from
 * the lesson content that already exists (rules, examples, common mistakes),
 * and play it in <ExplainerPlayer> with the Dutch read aloud. Zero production
 * effort, always in sync with the lesson, and it upgrades to the Google voice
 * automatically once GOOGLE_CLOUD_TTS_API_KEY is configured.
 */

export type ExplainerSlide =
  | { kind: 'title'; title: string; subtitle?: string; level: string }
  | { kind: 'rule'; title?: string; rule: string }
  | { kind: 'example'; dutch: string; english: string; highlight?: string | string[]; note?: string; speak: string }
  | { kind: 'table'; title?: string; headers: string[]; rows: string[][] }
  | { kind: 'mistake'; incorrect: string; correct: string; explanation: string; speak: string }
  | { kind: 'end'; title: string; exercisesHref: string };

const MAX_RULES = 3;
const MAX_EXAMPLES = 4;
const MAX_MISTAKES = 2;
const MAX_TABLE_ROWS = 5;

/**
 * Sections the explainer may use. `limit` = how many leading sections (single-
 * lesson topics) or leading units (multi-unit topics) are FREE on this page.
 * On gated levels (A2/B1/B2) the topic page shows only the first half of the
 * lesson to non-subscribers, so the explainer must not reveal the rest.
 */
function allSections(topic: Topic, limit?: number): LessonSection[] {
  if (topic.lesson) return topic.lesson.sections.slice(0, limit ?? topic.lesson.sections.length);
  const units = topic.lessons ?? [];
  return units.slice(0, limit ?? units.length).flatMap((u) => u.sections);
}

/** Trim a long explanation to a sentence or two so it fits one slide. */
function firstSentences(text: string, max = 180): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  const end = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('! '), cut.lastIndexOf('? '));
  return end > 60 ? cut.slice(0, end + 1) : cut.replace(/\s+\S*$/, '') + '…';
}

export function buildExplainerSlides(
  topic: Topic,
  levelLabel: string,
  exercisesHref: string,
  /** Number of free leading sections/units to draw from (gated levels). Omit = whole lesson. */
  freeLimit?: number
): ExplainerSlide[] {
  const slides: ExplainerSlide[] = [
    { kind: 'title', title: topic.title, subtitle: topic.subtitle, level: levelLabel },
  ];

  let rules = 0;
  let examples = 0;
  let mistakes = 0;
  let tableDone = false;

  for (const s of allSections(topic, freeLimit)) {
    switch (s.type) {
      case 'grammar-rule':
        if (rules < MAX_RULES) {
          slides.push({ kind: 'rule', title: s.title, rule: firstSentences(s.rule) });
          rules++;
        }
        break;
      case 'grammar-table':
        if (!tableDone && s.rows.length > 0) {
          slides.push({ kind: 'table', title: s.title, headers: s.headers, rows: s.rows.slice(0, MAX_TABLE_ROWS) });
          tableDone = true;
        }
        break;
      case 'examples':
      case 'workplace-context':
        for (const ex of (s.examples as ExampleSentence[])) {
          if (examples >= MAX_EXAMPLES) break;
          slides.push({
            kind: 'example',
            dutch: ex.dutch,
            english: ex.english,
            highlight: ex.highlight,
            note: ex.note,
            speak: ex.dutch,
          });
          examples++;
        }
        break;
      case 'common-mistakes':
        for (const m of s.mistakes) {
          if (mistakes >= MAX_MISTAKES) break;
          slides.push({
            kind: 'mistake',
            incorrect: m.incorrect,
            correct: m.correct,
            explanation: firstSentences(m.explanation, 140),
            speak: m.correct,
          });
          mistakes++;
        }
        break;
      default:
        break;
    }
  }

  slides.push({ kind: 'end', title: topic.title, exercisesHref });
  return slides;
}

/** Rough on-screen time for a slide, in ms (spoken slides also wait for speech). */
export function slideDurationMs(slide: ExplainerSlide): number {
  switch (slide.kind) {
    case 'title': return 3500;
    case 'end': return 6000;
    case 'rule': return Math.min(9000, 2500 + slide.rule.length * 45);
    case 'table': return Math.min(10000, 4000 + slide.rows.length * 900);
    case 'example': return Math.min(8000, 3000 + (slide.english.length + (slide.note?.length ?? 0)) * 30);
    case 'mistake': return Math.min(9000, 3500 + slide.explanation.length * 35);
  }
}
