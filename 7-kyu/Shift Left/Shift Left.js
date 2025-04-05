function minimumMovesToEqual(s1, s2) {
  // Start from the end of both strings
  let i = s1.length - 1;
  let j = s2.length - 1;

  // Count how many characters match from the end
  while (i >= 0 && j >= 0 && s1[i] === s2[j]) {
    i--;
    j--;
  }

  // Total moves = remaining chars in s1 + remaining chars in s2
  return i + 1 + (j + 1);
}

console.log(minimumMovesToEqual('where', 'here')); // Output: 1
console.log(minimumMovesToEqual('a', 'a')); // Output: 0
console.log(minimumMovesToEqual('abc', 'def')); // Output: 6

/*
### Explanation:
- We compare both strings **from the end** and count how many characters match.
- Once characters stop matching, we know everything before that must be deleted.
- So we return the total of unmatched characters from both strings: `(i + 1) + (j + 1)`.

This approach is:
- **Efficient**: O(n), where n is the length of the shorter string.
- **Concise**: No need for slicing, reversing, or extra space.
- **Clear**: Logic is intuitive and easy to follow.
*/
