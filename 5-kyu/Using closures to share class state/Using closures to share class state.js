var Cat = (function () {
  // Private shared state
  let totalWeight = 0;
  let count = 0;
  const weights = new WeakMap(); // allows garbage collection of cat instances

  // Cat constructor function
  function Cat(name, weight) {
    if (!name || !weight) throw new Error('Both name and weight are required');

    this.name = name;

    // Store initial weight in WeakMap
    weights.set(this, weight);

    // Update totalWeight and count
    totalWeight += weight;
    count++;

    // Define custom getter and setter for weight
    Object.defineProperty(this, 'weight', {
      get() {
        return weights.get(this);
      },
      set(newWeight) {
        // Recalculate totalWeight while keeping count same
        totalWeight += newWeight - weights.get(this);
        weights.set(this, newWeight);
      },
    });
  }

  // Static method to calculate average weight
  Cat.averageWeight = function () {
    return count === 0 ? 0 : totalWeight / count;
  };

  return Cat;
})();

const garfield = new Cat('garfield', 25);
console.log(Cat.averageWeight()); // 25

const felix = new Cat('felix', 15);
console.log(Cat.averageWeight()); // (25 + 15) / 2 = 20

felix.weight = 25;
console.log(felix.weight); // 25
console.log(Cat.averageWeight()); // (25 + 25) / 2 = 25

/*
### Key Highlights:

- **WeakMap** is used for tracking individual cat weights per instance. It allows garbage collection of cats not referenced anymore.
- **Object.defineProperty** is used to create a custom `weight` property that updates `totalWeight` when the weight is changed.
- **Encapsulation** is achieved using an IIFE and closure to protect `totalWeight`, `count`, and `weights`.
- **Constructor validation** ensures both `name` and `weight` are required.
*/
