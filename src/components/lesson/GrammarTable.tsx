'use client';

import { GrammarTableSection } from '@/content/types';
import PronunciationButton from '@/components/ui/PronunciationButton';
import { useVerb } from '@/components/verbs/VerbContext';
import { lookupVerb } from '@/content/verbs/verb-database';
import type { VerbConjugation } from '@/content/verbs/types';

interface GrammarTableProps {
  section: GrammarTableSection;
}

function VerbCell({
  text,
  verb,
  hasAudio,
}: {
  text: string;
  verb: VerbConjugation;
  hasAudio: boolean;
}) {
  const { openVerb } = useVerb();

  return (
    <span className="inline-flex items-center gap-1.5">
      {hasAudio && <PronunciationButton text={text} className="shrink-0" />}
      <button
        type="button"
        onClick={() => openVerb(verb)}
        className="underline decoration-dotted decoration-accent/50 underline-offset-4 hover:decoration-accent hover:text-accent transition-colors cursor-pointer text-left"
        title={`${verb.infinitive} — ${verb.translation}`}
      >
        {text}
      </button>
    </span>
  );
}

export default function GrammarTable({ section }: GrammarTableProps) {
  const audioColumns = section.audioColumns ?? [];

  function renderCell(cell: string, columnIndex: number) {
    const hasAudio = audioColumns.includes(columnIndex);
    const verb = lookupVerb(cell);

    if (verb) {
      return <VerbCell text={cell} verb={verb} hasAudio={hasAudio} />;
    }

    if (hasAudio) {
      return (
        <span className="inline-flex items-center gap-1.5">
          <PronunciationButton text={cell} className="shrink-0" />
          {cell}
        </span>
      );
    }

    return cell;
  }

  return (
    <div className="mb-8">
      {section.title && (
        <h3 className="text-lg font-semibold text-primary mb-3">{section.title}</h3>
      )}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-background rounded-lg border border-border overflow-hidden">
          <thead>
            <tr className="bg-surface">
              {section.headers.map((header, i) => (
                <th
                  key={i}
                  className="px-4 py-3 text-left text-sm font-semibold text-primary border-b border-border"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {section.rows.map((row, i) => (
              <tr key={i} className="border-b border-border/50 last:border-0">
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className="px-4 py-2.5 text-sm text-primary-light"
                  >
                    {renderCell(cell, j)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {section.caption && (
        <p className="text-xs text-muted mt-2 italic">{section.caption}</p>
      )}
    </div>
  );
}
