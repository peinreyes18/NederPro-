import { WorkplaceContextSection } from '@/content/types';
import PronunciationButton from '@/components/ui/PronunciationButton';

interface WorkplaceContextProps {
  section: WorkplaceContextSection;
}

export default function WorkplaceContext({ section }: WorkplaceContextProps) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-primary mb-3">
        {section.title || 'Workplace Context'}
      </h3>
      <div className="bg-accent-light/20 border border-accent/20 rounded-lg p-4">
        <p className="text-sm font-medium text-accent-hover mb-3">
          Scenario: {section.scenario}
        </p>
        <div className="space-y-2">
          {section.examples.map((example, i) => (
            <div key={i} className="py-2 border-b border-accent/10 last:border-0">
              <div className="flex items-start gap-1.5">
                <PronunciationButton text={example.dutch} className="mt-0.5" />
                <p className="text-primary font-medium">{example.dutch}</p>
              </div>
              <p className="text-muted text-sm mt-0.5">{example.english}</p>
              {example.note && (
                <p className="text-xs text-accent mt-1 italic">{example.note}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
