// SOLUTION 1: Uses charCodeAt() to compare the ASCII value of each character to identify capital letters
var capitals = function (word) {
  // Initialize an empty array to store the indexes of capital letters
  let capitalIndexes = [];

  // Step 1: Split the string `word` into individual characters using `split('')`.
  // This gives us an array of characters, which we can then iterate over using `map()`.

  word.split('').map((char, index) => {
    // Step 2: Use `char.charCodeAt(0)` to get the ASCII code of the character at position `index`.
    // - The ASCII range for uppercase letters is from 65 ('A') to 90 ('Z').
    // - If the character is an uppercase letter (charCode >= 65 && charCode <= 90),
    //   store its index in the `capitalIndexes` array.

    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90)
      capitalIndexes.push(index);
  });

  // Step 3: Return the array of indexes where the capital letters are found.
  return capitalIndexes;
};

// SOLUTION 2: Uses toUpperCase() to check if a character is already uppercase
var capitals = function (word) {
  // Initialize an empty array to store the indexes of capital letters
  var caps = [];

  // Step 1: Use a `for` loop to iterate over each character in the string `word`.
  // The loop runs from 0 to the length of the word (word.length).

  for (var i = 0; i < word.length; i++) {
    // Step 2: Compare the character with its uppercase version using `toUpperCase()`.
    // If the character is equal to its uppercase version, it means it's a capital letter.
    // - word[i].toUpperCase() converts the character at index `i` to uppercase.
    // - If word[i] is already uppercase, it will remain the same.

    if (word[i].toUpperCase() == word[i])
      // Step 3: If the character is uppercase, push its index `i` to the `caps` array.
      caps.push(i);
  }

  // Step 4: Return the array of indexes where the capital letters are found.
  return caps;
};
