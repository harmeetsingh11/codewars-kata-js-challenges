function isDivisibleByThree(str) {
  // Calculate the sum of the digits in the string
  const sum = [...str].reduce((acc, digit) => acc + Number(digit), 0);

  // Check if the sum is divisible by 3 without using the modulo operator
  return sum / 3 === Math.floor(sum / 3);
}

// Examples
console.log(isDivisibleByThree('123')); // true
console.log(isDivisibleByThree('8409')); // true
console.log(isDivisibleByThree('100853')); // false
console.log(isDivisibleByThree('33333333')); // true
console.log(isDivisibleByThree('7')); // false

/* 
Explanation:

Input Processing:
The function takes a string of digits (str) as input.

Sum of Digits:
The reduce function is used to calculate the sum of all digits in the string.
Number(digit) converts each character to its numeric value.
The initial value of acc is 0.

Divisibility Check:
Instead of using the modulo operator %, the code checks if dividing sum by 3 results in an integer:
(sum / 3) === Math.floor(sum / 3) ensures there's no remainder.

Return Value:
The function returns true if the sum is divisible by 3; otherwise, it returns false.
*/
