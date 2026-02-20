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
import ListeningPlayer from '@/components/exams/ListeningPlayer';

export default function ExamPage() {
  const params = useParams();
  const router = useRouter();
  const examId = params.examId as string;

  const exam = getExamById(examId);

  // Flatten all questions across sections into a single ordered array,
  // and build a parallel array mapping each question index to its section.
  const { allQuestions, questionSections } = useMemo(() => {
    if (!exam) return { allQuestions: [] as ExamQuestion[], questionSections: [] as import('@/content/types').ExamSection[] };
    const questions: ExamQuestion[] = [];
    const sections: typeof exam.sections = [];
    for (const section of exam.sections) {
      for (const q of section.questions) {
        questions.push(q);
        sections.push(section);
      }
    }
    return { allQuestions: questions, questionSections: sections };
  }, [exam]);

  // Multiple-choice / true-false answers: number | null
  const [answers, setAnswers] = useState<(number | null)[]>(() =>
    new Array(allQuestions.length).fill(null)
  );
  // Writing answers: typed text
  const [writingAnswers, setWritingAnswers] = useState<string[]>(() =>
    new Array(allQuestions.length).fill('')
  );
  // Writing self-assessment: 0 = not assessed, 1 = did well, -1 = needs practice
  const [writingSelfAssess, setWritingSelfAssess] = useState<number[]>(() =>
    new Array(allQuestions.length).fill(0)
  );

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [examFinished, setExamFinished] = useState(false);
  const [timerRunning, setTimerRunning] = useState(true);

  // A question counts as "answered" if it has a selected option (MC/TF)
  // or a non-empty writing response with a self-assessment
  const answeredCount = allQuestions.filter((q, i) => {
    if (q.type === 'writing') {
      return writingAnswers[i].trim().length > 0 && writingSelfAssess[i] !== 0;
    }
    return answers[i] !== null;
  }).length;
  const totalCount = allQuestions.length;

  function handleSelectAnswer(optionIndex: number) {
    setAnswers((prev) => {
      const updated = [...prev];
      updated[currentQuestionIndex] = optionIndex;
      return updated;
    });
  }

  function handleWritingChange(value: string) {
    setWritingAnswers((prev) => {
      const updated = [...prev];
      updated[currentQuestionIndex] = value;
      return updated;
    });
  }

  function handleWritingSelfAssess(value: number) {
    setWritingSelfAssess((prev) => {
      const updated = [...prev];
      updated[currentQuestionIndex] = value;
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
    setWritingAnswers(new Array(allQuestions.length).fill(''));
    setWritingSelfAssess(new Array(allQuestions.length).fill(0));
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
          writingAnswers={writingAnswers}
          writingSelfAssess={writingSelfAssess}
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

            {/* Passage / audio for current question (if any) */}
            {(() => {
              const section = questionSections[currentQuestionIndex];
              if (!section?.passage) return null;

              // Listening exam: show audio player
              if (exam.skill === 'listening') {
                return (
                  <ListeningPlayer
                    key={section.id}
                    text={section.passage}
                    sectionTitle={section.passageTitle}
                    maxPlays={2}
                  />
                );
              }

              // Reading exam: show passage as text
              return (
                <div className="mb-6 bg-surface border border-border rounded-xl p-5">
                  {section.passageTitle && (
                    <h2 className="text-sm font-semibold text-accent mb-3 uppercase tracking-wide">
                      {section.passageTitle}
                    </h2>
                  )}
                  <p className="text-sm text-primary leading-relaxed whitespace-pre-line">
                    {section.passage}
                  </p>
                  {section.instructions && (
                    <p className="mt-3 text-xs text-muted italic border-t border-border pt-3">
                      {section.instructions}
                    </p>
                  )}
                </div>
              );
            })()}

            {/* Question card */}
            <ExamQuestionCard
              question={currentQuestion}
              selectedIndex={answers[currentQuestionIndex]}
              onSelect={handleSelectAnswer}
              writingAnswer={writingAnswers[currentQuestionIndex]}
              onWritingChange={handleWritingChange}
              writingSelfAssess={writingSelfAssess[currentQuestionIndex]}
              onWritingSelfAssess={handleWritingSelfAssess}
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
                  {allQuestions.map((q, index) => {
                    const isAnswered =
                      q.type === 'writing'
                        ? writingAnswers[index].trim().length > 0 && writingSelfAssess[index] !== 0
                        : answers[index] !== null;
                    const isCurrent = index === currentQuestionIndex;
                    const isWriting = q.type === 'writing';

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
                          !isAnswered && !isCurrent && !isWriting &&
                            'border-2 border-border text-muted hover:border-accent/40',
                          !isAnswered && !isCurrent && isWriting &&
                            'border-2 border-dashed border-border text-muted hover:border-accent/40',
                          !isAnswered && isCurrent &&
                            'border-2 border-accent text-accent'
                        )}
                        title={`Question ${index + 1}${isWriting ? ' (writing)' : ''}${isAnswered ? ' (answered)' : ''}`}
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

                {/* Legend if there are writing questions */}
                {allQuestions.some((q) => q.type === 'writing') && (
                  <p className="text-xs text-muted mt-3">
                    Dashed border = writing task
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
