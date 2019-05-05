(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.Exa = {}));
}(this, function (exports) { 'use strict';

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
  var every = function(arr, callback, thisArg) {
    var l = arr.length;
    for (var i = 0; i < l; i++) {
      if (i in arr && !callback.call(thisArg, arr[i], i, arr)) {
        return false;
      }
    }
    return true;
  };

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
  var some = function(arr, callback, thisArg) {
    var l = arr.length;
    for (var i = 0; i < l; i++) {
      if (i in arr && callback.call(thisArg, arr[i], i, arr)) {
        return true;
      }
    }
    return false;
  };

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
  var filter = function(arr, callback, thisArg) {
    var l = arr.length;
    var result = [];
    for (var i = 0; i < l; i++) {
      if (i in arr && callback.call(thisArg, arr[i], i, arr)) {
        result.push(arr[i]);
      }
    }
    return result;
  };

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
  var forEach = function(arr, callback, thisArg) {
    var l = arr.length;
    for (var i = 0; i < l; i++) {
      if (i in arr && callback.call(thisArg, arr[i], i, arr)) {
        return; // 回调返回 false 结束循环
      }
    }
  };

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
  var map = function(arr, callback, thisArg) {
    var l = arr.length;
    var result = [];
    for (var i = 0; i < l; i++) {
      result[i] = callback.call(thisArg, arr[i], i, arr);
    }
    return result;
  };

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
  var find = function(arr, callback, thisArg) {
    var l = arr.length;
    for (var i = 0; i < l; i++) {
      if (i in arr && callback.call(thisArg, arr[i], i, arr)) {
        return arr[i];
      }
    }
    return void 0;
  };

  /**
   * Returns the first index at which a given element can be found in the array, or -1 if it is not present.
   *
   * @function
   * @param  {Any[]} arr A manipulated array
   * @param  {Any} search The value to search for.
   * @param  {Number} start The position which to begin searching for valueToFind
   * @returns {Number}
   * @example
   *
   * const list = [10, 20, 10, 30];
   * // -> -1
   * console.log(indexOf(list, 15));
   * // -> 1
   * console.log(indexOf(list, 20));
   *
   * // -> 2
   * console.log(indexOf(list, 10, 1));
   * // -> 2
   * console.log(indexOf(list, 10, -3));
   */
  var indexOf = function(arr, search, start) {
    if (start === void 0) {
      start = 0;
    }
    var l = arr.length;
    if (l === 0 || start >= l) {
      return -1;
    }
    start = Math.max(start >= 0 ? start : l + start, 0);
    for (; start < l; start++) {
      if (arr[start] === search) {
        return start;
      }
    }
    return -1;
  };

  /**
   * Returns the last index at which a given element can be found in the array, or -1 if it is not present.
   *
   * @function
   * @param  {Any[]} arr A manipulated array
   * @param  {Any} search The value to search for.
   * @param  {Number} start The position which to begin searching for valueToFind
   * @returns {Number}
   * @example
   *
   * const list = [10, 20, 10, 30];
   * // -> -1
   * console.log(lastIndexOf(list, 15));
   * // -> 1
   * console.log(lastIndexOf(list, 20));
   *
   * // -> -1
   * console.log(lastIndexOf(list, 10, 5));
   * // -> 0
   * console.log(lastIndexOf(list, 10, -3));
   */
  var lastIndexOf = function(arr, search, start) {
    var l = arr.length;
    start = start || l - 1;
    if (l === 0 || start >= l) {
      return -1;
    }
    start = Math.max(start >= 0 ? start : l + start, 0);
    while (start--) {
      if (arr[start] === search) {
        return start;
      }
    }
    return -1;
  };

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
  var unique = function(arr) {
    var l = arr.length;
    var result = [];
    arr.sort();
    for (var i = 0; i < l; i++) {
      if (arr[i] !== arr[i + 1]) {
        result.push(arr[i]);
      }
    }
    return result;
  };

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
  var shuffle = function(arr) {
    if (arr === void 0) {
      arr = [];
    }
    var length = arr.length;
    if (!length) {
      return [];
    }
    var index = -1;
    var lastIndex = length - 1;
    var result = [].slice.call(arr);
    while (++index < length) {
      var rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
      var value = result[rand];
      result[rand] = result[index];
      result[index] = value;
    }
    return result;
  };

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
  var cloneArray = function(arr) {
    if (arr === void 0) {
      arr = [];
    }
    return [].slice.call(arr, 0);
  };

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
  var includes = function(arr, search, start) {
    if (start === void 0) {
      start = 0;
    }
    var l = arr.length;
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

  exports.cloneArray = cloneArray;
  exports.every = every;
  exports.filter = filter;
  exports.find = find;
  exports.forEach = forEach;
  exports.includes = includes;
  exports.indexOf = indexOf;
  exports.lastIndexOf = lastIndexOf;
  exports.map = map;
  exports.shuffle = shuffle;
  exports.some = some;
  exports.unique = unique;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
