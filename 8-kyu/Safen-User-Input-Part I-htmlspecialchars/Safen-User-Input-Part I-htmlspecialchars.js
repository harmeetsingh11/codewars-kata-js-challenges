function htmlspecialchars(str) {
  // Replace special characters with their corresponding HTML entities
  return str.replace(
    /[<>"&]/g,
    (char) =>
      ({
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '&': '&amp;',
      }[char])
  );
}

// Example Usage
console.log(htmlspecialchars('<script>alert("XSS");</script>'));
// Output: &lt;script&gt;alert(&quot;XSS&quot;);&lt;/script&gt;

/* 
Explanation:

Regular Expression Matching:
The replace function uses a regular expression /[<>"&]/g to find all occurrences of the potentially harmful characters <, >, ", and &.
The g flag ensures all matches in the string are replaced, not just the first one.

Mapping Characters:
A mapping object { '<': '&lt;', '>': '&gt;', '"': '&quot;', '&': '&amp;' } is used to define the replacement for each special character.
The char is looked up in the mapping object, and its corresponding value is used as the replacement.
*/
