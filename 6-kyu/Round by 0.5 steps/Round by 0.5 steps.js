function solution(num) {
  // Multiply the number by 2, round to the nearest integer, and divide by 2
  // This effectively rounds to the nearest 0.5 step
  return Math.round(num * 2) / 2;
}

console.log(solution(4.2)); // 4
console.log(solution(4.3)); // 4.5
console.log(solution(4.6)); // 4.5
console.log(solution(4.8)); // 5
console.log(solution(4.75)); // 5

/* 
Explanation:

Multiply by 2: This scales the input such that increments of 0.5 become whole numbers (e.g., 4.2 * 2 = 8.4).

Round to nearest integer: Math.round rounds the scaled value to the nearest whole number (e.g., Math.round(8.4) = 8).

Divide by 2: After rounding, dividing the result by 2 restores the original scale but rounded to the nearest 0.5 step (e.g., 8 / 2 = 4).

This approach is efficient with a time complexity of O(1) and is easy to understand and implement.
*/
