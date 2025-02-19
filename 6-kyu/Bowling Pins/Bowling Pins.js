function bowlingPins(pins) {
  // Define the pin arrangement with positions
  const layout = [[7, 8, 9, 10], [4, 5, 6], [2, 3], [1]];

  // Create a visual representation of the pins
  let field = layout.map((row) =>
    row.map((pin) => (pins.includes(pin) ? ' ' : 'I')).join(' ')
  );

  // Ensure each row is 7 characters wide
  return field
    .map((row) => row.padStart((7 + row.length) / 2).padEnd(7))
    .join('\n');
}

console.log(bowlingPins([3, 5, 9]));

/* 
**Explanation of the Solution**

The function `bowlingPins(pins)` takes an array of fallen pin numbers and returns a formatted string representing the bowling pin layout.

---

### **Step 1: Define the Pin Layout**
```javascript
const layout = [
  [7, 8, 9, 10],
  [4, 5, 6],
  [2, 3],
  [1]
];
```
- The pins are arranged in a **triangle** (as seen in real bowling setups).
- Each sub-array represents a **row** of pins.

---

### **Step 2: Create a Visual Representation**
```javascript
let field = layout.map(row => 
  row.map(pin => pins.includes(pin) ? ' ' : 'I').join(' ')
);
```
- We **iterate over each row** and:
  - Replace the pin **with a space (' ')** if it is in the `pins` array (fallen).
  - Otherwise, represent it as an `'I'` (standing).
  - `join(' ')` ensures there is a space between each pin.

**Example:**  
If `pins = [3, 5, 9]`, then the transformation would be:
```plaintext
I I   I
 I   I
  I   
   I   
```

---

### **Step 3: Format Rows to Ensure Proper Alignment**
```javascript
return field.map(row => row.padStart((7 + row.length) / 2).padEnd(7)).join('\n');
```
- **`padStart((7 + row.length) / 2)`** → Centers the row.
- **`padEnd(7)`** → Ensures the row is always 7 characters wide.
- **`join('\n')`** → Joins all rows together with a newline.

This guarantees that all rows are aligned correctly in a **pyramid-like shape**.

---

### **Final Example Output**
#### **Input**
```javascript
console.log(bowlingPins([3, 5, 9]));
```

#### **Expected Output**
```plaintext
I I   I I
 I   I  
       
   I   
```

---
### **Efficiency & Optimization**
- Uses **`map()`** for row-wise processing.
- Uses **string padding methods (`padStart`, `padEnd`)** for alignment.
- Operates in **O(n)** time complexity, making it efficient.

*/
