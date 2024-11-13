function findDigit(num, nth) {
  // If nth is not positive, return -1
  if (nth <= 0) return -1;

  // Get absolute value of num, convert to string, and pad with leading zeros
  const strNum = Math.abs(num).toString().padStart(nth, '0');

  // Return the nth digit from the right as a number
  return +strNum[strNum.length - nth];
}

/* 
Explanation:

Handle Invalid nth Values:
If nth is not positive (0 or negative), we return -1 immediately as per the instructions.

Convert num to Positive and String:
Use Math.abs(num) to ignore the sign of num.
Convert the absolute number to a string, so we can access individual digits.

Pad with Leading Zeros:
Use .padStart(nth, '0') to ensure the string has at least nth digits, adding leading zeros if necessary. This handles cases like findDigit(42, 5), where we need zeros in the higher positions.

Access the nth Digit from the Right:
Access the character at position strNum.length - nth, which is the nth digit from the right.
Convert the character back to a number using the + unary operator.
*/
