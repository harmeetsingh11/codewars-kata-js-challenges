function createPhoneNumber(numbers) {
  // Join all numbers into a single string
  const numStr = numbers.join('');

  // Use template literals to format the phone number
  return `(${numStr.slice(0, 3)}) ${numStr.slice(3, 6)}-${numStr.slice(6)}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // "(123) 456-7890"

/*
### Explanation:
1. `numbers.join('')`: Combines the array of digits into a single string like `"1234567890"`.
2. `slice(0, 3)`: Extracts the area code.
3. `slice(3, 6)`: Extracts the next three digits.
4. `slice(6)`: Extracts the last four digits.
5. Template literal puts the pieces into the desired format: `"(123) 456-7890"`.
*/
