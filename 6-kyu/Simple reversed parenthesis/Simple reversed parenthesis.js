function solve(s) {
  // If the length of string is odd, it can never be balanced
  if (s.length % 2 !== 0) return -1;

  let open = 0; // Tracks unmatched open brackets
  let close = 0; // Tracks unmatched close brackets

  for (const char of s) {
    if (char === '(') {
      open++;
    } else {
      // If there's an unmatched '(', match it with ')'
      if (open > 0) {
        open--;
      } else {
        // Unmatched ')'
        close++;
      }
    }
  }

  // Each two unmatched '(' or ')' require one reversal each
  return Math.ceil(open / 2) + Math.ceil(close / 2);
}

solve(')('); // 2
solve('(((())'); // 1
solve('((('); // -1
solve('(()))('); // 2

/*
### Explanation:

* If the string length is odd, it can **never** be balanced (returns `-1`).
* We iterate through the string:

  * Increment `open` for `'('`.
  * For `')'`, try to match it with an open bracket.

    * If no open bracket is available, count it as an unmatched close.
* At the end:

  * Every **2 unmatched open or close** brackets require **1 reversal** to balance.
  * So, total reversals = `ceil(open / 2) + ceil(close / 2)`.

*/
