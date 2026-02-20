'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ExamQuestion } from '@/content/types';
import Button from '@/components/ui/Button';

interface ExamQuestionCardProps {
  question: ExamQuestion;
  selectedIndex: number | null;
  onSelect: (index: number) => void;
  // For writing questions: the user's typed response
  writingAnswer?: string;
  onWritingChange?: (value: string) => void;
  // 0 = not self-assessed, 1 = did well, -1 = needs practice
  writingSelfAssess?: number;
  onWritingSelfAssess?: (value: number) => void;
  showResult: boolean;
  questionNumber: number;
}

export default function ExamQuestionCard({
  question,
  selectedIndex,
  onSelect,
  writingAnswer = '',
  onWritingChange,
  writingSelfAssess = 0,
  onWritingSelfAssess,
  showResult,
  questionNumber,
}: ExamQuestionCardProps) {
  const [writingPhase, setWritingPhase] = useState<'writing' | 'review'>(
    showResult && question.type === 'writing' ? 'review' : 'writing'
  );

  // ── Writing question ──
  if (question.type === 'writing') {
    const keyPhrases = question.writingKeyPhrases ?? [];

    // Check which key phrases appear in the answer (case-insensitive)
    const matchedPhrases = keyPhrases.filter((p) =>
      writingAnswer.toLowerCase().includes(p.toLowerCase())
    );

    return (
      <div className="bg-background rounded-xl border border-border p-6 shadow-sm">
        <div className="mb-4">
          <span className="text-sm font-semibold text-muted">
            Question {questionNumber} &mdash; Schrijven (Writing)
          </span>
          <p className="text-primary font-medium mt-1">{question.question}</p>
        </div>

        {/* Prompt box */}
        {question.writingPrompt && (
          <div className="bg-accent-light/10 border border-accent/20 rounded-lg p-4 mb-4">
            <p className="text-primary font-medium">{question.writingPrompt}</p>
          </div>
        )}

        {/* Context */}
        {question.writingContext && (
          <div className="bg-surface rounded-lg p-3 mb-4">
            <p className="text-sm text-primary-light">{question.writingContext}</p>
          </div>
        )}

        {/* Guidelines */}
        {question.writingGuidelines && question.writingGuidelines.length > 0 && (
          <div className="mb-4">
            <p className="text-xs font-medium text-muted mb-2">Guidelines:</p>
            <ul className="space-y-1">
              {question.writingGuidelines.map((g, i) => (
                <li key={i} className="text-sm text-primary-light flex items-start gap-2">
                  <span className="text-muted mt-0.5">•</span>
                  {g}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Textarea */}
        <textarea
          value={writingAnswer}
          onChange={(e) => onWritingChange?.(e.target.value)}
          disabled={writingPhase === 'review' || showResult}
          placeholder="Write your response in Dutch..."
          rows={6}
          className="w-full border border-border rounded-md px-3 py-2 text-sm text-primary bg-background focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent disabled:opacity-50 resize-y"
        />

        {/* Submit button (writing phase only) */}
        {writingPhase === 'writing' && !showResult && (
          <div className="mt-4">
            <Button
              onClick={() => setWritingPhase('review')}
              disabled={!writingAnswer.trim()}
            >
              Submit My Response
            </Button>
          </div>
        )}

        {/* Review phase */}
        {(writingPhase === 'review' || showResult) && (
          <div className="mt-4 space-y-4">
            {/* Key phrase analysis */}
            {keyPhrases.length > 0 && (
              <div className="bg-surface rounded-lg p-4">
                <p className="text-xs font-medium text-muted mb-2">Key phrases:</p>
                <div className="flex flex-wrap gap-2">
                  {keyPhrases.map((phrase, i) => {
                    const matched = matchedPhrases.includes(phrase);
                    return (
                      <span
                        key={i}
                        className={cn(
                          'text-xs px-2 py-1 rounded-full font-medium',
                          matched
                            ? 'bg-success-light text-success border border-success/30'
                            : 'bg-error-light text-error border border-error/30'
                        )}
                      >
                        {matched ? '✓' : '✗'} {phrase}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Sample response */}
            {question.writingSampleResponse && (
              <div className="bg-surface rounded-lg p-4">
                <p className="text-xs font-medium text-muted mb-2">Sample response:</p>
                <p className="text-sm text-primary whitespace-pre-line">
                  {question.writingSampleResponse}
                </p>
              </div>
            )}

            {/* Self-assessment (only while exam is active, not in final results) */}
            {!showResult && (
              <div className="border border-border rounded-lg p-4">
                <p className="text-sm font-medium text-primary mb-3">
                  How did you do? Compare your response with the sample above.
                </p>
                <div className="flex gap-3">
                  <Button
                    variant={writingSelfAssess === 1 ? 'primary' : 'outline'}
                    onClick={() => onWritingSelfAssess?.(1)}
                  >
                    I did well
                  </Button>
                  <Button
                    variant={writingSelfAssess === -1 ? 'primary' : 'outline'}
                    onClick={() => onWritingSelfAssess?.(-1)}
                  >
                    I need more practice
                  </Button>
                </div>
              </div>
            )}

            {/* In results view: show self-assessment label */}
            {showResult && writingSelfAssess !== 0 && (
              <div className={cn(
                'rounded-lg p-3 text-sm font-medium',
                writingSelfAssess === 1
                  ? 'bg-success-light text-success border border-success/30'
                  : 'bg-warning-light text-warning border border-warning/30'
              )}>
                {writingSelfAssess === 1 ? 'Self-assessed: Did well' : 'Self-assessed: Needs practice'}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  // ── Multiple-choice / True-false question ──
  return (
    <div className="bg-background rounded-xl border border-border p-6 shadow-sm">
      <div className="mb-4">
        <span className="text-sm font-semibold text-muted">
          Question {questionNumber}
        </span>
        <p className="text-primary font-medium mt-1">{question.question}</p>
      </div>

      <div className="space-y-2">
        {question.options.map((option, index) => {
          const isSelected = selectedIndex === index;
          const isCorrect = index === question.correctIndex;

          let optionClasses: string;

          if (showResult) {
            if (isCorrect) {
              optionClasses =
                'border-success bg-success-light text-success font-medium';
            } else if (isSelected && !isCorrect) {
              optionClasses =
                'border-error bg-error-light text-error font-medium';
            } else {
              optionClasses =
                'border-border bg-surface text-muted opacity-60';
            }
          } else {
            if (isSelected) {
              optionClasses =
                'border-accent bg-accent-light/30 text-primary font-medium';
            } else {
              optionClasses =
                'border-border hover:border-accent/30 hover:bg-surface text-primary-light';
            }
          }

          return (
            <button
              key={index}
              onClick={() => {
                if (!showResult) {
                  onSelect(index);
                }
              }}
              disabled={showResult}
              className={cn(
                'w-full text-left px-4 py-3 rounded-lg border transition-colors text-sm flex items-start gap-3',
                optionClasses,
                showResult && 'cursor-default'
              )}
            >
              <span
                className={cn(
                  'flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold mt-0.5',
                  showResult && isCorrect && 'border-success bg-success text-white',
                  showResult && isSelected && !isCorrect && 'border-error bg-error text-white',
                  showResult && !isCorrect && !isSelected && 'border-border text-muted',
                  !showResult && isSelected && 'border-accent bg-accent text-white',
                  !showResult && !isSelected && 'border-border text-muted'
                )}
              >
                {String.fromCharCode(65 + index)}
              </span>
              <span>{option}</span>
            </button>
          );
        })}
      </div>

      {showResult && question.explanation && (
        <div className="mt-4 p-3 rounded-lg bg-surface border border-border">
          <p className="text-sm text-primary-light">
            <span className="font-semibold text-primary">Explanation: </span>
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
