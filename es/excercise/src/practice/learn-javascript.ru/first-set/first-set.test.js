import { FirstSet } from './first-set.js';

describe('task 6 ternary expression', () => {
  let fn = null;

  beforeEach(() => {
    fn = FirstSet[6];
  });

  it("should return 'Привет'", () => {
    expect(fn('Сотрудник')).toEqual('Привет');
  });

  it("should return 'Здравствуйте'", () => {
    expect(fn('Директор')).toEqual('Здравствуйте');
  });

  it("should return 'Нет логина'", () => {
    expect(fn('pizza')).toEqual('Нет логина');
  });

  it('should return empty string', () => {
    expect(fn('')).toEqual('');
  });
});

describe('task 10 loop replacement', () => {
  let testFn = null;
  let runComparatorLogic = null;

  let runForLoop = null;
  let steps = null;

  beforeEach(() => {
    steps = null;

    testFn = FirstSet[10];
    runForLoop = (steps) => {
      let i = 0;

      for (; i < steps; i++) {}

      return i;
    };

    runComparatorLogic = () => {
      return [runForLoop(steps), testFn(steps)];
    };
  });

  it('should return 3', () => {
    steps = 3;

    const [forLoopResult, whileLoopResult] = runComparatorLogic();

    expect(forLoopResult).toEqual(whileLoopResult);
  });

  it('should return 1', () => {
    steps = 1;

    const [forLoopResult, whileLoopResult] = runComparatorLogic();

    expect(forLoopResult).toEqual(whileLoopResult);
  });

  it('should return 0 (no input argument)', () => {
    const [forLoopResult, whileLoopResult] = runComparatorLogic();

    expect(forLoopResult).toEqual(whileLoopResult);
  });
});

describe('task 12 prime number search within a limit', () => {
  let fn = null;

  beforeEach(() => {
    fn = FirstSet[12];
  });

  it('should return empty array for 0', () => {
    expect(fn(0)).toEqual([]);
  });

  it('should return [] for 1', () => {
    expect(fn(1)).toEqual(expect.arrayContaining([]));
  });

  it('should return 2, 3 and 5 for 6', () => {
    expect(fn(6)).toEqual(expect.arrayContaining([2, 3, 5]));
  });

  it('should return 2, 3, 5, 7 for 10', () => {
    expect(fn(10)).toEqual(expect.arrayContaining([2, 3, 5, 7]));
  });
});

describe("task 13 'if' to 'switch' migration", () => {
  let testFn = null;
  let checkFn = null;

  let input = null;

  beforeEach(() => {
    testFn = FirstSet[13];

    checkFn = (input) => {
      const number = input;

      if (number === 0) {
        return 0;
      }

      if (number === 1) {
        return 1;
      }

      if (number === 2 || number === 3) {
        return '2 или 3';
      }
    };
  });

  it('should return 0', () => {
    input = 0;

    expect(testFn(input)).toEqual(checkFn(input));
  });

  it('should return 1', () => {
    input = 1;

    expect(testFn(input)).toEqual(checkFn(input));
  });

  it("should return '2 или 3' for 2", () => {
    input = 2;

    expect(testFn(input)).toEqual(checkFn(input));
  });

  it("should return '2 или 3' for 3", () => {
    input = 3;

    expect(testFn(input)).toEqual(checkFn(input));
  });
});

describe('task 14 find min value', () => {
  let testFn = null;
  let checkFn = null;

  let inputA = null;
  let inputB = null;

  beforeEach(() => {
    testFn = FirstSet[14];

    checkFn = () => {
      return Math.min(inputA, inputB);
    };
  });

  it('should return 0 of 1 and 0', () => {
    [inputA, inputB] = [1, 0];

    expect(testFn(inputA, inputB)).toEqual(checkFn(inputA, inputB));
  });

  it('should return 1 of 1 and 1', () => {
    [inputA, inputB] = [1, 1];

    expect(testFn(inputA, inputB)).toEqual(checkFn(inputA, inputB));
  });

  it('should return 5 of 5 and 55', () => {
    [inputA, inputB] = [5, 55];

    expect(testFn(inputA, inputB)).toEqual(checkFn(inputA, inputB));
  });

  it('should return -Infinity of -Infinity and Infinity', () => {
    [inputA, inputB] = [-Infinity, Infinity];

    expect(testFn(inputA, inputB)).toEqual(checkFn(inputA, inputB));
  });

  it('should return NaN of NaN and NaN', () => {
    [inputA, inputB] = [NaN, NaN];

    expect(testFn(inputA, inputB)).toEqual(checkFn(inputA, inputB));
  });

  it('should return NaN of NaN and 1', () => {
    [inputA, inputB] = [NaN, 1];

    expect(testFn(inputA, inputB)).toEqual(checkFn(inputA, inputB));
  });

  it('should return NaN of 1 and NaN', () => {
    [inputA, inputB] = [1, NaN];

    expect(testFn(inputA, inputB)).toEqual(checkFn(inputA, inputB));
  });
});

describe('task 15 function expression vs arrow lambda', () => {
  let testFn = null;
  let checkFn = null;

  let confirm = null;
  let question = null;

  let yes = null;
  let no = null;

  beforeEach(() => {
    testFn = FirstSet[15];

    yes = () => {
      return 'Вы согласились.';
    };
    no = () => {
      return 'Вы отменили выполнение.';
    };

    confirm = (question) => {
      return question.length > 10;
    };

    checkFn = function ask(question) {
      if (confirm(question)) return yes();
      else return no();
    };
  });

  it("should return 'Вы отменили выполнение.'", () => {
    question = 'sadfa';

    expect(testFn(question)).toEqual(checkFn(question));
  });

  it("should return 'Вы согласились.' for long string", () => {
    question = '11111111111111111111111111111111111111';

    expect(testFn(question)).toEqual(checkFn(question));
  });

  it("should return 'Вы согласились.' for default 'Вы согласны?' string", () => {
    question = 'Вы согласны?';

    expect(testFn(question)).toEqual(checkFn(question));
  });
});
