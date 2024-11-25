function sortWordsByLastChar(x) {
  return x
    .split(' ') // Split the string into an array of words
    .sort((a, b) => {
      // Compare the last characters of each word
      const lastCharA = a[a.length - 1];
      const lastCharB = b[b.length - 1];

      if (lastCharA === lastCharB) {
        // If the last characters are the same, maintain original order
        return 0;
      }
      // Otherwise, sort by last character
      return lastCharA.localeCompare(lastCharB);
    });
}

// console.log(sortWordsByLastChar('hello world apple banana'));
// Output: ["banana", "apple", "hello", "world"]

/* 
Explanation

Split the string into words:
The split(' ') method divides the input string x into an array of words based on spaces.

Sort the array:
The sort method is used to sort the words based on the last character. It accepts a comparison function.

Comparison logic:
For each pair of words, extract their last characters using a[a.length - 1] and b[b.length - 1].
If the last characters are the same, the function returns 0, preserving the original order (stable sort).
Otherwise, localeCompare is used to compare the characters alphabetically.

Return the sorted array:
The sorted array of words is returned as the result.
*/
