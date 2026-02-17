import { CommonMistakesSection } from '@/content/types';
import PronunciationButton from '@/components/ui/PronunciationButton';

interface CommonMistakesProps {
  section: CommonMistakesSection;
}

export default function CommonMistakes({ section }: CommonMistakesProps) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-primary mb-3">
        {section.title || 'Common Mistakes'}
      </h3>
      <div className="space-y-3">
        {section.mistakes.map((mistake, i) => (
          <div key={i} className="bg-background rounded-lg border border-border p-4">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-2">
              <div className="flex items-start gap-2">
                <span className="text-error font-bold text-sm mt-0.5">&#x2717;</span>
                <span className="text-error line-through">{mistake.incorrect}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-success font-bold text-sm mt-0.5">&#x2713;</span>
                <span className="text-success font-medium">{mistake.correct}</span>
                <PronunciationButton text={mistake.correct} />
              </div>
            </div>
            <p className="text-sm text-muted pl-5">{mistake.explanation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
