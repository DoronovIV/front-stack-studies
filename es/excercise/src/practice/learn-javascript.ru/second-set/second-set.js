import clone from 'just-clone';

/** 13 tasks in total */
export class SecondSet {
  /**
   * @param {*} input input object entries
   */
  static 1(input) {
    if (typeof input === 'object') {
      return Object.entries(input);
    }

    return null;
  }

  /**
   * @param {*} input object with any property
   * @param {*} propertyToDelete property to be deleted
   * @returns new object without input property if inputs are correct, otherwise null
   */
  static 2(input, propertyToDelete) {
    if (typeof input === 'object') {
      if (propertyToDelete) {
        if (input[propertyToDelete]) {
          const newObject = clone(input);
          delete newObject[propertyToDelete];

          return newObject;
        }
      }
    }

    return null;
  }
}
