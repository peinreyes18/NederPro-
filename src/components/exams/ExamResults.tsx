'use client';

import { useMemo } from 'react';
import { cn } from '@/lib/utils';
import { ExamPracticeTest } from '@/content/types';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

interface ExamResultsProps {
  exam: ExamPracticeTest;
  answers: (number | null)[];
  onRetry: () => void;
  onBackToExams: () => void;
}

export default function ExamResults({
  exam,
  answers,
  onRetry,
  onBackToExams,
}: ExamResultsProps) {
  const { score, correctCount, totalCount, passed, topicBreakdown } = useMemo(() => {
    const allQuestions = exam.sections.flatMap((section) => section.questions);
    const total = allQuestions.length;
    let correct = 0;

    const topicMap = new Map<
      string,
      { correct: number; total: number }
    >();

    allQuestions.forEach((question, index) => {
      const isCorrect = answers[index] === question.correctIndex;
      if (isCorrect) correct++;

      if (question.topicArea) {
        const existing = topicMap.get(question.topicArea) || {
          correct: 0,
          total: 0,
        };
        existing.total++;
        if (isCorrect) existing.correct++;
        topicMap.set(question.topicArea, existing);
      }
    });

    const scorePercent = total > 0 ? Math.round((correct / total) * 100) : 0;
    const hasPassed = exam.passingScore ? scorePercent >= exam.passingScore : true;

    const breakdown = Array.from(topicMap.entries()).map(
      ([topic, stats]) => ({
        topic,
        correct: stats.correct,
        total: stats.total,
        percentage: Math.round((stats.correct / stats.total) * 100),
      })
    );

    return {
      score: scorePercent,
      correctCount: correct,
      totalCount: total,
      passed: hasPassed,
      topicBreakdown: breakdown,
    };
  }, [exam, answers]);

  const circumference = 2 * Math.PI * 54;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="text-center">
        <h2 className="text-2xl font-bold text-primary mb-1">{exam.title}</h2>
        <p className="text-muted text-sm mb-6">Exam Results</p>

        {/* Circular progress indicator */}
        <div className="flex justify-center mb-6">
          <div className="relative w-36 h-36">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                className="text-border"
              />
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                className={cn(
                  'transition-all duration-1000 ease-out',
                  passed ? 'stroke-success' : 'stroke-error'
                )}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span
                className={cn(
                  'text-4xl font-bold',
                  passed ? 'text-success' : 'text-error'
                )}
              >
                {score}%
              </span>
            </div>
          </div>
        </div>

        {/* Pass / Fail badge */}
        <div className="mb-4">
          <Badge variant={passed ? 'success' : 'error'}>
            {passed ? 'Passed' : 'Not Passed'}
          </Badge>
        </div>

        {/* Score summary */}
        <p className="text-primary-light mb-2">
          {correctCount} of {totalCount} questions correct
        </p>
        {exam.passingScore && (
          <p className="text-muted text-sm mb-6">
            Passing score: {exam.passingScore}%
          </p>
        )}

        <p className="text-primary-light mb-8">
          {passed
            ? 'Great job! You passed the practice exam. Keep up the good work.'
            : 'You did not reach the passing score this time. Review the topics below and try again.'}
        </p>

        {/* Topic breakdown */}
        {topicBreakdown.length > 0 && (
          <div className="text-left mb-8">
            <h3 className="text-lg font-semibold text-primary mb-4">
              Breakdown by Topic
            </h3>
            <div className="space-y-3">
              {topicBreakdown.map(({ topic, correct: topicCorrect, total, percentage }) => (
                <div
                  key={topic}
                  className="flex items-center justify-between p-3 rounded-lg bg-surface border border-border"
                >
                  <div>
                    <span className="text-sm font-medium text-primary capitalize">
                      {topic.replace(/-/g, ' ')}
                    </span>
                    <span className="text-xs text-muted ml-2">
                      {topicCorrect}/{total}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-24 h-2 rounded-full bg-surface-hover overflow-hidden">
                      <div
                        className={cn(
                          'h-full rounded-full transition-all duration-500',
                          percentage >= 80
                            ? 'bg-success'
                            : percentage >= 50
                            ? 'bg-warning'
                            : 'bg-error'
                        )}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span
                      className={cn(
                        'text-sm font-semibold w-12 text-right',
                        percentage >= 80
                          ? 'text-success'
                          : percentage >= 50
                          ? 'text-warning'
                          : 'text-error'
                      )}
                    >
                      {percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action buttons */}
        <div className="flex gap-3 justify-center">
          <Button variant="outline" onClick={onBackToExams}>
            Back to Exams
          </Button>
          <Button onClick={onRetry}>Try Again</Button>
        </div>
      </Card>
    </div>
  );
}
