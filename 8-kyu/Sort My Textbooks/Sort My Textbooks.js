function sortTextbooks(textbooks) {
  // Sort the array using the JavaScript sort method with a custom comparator
  return textbooks.sort((a, b) => {
    // Convert both strings to lowercase for case-insensitive comparison
    const subjectA = a.toLowerCase();
    const subjectB = b.toLowerCase();

    // Compare the lowercase versions of the strings
    if (subjectA < subjectB) return -1; // a comes before b
    if (subjectA > subjectB) return 1; // b comes before a
    return 0; // a and b are equal
  });
}

const textbooks = ['Math', 'History', 'science', 'english', 'Art'];
console.log(sortTextbooks(textbooks)); // Output: [ 'Art', 'english', 'History', 'Math', 'science' ]

/*
### Explanation:
1. **`sort()` method**: The `sort()` method is used to sort the elements in the array. We provide a custom comparator function to ensure a case-insensitive sort.
2. **`toLowerCase()`**: This converts each string to lowercase to ensure the sorting is case-insensitive.
3. **Comparator logic**:
   - If `subjectA` is less than `subjectB`, it returns `-1` (meaning `a` comes first).
   - If `subjectA` is greater than `subjectB`, it returns `1` (meaning `b` comes first).
   - If both subjects are equal, it returns `0` (no change in order).
*/
