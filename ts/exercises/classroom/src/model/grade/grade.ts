import { GradeScoreSystem } from './grade-score-system';

export interface Grade {
  id: string;
  value: number;
  scoreSystem: GradeScoreSystem;
  studentId: string;
  subjectId: string;
  teacherId: string;
  date: Date;
}
