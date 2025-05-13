function whichNote(keyPressNumber) {
  // The notes repeat in this exact 12-note sequence starting from A
  const notes = [
    'A',
    'A#',
    'B',
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
  ];

  // Map each key on the 88-key piano to a note by repeating the 12-note sequence
  // The 1st key is A => notes[0], the 2nd is A# => notes[1], ..., 89th is again A, etc.
  // So, we calculate the (zero-based) position by: (keyPressNumber - 1) % 88
  // Then map that to the notes array using % 12 to find the corresponding note
  return notes[((keyPressNumber - 1) % 88) % 12];
}

console.log(whichNote(1)); // "A"
console.log(whichNote(12)); // "G#"
console.log(whichNote(42)); // "D"
console.log(whichNote(100)); // "G#"
console.log(whichNote(2017)); // "F"

/*
### Why it works:

* The piano has 88 keys that repeat in a **12-note pattern**.
* When counting past 88, we wrap around: `key % 88`.
* Each of the 88 keys maps to a note from that 12-note cycle.
* So, `(key - 1) % 88 % 12` gives the **correct note index** in the `notes` array.
*/
