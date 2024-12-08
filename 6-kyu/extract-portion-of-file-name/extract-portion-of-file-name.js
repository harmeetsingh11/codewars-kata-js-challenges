function extractFileName(input) {
  // Use a regex pattern to extract the desired portion of the file name.
  const match = input.match(/^[^_]+_([\w.-]+)\.[^.]+$/);
  // If the match is successful, return the captured group, else return an empty string.
  return match ? match[1] : '';
}

// Test cases
console.log(
  extractFileName('1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION')
); // Output: "FILE_NAME.EXTENSION"
console.log(
  extractFileName(
    '1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34'
  )
); // Output: "This_is_an_otherExample.mpg"
console.log(extractFileName('1231231223123131_myFile.tar.gz2')); // Output: "myFile.tar"

/* 
Explanation:

Regex Explanation:

^[^_]+_:
^: Start of the string.
[^_]+: Match any characters that are not underscores (_) as a prefix (the date).
_: Match the underscore that separates the date and file name.

([\w.-]+):
Capturing group for the file name and primary extension.
\w: Matches word characters (letters, digits, and underscores).
.: Matches a literal dot.
-: Matches a hyphen.
+: Ensures this part contains one or more valid characters.

\.[^.]+$:
\.: Matches the dot before the extra extension.
[^.]+: Matches the extra extension (characters until the end that are not dots).
$: Asserts end of string.

Logic:
Use the regex to match the input string.
Extract the portion inside the first capturing group (([\w.-]+)), which represents the file name and primary extension.
Return the result or an empty string if the input does not match.

Efficiency:
The regex pattern is efficient as it minimizes backtracking.
The solution processes the string in a single match operation.
*/
