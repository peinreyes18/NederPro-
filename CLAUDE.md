# NederPro — Project Guide

NederPro is a subscription web app for learning Dutch, aimed at people preparing for
Dutch integration/citizenship exams (Inburgeringsexamen, Staatsexamen NT2) and at
professionals/daily-life learners. Grammar lessons are free to read; interactive
exercises, vocabulary practice, exam sets, AI writing/speaking feedback, and progress
tracking are behind a paid subscription with a 7-day free trial.

Solo-founded by Patricia (non-developer founder — keep explanations plain, prefer
working solutions over polish, and flag risky/billing changes before acting).

## Tech stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Supabase** — auth + Postgres (project ref `rnhhwovlxpfzywbjvrun`, name "NederPro", region eu-central-1)
- **Stripe** — subscriptions, trials, billing portal, gift codes
- **Resend** — transactional + lifecycle email
- **Anthropic SDK** — AI writing/speaking feedback (`ANTHROPIC_API_KEY`)
- **Capacitor** — wraps the web app for iOS/Android
- Hosted on **Vercel** (production domain `nederpro.com`)

## Commands

```bash
npm run dev      # local dev server
npm run build    # production build
npm run lint     # eslint
npx tsc --noEmit # typecheck (no test suite exists)
```

There is no automated test suite. Verify changes with `tsc --noEmit` and manual testing.

## Project structure

- `src/app/` — App Router pages + API routes
  - `api/stripe/*` — checkout, webhook, billing portal, cancel, gift flows
  - `api/writing-feedback`, `api/speaking`, `api/tts` — AI features
  - `api/cron/emails`, `api/admin/reengagement` — lifecycle email jobs
  - content pages: `levels`, `vocabulary`, `exams`, `reference`, `culture`, `history`, `blog`
- `src/content/` — all lesson/exercise/exam content as typed TS modules (a0–b2, exams, verbs)
- `src/components/` — UI, lesson, exercise, exam, vocabulary, progress components
- `src/contexts/AuthContext.tsx` — auth + subscription state, exposes `isSubscribed`
- `src/middleware.ts` — server-side route gating (the real paywall)
- `src/lib/` — `stripe.ts`, `supabase.ts`, `supabase-admin.ts`, `email.ts`, `analytics.ts`
- `supabase/*.sql` — schema reference (kept in sync manually; the live DB is source of truth)

## Auth & access control

Access is gated in two layers — keep them in agreement:

1. **`src/middleware.ts`** — server-side, authoritative. `isSubscriptionActive()` decides
   access to subscriber-only routes (exercises, practice, quizzes, individual exams,
   `/progress`, `/account`, speaking, mock-exam, etc.). Unauthenticated → `/login`;
   authenticated-but-no-access → `/subscribe`.
2. **`src/contexts/AuthContext.tsx`** — client-side `isSubscribed` for UI (gates,
   buttons). `SubscriptionGate.tsx` uses it to show paywall CTAs.

**Access rule (must match in both files):**
- `status === 'active'` → access.
- `status === 'trialing'` → access **only if** `has_payment_method === true` **and**
  `trial_end` is in the future.
- anything else (`canceled`, `past_due`, no row) → no access.

## Billing model (Stripe)

Plans: **Monthly €3.49** and **Yearly €34.99** (price IDs in env). 7-day free trial.

**Trial policy (important):** Trials **require a card up front** — collected via Stripe
Checkout. We do NOT offer no-card trials anymore. This stops the abuse where users
cancel and re-register for endless free trials. (The old `api/stripe/start-trial`
route that minted no-card trials is disabled and returns 410.)

Trial eligibility is decided server-side in `api/stripe/create-checkout`:
- First-time user (no `subscriptions` row) → checkout includes `trial_period_days: 7`.
- Returning user (previously canceled) → no trial, charged immediately.

`has_payment_method` (boolean on `subscriptions`) tracks whether a card is on file. It is
set by the Stripe webhook (`api/stripe/webhook`):
- `checkout.session.completed` / `customer.subscription.updated` → re-checked against Stripe.
- `payment_method.attached` → set to `true` (this is how an existing trial user who adds
  a card via the billing portal gets unblocked — make sure this event is enabled on the
  Stripe webhook endpoint).
- `verify-session` (post-checkout success page) also sets it to avoid a brief lockout
  before the webhook lands.

Existing trial users with no card are sent to `/subscribe`, which offers "Add a card to
keep your trial" → `api/stripe/subscribe-now` → Stripe billing portal (keeps remaining
trial days, no immediate charge).

Other Stripe flows: `cancel` (with cancellation reason), `portal` (manage billing),
`payment-method` (read card for account page), gift purchase + redeem (`gift_codes` table).

## Database (Supabase, public schema)

- **`subscriptions`** — one row per user (`unique(user_id)`). Columns: `user_id`,
  `stripe_customer_id`, `stripe_subscription_id`, `status`
  (`trialing|active|past_due|canceled|incomplete`), `plan` (`monthly|yearly`),
  `trial_end`, `current_period_end`, `cancellation_reason`, **`has_payment_method`**,
  `created_at`, `updated_at`. RLS: users can read their own row; all writes go through
  the service role (webhooks/server routes).
- **`user_progress`** — one row per user, `progress` JSONB blob (levels, stats, streaks,
  starting level, goal).
- **`gift_codes`** — purchased gift subscriptions (code, plan, duration, redeemed_by).

The local `supabase/*.sql` files are a reference snapshot and have drifted before — treat
the live DB (via Supabase) as source of truth. Use Supabase migrations for schema changes.

## Environment variables

Set in `.env.local` (local) and Vercel (production):

```
NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY
STRIPE_SECRET_KEY, NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY, STRIPE_WEBHOOK_SECRET
STRIPE_PRICE_ID_MONTHLY, STRIPE_PRICE_ID_YEARLY   (code references YEARLY)
ANTHROPIC_API_KEY, RESEND_API_KEY
NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_GA_MEASUREMENT_ID, CRON_SECRET
```

Note: local `.env.local` currently has `STRIPE_PRICE_ID_BIWEEKLY` instead of
`STRIPE_PRICE_ID_YEARLY` — the code uses `STRIPE_PRICE_ID_YEARLY`, so confirm the correct
yearly price ID is set (production Vercel likely has it). Worth reconciling.

## Email (Resend)

Owner notifications go to the founder on signup, subscribe, cancel, and gift sale.
Lifecycle emails: welcome, winback (on cancel), re-engagement, and cron-driven sends
(`api/cron/emails`, protected by `CRON_SECRET`). Templates live in `src/lib/email.ts`.

## Gotchas / conventions

- No-card trials are intentionally gone — don't reintroduce a trial path that skips
  card collection. Keep the access rule identical in `middleware.ts` and `AuthContext.tsx`.
- All DB writes from server code use the **admin (service role)** client; client code can
  only read its own rows (RLS).
- Webhook handlers must stay idempotent (they already guard against duplicate processing).
- Content is code: lessons/exercises/exams are typed TS modules under `src/content/`,
  loaded via `src/lib/content-loader.ts`.
