function birdCode(birds) {
  return birds.map((name) => {
    // Replace hyphens with spaces and split the name into words
    const words = name.replace(/-/g, ' ').split(' ');

    let code = '';
    // Apply rules based on number of words
    switch (words.length) {
      case 1:
        // One word: take first 4 letters
        code = words[0].slice(0, 4);
        break;
      case 2:
        // Two words: take first 2 letters of each
        code = words[0].slice(0, 2) + words[1].slice(0, 2);
        break;
      case 3:
        // Three words: first letter of first 2 + first 2 letters of third
        code = words[0][0] + words[1][0] + words[2].slice(0, 2);
        break;
      case 4:
        // Four words: first letter of each
        code = words.map((word) => word[0]).join('');
        break;
    }

    // Return the code in upper case
    return code.toUpperCase();
  });
}

console.log(birdCode(['Black-Capped Chickadee', 'Common Tern'])); // ["BCCH", "COTE"]

/*
### Key Points:
* **`.replace(/-/g, ' ')`** handles the hyphen-to-space conversion.
* **`.split(' ')`** separates words.
* **`switch` statement** applies the four rules cleanly.
* **`.toUpperCase()`** ensures the code is in all caps.
* **`.map()`** keeps the return array in the same order as input.
*/
