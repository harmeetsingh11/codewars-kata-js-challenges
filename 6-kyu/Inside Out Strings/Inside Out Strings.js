function insideOutWords(str) {
  return str
    .split(' ')
    .map((word) => {
      let len = word.length,
        mid = Math.floor(len / 2);
      let left = [...word.slice(0, mid)].reverse().join('');
      let right = [...word.slice(len % 2 ? mid + 1 : mid)].reverse().join('');
      return len % 2 ? left + word[mid] + right : left + right;
    })
    .join(' ');
}

console.log(insideOutWords('taxi taxis')); // Output: 'atix atxsi'

/* 
### Explanation:
1. **Split the input string** into words using `.split(' ')`.
2. **Transform each word** using `.map()`:
   - Determine the **middle index** (`mid`).
   - Slice the **left part**, reverse it.
   - Slice the **right part**, reverse it.
   - If the word has an **odd length**, keep the middle character in place.
   - Otherwise, simply concatenate reversed left and right parts.
3. **Join the words back** into a string.

This ensures efficiency and clarity while handling both even and odd-length words correctly.
*/
