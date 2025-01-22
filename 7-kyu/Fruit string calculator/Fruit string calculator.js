function calculateExpression(sentence) {
  // Match the entire pattern: two numbers and the operator ("gains" or "loses")
  const match = sentence.match(/(\d+).*?(gains|loses).*?(\d+)/);

  if (!match) return null; // Return null if the input string doesn't match the expected pattern

  // Extract the numbers and the operator from the match
  const [_, num1, operator, num2] = match;

  // Convert numbers from strings to integers
  const number1 = parseInt(num1, 10);
  const number2 = parseInt(num2, 10);

  // Perform calculation based on the operator
  return operator === 'gains' ? number1 + number2 : number1 - number2;
}

console.log(calculateExpression('Panda has 48 apples and loses 4')); // 44
console.log(calculateExpression('Jerry has 34 apples and gains 6')); // 40
console.log(calculateExpression('Alice has 60 oranges and loses 25')); // 35
console.log(calculateExpression('Bob gains 50 bananas after finding 10 more')); // 60
console.log(calculateExpression('Cathy loses 10 from 46 she had')); // 36
console.log(calculateExpression('Nobody gains anything but 0')); // 0
console.log(calculateExpression('Tom has 120 apples and gains 20')); // 140

/* 
Explanation:

Regex Matching:
const match = sentence.match(/(\d+).*?(gains|loses).*?(\d+)/);

Regex Breakdown:
(\d+): Captures the first number (sequence of digits).
.*?: Matches any characters lazily (stops at the first valid match, instead of matching everything greedily).
(gains|loses): Captures the operator, either "gains" or "loses".
.*?: Matches any characters lazily again, before the second number.
(\d+): Captures the second number.

Example: For the string "Jerry has 34 apples and gains 6", the match array will look like:
["34 apples and gains 6", "34", "gains", "6"]

Null Check:
if (!match) return null;
If the input string does not follow the expected format (no match is found), return null.

Extract Captured Groups:
const [_, num1, operator, num2] = match;
Extract the matched parts:
num1: First number (e.g., 34).
operator: The operation (gains or loses).
num2: Second number (e.g., 6).

Convert Numbers to Integers:
const number1 = parseInt(num1, 10);
const number2 = parseInt(num2, 10);
Convert the extracted strings to integers to allow mathematical operations.

Perform Calculation:
return operator === "gains"
  ? number1 + number2
  : number1 - number2;
If the operator is "gains", add the two numbers.
If the operator is "loses", subtract the second number from the first.
*/
