function multiplyStrings(arr) {
  // Convert both strings to numbers, multiply them, then convert back to string
  return (BigInt(arr[0]) * BigInt(arr[1])).toString();
}

console.log(multiplyStrings(['3', '5'])); // '15'
console.log(multiplyStrings(['2', '-3'])); // '-6'
console.log(multiplyStrings(['9', '0'])); // '0'

/*
### ✅ Why this solution is best:
- **`BigInt`** handles very large numbers safely, unlike `Number` which has size limits.
- One-liner core logic: clean and expressive.
- Handles **negative numbers**, **zero**, and **large integers**.
- Minimal code, **no conditionals or loops needed**.
*/
