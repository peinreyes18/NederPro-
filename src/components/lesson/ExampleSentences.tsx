import { ExampleSection, ExampleSentence } from '@/content/types';
import PronunciationButton from '@/components/ui/PronunciationButton';

interface ExampleSentencesProps {
  section: ExampleSection;
}

function highlightWords(text: string, highlights?: string | string[]): React.ReactNode {
  if (!highlights) return text;
  const highlightList = Array.isArray(highlights) ? highlights : [highlights];
  if (highlightList.length === 0) return text;

  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  for (const word of highlightList) {
    const index = remaining.toLowerCase().indexOf(word.toLowerCase());
    if (index === -1) continue;

    if (index > 0) {
      parts.push(remaining.slice(0, index));
    }
    parts.push(
      <span key={key++} className="font-semibold text-accent-hover bg-accent-light/40 px-0.5 rounded">
        {remaining.slice(index, index + word.length)}
      </span>
    );
    remaining = remaining.slice(index + word.length);
  }

  if (remaining) parts.push(remaining);
  return parts.length > 0 ? parts : text;
}

function ExampleRow({ example }: { example: ExampleSentence }) {
  return (
    <div className="py-3 border-b border-border/50 last:border-0">
      <div className="flex items-start gap-1.5">
        <PronunciationButton text={example.dutch} className="mt-0.5" />
        <p className="text-primary font-medium">
          {highlightWords(example.dutch, example.highlight)}
        </p>
      </div>
      <p className="text-muted text-sm mt-0.5">{example.english}</p>
      {example.note && (
        <p className="text-xs text-accent mt-1 italic">{example.note}</p>
      )}
    </div>
  );
}

export default function ExampleSentences({ section }: ExampleSentencesProps) {
  return (
    <div className="mb-8">
      {section.title && (
        <h3 className="text-lg font-semibold text-primary mb-3">{section.title}</h3>
      )}
      <div className="bg-surface rounded-lg p-4">
        {section.examples.map((example, i) => (
          <ExampleRow key={i} example={example} />
        ))}
      </div>
    </div>
  );
}
