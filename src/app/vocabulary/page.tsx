import Breadcrumb from '@/components/layout/Breadcrumb';
import VocabularyPageContent from '@/components/vocabulary/VocabularyPageContent';

export default function VocabularyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <Breadcrumb items={[{ label: 'Vocabulary' }]} />

      <h1 className="text-3xl font-bold text-primary mb-2">Vocabulary</h1>
      <p className="text-muted mb-8">
        Build your Dutch vocabulary by category. Browse words, hear pronunciation, and practice with flashcards.
      </p>

      <VocabularyPageContent />
    </div>
  );
}
