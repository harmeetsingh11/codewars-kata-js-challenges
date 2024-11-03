function sameCase(a, b) {
  // Check if both characters are letters (A-Z or a-z)
  if (!/[a-zA-Z]/.test(a) || !/[a-zA-Z]/.test(b)) return -1;

  // Check if both are uppercase or both are lowercase
  if (
    (a === a.toUpperCase() && b === b.toUpperCase()) ||
    (a === a.toLowerCase() && b === b.toLowerCase())
  ) {
    return 1; // Same case
  }

  return 0; // Both are letters but different cases
}

/* 
Explanation:

Check if Both Characters are Letters:
/[a-zA-Z]/.test(a) checks if a is a letter.
/[a-zA-Z]/.test(b) checks if b is a letter.
If either character is not a letter, return -1.

Check if Both are Uppercase or Both are Lowercase:
(a === a.toUpperCase() && b === b.toUpperCase()) checks if both a and b are uppercase.
(a === a.toLowerCase() && b === b.toLowerCase()) checks if both a and b are lowercase.
If either condition is true, return 1 as they are the same case.

Return 0 for Different Cases:
If both characters are letters but in different cases, return 0.
*/
