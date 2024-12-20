function validSpacing(s) {
  // Check for no leading or trailing spaces and no multiple consecutive spaces
  return s.trim() === s && !s.includes('  ');
}

/* 
Explanation:

s.trim() === s:
Ensures there are no leading or trailing spaces.
trim() removes any whitespace from the start and end of the string. If the trimmed version of the string is identical to the original, it has no leading or trailing spaces.

!s.includes(" "):
Checks that there are no multiple consecutive spaces within the string.
If the string contains " " (two consecutive spaces), the function returns false.

This approach is efficient with a time complexity of O(n), where n is the length of the string, as both trim() and includes() traverse the string linearly.
*/
