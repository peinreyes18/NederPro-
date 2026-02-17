'use client';

import { useState, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { getExamById } from '@/content/exams';
import ExamTimer from '@/components/exams/ExamTimer';
import ExamQuestionCard from '@/components/exams/ExamQuestionCard';
import ExamResults from '@/components/exams/ExamResults';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { ExamQuestion } from '@/content/types';

export default function ExamPage() {
  const params = useParams();
  const router = useRouter();
  const examId = params.examId as string;

  const exam = getExamById(examId);

  // Flatten all questions across sections into a single ordered array
  const allQuestions: ExamQuestion[] = useMemo(() => {
    if (!exam) return [];
    return exam.sections.flatMap((section) => section.questions);
  }, [exam]);

  const [answers, setAnswers] = useState<(number | null)[]>(() =>
    new Array(allQuestions.length).fill(null)
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [examFinished, setExamFinished] = useState(false);
  const [timerRunning, setTimerRunning] = useState(true);

  const answeredCount = answers.filter((a) => a !== null).length;
  const totalCount = allQuestions.length;

  function handleSelectAnswer(optionIndex: number) {
    setAnswers((prev) => {
      const updated = [...prev];
      updated[currentQuestionIndex] = optionIndex;
      return updated;
    });
  }

  function handlePrevious() {
    setCurrentQuestionIndex((prev) => Math.max(0, prev - 1));
  }

  function handleNext() {
    setCurrentQuestionIndex((prev) =>
      Math.min(allQuestions.length - 1, prev + 1)
    );
  }

  function handleJumpToQuestion(index: number) {
    setCurrentQuestionIndex(index);
  }

  function handleSubmitExam() {
    const unanswered = totalCount - answeredCount;
    let message = 'Are you sure you want to submit your exam?';
    if (unanswered > 0) {
      message = `You have ${unanswered} unanswered question${unanswered > 1 ? 's' : ''}. Are you sure you want to submit?`;
    }
    if (window.confirm(message)) {
      setExamFinished(true);
      setTimerRunning(false);
    }
  }

  function handleTimeUp() {
    setExamFinished(true);
    setTimerRunning(false);
  }

  function handleRetry() {
    setAnswers(new Array(allQuestions.length).fill(null));
    setCurrentQuestionIndex(0);
    setExamFinished(false);
    setTimerRunning(true);
  }

  function handleBackToExams() {
    router.push('/exams');
  }

  // ── Not Found ──
  if (!exam) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center">
        <h1 className="text-2xl font-bold text-primary mb-4">
          Exam not found
        </h1>
        <p className="text-muted mb-8">
          The exam you are looking for does not exist or has been removed.
        </p>
        <Link href="/exams">
          <Button variant="outline">Back to Exams</Button>
        </Link>
      </div>
    );
  }

  // ── Results ──
  if (examFinished) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <ExamResults
          exam={exam}
          answers={answers}
          onRetry={handleRetry}
          onBackToExams={handleBackToExams}
        />
      </div>
    );
  }

  // ── Active Exam ──
  const currentQuestion = allQuestions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky top bar */}
      <div className="sticky top-0 z-30 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 min-w-0">
            <Link
              href="/exams"
              className="text-muted hover:text-primary transition-colors flex-shrink-0"
              title="Back to exams"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </Link>
            <h1 className="text-sm sm:text-base font-semibold text-primary truncate">
              {exam.title}
            </h1>
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">
            <span className="text-sm font-medium text-muted hidden sm:block">
              Q {currentQuestionIndex + 1}/{totalCount}
            </span>
            <ExamTimer
              totalMinutes={exam.timeLimitMinutes}
              onTimeUp={handleTimeUp}
              isRunning={timerRunning}
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-8">
          {/* Main question area */}
          <div>
            {/* Mobile question progress */}
            <div className="sm:hidden mb-4">
              <span className="text-sm font-medium text-muted">
                Question {currentQuestionIndex + 1} of {totalCount}
              </span>
            </div>

            {/* Question card */}
            <ExamQuestionCard
              question={currentQuestion}
              selectedIndex={answers[currentQuestionIndex]}
              onSelect={handleSelectAnswer}
              showResult={false}
              questionNumber={currentQuestionIndex + 1}
            />

            {/* Navigation buttons */}
            <div className="mt-6 flex items-center justify-between gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
              >
                &larr; Previous
              </Button>

              <div className="flex items-center gap-3">
                {currentQuestionIndex < totalCount - 1 ? (
                  <Button size="sm" onClick={handleNext}>
                    Next &rarr;
                  </Button>
                ) : null}

                <Button
                  variant={answeredCount === totalCount ? 'primary' : 'outline'}
                  size="sm"
                  onClick={handleSubmitExam}
                >
                  Submit Exam
                </Button>
              </div>
            </div>
          </div>

          {/* Question navigation grid (sidebar) */}
          <div className="order-first lg:order-last">
            <div className="sticky top-[72px]">
              <div className="bg-surface rounded-xl border border-border p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-primary">
                    Questions
                  </h3>
                  <span className="text-xs text-muted">
                    {answeredCount}/{totalCount} answered
                  </span>
                </div>

                <div className="grid grid-cols-8 sm:grid-cols-10 lg:grid-cols-6 gap-1.5">
                  {allQuestions.map((_, index) => {
                    const isAnswered = answers[index] !== null;
                    const isCurrent = index === currentQuestionIndex;

                    return (
                      <button
                        key={index}
                        onClick={() => handleJumpToQuestion(index)}
                        className={cn(
                          'w-8 h-8 rounded-full text-xs font-semibold transition-all duration-150 flex items-center justify-center',
                          isCurrent &&
                            'ring-2 ring-accent ring-offset-2 ring-offset-surface',
                          isAnswered && !isCurrent &&
                            'bg-accent text-white',
                          isAnswered && isCurrent &&
                            'bg-accent text-white',
                          !isAnswered && !isCurrent &&
                            'border-2 border-border text-muted hover:border-accent/40',
                          !isAnswered && isCurrent &&
                            'border-2 border-accent text-accent'
                        )}
                        title={`Question ${index + 1}${isAnswered ? ' (answered)' : ''}`}
                      >
                        {index + 1}
                      </button>
                    );
                  })}
                </div>

                {/* Progress bar */}
                <div className="mt-4">
                  <div className="w-full h-2 rounded-full bg-surface-hover overflow-hidden">
                    <div
                      className="h-full rounded-full bg-accent transition-all duration-300"
                      style={{
                        width: `${totalCount > 0 ? (answeredCount / totalCount) * 100 : 0}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
