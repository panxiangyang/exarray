/**
 * Returns the value of the first element in the array.
 *
 * @function
 * @param  {Any[]} arr A manipulated array
 * @param  {Function} callback A function to test for each element, taking three arguments: element -> the current element，index -> the index of the current element，array -> the array every was called upon
 * @param  {Any} thisArg? A value to use as this when executing callback.
 * @returns {Any|Undefined}
 * @example
 * 
 * const name = find(['fxyu', 'fiyu', 'ftyu'], (name, index, arr) => {
 *  return name.indexOf('fiy') !== -1;
 * });
 * // -> fiyu
 * console.log(name);
 */
const find = (
  arr: any[],
  callback: (element: any, index: number, arr: any[]) => any,
  thisArg?: any
): any | undefined => {
  const l = arr.length;
  for (let i = 0; i < l; i++) {
    if (i in arr && callback.call(thisArg, arr[i], i, arr)) {
      return arr[i];
    }
  }
  return void 0;
};

export default find;
