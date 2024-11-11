function whoIsPaying(name) {
  // If the name is 2 characters or less, return an array with the name as-is
  // Otherwise, return an array with the full name and the first two letters
  return name.length <= 2 ? [name] : [name, name.slice(0, 2)];
}

/* 
Explanation:

Short Names:
If the name length is 2 or fewer characters, we return an array with the name itself, as no truncation is needed.

Longer Names:
For names longer than 2 characters, we return an array with both the full name (name) and the truncated version (name.slice(0, 2)), which extracts the first two letters.
*/
