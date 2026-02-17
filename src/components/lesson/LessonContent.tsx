import { Lesson } from '@/content/types';
import GrammarExplanation from './GrammarExplanation';
import ExampleSentences from './ExampleSentences';
import CommonMistakes from './CommonMistakes';
import GrammarTable from './GrammarTable';
import WorkplaceContext from './WorkplaceContext';
import Alert from '@/components/ui/Alert';

interface LessonContentProps {
  lesson: Lesson;
}

export default function LessonContent({ lesson }: LessonContentProps) {
  return (
    <div>
      {lesson.sections.map((section, index) => {
        switch (section.type) {
          case 'grammar-rule':
            return <GrammarExplanation key={index} section={section} />;
          case 'examples':
            return <ExampleSentences key={index} section={section} />;
          case 'common-mistakes':
            return <CommonMistakes key={index} section={section} />;
          case 'grammar-table':
            return <GrammarTable key={index} section={section} />;
          case 'workplace-context':
            return <WorkplaceContext key={index} section={section} />;
          case 'note':
            return (
              <div key={index} className="mb-8">
                {section.title && (
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    {section.title}
                  </h3>
                )}
                <Alert variant={section.variant}>
                  {section.content}
                </Alert>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
