import type { NextConfig } from "next";

// ── Supabase project origin (used in the Content-Security-Policy connect-src) ──
// Derived from the public URL so it stays correct if the project ever changes.
const SUPABASE_ORIGIN = (
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://rnhhwovlxpfzywbjvrun.supabase.co"
).replace(/\/$/, "");
const SUPABASE_WS = SUPABASE_ORIGIN.replace(/^https/, "wss");

/**
 * Content-Security-Policy — a whitelist of where the browser may load code,
 * styles, images and data from. It's the main defence against cross-site
 * scripting (XSS): even if malicious markup got onto a page, the browser would
 * refuse to run a script from an origin that isn't listed here.
 *
 * What NederPro actually talks to:
 *   - self ......................... its own pages and API routes
 *   - Google Analytics / Tag Manager  (the only external scripts)
 *   - Supabase ..................... auth + database (fetch + realtime websocket)
 * Fonts are self-hosted by next/font, and Stripe is redirect-based (no embedded
 * Stripe.js), so neither needs an entry. 'unsafe-inline' is required for the
 * small inline analytics/theme/JSON-LD scripts and Tailwind's inline styles.
 */
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://www.googletagmanager.com https://www.google-analytics.com",
  "font-src 'self' data:",
  // Audio the page builds itself (server TTS MP3s and the iOS unlock clip are
  // played from blob:/data: URLs). Without this the browser blocks the owl's voice.
  "media-src 'self' blob: data:",
  `connect-src 'self' ${SUPABASE_ORIGIN} ${SUPABASE_WS} https://www.google-analytics.com https://region1.google-analytics.com https://www.googletagmanager.com`,
  "frame-src 'self'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  // The XSS whitelist described above.
  { key: "Content-Security-Policy", value: csp },
  // Stop browsers guessing content types (blocks some injection tricks).
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Don't let other sites put NederPro inside an <iframe> (clickjacking).
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Only send the origin (not the full URL) when linking out to other sites.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Microphone is needed for speaking practice; block camera/geolocation/payment.
  { key: "Permissions-Policy", value: "camera=(), geolocation=(), microphone=(self), payment=()" },
  // Force HTTPS for two years, including subdomains (defence in depth; Vercel
  // already sends this, but pinning it here keeps it under our control).
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
  // Isolate this origin from cross-origin popups it opens.
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  // Don't leak the framework version in response headers.
  poweredByHeader: false,
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
