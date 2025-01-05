function getAges(sum, difference) {
  // Return null if sum or difference is negative
  if (sum < 0 || difference < 0) return null;

  // Calculate the ages based on the given sum and difference
  const older = (sum + difference) / 2; // Older person's age
  const younger = (sum - difference) / 2; // Younger person's age

  // Return null if either age is negative
  if (older < 0 || younger < 0) return null;

  // Return the ages in descending order
  return [older, younger];
}

console.log(getAges(40, 10)); // Output: [25, 15]
console.log(getAges(40, -10)); // Output: null
console.log(getAges(-40, 10)); // Output: null
console.log(getAges(40, 50)); // Output: null

/* 
Explanation (inline comments included):

Input validation:
The function checks if the sum or difference is negative and returns null immediately, as negative values make the problem invalid.

Age calculation:
The formula for the older person’s age is (sum+difference)/2.
The formula for the younger person’s age is (sum−difference)/2.

Validation of calculated ages:
Both ages must be non-negative.

Return result:
If all checks pass, return the ages in descending order.
*/
