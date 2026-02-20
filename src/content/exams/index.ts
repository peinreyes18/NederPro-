import { ExamPracticeTest } from '../types';
import { knmPracticeExam3 } from './knm/practice-exam-3';
import { knmPracticeExam4 } from './knm/practice-exam-4';
import { knmPracticeExam5 } from './knm/practice-exam-5';
import { knmPracticeExam6 } from './knm/practice-exam-6';
import { inburgeringA2Reading1 } from './inburgering-a2/reading-exam-1';
import { inburgeringA2Reading2 } from './inburgering-a2/reading-exam-2';
import { inburgeringA2Reading3 } from './inburgering-a2/reading-exam-3';
import { inburgeringA2Writing1 } from './inburgering-a2/writing-exam-1';
import { inburgeringA2Listening1 } from './inburgering-a2/listening-exam-1';
import { staatsexamenNt2IReading1 } from './staatsexamen-nt2-i/reading-exam-1';
import { staatsexamenNt2IReading2 } from './staatsexamen-nt2-i/reading-exam-2';
import { staatsexamenNt2IReading3 } from './staatsexamen-nt2-i/reading-exam-3';
import { staatsexamenNt2IWriting1 } from './staatsexamen-nt2-i/writing-exam-1';
import { staatsexamenNt2IListening1 } from './staatsexamen-nt2-i/listening-exam-1';
import { staatsexamenNt2IIReading1 } from './staatsexamen-nt2-ii/reading-exam-1';
import { staatsexamenNt2IIReading2 } from './staatsexamen-nt2-ii/reading-exam-2';
import { staatsexamenNt2IIReading3 } from './staatsexamen-nt2-ii/reading-exam-3';
import { staatsexamenNt2IIWriting1 } from './staatsexamen-nt2-ii/writing-exam-1';
import { staatsexamenNt2IIListening1 } from './staatsexamen-nt2-ii/listening-exam-1';

export const allExams: ExamPracticeTest[] = [
  knmPracticeExam3,
  knmPracticeExam4,
  knmPracticeExam5,
  knmPracticeExam6,
  inburgeringA2Reading1,
  inburgeringA2Reading2,
  inburgeringA2Reading3,
  inburgeringA2Writing1,
  inburgeringA2Listening1,
  staatsexamenNt2IReading1,
  staatsexamenNt2IReading2,
  staatsexamenNt2IReading3,
  staatsexamenNt2IWriting1,
  staatsexamenNt2IListening1,
  staatsexamenNt2IIReading1,
  staatsexamenNt2IIReading2,
  staatsexamenNt2IIReading3,
  staatsexamenNt2IIWriting1,
  staatsexamenNt2IIListening1,
];

export function getExamById(id: string): ExamPracticeTest | undefined {
  return allExams.find((exam) => exam.id === id);
}

export function getExamsByType(
  examType: ExamPracticeTest['examType']
): ExamPracticeTest[] {
  return allExams.filter((exam) => exam.examType === examType);
}
