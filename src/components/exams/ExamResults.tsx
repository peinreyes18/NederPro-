'use client';

import { useMemo } from 'react';
import { cn } from '@/lib/utils';
import { ExamPracticeTest } from '@/content/types';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import ExamQuestionCard from '@/components/exams/ExamQuestionCard';

interface ExamResultsProps {
  exam: ExamPracticeTest;
  answers: (number | null)[];
  writingAnswers?: string[];
  writingSelfAssess?: number[];
  onRetry: () => void;
  onBackToExams: () => void;
  examType?: ExamPracticeTest['examType'];
}

export default function ExamResults({
  exam,
  answers,
  writingAnswers = [],
  writingSelfAssess = [],
  onRetry,
  onBackToExams,
  examType,
}: ExamResultsProps) {
  const { score, correctCount, totalMC, writingDoneCount, writingTotalCount, passed, topicBreakdown } = useMemo(() => {
    const allQuestions = exam.sections.flatMap((section) => section.questions);

    // Separate MC/TF questions from writing questions
    const mcQuestions = allQuestions.filter((q) => q.type !== 'writing');
    const writingQuestions = allQuestions.filter((q) => q.type === 'writing');

    let correct = 0;
    let writingDone = 0;

    const topicMap = new Map<string, { correct: number; total: number; isWriting: boolean }>();

    allQuestions.forEach((question, index) => {
      if (question.type === 'writing') {
        const selfAssess = writingSelfAssess[index] ?? 0;
        if (selfAssess !== 0) writingDone++;
        if (selfAssess === 1) correct++; // self-assessed "did well" counts as correct

        if (question.topicArea) {
          const existing = topicMap.get(question.topicArea) || { correct: 0, total: 0, isWriting: true };
          existing.total++;
          if (selfAssess === 1) existing.correct++;
          topicMap.set(question.topicArea, existing);
        }
      } else {
        const isCorrect = answers[index] === question.correctIndex;
        if (isCorrect) correct++;

        if (question.topicArea) {
          const existing = topicMap.get(question.topicArea) || { correct: 0, total: 0, isWriting: false };
          existing.total++;
          if (isCorrect) existing.correct++;
          topicMap.set(question.topicArea, existing);
        }
      }
    });

    const total = allQuestions.length;
    const scorePercent = total > 0 ? Math.round((correct / total) * 100) : 0;
    const hasPassed = exam.passingScore ? scorePercent >= exam.passingScore : true;

    const breakdown = Array.from(topicMap.entries()).map(([topic, stats]) => ({
      topic,
      correct: stats.correct,
      total: stats.total,
      percentage: Math.round((stats.correct / stats.total) * 100),
      isWriting: stats.isWriting,
    }));

    return {
      score: scorePercent,
      correctCount: correct,
      totalMC: mcQuestions.length,
      writingDoneCount: writingDone,
      writingTotalCount: writingQuestions.length,
      passed: hasPassed,
      topicBreakdown: breakdown,
    };
  }, [exam, answers, writingAnswers, writingSelfAssess]);

  const allQuestions = exam.sections.flatMap((section) => section.questions);
  const hasWriting = writingTotalCount > 0;
  const hasMC = totalMC > 0;

  const circumference = 2 * Math.PI * 54;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
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
        {hasMC && (
          <p className="text-primary-light mb-1">
            {correctCount - writingDoneCount > 0 || !hasWriting
              ? `${answers.filter((a, i) => allQuestions[i].type !== 'writing' && a === allQuestions[i].correctIndex).length} of ${totalMC} multiple-choice questions correct`
              : null}
          </p>
        )}

        {hasWriting && (
          <p className="text-primary-light mb-1">
            {writingDoneCount} of {writingTotalCount} writing task{writingTotalCount > 1 ? 's' : ''} self-assessed
          </p>
        )}

        {exam.passingScore && (
          <p className="text-muted text-sm mb-6">
            Passing score: {exam.passingScore}%
          </p>
        )}

        {hasWriting && (
          <p className="text-sm text-muted bg-surface rounded-lg p-3 mb-4">
            Writing tasks are self-assessed. Your self-assessment is included in the score above.
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
              {topicBreakdown.map(({ topic, correct: topicCorrect, total, percentage, isWriting }) => (
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
                    {isWriting && (
                      <span className="text-xs text-accent ml-1">(writing)</span>
                    )}
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

      {/* Writing task review section */}
      {hasWriting && (
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4">Writing Task Review</h3>
          <div className="space-y-4">
            {allQuestions.map((q, index) => {
              if (q.type !== 'writing') return null;
              return (
                <ExamQuestionCard
                  key={q.id}
                  question={q}
                  selectedIndex={null}
                  onSelect={() => {}}
                  writingAnswer={writingAnswers[index] ?? ''}
                  writingSelfAssess={writingSelfAssess[index] ?? 0}
                  showResult={true}
                  questionNumber={index + 1}
                  examType={examType ?? exam.examType}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
