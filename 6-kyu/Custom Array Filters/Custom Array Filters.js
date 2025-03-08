// Extend Array prototype to add custom filter methods
Array.prototype.even = function () {
  return this.filter((n) => Number.isInteger(n) && n % 2 === 0);
};

Array.prototype.odd = function () {
  return this.filter((n) => Number.isInteger(n) && n % 2 !== 0);
};

Array.prototype.under = function (limit) {
  return this.filter((n) => Number.isInteger(n) && n < limit);
};

Array.prototype.over = function (limit) {
  return this.filter((n) => Number.isInteger(n) && n > limit);
};

Array.prototype.inRange = function (min, max) {
  return this.filter((n) => Number.isInteger(n) && n >= min && n <= max);
};

console.log([1, 2, 3, 4, 5].even()); // [2, 4]
console.log([1, 2, 3, 4, 5].odd()); // [1, 3, 5]
console.log([1, 2, 3, 4, 5].under(4)); // [1, 2, 3]
console.log([1, 2, 3, 4, 5].over(4)); // [5]
console.log([1, 2, 3, 4, 5].inRange(1, 3)); // [1, 2, 3]
console.log([1, 2, 18, 19, 20, 21, 22, 30, 40, 50, 100].even().inRange(18, 30)); // [18, 20, 22, 30]
console.log(['a', 1, 'b', 300, 'x', 'q', 63, 122, 181, 'z', 0.83, 0.11].even()); // [300, 122]

/* 
### Explanation:
1. **Using `Array.prototype`**: We extend the prototype of `Array` so that all arrays automatically have these methods available.
2. **Filtering integers only**: `Number.isInteger(n)` ensures that only integers are processed, ignoring non-integer and non-numeric values.
3. **Efficient filtering**: Each method uses `.filter()`, a built-in efficient JavaScript function.
4. **Chaining support**: Since `filter()` returns an array, these methods can be chained for combined filtering.
*/
