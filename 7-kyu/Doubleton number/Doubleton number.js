function doubleton(n) {
  while (true) {
    n++; // move to the next number
    // convert number to a string, then to a Set to get unique digits
    const uniqueDigits = new Set(n.toString());
    if (uniqueDigits.size === 2) return n; // return if exactly two distinct digits
  }
}

console.log(doubleton(120)); // 121
console.log(doubleton(1234)); // 1311
console.log(doubleton(10)); // 12

/*
### Explanation:
- `while (true)`: Infinite loop until we find the answer.
- `n++`: We increment `n` to ensure we’re always looking for a *strictly* greater number.
- `n.toString()`: Converts the number to a string so we can iterate over digits.
- `new Set(...)`: A `Set` automatically stores only unique values, so this removes duplicate digits.
- `uniqueDigits.size === 2`: We check if there are exactly 2 unique digits — the definition of a doubleton.
*/
