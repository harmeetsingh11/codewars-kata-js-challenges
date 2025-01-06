function isFirstXFollowedByXX(str) {
  // Match the first occurrence of 'x' in the string and check if it is immediately followed by 'xx'
  const match = str.match(/x(?=xx)/);
  // Return true only if the match exists and it represents the first 'x' in the string
  return match !== null && match.index === str.indexOf('x');
}

// Test cases
console.log(isFirstXFollowedByXX('abraxxxas')); // true
console.log(isFirstXFollowedByXX('xoxotrololololololoxxx')); // false
console.log(isFirstXFollowedByXX('softX kitty, warm kitty, xxxxx')); // true
console.log(isFirstXFollowedByXX('softx kitty, warm kitty, xxxxx')); // false
console.log(isFirstXFollowedByXX('xsoftkittyxxx')); // false

/* 
Explanation:

Regex /x(?=xx)/:
x: Matches the lowercase letter 'x'.
(?=xx): A positive lookahead ensuring 'x' is immediately followed by 'xx'.
Case sensitivity ensures uppercase 'X' is ignored.

Check the position:
str.match() returns the first match for the pattern along with its index.
str.indexOf('x') finds the index of the first occurrence of 'x' in the string.
By comparing match.index with str.indexOf('x'), we ensure that the match corresponds to the first 'x' in the string.

Edge Cases:
If there is no match, match will be null, and the function will return false.
If the first 'x' is not followed by 'xx', the function ensures false is returned.
*/
