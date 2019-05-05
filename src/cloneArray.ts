/**
 * Returns a new clone Array.
 *
 * @function
 * @param {Any[]} arr a manipulated array
 * @returns {Any[]}
 * @example
 *
 *  const arr = cloneArray([1, 2, 3]);
 *  // -> [1, 2, 3]
 *  console.log(arr);
 */
const cloneArray = (arr: any[] = []): any[] => {
  return [].slice.call(arr, 0);
};
export default cloneArray;
