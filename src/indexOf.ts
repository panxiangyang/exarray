/**
 * Returns the first index at which a given element can be found in the array, or -1 if it is not present.
 *
 * @function
 * @param  {Any[]} arr A manipulated array
 * @param  {Any} search The value to search for.
 * @param  {Number} start The position which to begin searching for valueToFind
 * @returns {Number}
 * @example
 *
 * const list = [10, 20, 10, 30];
 * // -> -1
 * console.log(indexOf(list, 15));
 * // -> 1
 * console.log(indexOf(list, 20));
 *
 * // -> 2
 * console.log(indexOf(list, 10, 1));
 * // -> 2
 * console.log(indexOf(list, 10, -3));
 */
const indexOf = (arr: any[], search: any, start: number = 0): number => {
  const l = arr.length;

  if (l === 0 || start >= l) {
    return -1;
  }
  start = Math.max(start >= 0 ? start : l + start, 0);

  for (; start < l; start++) {
    if (arr[start] === search) {
      return start;
    }
  }
  return -1;
};

export default indexOf;
