# ExArray

Extended array operation. Support for all major browsers.

- Works in IE8+
- Accepts any character
- Heavily tested
- No dependency
- Supports CommonJS/ES Module/UMD

## Installation

### Direct download

Download the script from `dist/exarray.umd.js` and include it.

```html
<script src="/path/to/exarray.umd.js"></script>
```

### Package Managers

```
npm install exarray --save
```

## Basic Usage

### UMD

```javascript
// Returns a new clone array.
Exa.cloneArray([1, 2, 3]);
```

### CJS / ES

```javascript
import { cloneArray } from 'exarray';

// Returns a new clone array.
cloneArray([1, 2, 3]);
```

## API

| Method             | Parameter  | Returns  | Describe     |
| ------------------ | --------------- | -------- | ---------------- |
| cloneArray | (arr: any[]) | Array<any> | Returns a new clone Array. |
| every | (arr: any[], callback: (element: any, index: number, arr: any[]) => boolean, thisArg?: any) | Boolean | Determine whether all of the elements match a truth test. |
| filter | (arr: any[], callback: (element: any, index: number, arr: any[]) => boolean, thisArg?: any) | Array<any> | Creates a new array with all elements that pass the test implemented by the provided function. |
| find | (arr: any[], callback: (element: any, index: number, arr: any[]) => boolean, thisArg?: any) | Any or Undefined| Returns the value of the first element in the array. |
| forEach | (arr: any[], callback: (element: any, index: number, arr: any[]) => boolean, thisArg?: any) | Void | Executes a provided function once for each array element. |
| includes |  (arr: any[], search: any, start: number = 0) | Boolean | Determines whether an array includes a certain value among its entries, returning true or false as appropriate. |
| indexOf |  (arr: any[], search: any, start: number = 0) | Number | Returns the first index at which a given element can be found in the array, or -1 if it is not present. |
| lastIndexOf |  (arr: any[], search: any, start: number = 0) | Number | Returns the last index at which a given element can be found in the array, or -1 if it is not present. |
| map | (arr: any[], callback: (element: any, index: number, arr: any[]) => boolean, thisArg?: any) | Array<any> | Creates a new array with the results of calling a provided function on every element in the calling array.|
| shuffle | (arr: any[]) | Array<any> | Shuffle the array using the modern version of the Fisher-Yates shuffle. |
| some | (arr: any[], callback: (element: any, index: number, arr: any[]) => boolean, thisArg?: any) | Boolean | Determine whether at least one element in the array passes the test implemented by the provided function. |
| unique | (arr: any[]) | Array<any> | Remove duplicate elements from an array. |