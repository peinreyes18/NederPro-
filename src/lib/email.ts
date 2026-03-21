import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = 'NederPro <hello@nederpro.com>';
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nederpro.com';

// ─── Shared HTML wrapper ──────────────────────────────────────────────────────

function wrap(body: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>NederPro</title>
</head>
<body style="margin:0;padding:0;background:#f5f7fa;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f7fa;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,0.06);">

          <!-- Header -->
          <tr>
            <td style="background:#2563eb;padding:24px 32px;">
              <p style="margin:0;font-size:20px;font-weight:800;color:#ffffff;letter-spacing:-0.3px;">
                <span style="color:#93c5fd;">Neder</span>Pro
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px;">
              ${body}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 32px;border-top:1px solid #e5e7eb;background:#f9fafb;">
              <p style="margin:0;font-size:12px;color:#9ca3af;line-height:1.6;">
                NederPro · Structured Dutch grammar for adults<br/>
                Questions? Reply to this email or contact <a href="mailto:nederprohelp@gmail.com" style="color:#6b7280;">nederprohelp@gmail.com</a><br/>
                <a href="${BASE_URL}/account" style="color:#6b7280;">Manage subscription</a> &nbsp;·&nbsp;
                <a href="${BASE_URL}/privacy" style="color:#6b7280;">Privacy Policy</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ─── Email: Welcome (trial started) ──────────────────────────────────────────

export async function sendWelcomeEmail({
  to,
  firstName,
  goal,
  level,
  trialEndDate,
}: {
  to: string;
  firstName?: string;
  goal?: string;
  level?: string;
  trialEndDate?: string;
}) {
  const name = firstName || 'there';
  const goalLabel = goal === 'inburgering'
    ? 'pass the Inburgeringsexamen'
    : goal === 'nt2'
    ? 'pass Staatsexamen NT2'
    : goal === 'work'
    ? 'communicate at work in Dutch'
    : 'handle daily life in Dutch';

  const startUrl = level
    ? `${BASE_URL}/levels/${level}`
    : `${BASE_URL}/levels`;

  const trialLine = trialEndDate
    ? `Your 7-day free trial runs until <strong>${trialEndDate}</strong>. No charge until then.`
    : `Your 7-day free trial has started. No charge until it ends.`;

  const html = wrap(`
    <h1 style="margin:0 0 8px;font-size:24px;font-weight:800;color:#111827;">Welcome to NederPro, ${name}! 🇳🇱</h1>
    <p style="margin:0 0 20px;font-size:15px;color:#6b7280;line-height:1.6;">${trialLine}</p>

    <div style="background:#eff6ff;border-radius:12px;padding:16px 20px;margin-bottom:24px;border-left:4px solid #2563eb;">
      <p style="margin:0;font-size:14px;color:#1e40af;font-weight:600;">Your goal: ${goalLabel}</p>
      ${level ? `<p style="margin:4px 0 0;font-size:13px;color:#3b82f6;">Starting level: ${level.toUpperCase()}</p>` : ''}
    </div>

    <p style="margin:0 0 16px;font-size:15px;color:#374151;line-height:1.6;">Here's what's waiting for you:</p>

    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
      ${[
        ['📚', '54 grammar topics', 'A0 through B2, clearly explained'],
        ['✏️', 'Interactive exercises', 'Fill-in, multiple choice, word order'],
        ['📋', 'Exam practice', '30 mock exam sets with full feedback'],
        ['🤖', 'AI writing feedback', 'Instant assessment on open answers'],
      ].map(([icon, title, desc]) => `
      <tr>
        <td style="padding:8px 0;vertical-align:top;width:32px;">
          <span style="font-size:18px;">${icon}</span>
        </td>
        <td style="padding:8px 0 8px 12px;vertical-align:top;">
          <p style="margin:0;font-size:14px;font-weight:600;color:#111827;">${title}</p>
          <p style="margin:2px 0 0;font-size:13px;color:#6b7280;">${desc}</p>
        </td>
      </tr>`).join('')}
    </table>

    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td>
          <a href="${startUrl}" style="display:inline-block;background:#2563eb;color:#ffffff;font-size:15px;font-weight:700;text-decoration:none;padding:14px 28px;border-radius:10px;">
            Start learning now →
          </a>
        </td>
      </tr>
    </table>

    <p style="margin:24px 0 0;font-size:13px;color:#9ca3af;line-height:1.6;">
      If you have any questions, just reply to this email — we read every message.
    </p>
  `);

  return resend.emails.send({
    from: FROM,
    to,
    subject: 'Your NederPro trial has started 🇳🇱',
    html,
  });
}

// ─── Email: Day 3 check-in ────────────────────────────────────────────────────

export async function sendDay3Email({
  to,
  firstName,
  goal,
  level,
}: {
  to: string;
  firstName?: string;
  goal?: string;
  level?: string;
}) {
  const name = firstName || 'there';
  const levelsUrl = level ? `${BASE_URL}/levels/${level}` : `${BASE_URL}/levels`;

  const examSection = (goal === 'inburgering' || goal === 'nt2')
    ? `<div style="background:#f0fdf4;border-radius:12px;padding:16px 20px;margin-bottom:24px;border-left:4px solid #16a34a;">
        <p style="margin:0;font-size:14px;color:#15803d;font-weight:600;">📋 Exam tip</p>
        <p style="margin:6px 0 0;font-size:13px;color:#166534;line-height:1.6;">
          ${goal === 'inburgering'
            ? `The Inburgeringsexamen requires A2 level. Once you're comfortable with A1, head to <a href="${BASE_URL}/levels/a2" style="color:#15803d;">A2 lessons</a> and try the <a href="${BASE_URL}/exams" style="color:#15803d;">mock exam sets</a>.`
            : `Staatsexamen NT2 targets B1/B2. Build your B1 foundation first — <a href="${BASE_URL}/levels/b1" style="color:#15803d;">start here</a>.`}
        </p>
      </div>`
    : '';

  const html = wrap(`
    <h1 style="margin:0 0 8px;font-size:22px;font-weight:800;color:#111827;">3 days in — how's it going, ${name}?</h1>
    <p style="margin:0 0 20px;font-size:15px;color:#6b7280;line-height:1.6;">
      You're a few days into your NederPro trial. Here are a few things worth trying if you haven't already:
    </p>

    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
      ${[
        ['🏋️', 'Do an exercise set', 'After reading a lesson, the exercises are where it really sticks. Try one today.', `${levelsUrl}`],
        ['📋', 'Try a mock exam', 'Even if you\'re not ready — it\'s a great way to see where you stand.', `${BASE_URL}/exams`],
        ['📖', 'Check the reference tables', 'Quick cheat sheets for verbs, articles, and more.', `${BASE_URL}/reference`],
      ].map(([icon, title, desc, url]) => `
      <tr>
        <td style="padding:10px 0;vertical-align:top;width:32px;">
          <span style="font-size:18px;">${icon}</span>
        </td>
        <td style="padding:10px 0 10px 12px;vertical-align:top;">
          <p style="margin:0;font-size:14px;font-weight:600;color:#111827;">${title}</p>
          <p style="margin:2px 0 4px;font-size:13px;color:#6b7280;line-height:1.5;">${desc}</p>
          <a href="${url}" style="font-size:13px;color:#2563eb;text-decoration:none;font-weight:500;">Open →</a>
        </td>
      </tr>`).join('')}
    </table>

    ${examSection}

    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td>
          <a href="${BASE_URL}/progress" style="display:inline-block;background:#2563eb;color:#ffffff;font-size:15px;font-weight:700;text-decoration:none;padding:14px 28px;border-radius:10px;">
            See my progress →
          </a>
        </td>
      </tr>
    </table>
  `);

  return resend.emails.send({
    from: FROM,
    to,
    subject: '3 days into your Dutch trial — a few things to try',
    html,
  });
}

// ─── Email: Trial expiry reminder (48h before) ───────────────────────────────

export async function sendTrialExpiryEmail({
  to,
  firstName,
  planPrice,
  planPeriod,
  trialEndDate,
}: {
  to: string;
  firstName?: string;
  planPrice?: string;
  planPeriod?: string;
  trialEndDate?: string;
}) {
  const name = firstName || 'there';
  const price = planPrice ?? '€3.49';
  const period = planPeriod ?? 'per month';
  const endDate = trialEndDate ?? 'in 2 days';

  const html = wrap(`
    <h1 style="margin:0 0 8px;font-size:22px;font-weight:800;color:#111827;">Your trial ends ${endDate} ⏰</h1>
    <p style="margin:0 0 20px;font-size:15px;color:#6b7280;line-height:1.6;">
      Hi ${name}, your NederPro free trial ends <strong>${endDate}</strong>. After that, your subscription continues at <strong>${price} ${period}</strong>.
    </p>

    <div style="background:#eff6ff;border-radius:12px;padding:16px 20px;margin-bottom:24px;">
      <p style="margin:0 0 12px;font-size:14px;font-weight:700;color:#1e40af;">What you keep with a subscription:</p>
      <ul style="margin:0;padding-left:20px;">
        ${[
          'All 54 grammar lessons — A0 through B2',
          '30 mock exam sets (Inburgeringsexamen & NT2)',
          'All interactive exercises and vocabulary drills',
          'AI writing feedback on every open answer',
          'Your full progress history',
        ].map(item => `<li style="font-size:13px;color:#1e40af;margin-bottom:6px;line-height:1.5;">${item}</li>`).join('')}
      </ul>
    </div>

    <p style="margin:0 0 20px;font-size:14px;color:#374151;line-height:1.6;">
      If you want to cancel before the trial ends, you can do so from your <a href="${BASE_URL}/account" style="color:#2563eb;">account page</a> — no charge will be made.
    </p>

    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
      <tr>
        <td>
          <a href="${BASE_URL}/levels" style="display:inline-block;background:#2563eb;color:#ffffff;font-size:15px;font-weight:700;text-decoration:none;padding:14px 28px;border-radius:10px;">
            Keep learning →
          </a>
        </td>
      </tr>
    </table>

    <p style="margin:0;font-size:13px;color:#9ca3af;line-height:1.6;">
      Questions about billing? Reply to this email and we'll sort it out.
    </p>
  `);

  return resend.emails.send({
    from: FROM,
    to,
    subject: `Your NederPro trial ends ${endDate} — what happens next`,
    html,
  });
}

// ─── Email: Signup nudge (signed up but hasn't started trial) ────────────────

export async function sendSignupNudgeEmail({
  to,
  firstName,
}: {
  to: string;
  firstName?: string;
}) {
  const name = firstName || 'there';

  const html = wrap(`
    <h1 style="margin:0 0 8px;font-size:22px;font-weight:800;color:#111827;">You're one step away, ${name} 🇳🇱</h1>
    <p style="margin:0 0 20px;font-size:15px;color:#6b7280;line-height:1.6;">
      You created a NederPro account yesterday — but you haven't started your free trial yet. Your 7-day trial is completely free. No charge until after the trial, and you can cancel any time.
    </p>

    <div style="background:#eff6ff;border-radius:12px;padding:16px 20px;margin-bottom:24px;">
      <p style="margin:0 0 10px;font-size:14px;font-weight:700;color:#1e40af;">What's waiting for you:</p>
      <ul style="margin:0;padding-left:20px;">
        ${[
          '54 grammar lessons across A0–B2',
          'Interactive exercises after every topic',
          'Mock exam sets for Inburgeringsexamen & NT2',
          'AI writing feedback on open answers',
          'Vocabulary practice with spaced repetition',
        ].map(item => `<li style="font-size:13px;color:#1e40af;margin-bottom:6px;line-height:1.5;">${item}</li>`).join('')}
      </ul>
    </div>

    <p style="margin:0 0 20px;font-size:14px;color:#374151;line-height:1.6;">
      Dutch is one of the easiest languages for English speakers. With 30 minutes a day, you can reach A2 in 6–9 months. The hardest part is just starting.
    </p>

    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
      <tr>
        <td>
          <a href="${BASE_URL}/subscribe" style="display:inline-block;background:#2563eb;color:#ffffff;font-size:15px;font-weight:700;text-decoration:none;padding:14px 28px;border-radius:10px;">
            Start my free trial →
          </a>
        </td>
      </tr>
    </table>

    <p style="margin:0;font-size:13px;color:#9ca3af;line-height:1.6;">
      Questions? Just reply to this email — we read every message.
    </p>
  `);

  return resend.emails.send({
    from: FROM,
    to,
    subject: 'Your NederPro trial is waiting — start free today',
    html,
  });
}

// ─── Email: Churn winback ─────────────────────────────────────────────────────

export async function sendWinbackEmail({
  to,
  firstName,
}: {
  to: string;
  firstName?: string;
}) {
  const name = firstName || 'there';

  const html = wrap(`
    <h1 style="margin:0 0 8px;font-size:22px;font-weight:800;color:#111827;">We'll miss you, ${name}</h1>
    <p style="margin:0 0 20px;font-size:15px;color:#6b7280;line-height:1.6;">
      Your NederPro subscription has been cancelled. Your account and progress are still saved — you can pick up where you left off any time.
    </p>

    <div style="background:#fefce8;border-radius:12px;padding:16px 20px;margin-bottom:24px;border-left:4px solid #ca8a04;">
      <p style="margin:0 0 6px;font-size:14px;font-weight:700;color:#92400e;">Still working on your Dutch?</p>
      <p style="margin:0;font-size:13px;color:#92400e;line-height:1.6;">
        All 54 grammar lessons remain free to read. Come back any time to restart your subscription — your progress will still be there.
      </p>
    </div>

    <p style="margin:0 0 16px;font-size:14px;color:#374151;line-height:1.6;">
      If you left because of the price, the cost of a subscription doesn't change but your Dutch does. Even 15 minutes a day compounds quickly.
    </p>

    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
      <tr>
        <td>
          <a href="${BASE_URL}/subscribe" style="display:inline-block;background:#2563eb;color:#ffffff;font-size:15px;font-weight:700;text-decoration:none;padding:14px 28px;border-radius:10px;">
            Reactivate my subscription →
          </a>
        </td>
      </tr>
    </table>

    <p style="margin:0 0 8px;font-size:13px;color:#374151;line-height:1.6;">Or keep reading free lessons:</p>
    <table cellpadding="0" cellspacing="0">
      <tr>
        ${[
          ['Browse lessons', `${BASE_URL}/levels`],
          ['Reference tables', `${BASE_URL}/reference`],
          ['Exam guides', `${BASE_URL}/exams`],
        ].map(([label, url]) =>
          `<td style="padding-right:12px;"><a href="${url}" style="font-size:13px;color:#2563eb;text-decoration:none;font-weight:500;">${label} →</a></td>`
        ).join('')}
      </tr>
    </table>

    <p style="margin:24px 0 0;font-size:13px;color:#9ca3af;line-height:1.6;">
      If you have feedback on why you left, we'd genuinely love to hear it — just reply to this email.
    </p>
  `);

  return resend.emails.send({
    from: FROM,
    to,
    subject: 'Your NederPro subscription has been cancelled',
    html,
  });
}
