const orderPeopleByAge = (people) => people.sort((a, b) => a.age - b.age);

const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 30 },
];

console.log(orderPeopleByAge(people));

/*
### **Explanation**
1. **Arrow Function Syntax:**  
   `const orderPeopleByAge = (people) => ...`  
   - Defines an arrow function named `orderPeopleByAge` that takes an array of people as input.

2. **Array `.sort()` Method:**  
   - `people.sort((a, b) => a.age - b.age)`  
   - Uses the `.sort()` method to sort the array in ascending order by age.
   - The comparison function `(a, b) => a.age - b.age` works as follows:
     - If `a.age` is less than `b.age`, the result is negative → `a` comes before `b`.
     - If `a.age` is greater than `b.age`, the result is positive → `b` comes before `a`.
     - If they are equal, the order remains the same.

### **Efficiency**
- **Time Complexity:** \(O(n \log n)\) → The `.sort()` method uses an efficient sorting algorithm (typically Timsort in V8).
- **Space Complexity:** \(O(1)\) → The sorting is performed in place, making it memory efficient.
*/
