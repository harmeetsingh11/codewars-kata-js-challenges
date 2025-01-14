function describeNumber(n) {
  // Initialize the result string
  let result = '';

  // Check if the number is divisible by 3
  if (n % 3 === 0) {
    result = 'Java';

    // Check if the number is also divisible by 4
    if (n % 4 === 0) {
      result = 'Coffee';
    }
  }

  // Add "Script" if the number is even and satisfies any previous conditions
  if (result && n % 2 === 0) {
    result += 'Script';
  }

  // If none of the conditions are met, return "mocha_missing!"
  return result || 'mocha_missing!';
}

// Examples
console.log(describeNumber(1)); // "mocha_missing!"
console.log(describeNumber(3)); // "Java"
console.log(describeNumber(6)); // "JavaScript"
console.log(describeNumber(12)); // "CoffeeScript"

/* 
Explanation:
Divisible by 3: Check if n % 3 === 0. If true, start the result as "Java".
Divisible by 3 and 4: If n % 4 === 0 as well, update the result to "Coffee".
Even numbers: If the number satisfies any of the above conditions (i.e., result is not empty) and is even (n % 2 === 0), append "Script" to the result.
Fallback case: If none of the conditions are true, return "mocha_missing!".
*/
