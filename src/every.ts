/**
 * Determine whether all of the elements match a truth test.
 *
 * @function
 * @param  {Any[]} arr A manipulated array
 * @param  {Function} callback A function to test for each element, taking three arguments: element -> the current element，index -> the index of the current element，array -> the array every was called upon
 * @param  {Any} thisArg? A value to use as this when executing callback.
 * @returns {Boolean}
 * @example
 *
 * const allAgeGT20 = every([12, 30, 40], (element, index, array) => {
 *  return element > 20;
 * });
 * // -> false
 * console.log(allAgeGT20);
 */
const every = (
  arr: any[],
  callback: (element: any, index: number, arr: any[]) => boolean,
  thisArg?: any
): boolean => {
  const l = arr.length;
  for (let i = 0; i < l; i++) {
    if (i in arr && !callback.call(thisArg, arr[i], i, arr)) {
      return false;
    }
  }
  return true;
};

export default every;
