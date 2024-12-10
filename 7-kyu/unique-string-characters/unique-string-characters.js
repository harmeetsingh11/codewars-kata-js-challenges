function solve(a, b) {
  // Filter characters in 'a' that are not in 'b' and join them to a string
  let resultA = [...a].filter((char) => !b.includes(char)).join('');

  // Filter characters in 'b' that are not in 'a' and join them to a string
  let resultB = [...b].filter((char) => !a.includes(char)).join('');

  // Concatenate both results and return
  return resultA + resultB;
}

// Example
console.log(solve('xyab', 'xzca')); // Output: "ybzc"

/* 
Steps to solve:
Iterate over both strings: For each character in both strings, check if it exists in the other string.
Concatenate results: If a character from the first string does not exist in the second, add it to the result string. Similarly, if a character from the second string does not exist in the first, add it to the result string.
Return the result: Combine the results from both strings and return the final string.

Explanation:
[...a]: Converts the string a into an array of characters.
.filter(char => !b.includes(char)): Filters out characters from a that exist in b. The !b.includes(char) checks if the character from a is not in b.
.join(''): Converts the filtered array of characters back into a string.
Repeat for b: Perform the same operation for string b, filtering out characters that are in a.
Concatenate and return: Finally, concatenate the two results (resultA and resultB) and return the combined string.

Time Complexity:
O(n * m) where n is the length of string a and m is the length of string b. This is because b.includes(char) performs a search for each character in a (or vice versa). This is the most time-consuming part of the solution.
*/
