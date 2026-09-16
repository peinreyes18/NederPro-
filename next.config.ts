import type { NextConfig } from "next";

// Standard browser security headers. No Content-Security-Policy yet — that needs
// careful testing against Stripe, Supabase, Google Analytics and the Capacitor apps.
const securityHeaders = [
  // Stop browsers guessing content types (blocks some XSS tricks)
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Don't let other sites put NederPro inside an <iframe> (clickjacking)
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Only send the origin (not the full URL) when linking out to other sites
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Microphone is needed for speaking practice; block camera/geolocation.
  { key: "Permissions-Policy", value: "camera=(), geolocation=(), microphone=(self)" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
