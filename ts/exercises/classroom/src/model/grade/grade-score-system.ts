import { ObjectValues } from '../core/object-values';

export const GradeScoreSystem = {
  Five: 'five',
  Dozen: 'dozen',
  Alphabet: 'alphabet',
} as const;

export type GradeScoreSystem = ObjectValues<typeof GradeScoreSystem>;
