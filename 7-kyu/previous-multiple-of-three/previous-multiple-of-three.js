function removeUntilMultipleOfThree(n) {
  // Convert the number to a string for easy manipulation
  let numStr = n.toString();

  // Loop until the number is a multiple of 3 or no digits are left
  while (numStr.length > 0) {
    // Convert the current string to a number
    let num = parseInt(numStr, 10);

    // Check if the number is a multiple of 3
    if (num % 3 === 0) return num;

    // Remove the last digit
    numStr = numStr.slice(0, -1);
  }

  // If no multiple of 3 is found, return null
  return null;
}

// Examples
console.log(removeUntilMultipleOfThree(1)); // null
console.log(removeUntilMultipleOfThree(25)); // null
console.log(removeUntilMultipleOfThree(36)); // 36
console.log(removeUntilMultipleOfThree(1244)); // 12
console.log(removeUntilMultipleOfThree(952406)); // 9

/* 
Explanation:

Convert the number to a string: This allows for easy removal of the last digit using string slicing.

Iterative check for multiple of 3:
Convert the current string representation back to a number.
Check if it is divisible by 3.
If true, return the number.

Remove the last digit: Use slice(0, -1) to remove the last digit and continue the loop.

Handle edge cases: If no valid number is found, return null.

This approach efficiently checks and modifies the number, stopping early as soon as a valid result is found. The time complexity is O(d), where d is the number of digits in n.
*/
