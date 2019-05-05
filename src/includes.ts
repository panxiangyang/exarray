/**
 * Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
 *
 * @function
 * @param  {Any[]} arr A manipulated array
 * @param  {Any} search The value to search for.
 * @param  {Number} start The position which to begin searching for valueToFind
 * @returns {Boolean}
 * @example
 *
 * const list = [10, 20, 30];
 *
 * // -> false
 * console.log(includes(list, 5));
 * // -> true
 * console.log(includes(list, 10));
 *
 * // -> true
 * console.log(includes(list, 20, 1));
 * // -> true
 * console.log(includes(list, 20, -3));
 */
const includes = (arr: any[], search: any, start: number = 0): boolean => {
  const l = arr.length;

  if (!l) {
    return false;
  }
  start = Math.max(start >= 0 ? start : l + start, 0);
  while (start < l) {
    if (arr[start] === search) {
      return true;
    }
    start++;
  }
  return false;
};
export default includes;
