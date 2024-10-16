function high(x) {
  // Split the string into words and reduce to find the highest scoring word
  return x.split(' ').reduce(
    (highest, word) => {
      // Calculate score of the current word
      const score = word
        .split('')
        .reduce((sum, c) => sum + (c.charCodeAt(0) - 96), 0);
      // Return the word with the highest score or the one appearing earlier
      return score > highest.score ? { word, score } : highest;
    },
    { word: '', score: 0 }
  ).word;
}

// Explanation:

// 1. Split the String into Words:
// x.split(' ') splits the input string into an array of words based on spaces.

// 2. Calculate Word Score:
// For each word, we calculate its score by converting each letter to its position in the alphabet using charCodeAt(0) - 96 (since 'a' has a char code of 97), and summing these values with .reduce().

// 3. Find Highest Scoring Word:
// The outer .reduce() keeps track of the highest scoring word and its score.
// If the current word's score is higher than the tracked highest score, we update the result with the current word; otherwise, we retain the previous highest.

// 4. Return the Highest Scoring Word:
// Finally, we extract and return the word from the object storing the highest score.

// This solution is efficient, running in O(n) time, where n is the total number of characters in the input string, and it's concise while maintaining clarity.
