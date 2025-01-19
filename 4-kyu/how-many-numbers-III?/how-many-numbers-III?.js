function findAll(sum, count) {
  // Helper function to recursively generate valid numbers
  function generateNumbers(current, start, remainingSum) {
    // Base case: if count digits are used and sum is reached, add to results
    if (current.length === count) {
      if (remainingSum === 0) results.push(Number(current.join('')));
      return;
    }

    // Iterate over digits starting from 'start' to ensure increasing order
    for (let digit = start; digit <= 9; digit++) {
      if (remainingSum >= digit) {
        current.push(digit); // Add the digit
        generateNumbers(current, digit, remainingSum - digit); // Recurse
        current.pop(); // Backtrack
      }
    }
  }

  const results = [];
  generateNumbers([], 1, sum);

  if (results.length === 0) return []; // No valid numbers
  return [
    results.length,
    results[0].toString(),
    results[results.length - 1].toString(),
  ];
}

console.log(findAll(10, 3)); // [8, "118", "334"]
console.log(findAll(27, 3)); // [1, "999", "999"]
console.log(findAll(84, 4)); // []

/* 
Explanation:

Recursive Backtracking:
The generateNumbers function uses recursion to explore all combinations of digits that satisfy the constraints.
The start parameter ensures digits are added in non-decreasing order.
At each step, the function subtracts the current digit from the remaining sum and recurses until the desired number of digits is reached.

Base Case:
If the current array has count digits and the remainingSum is 0, it means a valid number is found, which is added to the results array.

Efficiency:
By starting the loop at start and skipping numbers that exceed the remainingSum, the algorithm avoids unnecessary computations.

Return Results:
If no valid numbers are found, return an empty array.
Otherwise, return the count of valid numbers, the smallest number, and the largest number.
*/
