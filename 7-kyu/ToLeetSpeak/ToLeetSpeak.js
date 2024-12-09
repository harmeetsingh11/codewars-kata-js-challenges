function toLeetSpeak(str) {
  // Define the leet-speak alphabet mapping
  const leetMap = {
    A: '@',
    B: '8',
    C: '(',
    D: 'D',
    E: '3',
    F: 'F',
    G: '6',
    H: '#',
    I: '!',
    J: 'J',
    K: 'K',
    L: '1',
    M: 'M',
    N: 'N',
    O: '0',
    P: 'P',
    Q: 'Q',
    R: 'R',
    S: '$',
    T: '7',
    U: 'U',
    V: 'V',
    W: 'W',
    X: 'X',
    Y: 'Y',
    Z: '2',
  };

  // Replace each character in the input string using the leetMap
  return str
    .split('')
    .map((char) => leetMap[char] || char)
    .join('');
}

// Example
console.log(toLeetSpeak('LEET')); // Output: "1337"
console.log(toLeetSpeak('HELLO WORLD')); // Output: "#3110 W0R1D"

/* 
Explanation:

Mapping Setup:
A leetMap object defines the conversion from regular English letters to their leet-speak equivalents.

String Conversion:
The input string is split into individual characters using split('').

Mapping Each Character:
The map() function iterates through each character and replaces it with its leet-speak equivalent using the leetMap. If the character is not in the map (e.g., spaces), it remains unchanged (|| char).

Rejoin the Result:
The transformed characters are joined back into a single string using join('').

Efficient: Operates in O(n) time complexity, where n is the length of the input string.
*/
