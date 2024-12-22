function letterCount(city) {
  // Convert the city name to lowercase and filter out non-letter characters
  const sanitized = city.toLowerCase().replace(/[^a-z]/g, '');

  // Use a Map to store the counts of each letter in order of first appearance
  const counts = new Map();

  // Iterate over each character in the sanitized string
  for (const char of sanitized) {
    counts.set(char, (counts.get(char) || 0) + 1);
  }

  // Build the result string from the Map
  return Array.from(counts)
    .map(([char, count]) => `${char}:${'*'.repeat(count)}`)
    .join(',');
}

// Example
console.log(letterCount('Chicago')); // "c:**,h:*,i:*,a:*,g:*,o:*"
console.log(letterCount('Bangkok')); // "b:*,a:*,n:*,g:*,k:**,o:*"
console.log(letterCount('Las Vegas')); // "l:*,a:**,s:**,v:*,e:*,g:*"

/* 
Explanation:

Sanitization:
Convert the input string to lowercase using toLowerCase() to ensure the comparison is case-insensitive.
Remove any non-letter characters using replace(/[^a-z]/g, "").

Counting Letters:
Use a Map to store the count of each letter. Map preserves the insertion order, which ensures letters appear in the order of their first occurrence.

Building the Result:
Convert the Map entries into an array using Array.from(counts).
Use map to transform each entry into the desired format (char:* repeated count times).
Join the transformed array into a single string using join(",").

This approach is efficient with a time complexity of O(n), where n is the length of the input string, and it handles edge cases like special characters and case sensitivity correctly.
*/
