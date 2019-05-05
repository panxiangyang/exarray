/**
 * Creates a new array with all elements that pass the test implemented by the provided function.
 *
 * @function
 * @param  {Any[]} arr A manipulated array
 * @param  {Function} callback A function to test for each element, taking three arguments: element -> the current element，index -> the index of the current element，array -> the array every was called upon
 * @param  {Any} thisArg? A value to use as this when executing callback.
 * @returns {Any[]}
 * @example
 * 
 * const greaterAge = filter([10, 20, 15, 30], (age, index, arr) => {
 *  return age > 15;
 * });
 * // -> [20, 30]
 * console.log(greaterAge);
 */
const filter = (
  arr: any[],
  callback: (element: any, index: number, arr: any[]) => boolean,
  thisArg?: any
): any[] => {
  const l = arr.length;
  const result = [];

  for (let i = 0; i < l; i++) {
    if (i in arr && callback.call(thisArg, arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
};

export default filter;
