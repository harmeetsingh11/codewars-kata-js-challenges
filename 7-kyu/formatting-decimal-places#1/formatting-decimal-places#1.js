function formatNumber(num) {
  // Convert the number to a fixed-point string, truncate to 2 decimals, and convert back to a number
  return Math.trunc(num * 100) / 100;
}

// Examples
console.log(formatNumber(32.8493)); // 32.84
console.log(formatNumber(14.3286)); // 14.32
console.log(formatNumber(10.128976)); // 10.12
console.log(formatNumber(7.1)); // 7.1
console.log(formatNumber(5)); // 5

/* 
Explanation:

num * 100:
Multiply the number by 100 to shift the decimal point two places to the right.

Math.trunc():
Math.trunc removes all digits after the decimal point without rounding. This ensures only the first two decimal places remain.

Divide by 100:
Divide back by 100 to restore the decimal position to its original place.

Return Value:
The result is a properly truncated floating-point number.

Output:
For the given inputs:

32.8493 → Math.trunc(32.8493×100)/100=32.84
14.3286 → Math.trunc(14.3286×100)/100=14.32
10.1289767789 → Math.trunc(10.1289767789×100)/100=10.12
*/
