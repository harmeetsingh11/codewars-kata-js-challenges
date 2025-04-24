// Extend Math with a custom roundTo method
Math.roundTo = function (number, precision) {
  // Multiply number by 10^precision to shift decimal point
  // Round the result to the nearest whole number
  // Divide back by 10^precision to restore original scale
  return Math.round(number * Math.pow(10, precision)) / Math.pow(10, precision);
};

console.log(Math.roundTo(3.1415926535, 2)); // 3.14
console.log(Math.roundTo(3.1415926535, 4)); // 3.1416
console.log(Math.roundTo(198.499, 0)); // 198
console.log(Math.roundTo(200.5, 0)); // 201

/*
### How it works:
1. `Math.pow(10, precision)` shifts the decimal point to the right.
2. `Math.round(...)` rounds it to the nearest integer.
3. Dividing by the same power of 10 shifts the decimal back to the left.
*/
