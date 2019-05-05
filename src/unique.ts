/**
 * Remove duplicate elements from an array.
 *
 * @function
 * @param  {Any[]} arr A manipulated array
 * @returns {Any[]}
 * @example
 *
 * const list = [1, 2, 3, 1, 4];
 *
 * // -> [1, 2, 3, 4]
 * console.log(unique(list));
 */
const unique = (arr: any[]): any[] => {
  const l = arr.length;
  const result = [];

  arr.sort();

  for (let i = 0; i < l; i++) {
    if (arr[i] !== arr[i + 1]) {
      result.push(arr[i]);
    }
  }

  return result;
};

export default unique;
