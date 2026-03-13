# Subscription Implementation Plan — NederPro

## Overview
Add a €4.49/month subscription (via Stripe) with a 7-day free trial. Everything requires a subscription. The home page (/) remains public as a marketing/landing page.

---

## Architecture

### Flow
1. User visits site → sees public home page
2. User signs up → account created, 7-day trial starts automatically
3. After trial, user is redirected to `/subscribe` to enter payment details
4. Stripe handles checkout → webhook confirms subscription → user gets access
5. Subscription stored in Supabase `subscriptions` table

### Subscription Status States
- `trialing` — within 7-day trial window (full access)
- `active` — paying subscriber (full access)
- `past_due` — payment failed, grace period
- `canceled` / no row — no access → redirect to `/subscribe`

---

## Files to Create / Modify

### NEW Files

#### 1. `src/app/api/stripe/webhook/route.ts`
- Handles Stripe webhook events
- Events: `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`
- Updates `subscriptions` table in Supabase

#### 2. `src/app/api/stripe/create-checkout/route.ts`
- Creates a Stripe Checkout Session
- Price: €4.49/month, 7-day trial
- Returns `{ url }` for redirect

#### 3. `src/app/api/stripe/portal/route.ts`
- Creates a Stripe Customer Portal session
- Lets users manage/cancel their subscription

#### 4. `src/app/subscribe/page.tsx`
- "Start your 7-day free trial" page
- Calls `/api/stripe/create-checkout` → redirects to Stripe Checkout
- Shown when: logged in but no active subscription

#### 5. `src/app/subscribe/success/page.tsx`
- Post-checkout success page
- "You're all set!" message, link to /levels

#### 6. `src/app/account/page.tsx`
- Shows subscription status, billing date, "Manage subscription" button (Stripe Portal)

#### 7. `src/middleware.ts`
- Protects all routes except: `/`, `/login`, `/signup`, `/auth/callback`, `/subscribe`, `/api/stripe/*`
- Logic:
  1. Not logged in → redirect to `/login`
  2. Logged in but no active/trialing subscription → redirect to `/subscribe`
  3. Logged in + active/trialing → allow through

#### 8. `src/hooks/useSubscription.ts`
- Client-side hook to check subscription status from Supabase
- Returns `{ status, isActive, isTrialing, trialEndsAt, isLoading }`

#### 9. `src/lib/stripe.ts`
- Stripe SDK initialisation (server-side only)

#### 10. `supabase/subscription-schema.sql`
- New table `subscriptions` with RLS policies

### MODIFIED Files

#### `src/contexts/AuthContext.tsx`
- Add `subscription` state + `isSubscribed` boolean to context
- Expose via context so components can check status

#### `src/components/layout/Header.tsx`
- Add "Account" link (to `/account`) when logged in
- Change "Sign in" CTA to "Start free trial" linking to `/signup`

#### `src/app/signup/page.tsx`
- Update description: "Start your 7-day free trial — no credit card required"
- After signup success, message: "Check your email, then start your trial"

#### `src/app/page.tsx` (home page)
- Add pricing section: "€4.49/month · 7-day free trial · Cancel anytime"
- Change CTAs to point to `/signup` with trial framing

#### `.env.local` (user adds manually)
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `STRIPE_PRICE_ID` (the €4.49/month price created in Stripe dashboard)
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`

---

## Database Schema Addition

```sql
create table public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  stripe_customer_id text unique,
  stripe_subscription_id text unique,
  status text not null default 'trialing',
  -- status values: trialing | active | past_due | canceled | incomplete
  trial_end timestamptz,
  current_period_end timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(user_id)
);
-- RLS: users read own row; service_role writes
```

---

## Middleware Logic (pseudocode)

```
PUBLIC_PATHS = ['/', '/login', '/signup', '/auth/callback', '/subscribe', '/api/stripe/...']

if path is public → pass through
if no session → redirect to /login?next=<path>
if session exists:
  fetch subscription from Supabase (server-side client)
  if status in ['active', 'trialing'] → pass through
  else → redirect to /subscribe
```

---

## Stripe Setup (manual steps for user)
1. Create Stripe account at stripe.com
2. Create a Product: "NederPro Subscription"
3. Create a Price: €4.49/month recurring
4. Copy Price ID → `STRIPE_PRICE_ID` in .env.local
5. Add webhook endpoint: `https://yourdomain.com/api/stripe/webhook`
   - Events to listen: `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`
6. Copy Webhook Secret → `STRIPE_WEBHOOK_SECRET`

---

## Key Design Decisions
- Trial is tracked in Stripe (not custom logic) — Stripe handles expiry automatically
- Webhook is the source of truth — never trust client-side subscription status for access
- Middleware uses Supabase SSR client (server-side) to check subscription — fast, no client round-trip
- No credit card required at signup — card only needed when starting checkout (Stripe handles 7-day trial)
- Stripe Customer Portal handles all billing management (cancel, update card, view invoices)
