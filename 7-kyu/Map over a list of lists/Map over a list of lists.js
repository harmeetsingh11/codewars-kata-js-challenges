const gridMap = (fn, xss) => xss.map((row) => row.map(fn));

const xss1 = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log(gridMap((x) => x + 1, xss1)); // [[2,3,4],[5,6,7]]
console.log(gridMap((x) => x ** 2, xss1)); // [[1,4,9],[16,25,36]]

const xss2 = [
  ['h', 'E', 'l', 'l', 'O'],
  ['w', 'O', 'r', 'L', 'd'],
];
console.log(gridMap((x) => x.toUpperCase(), xss2)); // [['H','E','L','L','O'],['W','O','R','L','D']]

/*
### Explanation:
1. **`map` on outer array (`xss.map(...)`)** → Iterates over each sub-array.
2. **`map` on inner array (`row.map(fn)`)** → Applies the function `fn` to each element inside that sub-array.
3. **Returns a new transformed 2D array** without modifying the original array.  

This solution is both **concise (one-liner), efficient (O(n) complexity), and readable** while leveraging JavaScript's built-in higher-order functions.
*/
