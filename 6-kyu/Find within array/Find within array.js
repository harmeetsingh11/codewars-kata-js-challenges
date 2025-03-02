const findInArray = (arr, fn) => arr.findIndex(fn);

// Explanation:
// 1. The `findIndex` method is used, which is the most efficient and concise way to find the index of the first element
//    that satisfies the provided testing function.
// 2. It iterates through the array and applies `fn(value, index)` automatically.
// 3. If a match is found, it returns the index; otherwise, it returns -1.

var trueIfEven = (value, index) => value % 2 === 0;
console.log(findInArray([1, 3, 5, 6, 7], trueIfEven)); // Output: 3
