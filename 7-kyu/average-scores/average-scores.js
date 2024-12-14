function average(scores) {
  // Use the reduce method to sum all numbers in the array
  // Divide the sum by the length of the array to calculate the average
  // Use Math.round to round the result to the nearest whole number
  return Math.round(scores.reduce((sum, num) => sum + num, 0) / scores.length);
}

// Example
console.log(average([90, 80, 70])); // Output: 80
console.log(average([95, 85, 76])); // Output: 85

/* 
Explanation:

reduce Method:
The reduce function iterates over the array and calculates the sum of all numbers.
The 0 is the initial value for the sum, ensuring proper handling even if the array contains only one element.

Division by scores.length:
The total sum is divided by the length of the array to calculate the average.

Rounding with Math.round:
The Math.round function ensures that the final average is rounded to the nearest whole number.
*/
