function isLuckyNumber(num) {
  // Calculate the sum of digits of the number
  const sumOfDigits = String(num)
    .split('')
    .reduce((sum, digit) => sum + Number(digit), 0);
  // Check if the sum is 0 or divisible by 9
  return sumOfDigits % 9 === 0;
}

// Test cases
console.log(isLuckyNumber(1892376)); // true
console.log(isLuckyNumber(12345)); // false
console.log(isLuckyNumber(0)); // true

/* 
Explanation:

Convert Number to String: The String(num) converts the number into a string to easily split it into individual digits.

Split into Digits: .split('') breaks the string into an array of characters (digits).

Calculate Sum of Digits: .reduce() iterates over each digit in the array, converts it back to a number using Number(digit), and computes the cumulative sum.

Check Divisibility: The condition sumOfDigits % 9 === 0 checks if the sum of the digits is a multiple of 9 (including 0).

Return Result: The function returns true if the number is lucky and false otherwise.
*/
