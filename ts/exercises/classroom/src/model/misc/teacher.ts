import { Person } from '../core/person';

export interface Teacher extends Person {
  subjectId: string;
  superviseeId: string | null;
}
