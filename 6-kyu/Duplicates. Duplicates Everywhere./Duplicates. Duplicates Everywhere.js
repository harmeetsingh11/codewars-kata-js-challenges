function uniqueCharTable(table) {
  // Convert keys to numbers and sort in descending order (largest key first)
  const sortedKeys = Object.keys(table)
    .map(Number)
    .sort((a, b) => b - a);

  // Set to track characters that should remain in higher keys
  const seen = new Set();

  // Iterate over keys in descending order to ensure larger keys keep duplicates
  for (let key of sortedKeys) {
    const uniqueChars = [];
    const encountered = new Set(); // Track duplicates within the same array

    for (let char of table[key]) {
      // Add character only if it has not been assigned to a larger key and not repeated
      if (!seen.has(char) && !encountered.has(char)) {
        uniqueChars.push(char);
        encountered.add(char); // Mark character as seen in this array
      }
    }

    table[key] = uniqueChars; // Update table with unique characters
    uniqueChars.forEach((char) => seen.add(char)); // Mark characters as used globally
  }

  return table;
}

// Example test cases
console.log(
  uniqueCharTable({
    1: ['C', 'F', 'G'],
    2: ['A', 'B', 'C'],
    3: ['A', 'B', 'D'],
  })
);

console.log(
  uniqueCharTable({
    1: ['A'],
    2: ['A'],
    3: ['A'],
  })
);

console.log(
  uniqueCharTable({
    432: ['A', 'A', 'B', 'D'],
    53: ['L', 'G', 'B', 'C'],
    236: ['L', 'A', 'X', 'G', 'H', 'X'],
    11: ['P', 'R', 'S', 'D'],
  })
);

/* 
### **Explanation, Approach, and Intuition**

#### **Problem Breakdown**
- We have a dictionary where:
  - Keys are stringified numbers.
  - Values are arrays of characters.
- We need to **ensure each character appears only once** in the table.
- If a character is found in multiple keys, **it should remain only in the largest key (numerically).**
- If a character appears multiple times in the same array, **only the first occurrence should be kept.**

---

### **Approach**
1. **Sort the keys in descending order** (largest key first).  
   - This ensures that we process larger keys before smaller ones, allowing them to retain characters.

2. **Use a `Set` (`seen`) to track globally used characters.**  
   - This ensures that once a character is assigned to a larger key, it is removed from smaller ones.

3. **Iterate over the sorted keys and filter out characters:**
   - Maintain an `encountered` set for each key to **remove duplicates within the same array.**
   - Add characters to `uniqueChars` **only if they have not already been assigned to a larger key**.
   - After processing a key, **mark its characters as "used" globally** by adding them to `seen`.

---

### **Intuition**
- Sorting keys in **descending order** allows us to **process larger keys first**.
- Using a `Set` to **track seen characters** ensures that smaller keys don’t keep characters that already belong to larger keys.
- By **iterating over characters while maintaining order**, we keep the **first occurrence** and discard duplicates efficiently.

---

### **Time Complexity Analysis**
- **Sorting the keys**: \(O(N \log N)\) (where \(N\) is the number of keys).
- **Processing each key**: \(O(M)\) (where \(M\) is the total number of characters across all arrays).
- **Overall Complexity**: **\(O(N \log N + M)\)**  
  - The sorting step dominates, but it remains efficient.

---

### **Key Takeaways**
✅ Sorting in descending order ensures **correct character retention**.  
✅ Using a **global `Set` (`seen`)** prevents characters from appearing in smaller keys.  
✅ Using an **inner `Set` (`encountered`)** ensures we keep **only the first occurrence** in each array.  
✅ **Efficient implementation** with optimal complexity.
*/
