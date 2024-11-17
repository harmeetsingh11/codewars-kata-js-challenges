function addStrings(str1, str2) {
  // Use template literals to combine the two strings with a space
  return `${str1} ${str2}`;
}

/* 
Explanation:

Template Literals: Using backticks (`), you can embed expressions and variables directly in a string using ${expression} syntax.
Example: `${var1} ${var2}` produces a single string with a space between var1 and var2.

Automatic Coercion: Using ${} ensures non-string arguments are converted to strings automatically.
For example, 456 becomes "456" when embedded in a template literal.

Efficiency: Template literals are concise and avoid additional function calls, making the solution efficient.
*/
