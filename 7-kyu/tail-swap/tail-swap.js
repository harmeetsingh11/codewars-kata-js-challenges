function swapAfterColon(strings) {
  // Split both strings at the colon, then swap and recombine
  const [first, second] = strings.map((s) => s.split(':'));
  return [`${first[0]}:${second[1]}`, `${second[0]}:${first[1]}`];
}

// Examples
console.log(swapAfterColon(['abc:123', 'cde:456'])); // ["abc:456", "cde:123"]
console.log(swapAfterColon(['a:12345', '777:xyz'])); // ["a:xyz", "777:12345"]

/* 
Explanation:

Splitting at the Colon:
For each string, split(":") divides the string into two parts: one before the colon and one after.
Example: "abc:123" becomes ["abc", "123"].

Swapping the Parts:
Extract the split parts into first and second using map and destructuring.
first contains the parts of the first string, and second contains the parts of the second string.

Recombining:
Use template literals (\${...}``) to combine the first part of one string with the second part of the other string.

Return the Result:
The modified strings are returned as an array, maintaining the original order.

This solution is efficient with O(n) time complexity, where n is the total length of the input strings.
*/
