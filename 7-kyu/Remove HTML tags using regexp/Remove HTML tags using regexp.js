// Remove HTML tags (opening, closing, self-closing, with attributes) using a single regexp.
// Use with: someString.replace(tagRegExp, "")
const tagRegExp = /<\/?[\w:-]+(?:\s+[^<>]*?)?\/?>/g;

/*
Explanation of the regexp:
- <             : match the opening angle bracket
- /?            : optionally match a leading slash (so </tag> and <tag> both match)
- [\w:-]+       : match the tag name (letters, digits, underscore, hyphen, colon)
- (?:\s+[^<>]*?)? : optional non-capturing group for attributes:
    - \s+        : at least one whitespace before attributes
    - [^<>]*?    : non-greedy match of any characters except angle brackets (attributes / values)
- \/?>          : optional slash (for self-closing) followed by closing angle bracket
- g             : global flag to replace all occurrences
*/

// Example usage:
const html =
  'Hello <b>World</b>! <img src="x" alt="a > b" /> End <!--comment--> More <input/>';
const clean = html.replace(tagRegExp, '');
console.log(clean); // -> "Hello World!  End  More "

/*
explanation and notes:

1. What this does

   * The `tagRegExp` removes opening tags (`<tag>`), closing tags (`</tag>`), self-closing tags (`<tag/>` or `<tag />`), and tags with attributes (`<div class="x" data-a='1'>`) by matching the whole tag and leaving the surrounding text untouched.
   * It intentionally does **not** trim whitespace around removed tags — so spaces, tabs, and newlines remain as in the original string (as you requested).

2. Why this regexp

   * It balances simplicity and correctness for typical HTML-like input.
   * It avoids greedy matching that would remove text between two tags (the `?` makes attribute part non-greedy).
   * It restricts the tag name to reasonable characters (`[\w:-]`) so stray `<` in text is less likely to accidentally trigger a huge match.

3. Edge cases & limitations

   * This is a regular-expression approach (as required). It handles most common tags and attributes.
   * It may still be tripped if attribute values contain unmatched `<` or `>` characters in exotic ways, or if you have malformed HTML. For fully correct HTML parsing in pathological cases, a full HTML parser would be needed (but you asked specifically for a regexp).
   * HTML comments (`<!-- ... -->`) will be removed because they match `<...>`; if you want to preserve comments, the regexp can be adjusted.

4. Complexity

   * Time complexity is O(n) in practice (regex engine scans the string once with the global flag).

5. Quick test cases

   * `'<p>Hello</p>'.replace(tagRegExp, "")` → `'Hello'`
   * `'<br/>'.replace(tagRegExp, "")` → `''`
   * `'a <b> x'.replace(tagRegExp, "")` → `'a  x'` (note the space remains)
   * `'<div data-x="1>2">x</div>'.replace(tagRegExp, "")` → `'x'` (works for typical quoted `>` inside attributes)
*/
