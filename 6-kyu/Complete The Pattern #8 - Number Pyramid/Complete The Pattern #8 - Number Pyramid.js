function pattern(n) {
  if (n <= 0) return '';

  const lines = [];
  const width = 2 * n - 1; // Max width of the last line

  for (let i = 1; i <= n; i++) {
    // Generate increasing part: from 1 to i (mod 10)
    const inc = Array.from({ length: i }, (_, j) => j % 10)
      .map((d) => (d + 1) % 10)
      .join('');

    // Generate decreasing part: from i-1 to 1 (mod 10)
    const dec = Array.from({ length: i - 1 }, (_, j) => (i - 2 - j) % 10)
      .map((d) => (d + 1) % 10)
      .join('');

    const fullLine = inc + dec;

    // Pad the line to center it based on final line's width
    const paddedLine = fullLine
      .padStart((width + fullLine.length) / 2, ' ')
      .padEnd(width, ' ');

    lines.push(paddedLine);
  }

  return lines.join('\n');
}

/* 
### 🦆 **Quick Explanation of the Pattern Solution:**

1. **Edge Case**:
   If `n <= 0`, return an empty string (`""`).

2. **Width Calculation**:
   The last line has `2 * n - 1` characters.
   We use this width to center every line.

3. **Line Construction** (for each `i` from `1` to `n`):

   * **Increasing Part**:
     Numbers from `1` to `i`, but always using **modulo 10** so it wraps like `...8,9,0,1,...`
   * **Decreasing Part**:
     Mirror the increasing part **excluding the last digit**, again using **modulo 10**.

4. **Center Align** the line using `padStart()` and `padEnd()` so it looks symmetrical.

5. **Join** all lines using `\n`.

---

### 🧠 Example:

For `n = 5`, it builds:

```
    1    
   121   
  12321  
 1234321 
123454321
```

Each line grows symmetrically and wraps digits using `% 10`.
*/
