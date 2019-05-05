/**
 * Executes a provided function once for each array element.
 *
 * @function
 * @param  {Any[]} arr A manipulated array
 * @param  {Function} callback A function to test for each element, taking three arguments: element -> the current element，index -> the index of the current element，array -> the array every was called upon
 * @param  {Any} thisArg? A value to use as this when executing callback.
 * @example
 *
 * forEach(['F', 'x'], (item, index, arr) => {
 *  // -> 'F', 0, ['F', 'x']
 *  // -> 'x', 1, ['F', 'x']
 *  console.log(item, index, arr);
 * });
 */
const forEach = (
  arr: any[],
  callback: (element: any, index: number, arr: any[]) => void | boolean,
  thisArg?: any
): void => {
  const l = arr.length;
  for (let i = 0; i < l; i++) {
    if (i in arr && callback.call(thisArg, arr[i], i, arr)) {
      return; // 回调返回 false 结束循环
    }
  }
};

export default forEach;
