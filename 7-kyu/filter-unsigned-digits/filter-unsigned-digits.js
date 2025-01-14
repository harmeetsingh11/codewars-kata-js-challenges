function missingDigits(...nums) {
  // Combine all input numbers into a single string
  const allDigits = nums.join('');

  // Create a set of all digits from 0 to 9
  const fullSet = new Set('0123456789');

  // Remove the digits present in the input from the full set
  for (const digit of allDigits) {
    fullSet.delete(digit);
  }

  // Convert the remaining digits back to a sorted string
  return [...fullSet].sort().join('');
}

// Examples:
console.log(missingDigits(12, 34, 56, 78)); // "09"
console.log(missingDigits(2015, 8, 26)); // "3479"

/* 
Explanation:

Input Processing:
Use join('') to concatenate all numbers into a single string, ensuring all digits are accessible.

Initialize Full Set:
Create a set containing all digits '0123456789'.

Remove Present Digits:
Iterate through each digit of the concatenated string, and remove it from the set if it exists.

Format the Output:
Convert the remaining digits in the set to an array using the spread operator (...), sort them, and join them into a string.
*/
