/**
 * Sorts climbing grades from easiest to hardest.
 * @param {string[]} grades - List of climbing grades.
 * @returns {string[]} Sorted list of grades.
 */
function sortGrades(grades) {
  // Helper: convert grade string into a comparable numeric value
  const gradeToValue = (grade) => {
    if (grade === 'VB') return -1; // VB is easier than V0
    if (grade === 'V0+') return 0.5; // V0+ is between V0 and V1
    return parseInt(grade.slice(1), 10); // Convert "Vn" -> number n
  };

  // Sort using numeric mapping
  return grades.slice().sort((a, b) => gradeToValue(a) - gradeToValue(b));
}

console.log(sortGrades(['V3', 'VB', 'V0+', 'V1', 'V0']));
// → [ 'VB', 'V0', 'V0+', 'V1', 'V3' ]

console.log(sortGrades(['V5', 'V2', 'V4', 'V0+']));
// → [ 'V0+', 'V2', 'V4', 'V5' ]

console.log(sortGrades([]));
// → []

/*
We need to sort climbing grades (`VB`, `V0`, `V0+`, `V1`, …, `V17`) **from easiest to hardest**.
The tricky part:

* `"VB"` is the easiest (before `"V0"`)
* `"V0+"` comes after `"V0"` but before `"V1"`.

We’ll create a custom comparator for sorting.
---

## 📝 Explanation

1. **Mapping grades to numbers**

   * `"VB"` → `-1` (easiest)
   * `"V0"` → `0`, `"V0+"` → `0.5`
   * `"V1"` → `1`, `"V2"` → `2`, … `"V17"` → `17`

2. **Convert grades into numeric values** using a helper function `gradeToValue`.

3. **Sort the array** using `.sort()` with this mapping.

4. **Return the sorted array**.

---
This solution is **efficient (O(n log n))**, **concise**, and uses a **custom comparator** that handles all special cases (`VB`, `V0+`) cleanly.
*/
