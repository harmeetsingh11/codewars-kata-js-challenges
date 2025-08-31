/**
 * Calculate the custom weight of a name.
 * @param {string} name - Input string
 * @returns {number} - Total weight of the string
 */
function getWeight(name) {
  let weight = 0;

  for (let char of name) {
    const code = char.charCodeAt(0);

    if (code >= 65 && code <= 90) {
      // Uppercase A-Z → shift to +32
      weight += code + 32;
    } else if (code >= 97 && code <= 122) {
      // Lowercase a-z → shift to -32
      weight += code - 32;
    }
    // else: spaces, numbers, symbols → worth 0
  }

  return weight;
}

// Example usage:
console.log(getWeight('Joe')); // Output: 254

/*
We need to calculate a **custom weight** of a string where:

* Uppercase letters (`A-Z`) → mapped to ASCII + 32 (so `'A'` (65) → 97).
* Lowercase letters (`a-z`) → mapped to ASCII - 32 (so `'a'` (97) → 65).
* All other characters (`space, digits, symbols`) → worth `0`.


### Explanation

* `char.charCodeAt(0)` gets the ASCII value of each character.
* We check ranges:

  * `A-Z` → ASCII `65–90` → add `+32`.
  * `a-z` → ASCII `97–122` → subtract `32`.
* Any other character (digits, space, punctuation) contributes `0`.
* Looping is `O(n)` where `n` = string length (best possible).
* No extra data structures → memory `O(1)`.
*/
