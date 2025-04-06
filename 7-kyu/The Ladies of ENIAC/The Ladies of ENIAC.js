function revealENIACLadies(str) {
  return (
    str
      // Remove everything except letters, spaces, and exclamation marks
      .replace(/[^a-zA-Z !]/g, '')
      // Convert the result to uppercase
      .toUpperCase()
  );
}

const input = `Comprised of a team of five incredibly brilliant women, "The ladies of ENIAC" were the first “computors” working at the University of Pennsylvania’s Moore School of Engineering (1945). Through their contributions, we gained the first software application and the first programming classes! The ladies of ENIAC were inducted into the WITI Hall of Fame in 1997!`;

console.log(revealENIACLadies(input));

/*
### Explanation:
1. `.replace(/[^a-zA-Z !]/g, '')`: This regex removes all characters **except**:
   - `a-zA-Z` → all alphabetic characters (both lowercase and uppercase),
   - space (` `),
   - and exclamation mark (`!`).

2. `.toUpperCase()`: Converts the cleaned string to uppercase as required.
*/
