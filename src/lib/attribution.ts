/**
 * First-party marketing attribution.
 *
 * Google Analytics only sees visitors who accept the cookie banner, so on its
 * own it undercounts and can't tell us which community post produced a signup.
 * This records, in the visitor's own browser, where they FIRST arrived from
 * (utm_* parameters on a tracked link, or the referring site) and the page they
 * landed on. At signup and on the readiness test we send that along, so every
 * lead/signup email — and the Supabase user record — says where it came from.
 *
 * Tracked link format (any page works):
 *   https://nederpro.com/readiness-test?utm_source=facebook&utm_medium=group&utm_campaign=inburgering-nl
 * Short form also accepted: ?ref=reddit-learndutch
 *
 * First-touch wins, kept for 30 days. Stored in localStorage only (no cookie,
 * no third party) — it's strictly functional data about our own site.
 */

export interface Attribution {
  source: string;        // utm_source | ref | referrer host | 'direct'
  medium?: string;       // utm_medium
  campaign?: string;     // utm_campaign
  content?: string;      // utm_content (e.g. which post)
  landing: string;       // first path seen, e.g. "/readiness-test"
  referrer?: string;     // referring host if any
  at: string;            // ISO timestamp of first touch
}

const KEY = 'nederpro_attribution';
const TTL_MS = 30 * 24 * 60 * 60 * 1000;

function clean(v: string | null | undefined, max = 80): string | undefined {
  if (!v) return undefined;
  const s = v.trim().toLowerCase().replace(/[^a-z0-9._\-:/ ]/g, '').slice(0, max);
  return s || undefined;
}

/** Call once per page load (client). Records first touch if none is stored. */
export function captureAttribution(): void {
  if (typeof window === 'undefined') return;
  try {
    const p = new URLSearchParams(window.location.search);
    const source = clean(p.get('utm_source')) ?? clean(p.get('ref'));

    // First touch wins — EXCEPT that an explicit tracked link (utm_*/ref) beats an
    // earlier untagged visit ("direct" or a bare referrer). Otherwise someone who
    // typed the URL once and later clicked a community post would be counted
    // as "direct" and the post would get no credit.
    const existing = getAttribution();
    if (existing) {
      const existingIsTagged = existing.source !== 'direct' && existing.medium !== 'referral';
      if (!source || existingIsTagged) return;
    }
    let referrer: string | undefined;
    try {
      const r = document.referrer ? new URL(document.referrer) : null;
      if (r && r.host && r.host !== window.location.host) referrer = r.host.replace(/^www\./, '');
    } catch { /* ignore */ }

    // Nothing to attribute (typed URL, no params, no referrer) → record 'direct'
    // so a later visit with params doesn't get mistaken for first touch.
    const attr: Attribution = {
      source: source ?? referrer ?? 'direct',
      medium: clean(p.get('utm_medium')) ?? (source ? undefined : referrer ? 'referral' : undefined),
      campaign: clean(p.get('utm_campaign')),
      content: clean(p.get('utm_content')),
      landing: window.location.pathname.slice(0, 120),
      referrer,
      at: new Date().toISOString(),
    };
    localStorage.setItem(KEY, JSON.stringify(attr));
  } catch { /* localStorage may be unavailable */ }
}

/** The stored first-touch attribution, or null if none / expired. */
export function getAttribution(): Attribution | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const a = JSON.parse(raw) as Attribution;
    if (!a?.at || Date.now() - new Date(a.at).getTime() > TTL_MS) { localStorage.removeItem(KEY); return null; }
    return a;
  } catch { return null; }
}

/** One-line human summary for emails: "facebook / group / inburgering-nl → /readiness-test" */
export function describeAttribution(a: Partial<Attribution> | null | undefined): string {
  if (!a || !a.source) return 'unknown';
  const parts = [a.source, a.medium, a.campaign, a.content].filter(Boolean).join(' / ');
  return a.landing ? `${parts} → ${a.landing}` : parts;
}
