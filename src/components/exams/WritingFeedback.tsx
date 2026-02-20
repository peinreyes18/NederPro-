'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import type { WritingFeedbackRequest, WritingFeedbackResponse } from '@/app/api/writing-feedback/route';

interface WritingFeedbackProps {
  request: WritingFeedbackRequest;
}

const gradeConfig = {
  excellent: { label: 'Excellent', color: 'text-success', bg: 'bg-success-light border-success/30' },
  good: { label: 'Good', color: 'text-accent', bg: 'bg-accent-light border-accent/20' },
  adequate: { label: 'Adequate', color: 'text-warning', bg: 'bg-warning-light border-warning/30' },
  'needs-improvement': { label: 'Needs Improvement', color: 'text-error', bg: 'bg-error-light border-error/30' },
};

export default function WritingFeedback({ request }: WritingFeedbackProps) {
  const [feedback, setFeedback] = useState<WritingFeedbackResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [requested, setRequested] = useState(false);

  async function getFeedback() {
    setLoading(true);
    setError(null);
    setRequested(true);

    try {
      const res = await fetch('/api/writing-feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(request),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Something went wrong.');
        return;
      }

      setFeedback(data as WritingFeedbackResponse);
    } catch {
      setError('Could not connect to the feedback service. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  // ── Trigger button (before requesting) ──
  if (!requested) {
    return (
      <button
        onClick={getFeedback}
        className="mt-3 flex items-center gap-2 px-4 py-2 rounded-lg border border-accent/30 bg-accent-light/20 text-accent text-sm font-medium hover:bg-accent-light/40 transition-colors"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
          <path d="M12 8v4l3 3" />
        </svg>
        Get AI feedback
      </button>
    );
  }

  // ── Loading state ──
  if (loading) {
    return (
      <div className="mt-4 rounded-xl border border-border bg-surface p-5">
        <div className="flex items-center gap-3 text-sm text-muted">
          <svg className="animate-spin w-4 h-4 text-accent flex-shrink-0" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
          </svg>
          Analysing your Dutch writing...
        </div>
      </div>
    );
  }

  // ── Error state ──
  if (error) {
    return (
      <div className="mt-4 rounded-xl border border-error/30 bg-error-light p-4 text-sm text-error">
        <p className="font-medium mb-1">Feedback unavailable</p>
        <p>{error}</p>
        <button
          onClick={getFeedback}
          className="mt-2 text-xs underline hover:no-underline"
        >
          Try again
        </button>
      </div>
    );
  }

  if (!feedback) return null;

  const grade = gradeConfig[feedback.grade] ?? gradeConfig['adequate'];
  const circumference = 2 * Math.PI * 28;
  const strokeOffset = circumference - (feedback.overallScore / 100) * circumference;

  return (
    <div className="mt-4 rounded-xl border border-border bg-surface overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-border">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent flex-shrink-0">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4l3 3" />
        </svg>
        <span className="text-sm font-semibold text-primary">AI Feedback</span>
        <span className={cn('ml-auto text-xs font-semibold px-2.5 py-1 rounded-full border', grade.bg, grade.color)}>
          {grade.label}
        </span>
      </div>

      <div className="p-5 space-y-5">
        {/* Score + summary */}
        <div className="flex items-start gap-4">
          {/* Mini circular score */}
          <div className="relative flex-shrink-0 w-16 h-16">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
              <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="6" className="text-border" />
              <circle
                cx="32" cy="32" r="28" fill="none" strokeWidth="6" strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeOffset}
                className={cn(
                  'transition-all duration-700',
                  feedback.overallScore >= 85 ? 'stroke-success' :
                  feedback.overallScore >= 70 ? 'stroke-accent' :
                  feedback.overallScore >= 55 ? 'stroke-warning' : 'stroke-error'
                )}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className={cn(
                'text-sm font-bold',
                feedback.overallScore >= 85 ? 'text-success' :
                feedback.overallScore >= 70 ? 'text-accent' :
                feedback.overallScore >= 55 ? 'text-warning' : 'text-error'
              )}>
                {feedback.overallScore}
              </span>
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-sm text-primary leading-relaxed">{feedback.summary}</p>
            <p className="text-xs text-muted mt-1 italic">{feedback.cefrComment}</p>
          </div>
        </div>

        {/* Strengths */}
        {feedback.strengths.length > 0 && (
          <div>
            <p className="text-xs font-semibold text-success uppercase tracking-wide mb-2">What you did well</p>
            <ul className="space-y-1.5">
              {feedback.strengths.map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-primary-light">
                  <span className="text-success mt-0.5 flex-shrink-0">✓</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Improvements */}
        {feedback.improvements.length > 0 && (
          <div>
            <p className="text-xs font-semibold text-warning uppercase tracking-wide mb-2">To improve</p>
            <ul className="space-y-1.5">
              {feedback.improvements.map((imp, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-primary-light">
                  <span className="text-warning mt-0.5 flex-shrink-0">→</span>
                  {imp}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Corrected excerpt */}
        {feedback.correctedExcerpt && (
          <div className="bg-background rounded-lg border border-border p-3">
            <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-2">Correction example</p>
            <p className="text-sm text-primary font-mono leading-relaxed whitespace-pre-wrap">
              {feedback.correctedExcerpt}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
