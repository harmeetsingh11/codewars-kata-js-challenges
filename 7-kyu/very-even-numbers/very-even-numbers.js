function isVeryEvenNumber(n) {
  // Continue reducing the number until it is a single digit
  while (n >= 10) {
    n = n
      .toString()
      .split('')
      .reduce((sum, digit) => sum + +digit, 0);
  }
  // A single digit number is "Very Even" if it is even
  return n % 2 === 0;
}

console.log(isVeryEvenNumber(88)); // false
console.log(isVeryEvenNumber(222)); // true
console.log(isVeryEvenNumber(5)); // false
console.log(isVeryEvenNumber(841)); // true

/* 
Explanation

Initial Check:
If n is less than 10, we directly check if it is even (n % 2 === 0).

Reduce to Single Digit:
If n has multiple digits, we convert it to a string, split it into an array of digits, and use .reduce() to sum up the digits.
This process repeats inside a while loop until n becomes a single digit.

Final Check:
Once reduced to a single digit, we check if the number is even.

Efficiency
The while loop ensures we handle all numbers with multiple digits, reducing the number of digits logarithmically.
The .reduce() method efficiently sums the digits.

Time Complexity
Each digit-sum operation is O(d), where d is the number of digits in n.
Since the number of digits decreases logarithmically, the overall complexity is O(log(n)).

Space Complexity
Space is used only for the string and array operations, which is O(d) for the number of digits.
*/
