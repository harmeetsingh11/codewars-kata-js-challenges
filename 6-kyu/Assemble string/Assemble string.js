function restoreString(copies) {
  // If input array is empty, return an empty string
  if (copies.length === 0) return '';

  const length = copies[0].length;
  let result = '';

  // Iterate over each character index
  for (let i = 0; i < length; i++) {
    const chars = new Set();

    // Collect all non-asterisk characters at this index
    for (const copy of copies) {
      const char = copy[i];
      if (char !== '*') chars.add(char);
    }

    // If all characters are asterisks or conflict, use "#"
    result += chars.size === 1 ? [...chars][0] : '#';
  }

  return result;
}

console.log(restoreString(['a*cde', '*bcde', 'abc*e'])); // "abcde"
console.log(restoreString(['a*c**', '**cd*', 'a*cd*'])); // "a#cd#"

/*
### Why this is efficient:

**Time complexity**: O(n × m), where `n` is the number of strings and `m` is the length of each string — efficient for moderate inputs.
**Space complexity**: O(m) — only a few variables and temporary sets per character index.
**Concise**: Just one loop for characters and a nested loop for collecting non-`*` characters.
**Clear logic**: Uses a `Set` to detect agreement or conflict at each index.
*/
