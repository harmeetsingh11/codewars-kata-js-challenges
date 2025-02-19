const smallEnough = (a, limit) => a.every((num) => num <= limit);

console.log(smallEnough([1, 2, 3, 4], 5)); // true
console.log(smallEnough([1, 2, 6, 4], 5)); // false
console.log(smallEnough([], 5)); // true (empty array case)

// Explanation:
// - `every()` is a built-in array method that checks if all elements in the array satisfy a condition.
// - It takes a callback function that returns true if the element is less than or equal to `limit`.
// - If all elements pass the condition, `every()` returns `true`, otherwise, it returns `false`.
// - This approach avoids loops explicitly and leverages JavaScript's built-in iteration methods.

/*
#### Why is this efficient?
- **Time Complexity:** \( O(n) \) — It checks each element once.
- **Space Complexity:** \( O(1) \) — No extra space is used apart from function calls.
- **Concise & Readable:** Just one line of code leveraging functional programming.
*/
