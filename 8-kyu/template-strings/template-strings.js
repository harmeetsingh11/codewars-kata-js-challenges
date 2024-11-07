function templateString(str1, str2) {
  // Use template literals to insert str1 and str2 with "are" in between
  return `${str1} are ${str2}`;
}

/* 
Explanation:

Template Literals:
This solution leverages JavaScript's template literals (introduced in ES6) to embed expressions within strings using ${expression} syntax.
Here, we embed str1, the word "are", and str2 directly within a single template literal.

Concise and Efficient:
The function returns the desired string in one line, making it both concise and efficient with constant time complexity (O(1)).

This approach is optimal for creating formatted strings without additional concatenation operations.
*/
