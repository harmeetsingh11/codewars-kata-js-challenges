function sumIntegersInString(str) {
  // Use a regular expression to match all sequences of digits in the string
  const matches = str.match(/\d+/g);

  // If no matches are found, return 0
  if (!matches) return 0;

  // Convert each match to a number and calculate their sum
  return matches.reduce((sum, num) => sum + Number(num), 0);
}

// Example usage
const input = 'The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog';
console.log(sumIntegersInString(input)); // Output: 3635

/* 
Explanation

Regex Matching:
The pattern /\d+/g matches sequences of one or more digits in the input string.
The g flag ensures it finds all matches in the string.

Handle Edge Cases:
If no matches are found (e.g., the string contains no numbers), the match method returns null. The if (!matches) check ensures we return 0 in such cases.

Sum the Numbers:
The reduce method iterates over the array of matched strings.
Number(num) converts each string to a number before adding it to the running total.

Efficiency:
The solution processes the string once with the regex and then reduces the array of matches, making it both concise and efficient.
*/
