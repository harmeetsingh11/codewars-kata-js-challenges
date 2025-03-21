// 'all' method - returns true if all elements satisfy the predicate
Array.prototype.all = function (predicate) {
  for (let i = 0; i < this.length; i++) {
    if (!predicate(this[i])) {
      return false; // If any element fails the condition, return false
    }
  }
  return true; // All elements satisfy the condition
};

// 'none' method - returns true if no elements satisfy the predicate
Array.prototype.none = function (predicate) {
  for (let i = 0; i < this.length; i++) {
    if (predicate(this[i])) {
      return false; // If any element satisfies the condition, return false
    }
  }
  return true; // No element satisfies the condition
};

// 'any' method - returns true if at least one element satisfies the predicate
Array.prototype.any = function (predicate) {
  for (let i = 0; i < this.length; i++) {
    if (predicate(this[i])) {
      return true; // If any element satisfies the condition, return true
    }
  }
  return false; // No element satisfies the condition
};

const isGreaterThanZero = (num) => num > 0;
const isLessThanZero = (num) => num < 0;

console.log([1, 2, 3].all(isGreaterThanZero)); // true
console.log([-1, 0, 2].all(isGreaterThanZero)); // false

console.log([-1, 2, 3].none(isLessThanZero)); // false
console.log([-1, -2, -3].none(isGreaterThanZero)); // true

console.log([-1, 2, 3].any(isGreaterThanZero)); // true
console.log([-1, -2, -3].any(isGreaterThanZero)); // false

/* 
**Explanation:**
1. **No Pre-written Methods:** 
   - Instead of using `every()` or `some()`, I used `for` loops to iterate over the array manually.
2. **Logic Flow:**
   - `all`: Iterates through all elements and returns `false` if **any** element fails the predicate.
   - `none`: Iterates through all elements and returns `false` if **any** element satisfies the predicate.
   - `any`: Iterates through all elements and returns `true` if **at least one** element satisfies the predicate.
3. **Efficiency:**
   - The solution uses `O(n)` time complexity for each method, making it efficient.
*/
