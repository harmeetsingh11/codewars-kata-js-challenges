function minValue(values) {
  // Create a set to remove duplicates, convert to an array, sort it, and join into a number
  return Number([...new Set(values)].sort().join(''));
}

// Explanation:

// 1. new Set(values): This removes duplicates by converting the array into a Set, which only keeps unique values.

// 2. [...new Set(values)]: The spread operator (...) converts the Set back into an array.

// 3. .sort(): The array of unique values is sorted in ascending order.

// 4. .join(''): The sorted array is joined into a single string.

// 5. Number(): Converts the resulting string into a number.
