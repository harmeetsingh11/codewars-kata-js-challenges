function scoreToArray(score) {
  // Define a mapping from words to numbers, including 'nil' for 0
  const wordToNum = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    nil: 0,
  };

  // Use a regular expression to extract the words from the input string
  const words = score.match(
    /\b(zero|one|two|three|four|five|six|seven|eight|nine|nil)\b/g
  );

  // Convert the matched words into their corresponding number values
  return words.map((word) => wordToNum[word]);
}

console.log(scoreToArray('The score is four nil')); // [4, 0]
console.log(scoreToArray('new score: two three')); // [2, 3]
console.log(scoreToArray('Arsenal just conceded another goal, two nil')); // [2, 0]

/* 
Explanation:

Mapping Words to Numbers: We create an object wordToNum to map each word (e.g., "zero", "one", "two") to its corresponding number.

Mapping "nil" to 0: I've added "nil": 0 to the wordToNum mapping so it will return 0 for "nil".

Extracting Words: We use a regular expression (\b word boundaries and matching each number word) to find all number words in the input string. This will ignore non-number words.

Mapping to Numbers: Once we have the words, we use map() to convert each word into its numeric value by looking it up in the wordToNum object.

Return Result: Finally, we return the array of numbers.
*/
