// SOLUTION 1: Using Regular Expression (Regex)
function getCount(str) {
  // The match() method searches the string for matches to the regular expression /[aeiou]/g.
  // The regex pattern [aeiou] looks for any of the vowels 'a', 'e', 'i', 'o', or 'u'.
  // The 'g' flag (global) ensures that the search continues throughout the entire string.
  // The match() method returns an array of all the matching characters.
  let vowelCount = str.match(/[aeiou]/g);
  return vowelCount ? vowelCount.length : 0;
}

// SOLUTION 2: using loop and array
function getCount(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let char of str) {
    // Check if the current character is included in the vowels array.
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
