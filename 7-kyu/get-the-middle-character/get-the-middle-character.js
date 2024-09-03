// SOLUTION 1: concise mathematical approach because single slice() method
function getMiddle(s) {
  //   (s.length - 1) / 2: This calculates the index of the middle character when the length of the string is odd. Since array indices are zero-based, (s.length - 1) / 2 gives the index of the middle character.
  // s.length / 2 + 1: This calculates the index of the middle character when the length of the string is even. Since array indices are zero-based, s.length / 2 + 1 gives the index of the character immediately after the middle character.
  return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}

// SOLUTION 2: conditional approach because of ternary conditional operator
function getMiddle(s) {
  let middleIndex = Math.floor(s.length / 2);
  return s.length % 2 !== 0
    ? s.slice(middleIndex, middleIndex + 1)
    : s.slice(middleIndex - 1, middleIndex + 1);
}
