function repeatDigits(input) {
  // Split the input string into an array of characters, map each digit,
  // and repeat it by converting it to a number and using `repeat` method.
  return [...input].map((digit) => digit.repeat(Number(digit))).join('');
}

// Example:
console.log(repeatDigits('312')); // Output: "333122"
console.log(repeatDigits('102269')); // Output: "12222666666999999999"

/* 
Explanation:

String to Array:
input is converted into an array of characters using the spread operator [...input].

Mapping and Repeating:
The map method iterates over each digit.
digit.repeat(Number(digit)): Repeats the digit Number(digit) times.

Joining the Array Back:
After mapping, the join('') method converts the array back into a single concatenated string.
*/
