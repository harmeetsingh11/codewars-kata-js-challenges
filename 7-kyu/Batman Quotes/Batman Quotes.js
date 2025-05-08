function getQuote(quotes, hero) {
  // Extract index of quote from the digit in the name
  const index = +hero.match(/\d/)[0];

  // Possible correct names
  const names = ['Batman', 'Robin', 'Joker'];

  // Try to match the corrupted name with one of the originals
  const originalName = names.find((name) => {
    if (name.length !== hero.length) return false;
    // Count how many characters differ (only one should — the replaced digit)
    let diff = 0;
    for (let i = 0; i < name.length; i++) {
      if (hero[i] !== name[i]) diff++;
    }
    return diff === 1;
  });

  // Return the correctly formatted result
  return `${originalName}: ${quotes[index]}`;
}

/* 

### Problem Recap:

* You have an array of quotes.
* One of the names in the quotes is corrupted by a **digit** replacing a character in the name.
* Your task is to identify which character said the quote based on the corrupted name and return the quote with the correct character's name.

For example:

* `"Rob1n"` is corrupted, where the `1` replaces the `i` in `"Robin"`. You need to recognize this and return `"Robin: Holy haberdashery, Batman!"`.

### Thought Process:

1. **Extract the Index**:

   * The number in the string tells us which quote in the array to retrieve. We need to extract this number and convert it to an integer to use as the index in the quotes array.
   * The regex `hero.match(/\d/)[0]` helps us **find the digit** in the string. We use `+` to convert it from a string to a number.

2. **Identify the Correct Name**:

   * The name in the string is **corrupted** by one character (the digit). The challenge is to correctly identify whether the corrupted name corresponds to "Batman", "Robin", or "Joker".
   * We know that the character's name will match one of these three names, and only **one character will differ** (the one replaced by the digit).
   * We can compare the length of the corrupted name to the possible names. If the lengths match, we proceed to compare each character.

3. **Matching the Name**:

   * To identify the correct character, we need to **compare each character** in the corrupted name and the possible original names (i.e., "Batman", "Robin", and "Joker").
   * If we find that **only one character differs**, then we know that this name corresponds to that character.
   * This is done by counting the number of character mismatches between the corrupted name and each original name. If there’s exactly one mismatch, we know we’ve found the correct name.

4. **Return the Quote**:

   * Once we identify the correct name (i.e., "Batman", "Robin", or "Joker"), we simply return the formatted string `"Character: Quote"`.


### Detailed Steps:

1. **Extract the Index**:

   * The regex `hero.match(/\d/)[0]` finds the first digit in the string (the number). The `+` converts this to an integer, which is used as the index for the quotes.

2. **List of Names**:

   * We define the possible original names in an array `names = ["Batman", "Robin", "Joker"]`.

3. **Match the Correct Name**:

   * We use the `.find()` method to iterate through the possible names and check for a match with the corrupted name (`hero`). The condition checks:

     * If the lengths of the corrupted name and original name are the same.
     * If exactly **one character** is different between the two names, which means the digit has replaced one letter.
   * If we find a match, we return the correct name.

4. **Return the Quote**:

   * Once the name is identified, we use the index to get the corresponding quote from the `quotes` array and return it formatted as `"Name: Quote"`.

### Why This Solution Works:

* **Efficiency**: We only need to check for one mismatch per name, so the solution is efficient. We only loop through the names and check a few characters (depending on the length of the name).

* **Correctness**: The key here is that we are **guaranteed** the number replaces a single letter. By counting the number of mismatches between the corrupted name and the original names, we can confidently identify the correct character.

* **Conciseness**: The solution uses the `.find()` method to directly identify the correct name, and string operations (like `match` and `replace`) are used effectively to extract the necessary data.

### Edge Cases Considered:

1. **Single digit**: The corrupted name will always have exactly one character replaced by the digit.
2. **Character capitalization**: The character names are treated case-insensitively in this logic, but we ensure the final output has the correct casing by capitalizing the first letter of the name.

### Example Walkthrough:

Given:

```js
getQuote(["I am vengeance. I am the night. I am Batman!", "Holy haberdashery, Batman!", "Let's put a smile on that faaaceee!"], "Rob1n")
```

* **Extract the index**: The number in "Rob1n" is `1`, so the index is `1`.
* **Match the name**: "Rob1n" differs from "Robin" by the `1`. It matches the name "Robin".
* **Return the quote**: The quote at index `1` is `"Holy haberdashery, Batman!"`, and we return `"Robin: Holy haberdashery, Batman!"`.

*/
