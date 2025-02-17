function circleArea(radius) {
  // Check if the radius is positive, otherwise throw an error
  if (radius <= 0) throw new Error('Radius must be positive');

  // Calculate the area using the formula π * r^2 and round to 2 decimal places
  return Math.round(Math.PI * radius * radius * 100) / 100;
}

console.log(circleArea(43.2673)); // 5881.25
console.log(circleArea(68)); // 14526.72
console.log(circleArea(0)); // Throws Error
console.log(circleArea(-1)); // Throws Error

/* 
Explanation:
1. **Validation**: The function checks if the `radius` is not positive and throws an `Error` if it's `≤ 0`.
2. **Computation**: The area is calculated using the formula `π * r^2`.
3. **Precision Handling**: The result is rounded to two decimal places using `Math.round(value * 100) / 100` for accuracy within `± 0.01`.
*/
