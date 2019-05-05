/**
 * Shuffle the array using the modern version of the Fisher-Yates shuffle.
 *
 * @function
 * @see https://bost.ocks.org/mike/shuffle/
 * @see https://en.wikipedia.org/wiki/Fisher-Yates_shuffle
 * @param  {Any[]} arr A manipulated array
 * @returns {Any[]}
 * @example
 *
 * const list = [1, 2, 3, 4];
 * console.log(shuffle(list));
 * console.log(shuffle(list));
 */
const shuffle = (arr: any[] = []): any[] => {
  const length = arr.length;
  if (!length) {
    return [];
  }
  let index = -1;
  const lastIndex = length - 1;
  const result = [].slice.call(arr);
  while (++index < length) {
    const rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
    const value = result[rand];
    result[rand] = result[index];
    result[index] = value;
  }
  return result;
};
export default shuffle;
