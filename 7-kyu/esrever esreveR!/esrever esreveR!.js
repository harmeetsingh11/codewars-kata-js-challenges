function esrever(str) {
  // Extract the punctuation at the end (last character)
  const punctuation = str.slice(-1);

  // Remove punctuation, split into words, reverse order of words,
  // reverse letters in each word, then join back
  const reversed = str
    .slice(0, -1) // remove punctuation
    .split(' ') // split into words
    .reverse() // reverse order of words
    .map((word) => word.split('').reverse().join('')) // reverse letters in each word
    .join(' '); // join words back with space

  // Return final reversed string with punctuation at the end
  return reversed + punctuation;
}

console.log(esrever('hello world.')); // "dlrow olleh."
console.log(esrever('Much l33t?')); // "t33l hcuM?"
console.log(esrever('tacocat!')); // "tacocat!"

/*
### Explanation

1. **Extract punctuation**
   Since the input is guaranteed to end with `.`, `?`, or `!`, we take the last character using `str.slice(-1)`.

2. **Process the main part of the string**

   * `str.slice(0, -1)` removes the punctuation.
   * `.split(" ")` breaks the string into words.
   * `.reverse()` flips the order of words.
   * `.map(word => word.split("").reverse().join(""))` reverses the letters in each word.
   * `.join(" ")` joins them back into a string.

3. **Re-attach punctuation**
   Finally, append the punctuation back to the end.
*/
