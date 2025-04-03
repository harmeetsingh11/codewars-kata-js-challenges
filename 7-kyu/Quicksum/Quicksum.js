function quicksum(packet) {
  // Validate packet: it must contain only uppercase letters and spaces
  if (!/^[A-Z ]+$/.test(packet)) return 0;

  // Calculate the quicksum
  return [...packet].reduce((sum, char, index) => {
    let value = char === ' ' ? 0 : char.charCodeAt(0) - 64; // A=1, B=2, ..., Z=26, space=0
    return sum + (index + 1) * value; // Position starts from 1, hence (index + 1)
  }, 0);
}

console.log(quicksum('ACM')); // 46
console.log(quicksum('A C M')); // 75
console.log(quicksum('AbqTH #5')); // 0
console.log(quicksum('AB')); // 11

/* 
### **Explanation & Approach**  

#### **1. Validation Check**  
- We use a **regular expression** `/^[A-Z ]+$/` to ensure that the string contains **only uppercase letters and spaces**.  
- If the packet contains any **lowercase letters, numbers, or special characters**, we return `0`.

#### **2. Computing the Quicksum**  
- We iterate over each character in the string using the **spread operator (`...packet`) and `reduce()`**.  
- For each character at position **(index + 1)**:
  - If it's a **letter**, we compute its value using `char.charCodeAt(0) - 64`:
    - `'A'` (ASCII: 65) → `65 - 64 = 1`
    - `'B'` (ASCII: 66) → `66 - 64 = 2`
    - ..., `'Z'` (ASCII: 90) → `90 - 64 = 26`
  - If it's a **space**, we assign a value of `0`.
  - Multiply the value by its **position (1-based index)** and accumulate the sum.

#### **3. Example Calculations**
##### **Case 1: "ACM"**
```
'A' at position 1 → 1 × 1 = 1
'C' at position 2 → 3 × 2 = 6
'M' at position 3 → 13 × 3 = 39
Total = 1 + 6 + 39 = 46
```

##### **Case 2: "A C M"**
```
'A' at position 1 → 1 × 1 = 1
' ' at position 2 → 0 × 2 = 0
'C' at position 3 → 3 × 3 = 9
' ' at position 4 → 0 × 4 = 0
'M' at position 5 → 13 × 5 = 65
Total = 1 + 0 + 9 + 0 + 65 = 75
```

##### **Case 3: "AB"**
```
'A' at position 1 → 1 × 1 = 1
'B' at position 2 → 2 × 2 = 4
Total = 1 + 4 = 5
```

### **Why is this approach efficient?**
- **Time Complexity:** **O(n)** (linear scan of string).
- **Space Complexity:** **O(1)** (constant extra space usage).
- Uses **`reduce()`** for a clean, functional approach.
- **Regex validation** is efficient and ensures correct input.
*/
