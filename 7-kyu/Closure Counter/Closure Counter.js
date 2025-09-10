// counter function that creates a closure
function counter() {
  // private variable stored in the closure
  let count = 0;

  // inner function (closure) that increments and returns the count
  return function () {
    count += 1;
    return count;
  };
}

// Example usage:
const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2
console.log(newCounter()); // 3

/*
### 🔎 Explanation

1. **Closure Setup**

   * The `counter` function defines a local variable `count = 0`.
   * Normally, this variable would disappear once `counter()` finishes executing.

2. **Returning a Function**

   * Instead, `counter` returns an inner function.
   * This inner function "remembers" the surrounding scope (the variable `count`) due to **closure**.

3. **Persistence of State**

   * Each time you call `newCounter()`, the inner function updates and returns the *same `count` variable*.
   * That’s why it keeps incrementing instead of resetting.

4. **Encapsulation Advantage**

   * The `count` variable is private — it cannot be accessed directly from outside.
   * Only the returned function can manipulate it, which makes it a perfect example of closures maintaining **stateful behavior**.

---

✅ **Time Complexity:**
Each call to the counter is **O(1)** since it only does an increment and return.

✅ **Space Complexity:**
**O(1)** – only one integer (`count`) is stored in the closure’s lexical scope.
*/
