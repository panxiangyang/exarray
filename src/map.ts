/**
 * Creates a new array with the results of calling a provided function on every element in the calling array.
 *
 * @function
 * @param  {Any[]} arr A manipulated array
 * @param  {Function} callback A function to test for each element, taking three arguments: element -> the current element，index -> the index of the current element，array -> the array every was called upon
 * @param  {Any} thisArg? A value to use as this when executing callback.
 * @returns {Any[]}
 * @example
 * 
 * // -> [2, 4, 6]
 * console.log(map([1, 2, 3], item => item * 2));
 */
const map = (
  arr: any[],
  callback: (element: any, index: number, arr: any[]) => any,
  thisArg?: any
): any[] => {
  const l = arr.length;
  const result = [];

  for (let i = 0; i < l; i++) {
    result[i] = callback.call(thisArg, arr[i], i, arr);
  }
  return result;
};

export default map;
