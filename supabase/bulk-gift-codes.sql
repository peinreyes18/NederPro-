-- Bulk gift codes for B2B / team deals.
-- Run in the Supabase SQL editor (production). No app deploy needed:
-- /redeem already accepts any row in gift_codes with a future expires_at.
--
-- WHY expires_at is mandatory: redeem-gift/route.ts does
--   new Date(gift.expires_at) < new Date()  -> a NULL expires_at becomes 1970 = "expired".
-- WHY stripe_payment_intent gets a marker: the webhook always sets it, and the column may
--   be NOT NULL. A unique 'manual-<uuid>' value is safe either way.

-- 1) One-time: a column to group codes per customer, and a 4-char segment helper
--    using the same confusable-free alphabet as generateGiftCode() in the webhook.
alter table gift_codes add column if not exists company text;

create or replace function gift_seg() returns text
language sql volatile as $$
  select string_agg(
    substr('ABCDEFGHJKLMNPQRSTUVWXYZ23456789', 1 + floor(random() * 32)::int, 1), '')
  from generate_series(1, 4);
$$;

-- 2) Per deal: change the three values below (seat count, company label, buyer email).
--    Codes stay redeemable for 12 months; each redemption grants 1 year of access
--    (GIFT_DURATION_SECONDS in redeem-gift/route.ts).
insert into gift_codes (code, plan, duration_months, expires_at, company, purchased_by_email, stripe_payment_intent)
select
  'GIFT-' || gift_seg() || '-' || gift_seg() || '-' || gift_seg(),
  'yearly',
  12,
  now() + interval '12 months',
  'Settly pilot',            -- <- company label
  'hr@example.com',          -- <- buyer email (goes on the invoice)
  'manual-' || gen_random_uuid()
from generate_series(1, 10)  -- <- number of seats
returning code;

-- 3) Usage report for the buyer (paste into an email): redeemed vs unused per company.
select company,
       count(*)                      as seats,
       count(redeemed_at)            as redeemed,
       count(*) - count(redeemed_at) as unused
from gift_codes
where company is not null
group by company
order by company;

-- 4) Codes for one company, redeemed first.
select code, redeemed_at
from gift_codes
where company = 'Settly pilot'
order by redeemed_at nulls last, code;
