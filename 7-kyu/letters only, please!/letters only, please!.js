function cleanString(str) {
  // Use a regular expression to match only letters (a-z, A-Z) and spaces
  return str.replace(/[^a-zA-Z ]/g, '');
}

// Test cases
console.log(cleanString('.tree1')); // 'tree'
console.log(cleanString("that's a pie$ce o_f p#ie!")); // 'thats a piece of pie'
console.log(cleanString('john.dope@dopington.com')); // 'johndopedopingtoncom'
console.log(cleanString('my_list = ["a","b","c"]')); // 'mylist  abc'
console.log(cleanString('1 + 1 = 2')); // '    '
console.log(cleanString("0123456789.+,|[]{}=@/~;^$'<>?-!*&:#%_")); // ''

/* 
### Explanation:
1. The function `cleanString` takes a string as input.
2. It uses the `.replace()` method with a regular expression `/[^a-zA-Z ]/g`:
   - `[^a-zA-Z ]` matches any character that is **not** a letter (uppercase or lowercase) or a space.
   - `g` flag ensures **all** such characters are replaced.
3. The function returns the cleaned string.

This solution is efficient (O(n) complexity), concise, and easy to understand. 
*/
