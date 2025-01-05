function balancedNumber(number) {
  // Convert the number to a string to easily access individual digits
  const digits = String(number);
  const len = digits.length;

  // Determine the middle index/indices based on the length of the number
  const midStart = Math.floor((len - 1) / 2);
  const midEnd = len % 2 === 0 ? midStart + 1 : midStart;

  // Calculate the sum of the digits to the left of the middle
  const leftSum = digits
    .slice(0, midStart)
    .split('')
    .reduce((sum, digit) => sum + +digit, 0);

  // Calculate the sum of the digits to the right of the middle
  const rightSum = digits
    .slice(midEnd + 1)
    .split('')
    .reduce((sum, digit) => sum + +digit, 0);

  // Compare the sums and return the result
  return leftSum === rightSum ? 'Balanced' : 'Not Balanced';
}

console.log(balancedNumber(7)); // "Balanced"
console.log(balancedNumber(295591)); // "Not Balanced"
console.log(balancedNumber(959)); // "Balanced"
console.log(balancedNumber(27102983)); // "Not Balanced"

/* 
Explanation:

Convert the number to a string:
This allows easy access to individual digits using string slicing.

Identify middle indices:
midStart: Marks the start of the middle digit(s).
midEnd: Marks the end of the middle digit(s). It's the same as midStart for odd-length numbers but increments by 1 for even-length numbers.

Calculate sums for left and right sides:
Use slice to extract the left and right parts of the number.
Split the sliced string into individual digits and calculate their sum using reduce.

Compare the sums:
If the left and right sums are equal, return "Balanced". Otherwise, return "Not Balanced".

Complexity:
Time Complexity: 
O(n), where n is the number of digits in the input number (due to slicing and summing).
Space Complexity:
O(n), due to the temporary arrays created by slice and split.
*/
