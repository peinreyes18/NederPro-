import { GrammarRuleSection } from '@/content/types';

interface GrammarExplanationProps {
  section: GrammarRuleSection;
}

export default function GrammarExplanation({ section }: GrammarExplanationProps) {
  return (
    <div className="mb-8">
      {section.title && (
        <h3 className="text-lg font-semibold text-primary mb-3">{section.title}</h3>
      )}
      <div className="border-l-4 border-accent bg-accent-light/20 rounded-r-md p-4 mb-4">
        <p className="font-medium text-primary">{section.rule}</p>
      </div>
      <div className="text-primary-light leading-relaxed whitespace-pre-line">
        {section.explanation}
      </div>
    </div>
  );
}
