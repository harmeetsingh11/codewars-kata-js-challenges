function sortWordsByCase(input) {
  return (
    input
      .split(' ') // Split the input string into words
      .filter((word) => /^[a-zA-Z]/.test(word)) // Filter out words starting with numbers or special characters
      .reduce(
        (acc, word) => {
          /^[A-Z]/.test(word) ? acc.upper.push(word) : acc.lower.push(word); // Separate words by case
          return acc;
        },
        { upper: [], lower: [] }
      )

      // Join uppercase words first, followed by lowercase words, preserving order
      .upper.concat(
        ...arguments[0].split(' ').filter((word) => /^[a-z]/.test(word))
      )
      .join(' ')
  );
}

console.log(sortWordsByCase('hey You, Sort me Already!')); // "You, Sort Already! hey me"

/* 
### Explanation:
1. **Split the string** into words using `.split(' ')`.
2. **Filter out invalid words** that start with numbers or special characters using `filter(word => /^[a-zA-Z]/.test(word))`.
3. **Separate uppercase and lowercase words** using `reduce()`, pushing words into respective arrays.
4. **Concatenate uppercase words first, followed by lowercase words**, preserving order.
5. **Join the words back into a string** using `.join(' ')`.
*/
