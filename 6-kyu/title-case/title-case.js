function titleCase(title, minorWords) {
  // Create a Set of minor words for easy lookup.
  // Convert minorWords to lowercase, split by spaces, and store in a Set.
  const minorSet = new Set(
    minorWords ? minorWords.toLowerCase().split(' ') : []
  );

  // Convert the title to lowercase, split it into words, and process each word
  return title
    .toLowerCase() // Convert the entire title to lowercase
    .split(' ') // Split the title into an array of words
    .map(
      (word, index) =>
        word // Check if the word is not empty
          ? index === 0 || !minorSet.has(word) // If it's the first word or not a minor word
            ? word[0].toUpperCase() + word.slice(1) // Capitalize the first letter and combine it with the rest of the word
            : word // Otherwise, return the word as it is (lowercase for minor words)
          : '' // If the word is empty, return an empty string
    )
    .join(' '); // Join the array of words back into a single string
}
