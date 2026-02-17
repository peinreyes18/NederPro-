'use client';

import { useState } from 'react';
import { WritingPromptContent } from '@/content/types';
import { checkKeyPhrases } from '@/lib/exercise-checker';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';

interface WritingPromptProps {
  content: WritingPromptContent;
  instruction: string;
  onSubmit: (correct: boolean, userAnswer: string, explanation?: string, correctAnswer?: string) => void;
  disabled: boolean;
}

export default function WritingPrompt({
  content,
  instruction,
  onSubmit,
  disabled,
}: WritingPromptProps) {
  const [response, setResponse] = useState('');
  const [phase, setPhase] = useState<'writing' | 'review'>('writing');

  const handleWritingSubmit = () => {
    setPhase('review');
  };

  const handleSelfAssess = (didWell: boolean) => {
    let explanation: string | undefined;

    if (content.keyPhrases && content.keyPhrases.length > 0) {
      const { matched, missed } = checkKeyPhrases(response, content.keyPhrases);
      if (didWell) {
        explanation = `You used ${matched.length} of ${content.keyPhrases.length} key phrases.`;
      } else {
        explanation =
          missed.length > 0
            ? `Key phrases to practice: ${missed.join(', ')}`
            : `You included all key phrases. Keep practicing for fluency.`;
      }
    }

    onSubmit(didWell, response, explanation);
  };

  const phraseAnalysis =
    phase === 'review' && content.keyPhrases
      ? checkKeyPhrases(response, content.keyPhrases)
      : null;

  return (
    <div>
      <p className="text-sm font-medium text-muted mb-4">{instruction}</p>

      {/* Prompt */}
      <div className="bg-accent-light/10 border border-accent/20 rounded-lg p-4 mb-4">
        <p className="text-primary font-medium">{content.prompt}</p>
      </div>

      {/* Context */}
      <div className="bg-surface rounded-lg p-3 mb-4">
        <p className="text-sm text-primary-light">{content.context}</p>
      </div>

      {/* Guidelines */}
      <div className="mb-4">
        <p className="text-xs font-medium text-muted mb-2">Guidelines:</p>
        <ul className="space-y-1">
          {content.guidelines.map((guideline, i) => (
            <li key={i} className="text-sm text-primary-light flex items-start gap-2">
              <span className="text-muted mt-0.5">&#8226;</span>
              {guideline}
            </li>
          ))}
        </ul>
      </div>

      {/* Writing area */}
      <textarea
        value={response}
        onChange={(e) => setResponse(e.target.value)}
        disabled={disabled || phase === 'review'}
        placeholder="Write your response in Dutch..."
        rows={5}
        className="w-full border border-border rounded-md px-3 py-2 text-sm text-primary bg-background focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent disabled:opacity-50 resize-y"
      />

      {/* Writing phase: submit button */}
      {phase === 'writing' && !disabled && (
        <div className="mt-4">
          <Button onClick={handleWritingSubmit} disabled={!response.trim()}>
            Submit My Response
          </Button>
        </div>
      )}

      {/* Review phase */}
      {phase === 'review' && !disabled && (
        <div className="mt-4 space-y-4">
          {/* Key phrase analysis */}
          {phraseAnalysis && content.keyPhrases && content.keyPhrases.length > 0 && (
            <div className="bg-surface rounded-lg p-4">
              <p className="text-xs font-medium text-muted mb-2">Key phrases used:</p>
              <div className="flex flex-wrap gap-2">
                {content.keyPhrases.map((phrase, i) => {
                  const isMatched = phraseAnalysis.matched.includes(phrase);
                  return (
                    <span
                      key={i}
                      className={cn(
                        'text-xs px-2 py-1 rounded-full font-medium',
                        isMatched
                          ? 'bg-success-light text-success border border-success/30'
                          : 'bg-error-light text-error border border-error/30'
                      )}
                    >
                      {isMatched ? '\u2713' : '\u2717'} {phrase}
                    </span>
                  );
                })}
              </div>
            </div>
          )}

          {/* Sample response */}
          {content.sampleResponse && (
            <div className="bg-surface rounded-lg p-4">
              <p className="text-xs font-medium text-muted mb-2">Sample response:</p>
              <p className="text-sm text-primary whitespace-pre-line">
                {content.sampleResponse}
              </p>
            </div>
          )}

          {/* Self-assessment */}
          <div className="border border-border rounded-lg p-4">
            <p className="text-sm font-medium text-primary mb-3">
              How did you do? Compare your response with the sample above.
            </p>
            <div className="flex gap-3">
              <Button onClick={() => handleSelfAssess(true)}>
                I did well
              </Button>
              <Button variant="outline" onClick={() => handleSelfAssess(false)}>
                I need more practice
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
