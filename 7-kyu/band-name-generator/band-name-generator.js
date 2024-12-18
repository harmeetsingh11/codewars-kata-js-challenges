function bandNameGenerator(noun) {
  // Check if the first and last characters of the noun are the same
  if (noun[0].toLowerCase() === noun[noun.length - 1].toLowerCase()) {
    // If they are the same, repeat the noun, connecting first and last letter as one word
    return noun.charAt(0).toUpperCase() + noun.slice(1) + noun.slice(1);
  }
  // Otherwise, return the noun with "The" in front and the first letter capitalized
  return 'The ' + noun.charAt(0).toUpperCase() + noun.slice(1);
}

/* 
Explanation:

Condition Check: We check if the first and last letters of the noun are the same by comparing noun[0] and noun[noun.length - 1]. We use .toLowerCase() to ensure case-insensitive comparison.

Repeated Noun: If the condition is true (first and last letter are the same), the band name is the noun with its first letter capitalized followed by the same noun appended to it.

Default Format: If the condition is false (the first and last letter are different), the band name is prefixed with "The" and the noun has its first letter capitalized.
*/
