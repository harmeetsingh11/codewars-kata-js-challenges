function whatPhrase(petals) {
  // Array of phrases corresponding to the petal tearing
  const phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
  ];

  // Calculate the index for the last petal using modulo operation
  return phrases[(petals - 1) % phrases.length];
}

/* 
Explanation

Phrase Array: The phrases array contains the six possible phrases.

Modulo Operation:
The phrases repeat cyclically after every 6 petals.
To find the corresponding phrase for a given number of petals, use (petals - 1) % phrases.length.
Subtract 1 from petals to convert the count to a 0-based index.
Use % phrases.length to ensure the index wraps around to the beginning when it exceeds the array length.

Return the Result: Return the phrase at the calculated index.
*/
