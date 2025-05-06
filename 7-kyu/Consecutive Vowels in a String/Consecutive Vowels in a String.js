function getTheVowels(str) {
  // Define the order of vowels to match
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0; // to keep track of the consecutive matches
  let index = 0; // to track current expected vowel

  for (let char of str) {
    // if the character matches the expected vowel
    if (char === vowels[index]) {
      count++; // increment the count
      index = (index + 1) % vowels.length; // move to the next vowel in cycle
    }
  }

  return count;
}

console.log(getTheVowels('agrtertyfikfmroyrntbvsukldkfa')); // 6
console.log(getTheVowels('erfaiekjudhyfimngukduo')); // 4

/*
### Explanation:

* We cycle through the string looking for vowels in the order `'a' → 'e' → 'i' → 'o' → 'u' → 'a' → ...` using the `vowels` array.
* `index` keeps track of the current expected vowel.
* When we find the expected vowel in the string, we:

  * Increment the `count`.
  * Move to the next expected vowel using `(index + 1) % vowels.length`, which wraps around after `'u'`.
*/
