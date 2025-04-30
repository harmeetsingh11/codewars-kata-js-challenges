function reverseIt(data) {
  // If data is a string, reverse it directly
  if (typeof data === 'string') {
    return data.split('').reverse().join('');
  }
  // If data is a number, convert to string, reverse, then convert back to number
  if (typeof data === 'number') {
    return +String(data).split('').reverse().join('');
  }
  // For all other types, return as-is
  return data;
}

console.log(reverseIt('Hello')); // "olleH"
console.log(reverseIt('314159')); // "951413"
console.log(reverseIt(314159)); // 951413  ← as number
console.log(reverseIt([1, 2, 3])); // [1,2,3]
console.log(reverseIt(true)); // true
console.log(reverseIt({})); // {}

/* 
### **Problem Understanding**
We are given a single input `data` which can be of **any type** (string, number, object, boolean, etc.). Our goal is:

- If the input is a **string** or **number**, return its **reverse**.
- For **all other types**, return the input **unchanged**.

Examples:
- `"Hello"` → `"olleH"` ✅
- `12345` → `54321` (as a number) ✅
- `[1, 2, 3]` → `[1, 2, 3]` ✅

---

### **Strategy**
1. **Type Checking**:  
   Use `typeof` to check the input type:
   - `typeof data === 'string'`
   - `typeof data === 'number'`

2. **Reversing Logic**:
   - For strings: `data.split('').reverse().join('')`
   - For numbers:
     - Convert to string: `String(data)`
     - Reverse like a string
     - Convert back to number: `+reversedString`

3. **Fallback**:  
   For all other data types (arrays, booleans, objects), return `data` unchanged.

---

### **Why this approach works well**
- **Handles both string and number accurately**.
- **Preserves data types**:
  - Input `number` returns reversed `number`.
  - Input `string` returns reversed `string`.
- **Avoids unnecessary complexity** like type coercion errors, JSON issues, or extra string quoting.
- **Safe defaults**: Non-primitive types are untouched, which avoids bugs or unexpected behavior.

*/
