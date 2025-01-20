function removeGhosts(building) {
  // Check if the string contains any whitespace (ghosts)
  if (building.includes(' ')) {
    // Remove all spaces (ghosts) from the string
    return building.replace(/\s/g, '');
  }
  // If no ghosts found, return the predefined message
  return "You just wanted my autograph didn't you?";
}

console.log(removeGhosts('Sky scra per')); // "Skyscraper"
console.log(removeGhosts('Skyscraper')); // "You just wanted my autograph didn't you?"

/* 
Explanation:

Input Validation:
Check if the input building contains any spaces using includes(' ').
If it does, it means the building has "ghosts."

Remove Ghosts:
Use the replace method with a regular expression /\s/g to remove all whitespace characters (\s) globally (g) from the string.

No Ghosts:
If no spaces are found in the input string, return the message "You just wanted my autograph didn't you?".

This approach is efficient because:
It performs a single scan of the string to check for spaces.
The replace method is well-optimized for removing characters in JavaScript.
*/
