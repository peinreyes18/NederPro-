'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { getAttribution } from '@/lib/attribution';

/**
 * Pilot / seat request form for /teams.
 * Posts to /api/team-request, which emails the founder and stores the lead.
 * Attribution (?ref=company tracked link) is read from localStorage so the owner
 * email says which outreach target this came from.
 */

const SEAT_OPTIONS = ['10 (free pilot)', '25', '50', '100+', 'Not sure yet'];
const ORG_TYPES = ['Employer', 'Relocation agency', 'Recruitment agency', 'Expat centre or community', 'Other'];

const inputClass =
  'w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-primary placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent';

export default function TeamsRequestForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [error, setError] = useState('');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    setError('');

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get('name'),
      email: data.get('email'),
      company: data.get('company'),
      orgType: data.get('orgType'),
      seats: data.get('seats'),
      message: data.get('message'),
      // Honeypot: real users never fill this hidden field; bots often do.
      website: data.get('website'),
      attribution: getAttribution(),
    };

    try {
      const res = await fetch('/api/team-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || 'Something went wrong');
      }
      setStatus('done');
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
      setStatus('error');
    }
  }

  if (status === 'done') {
    return (
      <div className="rounded-lg border border-accent/40 bg-accent-light/30 p-5 text-sm text-primary">
        <p className="font-semibold mb-1">Thanks, we have your request.</p>
        <p className="text-muted">
          You will hear from Patricia within one working day with your codes or a quote. In the
          meantime, your team can already <Link href="/levels" className="text-accent hover:underline">preview every lesson</Link>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-4" noValidate>
      <div>
        <label htmlFor="t-name" className="block text-xs font-semibold text-muted mb-1">Your name</label>
        <input id="t-name" name="name" required maxLength={80} autoComplete="name" className={inputClass} />
      </div>
      <div>
        <label htmlFor="t-email" className="block text-xs font-semibold text-muted mb-1">Work email</label>
        <input id="t-email" name="email" type="email" required maxLength={254} autoComplete="email" className={inputClass} />
      </div>
      <div>
        <label htmlFor="t-company" className="block text-xs font-semibold text-muted mb-1">Organisation</label>
        <input id="t-company" name="company" required maxLength={120} autoComplete="organization" className={inputClass} />
      </div>
      <div>
        <label htmlFor="t-orgtype" className="block text-xs font-semibold text-muted mb-1">You are a…</label>
        <select id="t-orgtype" name="orgType" required defaultValue="" className={inputClass}>
          <option value="" disabled>Choose one</option>
          {ORG_TYPES.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="t-seats" className="block text-xs font-semibold text-muted mb-1">Seats</label>
        <select id="t-seats" name="seats" required defaultValue={SEAT_OPTIONS[0]} className={inputClass}>
          {SEAT_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="t-message" className="block text-xs font-semibold text-muted mb-1">Anything we should know? <span className="font-normal">(optional)</span></label>
        <textarea id="t-message" name="message" rows={3} maxLength={1000} className={inputClass}
          placeholder="Which offices, when you would like to start, other interface languages your team needs…" />
      </div>
      {/* Honeypot — hidden from sighted users, assistive tech and tab order; bots still fill it */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="t-website">Website</label>
        <input id="t-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {error && (
        <p className="sm:col-span-2 text-sm text-red-600 dark:text-red-400" role="alert">{error}</p>
      )}

      <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-3">
        <Button type="submit" size="lg" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Request seats'}
        </Button>
        <p className="text-xs text-muted">No account needed. We only use your details to reply.</p>
      </div>
    </form>
  );
}
