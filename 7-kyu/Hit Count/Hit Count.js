function counterEffect(hitCount) {
  // Convert the string to an array of digits, then map each digit to its array of numbers
  return [...hitCount].map((digit) => {
    // Create an array from 0 to the digit's value (inclusive)
    return Array.from({ length: Number(digit) + 1 }, (_, i) => i);
  });
}

console.log(counterEffect('1250')); // [[0, 1], [0, 1, 2], [0, 1, 2, 3, 4, 5], [0]]
console.log(counterEffect('0050')); // [[0], [0], [0, 1, 2, 3, 4, 5], [0]]
console.log(counterEffect('0000')); // [[0], [0], [0], [0]]

/* 
Explanation:

Input Conversion:
The string hitCount is spread into an array of characters using [...hitCount].
Each character represents a digit.

Mapping Digits to Arrays:
For each digit, Array.from is used to create a range of numbers from 0 to the digit's value (inclusive).
The length of the array is set to the digit value + 1, and _ is the placeholder for the array's index (i).

Efficient and Concise:
The map function ensures we iterate through the digits once.
Array.from dynamically generates the arrays without nested loops.

Output:
The result is a multi-dimensional array where each inner array contains all numbers up to its respective digit in the input string.
*/
