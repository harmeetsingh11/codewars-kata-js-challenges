function reverseWords(str) {
  return (
    str
      // Step 1: Split the string into an array of words using space (' ') as the delimiter
      .split(' ')

      // Step 2: Use the map function to iterate over each word in the array
      .map((word) =>
        // For each word, split it into an array of characters, reverse the array, and then join the characters back into a string
        word.split('').reverse().join('')
      )

      // Step 3: Join the array of reversed words back into a single string, with spaces between the words
      .join(' ')
  );
}
