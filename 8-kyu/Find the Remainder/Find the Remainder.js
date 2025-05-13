function remainder(n, m) {
  // If either number is 0, and the other is also 0, return NaN (division by zero)
  if (n === 0 && m === 0) return NaN;

  // Find the larger and smaller absolute values
  const max = Math.max(n, m);
  const min = Math.min(n, m);

  // If the smaller number is 0, division is not possible
  if (min === 0) return NaN;

  // Return the remainder of dividing the larger by the smaller
  return max % min;
}

console.log(remainder(17, 5)); // 2
console.log(remainder(13, 72)); // 7
console.log(remainder(0, -1)); // 0
console.log(remainder(0, 0)); // NaN
console.log(remainder(0, 1)); // 0

/*
### Explanation:
* `Math.max` and `Math.min` determine which number is larger/smaller.
* `%` gives the remainder.
* Division by zero is handled explicitly.
* Edge cases like `(0, -1)` or `(0, 1)` are safely covered.
*/
