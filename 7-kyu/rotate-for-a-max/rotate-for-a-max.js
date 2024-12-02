function max_rot(n) {
  let strNum = n.toString(); // Convert the number to a string for manipulation
  let max = n; // Initialize max with the original number

  for (let i = 0; i < strNum.length - 1; i++) {
    // Rotate the substring starting from index `i`
    strNum = strNum.slice(0, i) + strNum.slice(i + 1) + strNum[i];
    max = Math.max(max, parseInt(strNum, 10)); // Update max if the rotated number is greater
  }

  return max; // Return the greatest rotated number
}

console.log(max_rot(56789)); // 68957
console.log(max_rot(38458215)); // 85821534

/* 
Explanation:

Convert the number to a string: This makes it easier to manipulate the digits.

Initialize max: Start by assuming the original number is the largest.

Loop through the digits:
For each position i, keep the first i digits in place.
Rotate the remaining digits by removing the digit at position i and appending it to the end.

Update the maximum: Convert the rotated string back to a number and compare it with the current max.

Return the result: After all rotations, max holds the largest number encountered.
*/
