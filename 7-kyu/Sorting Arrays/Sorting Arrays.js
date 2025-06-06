function sortByFirstLetterMatch(a1, a2) {
  // Step 1: Create a map from the first letter of each word in a1 to its index
  const letterIndexMap = {};
  a1.forEach((word, index) => {
    letterIndexMap[word[0]] = index;
  });

  // Step 2: Sort a2 based on the index in a1 of the word that starts with the same letter
  return a2.sort((w1, w2) => {
    return letterIndexMap[w1[0]] - letterIndexMap[w2[0]];
  });
}

console.log(
  sortByFirstLetterMatch(
    ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'],
    ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus']
  )
); // ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']

console.log(
  sortByFirstLetterMatch(
    ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin'],
    ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo']
  )
); // ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']

/*
### Explanation:

- **Step 1:** We create a map where the **key** is the first letter of each word in `a1`, and the **value** is the index of that word. This allows O(1) lookup of index by first letter.
- **Step 2:** Sort `a2` by comparing the index in `a1` of words that start with the **same first letter** as each word in `a2`.
- It's **efficient**:
  - Map creation is `O(n)`,
  - Sorting is `O(n log n)` using a constant time lookup,
  - Total time complexity is optimal for this task.
*/
