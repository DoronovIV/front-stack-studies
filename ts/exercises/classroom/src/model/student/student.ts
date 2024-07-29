import { Person } from '../core';

export interface Student extends Person {
  groupId: string;
  subjectList: string[];
}
