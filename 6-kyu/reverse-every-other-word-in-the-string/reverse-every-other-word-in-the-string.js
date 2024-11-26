function reverseAlternateWords(str) {
  // Trim leading and trailing whitespace and split the string into words by spaces
  const words = str.trim().split(/\s+/);

  // Map through the words, reversing every other word based on its index
  const transformedWords = words.map((word, index) =>
    index % 2 === 1 ? word.split('').reverse().join('') : word
  );

  // Join the words with a single space and return the result
  return transformedWords.join(' ');
}

/* 
Explanation:

Trim and Split:
str.trim() removes any leading and trailing whitespace.
.split(/\s+/) splits the string into an array of words, treating any sequence of whitespace characters as a delimiter. 
\s:
Matches any whitespace character, including:
Space ( )
Tab (\t)
Newline (\n)
Carriage return (\r)
Form feed (\f)
This is a shorthand character class in regex for all whitespace characters.

Map and Reverse:
The .map() method is used to iterate through the words.
index % 2 === 1 checks if the current word is at an odd index.
If so, the word is reversed using word.split('').reverse().join(''). Otherwise, the word remains unchanged.

Join:
.join(' ') combines the array of transformed words into a single string, ensuring exactly one space between words.

Result:
The resulting string satisfies the requirements: alternate words are reversed, and there is one space between words with no leading or trailing whitespace.
*/
