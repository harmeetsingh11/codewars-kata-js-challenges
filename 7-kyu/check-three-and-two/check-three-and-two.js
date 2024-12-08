function checkArray(arr) {
  // Create a frequency map to count occurrences of each character
  const freq = arr.reduce((map, char) => {
    map[char] = (map[char] || 0) + 1;
    return map;
  }, {});

  // Check if the frequency values include 3 and 2
  return Object.values(freq).sort().join('') === '23';
}

// Examples
console.log(checkArray(['a', 'a', 'a', 'b', 'b'])); // true
console.log(checkArray(['a', 'b', 'c', 'b', 'c'])); // false

/* 
Explanation

Frequency Map Creation:
Use reduce to build an object (freq) where keys are the characters and values are their counts.
(map[char] || 0) ensures that if the key doesn't exist, it starts from 0.

Check for Frequency Values:
Use Object.values(freq) to get an array of frequencies.
Sort the frequencies and convert them to a string for comparison.
The valid frequency pattern is 23 (i.e., one element appears 3 times and another 2 times).

Return the Result:
Return true if the condition matches; otherwise, false.
This approach is efficient with a time complexity of O(n) for building the frequency map and O(1) for comparing frequencies, making it well-suited for the problem.
*/
