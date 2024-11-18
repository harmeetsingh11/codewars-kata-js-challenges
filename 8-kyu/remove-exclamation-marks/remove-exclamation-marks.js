function RemoveExclamationMarks(s) {
  return s.replace(/!/g, '');
}

/* 
Explanation:

replace() Method:
The replace method is used to replace occurrences of a substring or pattern in a string.

/!/g is a regular expression:
** ! matches the exclamation mark character.
g is the global flag, which ensures that all occurrences in the string are replaced, not just the first one.

Efficiency:
The replace method with a regex is efficient for this task as it directly processes the string without additional looping or operations.
*/
