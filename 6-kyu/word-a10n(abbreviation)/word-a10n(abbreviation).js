function abbreviate(string) {
  return string.replace(/\b[a-zA-Z]{4,}\b/g, (word) => {
    // Regex matches words with 4 or more alphabetical characters
    // Replace each match with abbreviation
    return word[0] + (word.length - 2) + word[word.length - 1];
  });
}

/* 
Explanation:

Regular Expression (\b[a-zA-Z]{4,}\b):
\b matches a word boundary.
[a-zA-Z] ensures only alphabetical characters are matched.
{4,} matches sequences of 4 or more characters.
This regex identifies "words" that should be abbreviated.

string.replace:
Searches the string for matches of the regex.
For each match, it calls the provided function to compute the replacement.

Replacement Logic:
If a word is matched, construct the abbreviation using:
The first character (word[0]).
The count of characters removed (word.length - 2).
The last character (word[word.length - 1]).

Non-Word Characters:
These are ignored because the regex doesn't match them.
They remain unchanged in the output.
*/
