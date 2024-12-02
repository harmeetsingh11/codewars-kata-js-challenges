function multiplyStrings(num1, num2) {
  // Edge case: If either number is "0", the result is "0"
  if (num1 === '0' || num2 === '0') return '0';

  // Initialize an array to store intermediate results
  const result = Array(num1.length + num2.length).fill(0);

  // Loop through each digit of num1 and num2 in reverse order
  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      // Multiply current digits
      const product = (num1[i] - '0') * (num2[j] - '0');

      // Find positions in the result array
      const p1 = i + j;
      const p2 = i + j + 1;

      // Add the product to the position (carry handled in next step)
      const sum = product + result[p2];
      result[p2] = sum % 10; // Store the current digit
      result[p1] += Math.floor(sum / 10); // Carry over
    }
  }

  // Convert the result array to a string
  let resultString = result.join('');

  // Remove leading zeros, if any
  return resultString.replace(/^0+/, '');
}

// Example
console.log(multiplyStrings('123', '456')); // "56088"
console.log(multiplyStrings('0', '123456')); // "0"
console.log(multiplyStrings('123456789', '987654321')); // "121932631112635269"

/* 
Explanation:

Edge Case:
If either number is "0", return "0" immediately.

Result Storage:
Use an array result to hold the intermediate digits. The size is num1.length + num2.length, as the maximum possible length of the result will not exceed this.

Digit Multiplication:
Iterate through each digit of num1 and num2 from right to left.
Multiply the digits and add the product to the corresponding positions in the result array.

Carry Handling:
Add any carry-over to the previous position in the result array.

Convert Array to String:
Join the array into a string and remove any leading zeros using replace(/^0+/, '').

Return Result:
Return the resulting string.
*/
