function whitespaceNumber(n) {
  // Zero is a special case: just " \n"
  if (n === 0) return ' \n';

  // Sign: space for positive, tab for negative
  const sign = n > 0 ? ' ' : '\t';

  // Convert absolute value to binary string (e.g., 9 -> "1001")
  const binary = Math.abs(n).toString(2);

  // Map binary digits: '0' => space, '1' => tab
  const encoded = binary.replace(/0/g, ' ').replace(/1/g, '\t');

  // Return full Whitespace representation with LF at end
  return sign + encoded + '\n';
}

/*
### Explanation:
- `sign`: `' '` (space) for positive, `'\t'` (tab) for negative.
- `binary`: no reversal, use straight MSB-to-LSB order.
- Replace `'0'` with `' '` and `'1'` with `'\t'`.
- Concatenate sign + encoded binary + `'\n'`.

### Examples:

| Input | Binary | Output (unbleached) |
|-------|--------|---------------------|
| `9`   | `1001` | `[space][tab][space][space][space][LF]` |
| `0`   | `--`   | `[space][LF]` |
| `-3`  | `11`   | `[tab][tab][tab][LF]` |
| `83`  | `1010011` | `[space][tab][space][tab][space][space][tab][tab][LF]` |
*/
