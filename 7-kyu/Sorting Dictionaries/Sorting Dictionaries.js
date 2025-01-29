function sortDict(dict) {
  return Object.entries(dict) // Convert object to an array of key-value pairs
    .map(([key, value]) => [isNaN(key) ? key : Number(key), value]) // Convert numeric keys to numbers
    .sort((a, b) => b[1] - a[1]); // Sort by value in descending order
}

// Test cases
console.log(sortDict({ 3: 1, 2: 2, 1: 3 })); // [[1,3], [2,2], [3,1]]
console.log(sortDict({ 1: 2, 2: 4, 3: 6 })); // [[3,6], [2,4], [1,2]]
console.log(sortDict({ a: 6, b: 2, c: 4 })); // [['a', 6], ['c', 4], ['b', 2]]

/* 
### **Explanation of the Solution**  

The goal is to **sort an object (dictionary) by its values in descending order** while ensuring numeric keys remain numbers and string keys stay as strings.

---

### **Step 1: Convert Object to an Array of Key-Value Pairs**
```js
Object.entries(dict)
```
- `Object.entries(dict)` converts the object into an **array of key-value pairs**, where each entry is `[key, value]`.  
- Example:
  ```js
  Object.entries({3:1, 2:2, 1:3}) // [["3", 1], ["2", 2], ["1", 3]]
  ```
- **Problem**: Keys are always **strings**, even if they were numbers in the original object.

---

### **Step 2: Convert Numeric Keys to Numbers**
```js
.map(([key, value]) => [isNaN(key) ? key : Number(key), value])
```
- **`isNaN(key) ? key : Number(key)`**
  - If `key` is a **number in string form** (like `"1"`, `"2"`, `"3"`), convert it to a number.
  - If `key` is a **string** (like `"a"`, `"b"`, `"c"`), leave it unchanged.
- Example:
  ```js
  [["3", 1], ["2", 2], ["1", 3]] 
  After conversion:
  [[3, 1], [2, 2], [1, 3]]
  ```
- This ensures **numeric keys remain numbers**, fixing the issue where the expected output contained `[1, 3]` instead of `["1", 3]`.

---

### **Step 3: Sort by Value in Descending Order**
```js
.sort((a, b) => b[1] - a[1])
```
- Sorting function **compares the values** (`b[1] - a[1]`) to arrange them from **largest to smallest**.
- Example:
  ```js
  [[3, 1], [2, 2], [1, 3]]
  After sorting by value:
  [[1, 3], [2, 2], [3, 1]]
  ```

---

### **Final Output**
- For numeric keys:
  ```js
  sortDict({3:1, 2:2, 1:3}) // [[1, 3], [2, 2], [3, 1]]
  ```
- For string keys:
  ```js
  sortDict({'a': 6, 'b': 2, 'c': 4}) // [['a', 6], ['c', 4], ['b', 2]]
  ```
This ensures both **numeric and string keys are correctly handled** while keeping the function concise and efficient (`O(n log n)`). 🚀
*/
