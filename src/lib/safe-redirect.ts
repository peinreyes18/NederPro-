/**
 * Open-redirect guard.
 *
 * A `?next=` (or `?redirect=`) parameter is attacker-controlled: a phishing link
 * like `nederpro.com/login?next=https://evil.example` would, after a real login,
 * bounce the user off to the attacker's site. We only ever want to send users to
 * a page *inside* NederPro, so this reduces any incoming value to a safe internal
 * path and rejects everything else.
 *
 * Accepts:  "/levels", "/vocabulary/food?tab=1"
 * Rejects:  "https://evil.com", "//evil.com", "javascript:...", "\\evil.com",
 *           anything not starting with a single "/".
 */
export function safeInternalPath(
  value: string | null | undefined,
  fallback: string | null = null
): string | null {
  if (!value) return fallback;

  // Must be a root-relative path: exactly one leading slash.
  // "//host" and "/\host" are protocol-relative URLs → reject.
  if (!value.startsWith('/')) return fallback;
  if (value.startsWith('//')) return fallback;
  if (value.startsWith('/\\')) return fallback;

  // No scheme, no control characters, no backslashes that browsers may fold to "/".
  if (/[\x00-\x1f\\]/.test(value)) return fallback;
  if (/^\/[a-z][a-z0-9+.-]*:/i.test(value)) return fallback; // "/javascript:..." style

  return value;
}
