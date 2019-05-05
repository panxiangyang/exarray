/**
 * Determine whether at least one element in the array passes the test implemented by the provided function.
 *
 * @function
 * @param  {Any[]} arr A manipulated array
 * @param  {Function} callback A function to test for each element, taking three arguments: element -> the current element，index -> the index of the current element，array -> the array every was called upon
 * @param  {Any} thisArg? A value to use as this when executing callback.
 * @returns {Boolean}
 * @example
 *
 * const list = [1, 2, 4, 5];
 *
 * // -> false
 * console.log(some(list, item => item > 6));
 *
 * // -> true
 * console.log(some(list, item => item > 4));
 */
const some = (
  arr: any[],
  callback: (element: any, index: number, arr: any[]) => boolean,
  thisArg?: any
): boolean => {
  const l = arr.length;
  for (let i = 0; i < l; i++) {
    if (i in arr && callback.call(thisArg, arr[i], i, arr)) {
      return true;
    }
  }
  return false;
};

export default some;
