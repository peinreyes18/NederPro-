'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase';
import { useAuth } from '@/contexts/AuthContext';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

// ── Types ──────────────────────────────────────────────────────────────────────

type Goal = {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
};

type LevelOption = {
  id: string;
  short: string;
  name: string;
  description: string;
  hint: string;
};

// ── Data ───────────────────────────────────────────────────────────────────────

const GOALS: Goal[] = [
  {
    id: 'inburgering',
    emoji: '🏛️',
    title: 'Pass the Inburgeringsexamen',
    subtitle: 'Required for residency in the Netherlands',
  },
  {
    id: 'nt2',
    emoji: '🎓',
    title: 'Pass Staatsexamen NT2',
    subtitle: 'For higher education or professional certification',
  },
  {
    id: 'work',
    emoji: '💼',
    title: 'Communicate at work',
    subtitle: 'Emails, meetings, and colleagues in Dutch',
  },
  {
    id: 'daily',
    emoji: '🛒',
    title: 'Handle daily life',
    subtitle: 'Shopping, appointments, and conversations',
  },
];

const LEVELS: LevelOption[] = [
  {
    id: 'a0',
    short: 'A0',
    name: 'Complete beginner',
    description: 'I know almost no Dutch yet.',
    hint: 'Start from the very beginning — alphabet, greetings, numbers.',
  },
  {
    id: 'a1',
    short: 'A1',
    name: 'Beginner',
    description: 'I know a few words and basic phrases.',
    hint: 'Build your first grammar foundations: verbs, articles, word order.',
  },
  {
    id: 'a2',
    short: 'A2',
    name: 'Elementary',
    description: 'I can handle simple conversations.',
    hint: 'Expand with perfect tense, modal verbs, and formal writing.',
  },
  {
    id: 'b1',
    short: 'B1',
    name: 'Intermediate',
    description: 'I understand most everyday Dutch.',
    hint: 'Tackle complex sentences, passive voice, and Staatsexamen NT2 I prep.',
  },
  {
    id: 'b2',
    short: 'B2',
    name: 'Upper-intermediate',
    description: 'I can express myself fluently.',
    hint: 'Advanced grammar, academic writing, and NT2 II exam preparation.',
  },
];

// ── Step components ────────────────────────────────────────────────────────────

function StepGoal({
  value,
  onChange,
}: {
  value: string | null;
  onChange: (id: string) => void;
}) {
  return (
    <div className="space-y-3">
      {GOALS.map((goal) => (
        <button
          key={goal.id}
          type="button"
          onClick={() => onChange(goal.id)}
          className={cn(
            'w-full flex items-center gap-4 px-4 py-3.5 rounded-xl border text-left transition-all duration-150',
            value === goal.id
              ? 'border-accent bg-accent-light ring-2 ring-accent/30'
              : 'border-border bg-background hover:bg-surface hover:border-accent/40'
          )}
        >
          <span className="text-2xl flex-shrink-0">{goal.emoji}</span>
          <div>
            <p className="font-semibold text-primary text-sm">{goal.title}</p>
            <p className="text-xs text-muted mt-0.5">{goal.subtitle}</p>
          </div>
          {value === goal.id && (
            <span className="ml-auto flex-shrink-0 w-5 h-5 rounded-full bg-accent flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </span>
          )}
        </button>
      ))}
    </div>
  );
}

function StepLevel({
  value,
  onChange,
}: {
  value: string | null;
  onChange: (id: string) => void;
}) {
  return (
    <div className="space-y-3">
      {LEVELS.map((level) => (
        <button
          key={level.id}
          type="button"
          onClick={() => onChange(level.id)}
          className={cn(
            'w-full flex items-start gap-4 px-4 py-3.5 rounded-xl border text-left transition-all duration-150',
            value === level.id
              ? 'border-accent bg-accent-light ring-2 ring-accent/30'
              : 'border-border bg-background hover:bg-surface hover:border-accent/40'
          )}
        >
          <span
            className={cn(
              'flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-extrabold text-sm',
              value === level.id
                ? 'bg-accent text-white'
                : 'bg-surface text-accent border border-border'
            )}
          >
            {level.short}
          </span>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-primary text-sm">{level.name}</p>
            <p className="text-xs text-muted mt-0.5">{level.description}</p>
            {value === level.id && (
              <p className="text-xs text-accent mt-1.5 font-medium">{level.hint}</p>
            )}
          </div>
          {value === level.id && (
            <span className="ml-auto flex-shrink-0 w-5 h-5 rounded-full bg-accent flex items-center justify-center mt-0.5">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </span>
          )}
        </button>
      ))}
    </div>
  );
}

function StepDone({ goal, level }: { goal: string; level: string }) {
  const goalObj = GOALS.find((g) => g.id === goal);
  const levelObj = LEVELS.find((l) => l.id === level);
  return (
    <div className="text-center py-4">
      <div className="w-16 h-16 rounded-full bg-success-light flex items-center justify-center mx-auto mb-5">
        <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h2 className="text-xl font-bold text-primary mb-2">You&apos;re all set!</h2>
      <p className="text-sm text-muted mb-6 max-w-xs mx-auto">
        Your journey starts at{' '}
        <strong className="text-primary">{levelObj?.short} — {levelObj?.name}</strong>
        {' '}with the goal to{' '}
        <strong className="text-primary">{goalObj?.title.toLowerCase()}</strong>.
      </p>
      <div className="rounded-xl border border-accent/20 bg-accent-light px-4 py-3 text-sm text-accent font-medium">
        🎯 Starting you at <strong>{levelObj?.short}</strong> — {levelObj?.hint}
      </div>
    </div>
  );
}

// ── Main wizard ────────────────────────────────────────────────────────────────

export default function OnboardingPage() {
  const { user } = useAuth();
  const router = useRouter();

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [goal, setGoal] = useState<string | null>(null);
  const [level, setLevel] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const totalSteps = 3;

  const stepTitles = [
    "What's your goal?",
    "What's your current level?",
    'Ready to start',
  ];
  const stepSubtitles = [
    'We\'ll tailor the learning path to what matters most to you.',
    'Be honest — it\'s better to start a bit lower and build confidence.',
    'We\'ve set up your personal learning path.',
  ];

  async function handleFinish() {
    if (!level) return;
    setSaving(true);

    const supabase = createClient();

    // 1. Save onboarding preferences to user metadata
    await supabase.auth.updateUser({
      data: {
        onboarding_completed: true,
        onboarding_goal: goal,
        onboarding_level: level,
      },
    });

    // 2. Pre-seed user_progress so the progress page knows the starting level
    if (user) {
      const { data: existing } = await supabase
        .from('user_progress')
        .select('progress')
        .eq('user_id', user.id)
        .maybeSingle();

      if (!existing) {
        // Only seed if no progress exists yet (fresh account)
        const seedProgress = {
          levels: {},
          stats: {
            totalExercisesCompleted: 0,
            totalCorrectAnswers: 0,
            lastStudyDate: '',
            currentStreak: 0,
            longestStreak: 0,
          },
          startingLevel: level,
          goal,
        };
        await supabase
          .from('user_progress')
          .upsert(
            { user_id: user.id, progress: seedProgress, updated_at: new Date().toISOString() },
            { onConflict: 'user_id' }
          );
      }
    }

    setSaving(false);
    router.push(`/levels/${level}`);
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg">

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-muted uppercase tracking-wider">
              Step {step} of {totalSteps}
            </span>
            <span className="text-xs text-muted">{Math.round((step / totalSteps) * 100)}%</span>
          </div>
          <div className="h-1.5 bg-surface rounded-full overflow-hidden">
            <div
              className="h-full bg-accent rounded-full transition-all duration-500"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Card */}
        <div className="bg-background border border-border rounded-2xl shadow-sm p-6 sm:p-8">

          {/* Header */}
          <div className="mb-6">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">
              NederPro Setup
            </p>
            <h1 className="text-xl sm:text-2xl font-bold text-primary">
              {stepTitles[step - 1]}
            </h1>
            <p className="text-sm text-muted mt-1">{stepSubtitles[step - 1]}</p>
          </div>

          {/* Step content */}
          {step === 1 && (
            <StepGoal value={goal} onChange={(id) => { setGoal(id); }} />
          )}
          {step === 2 && (
            <StepLevel value={level} onChange={(id) => { setLevel(id); }} />
          )}
          {step === 3 && goal && level && (
            <StepDone goal={goal} level={level} />
          )}

          {/* Navigation */}
          <div className="mt-6 flex items-center justify-between gap-3">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep((s) => (s - 1) as 1 | 2 | 3)}
                className="text-sm text-muted hover:text-primary transition-colors"
              >
                ← Back
              </button>
            ) : (
              <button
                type="button"
                onClick={() => router.push('/levels')}
                className="text-sm text-muted hover:text-primary transition-colors"
              >
                Skip for now
              </button>
            )}

            {step < 3 ? (
              <Button
                disabled={step === 1 ? !goal : !level}
                onClick={() => setStep((s) => (s + 1) as 1 | 2 | 3)}
              >
                Continue →
              </Button>
            ) : (
              <Button
                disabled={saving}
                onClick={handleFinish}
              >
                {saving ? 'Saving…' : `Start at ${LEVELS.find(l => l.id === level)?.short} →`}
              </Button>
            )}
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-muted mt-4">
          You can always change your level from the Levels page.
        </p>
      </div>
    </div>
  );
}
