class Class {
  // Static property to store the current value (shared across all calls)
  static current = 1;

  // Static method that returns the required value
  static getNumber() {
    const result = this.current; // Save current value to return
    this.current *= 2; // Double it for the next call
    return result; // Return the saved value
  }
}

// Example usage:
console.log(Class.getNumber()); // 1
console.log(Class.getNumber()); // 2
console.log(Class.getNumber()); // 4
console.log(Class.getNumber()); // 8

/*
This is a **stateful function problem** — we need a method that “remembers” its previous return value across calls.

### 🔎 Problem Restatement

* First call → return `1`
* Second call → return `2`
* Third call → return `4`
* Fourth call → return `8`
* and so on… (each call doubles the previous result).

### 📝 Explanation

1. **Static Property (`current`)**

   * Belongs to the class itself (not an instance).
   * Used to keep track of the last returned value.
   * Initialized to `1`.

2. **Static Method (`getNumber`)**

   * Returns the current stored value.
   * Then updates it by doubling (`this.current *= 2`).
   * Ensures that the next call gives the correct result.

3. **Efficiency**

   * Time Complexity → **O(1)** per call (constant work).
   * Space Complexity → **O(1)** (just one stored number).
   * Very concise, no arrays or extra data structures.

*/
