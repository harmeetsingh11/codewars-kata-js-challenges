// Function to count the occurrences of each letter in a string (case-insensitive)
const count = (str) =>
  str
    .toLowerCase() // Convert the string to lowercase to ensure case insensitivity
    .split('') // Convert the string into an array of characters
    .reduce((R, x) => ((R[x] = (R[x] || 0) + 1), R), {});
// Use reduce to create a frequency map where R[x] stores the count of each character

// Function to invert the case of a character
const changeCase = (char) =>
  char > 'Z' ? char.toUpperCase() : char.toLowerCase();
// If the character is lowercase (greater than 'Z' in ASCII), convert it to uppercase
// Otherwise, convert it to lowercase

// Function to apply case-changing rules based on a given frequency map
const strConv = (str, rules) =>
  str
    .split('') // Convert string to an array of characters
    .map((x) => (rules[x.toLowerCase()] % 2 ? changeCase(x) : x))
    // If the character appears an odd number of times in the rules map, swap its case
    // Otherwise, keep it unchanged
    .join(''); // Convert the array back to a string

// Main function that processes both strings based on each other's letter frequency
const workOnStrings = (a, b) => strConv(a, count(b)) + strConv(b, count(a));
// Apply strConv to `a` using the frequency map of `b`
// Apply strConv to `b` using the frequency map of `a`
// Concatenate the transformed versions of `a` and `b` and return the result

/* 
Why This Solution is Efficient

✅ Optimized Character Counting (count function)
Uses .reduce() to create a frequency map in a single pass (O(n) time complexity).
Works case-insensitively by converting characters to lowercase.

✅ Minimal Case-Swapping Logic (changeCase function)
Uses ASCII comparison (char > 'Z') for efficient case inversion.

✅ Transformation Done in a Single Pass (strConv function)
Uses .map() to process each character efficiently (O(n) complexity).
Only swaps case if the frequency is odd.

✅ Overall Complexity: O(n + m)
Counting occurrences is O(n) + O(m).
Transforming the strings is O(n) + O(m).
This ensures fast execution even for large inputs.

Example Walkthrough
workOnStrings("abc", "cde");

Step 1: Count occurrences in each string
count("cde") → { c:1, d:1, e:1 }
count("abc") → { a:1, b:1, c:1 }

Step 2: Transform a based on b's count
"abc" → 'c' appears odd times, so swap case → "abC"

Step 3: Transform b based on a's count
"cde" → 'c' appears odd times, so swap case → "Cde"

Step 4: Return final result
"abC" + "Cde" → "abCCde"
*/
