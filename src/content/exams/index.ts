import { ExamPracticeTest } from '../types';
import { knmPracticeExam3 } from './knm/practice-exam-3';

export const allExams: ExamPracticeTest[] = [knmPracticeExam3];

export function getExamById(id: string): ExamPracticeTest | undefined {
  return allExams.find((exam) => exam.id === id);
}

export function getExamsByType(
  examType: ExamPracticeTest['examType']
): ExamPracticeTest[] {
  return allExams.filter((exam) => exam.examType === examType);
}
