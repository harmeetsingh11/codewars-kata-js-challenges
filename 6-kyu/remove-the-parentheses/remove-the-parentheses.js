function removeParentheses(s) {
  // Use a regular expression with a while loop to repeatedly remove innermost parentheses
  while (/\([^()]*\)/.test(s)) {
    // Replace innermost parentheses (and their content) with an empty string
    s = s.replace(/\([^()]*\)/g, '');
  }
  return s;
}

console.log(removeParentheses('example(unwanted thing)example')); // "exampleexample"
console.log(removeParentheses('a(b(c)d)e')); // "ae"
console.log(removeParentheses('(first(second)third)')); // ""

/* 
Explanation:

Regex Matching Innermost Parentheses:
The regular expression \([^()]*\) matches any set of parentheses () containing characters that are not parentheses themselves.
This ensures that the innermost pairs are removed first.

Loop Until All Parentheses Are Removed:
The while loop checks if any parentheses still exist in the string using test.
If parentheses are found, the replace function removes them along with their contents.

Iterative Removal:
The process continues until no parentheses remain in the string, ensuring nested cases are handled.
*/
