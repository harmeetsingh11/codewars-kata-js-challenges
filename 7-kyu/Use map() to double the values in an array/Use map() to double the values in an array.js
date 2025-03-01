const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((num) => num * 2);

console.log(doubledNumbers); // [2, 4, 6, 8, 10]

/*
### Explanation:
- `map()` iterates over each element in the `numbers` array.
- The callback function `num => num * 2` takes each number and returns its doubled value.
- `map()` returns a **new array** with the transformed values, without modifying the original array.  
- The solution is **efficient** (O(n) time complexity) and **concise** due to the use of an arrow function.
*/
