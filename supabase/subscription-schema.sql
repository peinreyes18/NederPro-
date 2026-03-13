-- Run this in the Supabase SQL editor

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

-- Enable Row Level Security
alter table public.subscriptions enable row level security;

-- Users can read their own subscription
create policy "Users can view own subscription"
  on public.subscriptions
  for select
  using (auth.uid() = user_id);

-- Service role can do everything (for webhooks)
-- No insert/update/delete policy for regular users — all writes go through the webhook via service role
