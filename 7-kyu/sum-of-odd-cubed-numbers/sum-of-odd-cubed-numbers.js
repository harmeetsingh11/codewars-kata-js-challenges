function sumOddCubedNumbers(arr) {
  // Check if all elements in the array are numbers
  if (!arr.every(Number.isFinite)) return undefined;

  // Filter for odd numbers, cube them, and sum the results
  return arr
    .filter((num) => num % 2 !== 0) // Retain only odd numbers
    .map((num) => Math.pow(num, 3)) // Cube each odd number
    .reduce((sum, cubed) => sum + cubed, 0); // Sum the cubes
}

/* 
Explanation:

Input Validation:
arr.every(Number.isFinite) ensures all elements in the array are numbers. If any element is not a number, the function immediately returns undefined.

Filter Odd Numbers:
.filter(num => num % 2 !== 0) keeps only odd numbers from the array.

Cube Odd Numbers:
.map(num => Math.pow(num, 3)) cubes each odd number.

Sum the Cubes:
.reduce((sum, cubed) => sum + cubed, 0) calculates the sum of the cubed numbers, starting with an initial sum of 0.
*/
