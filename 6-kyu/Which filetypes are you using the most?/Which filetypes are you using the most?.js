function mostCommonExtensions(files) {
  // Map to store frequency of extensions
  const freq = new Map();

  for (const file of files) {
    // Extract extension: take last '.' and everything after it
    const lastDot = file.lastIndexOf('.');
    if (lastDot === -1) continue; // skip files without extensions

    const ext = file.slice(lastDot); // includes the dot (e.g., ".mp3")

    // Count frequency
    freq.set(ext, (freq.get(ext) || 0) + 1);
  }

  // Find maximum frequency
  let maxFreq = Math.max(...freq.values());

  // Collect all extensions with max frequency
  const result = [...freq.entries()]
    .filter(([_, count]) => count === maxFreq)
    .map(([ext]) => ext)
    .sort(); // Sort alphabetically in case of tie

  return result;
}

console.log(
  mostCommonExtensions([
    'Lakey - Better days.mp3',
    'Wheathan - Superlove.wav',
    'groovy jam.als',
    '#4 final mixdown.als',
    'album cover.ps',
    'good nights.mp3',
  ])
);
// Output: [".als", ".mp3"]

console.log(
  mostCommonExtensions([
    'Lakey - Better days.mp3',
    'Fisher - Stop it.mp3',
    'Fisher - Losing it.mp3',
    '#4 final mixdown.als',
    'album cover.ps',
    'good nights.mp3',
  ])
);
// Output: [".mp3"]

/*
### 🔎 Explanation:

1. **Iterate over files**: For each filename, find the last occurrence of `.` since extensions are defined by the last dot.

   * Example: `"mysong.mp3.als"` → take `".als"`.
   * If no `.` is found, skip that file.

2. **Store counts in a Map**:

   * Keys = extensions (with the dot, like `".mp3"`)
   * Values = frequency count

3. **Find the maximum frequency** using `Math.max`.

4. **Filter extensions with max frequency**.

   * If multiple extensions tie, include all.

5. **Sort** the result alphabetically (since ties must be returned sorted).
---

⚡ This solution is **O(n log n)** (due to sorting in tie cases). The counting part is **O(n)**, which is optimal.
*/
