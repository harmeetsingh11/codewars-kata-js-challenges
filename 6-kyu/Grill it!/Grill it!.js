function grille(message, code) {
  // Convert the code to binary string and pad it from the left with 0s to match message length
  const mask = ('0'.repeat(message.length) + code.toString(2)).slice(
    -message.length
  );

  // Spread the message into characters, filter using mask, and join back to string
  return [...message]
    .filter((char, i) => +mask[i]) // Include only if the corresponding mask bit is 1
    .join('');
}

// Example
grille('abcdef', 5);
// code: 5 → binary: "101"
// padded: "000101"
// mask:   "000101"
//         abcdef
//         --- - -
//         pick d and f → result: "df"

/*
### **Intuition / Thought Process**

- The `code` is a number that, when converted to binary, tells us **which characters** in `message` to **extract**:
  - If the binary digit is `1` → include the character.
  - If it's `0` → skip the character.
- But the binary string might be **shorter** than the `message`, so we need to **left-pad** it with zeroes to make sure it matches the message length.
- Once we have a binary **mask** (same length as `message`), we loop through the message and **include** only those characters whose corresponding mask value is `'1'`.
*/
