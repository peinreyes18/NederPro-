-- Leads captured by the free readiness test (/readiness-test).
-- Run once in the Supabase SQL editor. The API route writes here when the table
-- exists and silently skips when it doesn't (the results email is sent either way).

create table if not exists public.leads (
  id            uuid primary key default gen_random_uuid(),
  email         text not null,
  source        text not null default 'readiness-test',
  score_pct     integer,
  verdict       text,
  start_level   text,
  -- first-touch attribution (tracked links: utm_source / utm_medium / utm_campaign)
  utm_source    text,
  utm_medium    text,
  utm_campaign  text,
  utm_content   text,
  landing_path  text,
  created_at    timestamptz not null default now()
);

create index if not exists leads_email_idx on public.leads (lower(email));

-- Only the service role (server routes) may touch this table.
alter table public.leads enable row level security;
