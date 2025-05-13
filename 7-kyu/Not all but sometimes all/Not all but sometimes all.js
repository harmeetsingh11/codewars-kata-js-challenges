function remove(str, what) {
  // Create a shallow copy of the 'what' object to avoid mutating the original
  const counts = { ...what };

  // Use split and reduce to build the result string
  return str.split('').reduce((result, char) => {
    // If character is in the 'what' object and we still need to remove some
    if (counts[char] > 0) {
      counts[char]--; // Decrement the counter
      return result; // Skip adding the character
    }
    return result + char; // Otherwise, add the character to the result
  }, '');
}

console.log(remove('this is a string', { t: 1, i: 2 })); // "hs s a string"
console.log(remove('hello world', { x: 5, i: 2 })); // "hello world"
console.log(remove('apples and bananas', { a: 50, n: 1 })); // "pples d bnns"

/*
### Key Points:

* `reduce` is used for a **single-pass**, efficient character filtering.
* Works regardless of how many characters to remove or if some don't exist.
* Does **not mutate** the original `what` object — ensures functional purity.
*/
