/**
 * Returns the last index at which a given element can be found in the array, or -1 if it is not present.
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
 * console.log(lastIndexOf(list, 15));
 * // -> 1
 * console.log(lastIndexOf(list, 20));
 *
 * // -> -1
 * console.log(lastIndexOf(list, 10, 5));
 * // -> 0
 * console.log(lastIndexOf(list, 10, -3));
 */
const lastIndexOf = (arr: any[], search: any, start?: number): number => {
  const l = arr.length;

  start = start || l - 1;
  if (l === 0 || start >= l) {
    return -1;
  }
  start = Math.max(start >= 0 ? start : l + start, 0);
  while (start--) {
    if (arr[start] === search) {
      return start;
    }
  }
  return -1;
};

export default lastIndexOf;
