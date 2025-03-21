const hasOddBit = (x) => {
  // Create a bitmask with 1s at all odd positions: 0b10101010... (32 bits)
  const oddMask = 0xaaaaaaaa; // 0xAAAAAAAA = 2863311530 (32-bit: 10101010...1010)

  // Use bitwise AND to check if any odd bit is 1
  return (x & oddMask) !== 0 ? 1 : 0;
};

console.log(hasOddBit(2)); // 1 (true) -> 0b10
console.log(hasOddBit(5)); // 0 (false) -> 0b101
console.log(hasOddBit(170)); // 1 (true) -> 0b10101010
console.log(hasOddBit(0)); // 0 (false) -> 0b0
console.log(hasOddBit(4294967295)); // 1 (true) -> 0b11111111111111111111111111111111

/*
### **Explanation:**
1. **Bitmask Creation:**  
   - `0xAAAAAAAA` is a hexadecimal representation of the 32-bit binary number `10101010101010101010101010101010`.  
   - This mask has `1`s at all **odd** bit positions (1, 3, 5, 7, ..., 31).

2. **Bitwise AND (`&`) Operation:**  
   - `x & oddMask`:  
     - This compares `x` with the mask.  
     - Any `1` at an odd position in `x` will keep the corresponding bit as `1` in the result.
     - If at least one odd bit is `1`, the result will be nonzero.
     - If no odd bits are `1`, the result will be `0`.

3. **Ternary Operator:**  
   - `(x & oddMask) !== 0 ? 1 : 0`:  
     - If the result of the AND operation is nonzero, return `1` (true).  
     - Otherwise, return `0` (false).


### **Complexity Analysis:**
- **Time Complexity:** \(O(1)\) → Constant time bitwise operations.  
- **Space Complexity:** \(O(1)\) → Only using one constant mask.  
*/
