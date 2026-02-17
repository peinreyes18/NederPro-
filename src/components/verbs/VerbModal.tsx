'use client';

import { useEffect, useRef } from 'react';
import { useVerb } from './VerbContext';
import { PRONOUN_LABELS } from '@/content/verbs/types';
import type { VerbConjugation, TenseConjugation } from '@/content/verbs/types';
import PronunciationButton from '@/components/ui/PronunciationButton';

const PRONOUN_KEYS: (keyof TenseConjugation)[] = [
  'ik',
  'jij',
  'u',
  'hijZijHet',
  'wij',
  'jullie',
  'zij',
];

function TenseTable({
  label,
  tense,
}: {
  label: string;
  tense: TenseConjugation;
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-primary mb-2">{label}</h4>
      <table className="w-full text-sm border-collapse">
        <tbody>
          {PRONOUN_KEYS.map((key, i) => (
            <tr key={key} className="border-b border-border/40 last:border-0">
              <td className="py-1.5 pr-3 text-muted whitespace-nowrap w-1/3">
                {PRONOUN_LABELS[i]}
              </td>
              <td className="py-1.5 font-medium text-primary-light">
                <span className="inline-flex items-center gap-1.5">
                  <PronunciationButton text={tense[key]} className="shrink-0" />
                  {tense[key]}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PerfectInfo({ verb }: { verb: VerbConjugation }) {
  if (verb.pastParticiple === '-') return null;

  const auxLabel =
    verb.auxiliary === 'hebben/zijn'
      ? 'hebben / zijn'
      : verb.auxiliary;

  return (
    <div>
      <h4 className="text-sm font-semibold text-primary mb-2">
        Perfect Tense (Voltooide Tijd)
      </h4>
      <table className="w-full text-sm border-collapse">
        <tbody>
          <tr className="border-b border-border/40">
            <td className="py-1.5 pr-3 text-muted whitespace-nowrap w-1/3">
              Auxiliary
            </td>
            <td className="py-1.5 font-medium text-primary-light">
              {auxLabel}
            </td>
          </tr>
          <tr className="border-b border-border/40">
            <td className="py-1.5 pr-3 text-muted whitespace-nowrap">
              Past participle
            </td>
            <td className="py-1.5 font-medium text-primary-light">
              <span className="inline-flex items-center gap-1.5">
                <PronunciationButton text={verb.pastParticiple} className="shrink-0" />
                {verb.pastParticiple}
              </span>
            </td>
          </tr>
          <tr>
            <td className="py-1.5 pr-3 text-muted whitespace-nowrap">
              Example
            </td>
            <td className="py-1.5 text-primary-light italic">
              {verb.auxiliary === 'zijn' || verb.auxiliary === 'hebben/zijn'
                ? `Ik ben/heb ... ${verb.pastParticiple}`
                : `Ik heb ... ${verb.pastParticiple}`}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default function VerbModal() {
  const { activeVerb, closeVerb } = useVerb();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (activeVerb) {
      if (!dialog.open) dialog.showModal();
    } else {
      if (dialog.open) dialog.close();
    }
  }, [activeVerb]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClose = () => closeVerb();
    dialog.addEventListener('close', onClose);
    return () => dialog.removeEventListener('close', onClose);
  }, [closeVerb]);

  if (!activeVerb) {
    return <dialog ref={dialogRef} />;
  }

  const verb = activeVerb;

  return (
    <dialog
      ref={dialogRef}
      className="fixed inset-0 z-50 m-auto w-[95vw] max-w-lg max-h-[90vh] overflow-y-auto rounded-xl bg-background border border-border shadow-2xl p-0 backdrop:bg-black/40"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeVerb();
      }}
    >
      <div className="sticky top-0 z-10 flex items-start justify-between gap-3 bg-background border-b border-border px-5 py-4">
        <div>
          <h2 className="text-xl font-bold text-primary flex items-center gap-2">
            <PronunciationButton text={verb.infinitive} className="shrink-0" />
            {verb.infinitive}
          </h2>
          <p className="text-sm text-muted mt-0.5">
            {verb.translation}
            {verb.reflexive && ' (reflexive: zich)'}
            {verb.separablePrefix && (
              <span>
                {' '}
                &middot; separable prefix:{' '}
                <span className="font-semibold">{verb.separablePrefix}</span>
              </span>
            )}
            {!verb.isRegular && (
              <span className="ml-2 inline-block bg-accent/15 text-accent text-xs px-1.5 py-0.5 rounded">
                irregular
              </span>
            )}
          </p>
        </div>
        <button
          type="button"
          onClick={closeVerb}
          className="shrink-0 mt-1 text-muted hover:text-primary transition-colors text-xl leading-none cursor-pointer"
          aria-label="Close"
        >
          &times;
        </button>
      </div>

      <div className="px-5 py-4 space-y-6">
        {/* Present tense */}
        <TenseTable label="Present Tense (OTT)" tense={verb.present} />

        {/* Past simple */}
        <TenseTable label="Simple Past (OVT)" tense={verb.pastSimple} />

        {/* Perfect tense info */}
        <PerfectInfo verb={verb} />

        {/* Imperative */}
        {verb.imperative && verb.imperative !== '-' && (
          <div>
            <h4 className="text-sm font-semibold text-primary mb-1">Imperative</h4>
            <p className="text-sm text-primary-light">
              <span className="inline-flex items-center gap-1.5">
                <PronunciationButton text={verb.imperative} className="shrink-0" />
                {verb.imperative}
              </span>
            </p>
          </div>
        )}

        {/* Examples */}
        {verb.examples.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-primary mb-2">
              Examples
            </h4>
            <ul className="space-y-2">
              {verb.examples.map((ex, i) => (
                <li key={i} className="text-sm">
                  <span className="inline-flex items-center gap-1.5">
                    <PronunciationButton text={ex.dutch} className="shrink-0" />
                    <span className="font-medium text-primary-light">
                      {ex.dutch}
                    </span>
                  </span>
                  <br />
                  <span className="text-muted">{ex.english}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Notes */}
        {verb.notes && (
          <div className="text-xs text-muted bg-surface rounded-lg px-3 py-2 border border-border/50">
            {verb.notes}
          </div>
        )}
      </div>
    </dialog>
  );
}
