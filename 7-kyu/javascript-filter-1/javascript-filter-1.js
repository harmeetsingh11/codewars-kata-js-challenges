function filterLoginsWithUnderscore(logins) {
  // Use the filter method to find pairs where the login name ends with "_".
  return logins.filter(([login, email]) => login.endsWith('_'));
}

// Example
const input = [
  ['foo', 'foo@foo.com'],
  ['bar_', 'bar@bar.com'],
];
const result = filterLoginsWithUnderscore(input);
console.log(result); // Output: [ [ "bar_", "bar@bar.com" ] ]

/* 
Explanation:

Destructuring in the filter callback:
The filter method iterates over each element of the logins array.
Each element is destructured into [login, email] for readability.

Condition with endsWith:
The login.endsWith("_") method checks if the login string ends with an underscore (_).
If the condition is true, the pair is included in the filtered array.

Efficient and concise:
The solution avoids extra loops or operations by using filter, which is designed for this purpose.
The endsWith method is optimized for string suffix checks, ensuring concise and efficient code.
*/
