function shaveHead(x) {
  // Count the number of stray hairs ('/') in the string
  let hairCount = (x.match(/\//g) || []).length;

  // Remove all stray hairs and replace them with '-'
  let cleanHead = x.replace(/\//g, '-');

  // Determine the message based on the number of stray hairs
  let messages = [
    'Clean!',
    'Unicorn!',
    'Homer!',
    'Careless!',
    'Careless!',
    'Careless!',
    'Hobo!',
  ];
  let status = messages[Math.min(hairCount, 6)]; // Ensures >5 hairs maps to "Hobo!"

  return [cleanHead, status];
}

console.log(shaveHead('------/------')); // ["-------------", "Unicorn!"]

/* 
Explanation:
1. **Count stray hairs**: Uses `.match(/\/g)` to find all occurrences of `/`, defaulting to an empty array if none are found, then takes its length.
2. **Remove stray hairs**: Uses `.replace(/\/g, '-')` to replace all `/` with `-`.
3. **Determine the message**:
   - Stores messages in an array.
   - Uses `Math.min(hairCount, 6)` to ensure any number >5 gets the `"Hobo!"` message.
4. **Returns**: An array with the cleaned head and corresponding message.
*/
