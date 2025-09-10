/**
 * Picks the best conference city for Lucy.
 * @param {string[]} citiesVisited - Cities Lucy has visited before.
 * @param {string[]} citiesOffered - Cities offering conferences (ordered by relevance).
 * @returns {string} - The city Lucy should visit, or a fallback message.
 */
function conferencePicker(citiesVisited, citiesOffered) {
  // Convert visited cities to a Set for O(1) lookups
  const visitedSet = new Set(citiesVisited);

  // Find the first offered city not in visitedSet
  for (const city of citiesOffered) {
    if (!visitedSet.has(city)) return city;
  }

  // If all offered cities were visited already
  return 'No worthwhile conferences this year!';
}

// Example usage:
const citiesVisited = [
  'Mexico City',
  'Johannesburg',
  'Stockholm',
  'Osaka',
  'Saint Petersburg',
  'London',
];
const citiesOffered = ['Stockholm', 'Paris', 'Melbourne'];

console.log(conferencePicker(citiesVisited, citiesOffered));
// Output: "Paris"

/*
We need to pick the **first unvisited city** from the `citiesOffered` list, since it is already sorted by relevance.
If all offered cities have already been visited, return `"No worthwhile conferences this year!"`.
----

### 🔎 Explanation

1. **Convert visited list to a Set**

   * Lookup in an array (`.includes`) is `O(n)` → costly if list is long.
   * A `Set` allows `O(1)` average lookup, making the solution efficient.

2. **Iterate over offered cities in order**

   * Since `citiesOffered` is already ranked by relevance, the first unvisited city is the best choice.

3. **Return fallback if none available**

   * If all offered cities are already visited, return `"No worthwhile conferences this year!"`.

---

### ✅ Time & Space Complexity

* **Time Complexity:** `O(m + n)`
  where `m = number of visited cities`, `n = number of offered cities`.
* **Space Complexity:** `O(m)` for the `Set`.

*/
