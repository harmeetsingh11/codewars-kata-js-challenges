function isPositiveDominant(str) {
  // Split string by 1 to 4 spaces
  const words = str.trim().split(/\s{1,4}/);

  let positive = 0,
    negative = 0;

  for (let word of words) {
    if (!word) continue; // Skip empty strings (safety)

    const firstChar = word[0].toLowerCase();

    // Check if firstChar is a lowercase letter
    if (firstChar >= 'a' && firstChar <= 'm') {
      positive++;
    } else if (firstChar >= 'n' && firstChar <= 'z') {
      negative++;
    }
    // Ignore anything that doesn't start with a-z
  }

  return positive >= negative;
}

// Test Cases:
console.log(isPositiveDominant('A big brown fox caught a bad rabbit')); // true
console.log(isPositiveDominant('Xylophones  can   obtain    Xenon.')); // false
console.log(isPositiveDominant('   ')); // true (0 >= 0)
console.log(isPositiveDominant('!!! ???')); // true (0 >= 0)

/* 
### ✅ Explanation:

* `str.trim().split(/\s{1,4}/)`:

  * Trims any leading/trailing whitespace.
  * Splits the string by **1 to 4 spaces**, using a regular expression.
* Loop through each word and grab its **first letter**.
* Skipping empty strings.
* Validating that the word starts with a valid alphabet character.
* Convert the letter to **lowercase** for case-insensitive comparison.
* Compare against alphabet ranges:

  * `'a'` to `'m'` → **positive**
  * `'n'` to `'z'` → **negative**
* Return `true` if there are **more or equal positive** starting letters than negative ones.
*/
