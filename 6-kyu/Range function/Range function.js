// Generator function to create a range iterable
function* range(start, step, stop) {
  // If only one argument, treat it as stop; start from 1, step by 1
  if (stop === undefined && step === undefined) {
    stop = start;
    start = 1;
    step = 1;
  }
  // If two arguments, treat them as start and stop; step by 1
  else if (stop === undefined) {
    stop = step;
    step = 1;
  }

  // Yield values from start to stop (inclusive), incrementing by step
  for (let i = start; i <= stop; i += step) {
    yield i;
  }
}

// Spread the iterable to see the values
console.log([...range(5)]); // [1, 2, 3, 4, 5]
console.log([...range(3, 7)]); // [3, 4, 5, 6, 7]
console.log([...range(2, 3, 15)]); // [2, 5, 8, 11, 14]

/*
### Explanation:

* **Generator function (`function*`)**: Makes it easy to create lazy iterables without building the full array in memory.
* **Flexible parameters**:

  * `range(5)` → treats `5` as the `stop` value, defaulting to `start = 1`, `step = 1`.
  * `range(3, 7)` → `start = 3`, `stop = 7`, `step = 1`.
  * `range(2, 3, 15)` → `start = 2`, `step = 3`, `stop = 15`.
* Efficient and concise with minimal branching logic.
*/

/* 
### 🔧 What is `function*`?

* The asterisk `*` turns a regular function into a **generator function**.
* Generator functions can **pause and resume execution**, which is made possible using the `yield` keyword.

---

### ✅ Why use a generator here?

You're building a **range iterable** — something that produces values one at a time **on demand** (lazy evaluation), instead of all at once. Generators are perfect for that.

```js
function* range(start, step, stop) {
  yields values one by one, each time .next() is called
  yield start;
  ...
}
```

When you call a generator function like `range(5)`, it doesn’t immediately run the function. Instead, it returns a **generator object**, which is an **iterator**.

You can get the values from this iterator using:

* The spread operator (`[...range(5)]`)
* A `for...of` loop
* Or calling `.next()` manually

---

### 📦 Quick comparison

```js
function normalRange(start, stop) {
  const result = [];
  for (let i = start; i <= stop; i++) {
    result.push(i);
  }
  return result;
}

memory-heavy: builds full array
normalRange(1, 1_000_000); 
```

```js
function* range(start, stop) {
  for (let i = start; i <= stop; i++) {
    yield i;
  }
}

memory-efficient: generates values lazily
const iter = range(1, 1_000_000); 
iter.next(); // gets one value at a time
```

*/
