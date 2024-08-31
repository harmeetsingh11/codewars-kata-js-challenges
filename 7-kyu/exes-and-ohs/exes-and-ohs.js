// SOLUTION 1: using Regex (Regular Expression)

// The following line uses a regular expression to count the occurrences of 'o' (case-insensitive)
// str.match(/[o]/gi) searches the string for all occurrences of 'o' (both uppercase and lowercase).
// The 'g' flag stands for "global," meaning it finds all matches in the string, not just the first one.
// The 'i' flag stands for "case-insensitive," so it matches both 'o' and 'O'.
// It does the same as above, but for the character 'x' (case-insensitive).
function XO(str) {
  let oCount = (str.match(/[o]/gi) || []).length;
  let xCount = (str.match(/[x]/gi) || []).length;

  return oCount === xCount;
}
