// Constructor function to create a counter with private state
function Counter() {
  let count = 0; // private variable, not accessible from outside

  // Return an object with two methods: get and increment
  this.check = () => count; // returns the current value
  this.increment = () => count++; // increments and returns the old value
}

const counter = new Counter();

console.log(counter.check()); // 0
console.log(counter.increment()); // 0
console.log(counter.check()); // 1
console.log(counter.increment()); // 1

/*
### Explanation:

- `count` is defined **inside** the constructor, so it's **private** — it can't be accessed or modified directly from outside.
- `this.check` returns the current value of `count`.
- `this.increment` increments `count` and returns the **value before** incrementing (like `count++` does).
- We're using **arrow functions** to keep the `this` context clean and concise.
*/
