import { ExamPracticeTest } from '../types';
import { knmPracticeExam3 } from './knm/practice-exam-3';
import { knmPracticeExam4 } from './knm/practice-exam-4';
import { knmPracticeExam5 } from './knm/practice-exam-5';
import { inburgeringA2Reading1 } from './inburgering-a2/reading-exam-1';
import { inburgeringA2Reading2 } from './inburgering-a2/reading-exam-2';
import { staatsexamenNt2IReading1 } from './staatsexamen-nt2-i/reading-exam-1';
import { staatsexamenNt2IReading2 } from './staatsexamen-nt2-i/reading-exam-2';
import { staatsexamenNt2IIReading1 } from './staatsexamen-nt2-ii/reading-exam-1';
import { staatsexamenNt2IIReading2 } from './staatsexamen-nt2-ii/reading-exam-2';

export const allExams: ExamPracticeTest[] = [
  knmPracticeExam3,
  knmPracticeExam4,
  knmPracticeExam5,
  inburgeringA2Reading1,
  inburgeringA2Reading2,
  staatsexamenNt2IReading1,
  staatsexamenNt2IReading2,
  staatsexamenNt2IIReading1,
  staatsexamenNt2IIReading2,
];

export function getExamById(id: string): ExamPracticeTest | undefined {
  return allExams.find((exam) => exam.id === id);
}

export function getExamsByType(
  examType: ExamPracticeTest['examType']
): ExamPracticeTest[] {
  return allExams.filter((exam) => exam.examType === examType);
}
