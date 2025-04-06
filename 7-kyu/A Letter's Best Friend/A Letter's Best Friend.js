function areLettersFollowed(str, first, second) {
  // Loop through each character of the string
  for (let i = 0; i < str.length; i++) {
    // Check if current character matches the first letter
    if (str[i] === first) {
      // If it's the last character or next character is not the second letter, return false
      if (str[i + 1] !== second) return false;
    }
  }
  // If all occurrences of `first` are followed by `second`, return true
  return true;
}

console.log(areLettersFollowed('he headed to the store', 'h', 'e')); // true
console.log(areLettersFollowed('abcdee', 'e', 'e')); // false
console.log(areLettersFollowed('i found an ounce with my hound', 'o', 'u')); // true
console.log(areLettersFollowed('we found your dynamite', 'd', 'y')); // false

/*
### How it works:
- We iterate through the string one character at a time.
- When we find the `first` letter, we immediately check if the **next** character is the `second` letter.
- If it's not (or doesn't exist), we return `false`.
- If we finish the loop without returning `false`, it means all conditions are satisfied → return `true`.
*/
