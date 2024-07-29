'use strict';

/** 15 tasks in total */
export class FirstSet {
  /** expected result: [2, 1] */
  static 1() {
    let a = 1;
    let b = 1;

    let c = ++a; // 2
    let d = b++; // 1

    return [c, d];
  }

  /** expected result: [4, 5] */
  static 2() {
    let a = 2; // 2 -> 4

    let x = 1 + (a *= 2); // 5

    return [a, x];
  }

  /**
   * initially expected result: [10,10,1,2,5,'45px','$45',2,NaN,' -9 5',NaN,1,NaN,NaN]
   * actual result:             ['10',-1,1,2,5,'9px','$45',2,NaN,' -9 5',NaN,1,NaN,NaN]
   *  */

  static 3() {
    //     initial thoughts:        errors:
    return [
      '' + 1 + 0, //     10         // '10'
      '' - 1 + 0, //     10         // -1
      true + false, //   1
      6 / '3', //        2
      '2' * '3', //      6
      4 + 5 + 'px', //   '45px'     // '9px'
      '$' + 4 + 5, //    '$45'
      '4' - 2, //         2
      '4px' - 2, //       NaN
      '  -9  ' + 5, //    ' -9 5'
      '  -9  ' - 5, //    NaN
      null + 1, //        1
      undefined + 1, //   NaN
      ' \t \n' - 2, //    NaN       // -2
    ];
  }

  /** expected result: 3 */
  static 4() {
    let resultArray = [];

    const A = prompt('first value: ');
    const B = prompt('second value: ');

    resultArray = [A, B].map((val) => {
      return Number(val);
    });

    console.log('\nstring result:', A + B);

    return resultArray.reduce((sum, val) => {
      return sum + val;
    }, 0);
  }

  static 5() {
    return [
      5 > 4, //                   // true    // no comment
      'ананас' > 'яблоко', //     // false   // if length is identical, strings are compared char by char
      '2' > '12', //              // -false- // STRINGS ARE NEVER COMPARED BY LENGTH
      undefined == null, //       // true    // undefined is loosely equal to null by default
      undefined === null, //      // false   // undefined does not strictly equal to anything
      null == '\n0\n', //         // -true-  // NULL DOES NOT EQUAL ZERO BY ANY EQUALITY OPERATOR
      null === +'\n0\n', //        // false   // null will be strictly compared to zero
    ];
  }

  static 6(login) {
    const isEmployee = login === 'Сотрудник' || login === 'Директор';

    return login
      ? isEmployee
        ? login === 'Директор'
          ? 'Здравствуйте'
          : 'Привет'
        : 'Нет логина'
      : '';
  }

  static 7() {
    if (-1 || 0) console.log('first'); //            // true  // [..., -1: true, 0: false, 1: true, ...]
    if (-1 && 0) console.log('second'); //           // false // same, but logical multiplication resolves in false
    if (null || (-1 && 1)) console.log('third'); //  // true  // -1 ^ 1 resolves in true, true v false - in true
  }

  static 8() {
    let i = 3;

    while (i) {
      i--;
    }

    return i; // 0 // the condition reads '0' and breaks the loop
  }

  static 9() {
    let i, j;

    // Постфиксная форма:
    for (i = 0; i < 5; i++) {}

    // Префиксная форма:
    for (j = 0; j < 5; ++j) {}

    return [i, j]; // [0, 0] since there will be no difference
    // although I've heard that in C++ there actually was difference
    // at some point, specifically prefix form worked q&q "faster".
  }

  static 10(inputSteps) {
    let steps = 0;

    if (inputSteps) {
      steps = inputSteps;
    }

    let i = 0;

    while (i < steps) {
      i++;
    }

    return i;
  }

  static 11() {
    let promptResult;
    let condition = false;

    do {
      promptResult = Number(prompt('Enter a number greater than 100: '));
      condition = isNaN(promptResult) || promptResult <= 100;
    } while (condition);

    return promptResult;
  }

  static 12(inputLimit) {
    let limit;
    const primeNumbers = [];

    if (inputLimit === undefined) {
      limit = prompt('Enter a limit number: ');
    } else {
      limit = inputLimit;
    }

    if (limit < 1) {
      return [];
    }

    outerLoop: for (let i = 2; i <= limit; i++) {
      for (let j = 0; j < i; j++) {
        if (i % j === 0) {
          continue outerLoop;
        }

        if (!primeNumbers.find((el) => el === i)) {
          primeNumbers.push(i);
        }
      }
    }

    return primeNumbers;
  }

  static 13(input) {
    if (input === null || input === undefined) {
      return null;
    }

    switch (input) {
      case 0:
        return 0;
      case 1:
        return 1;
      case 2:
      case 3:
        return '2 или 3';
    }
  }

  static 14(inputA, inputB) {
    if ([inputA, inputB].some((v) => v === null || v === undefined)) {
      return null;
    }

    if (inputA < inputB || isNaN(inputA)) {
      return inputA;
    }

    return inputB;
  }

  static 15(question) {
    if (question) {
      const yes = () => {
        return 'Вы согласились.';
      };
      const no = () => {
        return 'Вы отменили выполнение.';
      };

      const confirm = () => {
        return question.length > 10;
      };

      /** FE restructured into AF */
      const ask = () => {
        if (confirm(question)) return yes();
        else return no();
      };

      return ask();
    }

    return null;
  }
}
