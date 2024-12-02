function calculateAges(humanYears) {
  // Calculate cat years based on the rules
  const catYears =
    humanYears === 1
      ? 15
      : humanYears === 2
      ? 15 + 9
      : 15 + 9 + 4 * (humanYears - 2);

  // Calculate dog years based on the rules
  const dogYears =
    humanYears === 1
      ? 15
      : humanYears === 2
      ? 15 + 9
      : 15 + 9 + 5 * (humanYears - 2);

  // Return the result as an array
  return [humanYears, catYears, dogYears];
}

// Example
console.log(calculateAges(1)); // [1, 15, 15]
console.log(calculateAges(2)); // [2, 24, 24]
console.log(calculateAges(5)); // [5, 36, 39]

/* 
Explanation:

catYears and dogYears Calculation:
For the first year: Both cat and dog ages start with 15 years.
For the second year: Add 9 more years.
For any year beyond the second:
Add 4 years for cats.
Add 5 years for dogs.

Ternary Operator:
We use the ternary operator for concise conditional logic to handle different cases (humanYears === 1, humanYears === 2, and beyond).

Result:
Return an array [humanYears, catYears, dogYears].
*/
