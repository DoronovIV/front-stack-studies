'use strict';

import clone from 'just-clone';
import { SecondSet } from './second-set.js';

/** bit shorter version of JSON.stringify */
const str = (input) => {
  return JSON.stringify(input);
};

/** The unit tested */
let testFn = null;
let checkFn = null;

let input = null;
let expectedOutput = null;

/** Task 1 */
describe('task 1 object entries', () => {
  beforeEach(() => {
    testFn = SecondSet[1];
  });

  it('should return positive example results', () => {
    input = { a: 1, b: 2 };
    expectedOutput = [
      ['a', 1],
      ['b', 2],
    ];

    expect(str(testFn(input))).toBe(str(expectedOutput));
  });

  it('should return negative altered example results', () => {
    input = { a: 1, b: 2, c: 3 };
    expectedOutput = [
      ['a', 1],
      ['b', 2],
    ];

    expect(str(testFn(input))).not.toBe(str(expectedOutput));
  });

  it('should return null on wrong input', () => {
    input = 'aaa';
    expectedOutput = null;

    expect(testFn(input)).toBe(expectedOutput);
  });
});

/** Task 2 */
describe('task 2 property deletion', () => {
  beforeEach(() => {
    testFn = SecondSet[2];
  });

  it('should succeed for example values', () => {
    input = { a: 1, b: 2 };
    expectedOutput = { a: 1 };

    expect(str(testFn(input, 'b'))).toBe(str(expectedOutput));
  });

  it('should succeed for array property', () => {
    input = { a: 1, b: 2, c: [{ b: 1 }] };
    expectedOutput = { a: 1, b: 2 };

    expect(str(testFn(input, 'c'))).toBe(str(expectedOutput));
  });

  it('should return null for nested properties', () => {
    input = { a: 1, b: 2, c: { d: 1 } };
    expectedOutput = clone(input);

    expect(str(testFn(input, 'd'))).toBe(str(null));
  });

  it('should return null on wrong type of input', () => {
    input = 'aaa';
    expectedOutput = null;

    expect(testFn(input)).toBe(null);
  });

  it('should return null if property does not exist', () => {
    input = { a: 1, b: 2 };
    expectedOutput = clone(input);

    expect(testFn(input, 'c')).toBe(null);
  });
});

/** Task 3 */
describe('task 3', () => {});
