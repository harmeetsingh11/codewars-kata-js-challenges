function checkDigit(number, index1, index2, digit) {
  // Convert number to string for easy indexing
  const str = String(number);

  // Get the start and end of the range in correct order
  const start = Math.min(index1, index2);
  const end = Math.max(index1, index2) + 1; // +1 because end is inclusive

  // Extract substring and check if digit exists in it
  return str.slice(start, end).includes(String(digit));
}

console.log(checkDigit(12345678912345, 1, 0, 1)); // true
console.log(checkDigit(67845123654000, 4, 2, 5)); // true
console.log(checkDigit(87996599994565, 2, 5, 1)); // false

/*
### Explanation:
- `String(number)` converts the number to a string to allow easy slicing.
- `Math.min` and `Math.max` ensure we always slice from the lower index to the higher one, regardless of input order.
- `+1` on `end` because `slice` is end-exclusive but the question says `index2` is inclusive.
- `includes(String(digit))` checks if the digit is present in that substring.
*/
