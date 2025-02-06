function sortAnimals(animals) {
  return animals
    .slice()
    .sort(
      (a, b) => a.numberOfLegs - b.numberOfLegs || a.name.localeCompare(b.name)
    );
}

const animals = [
  { name: 'Dog', numberOfLegs: 4 },
  { name: 'Ant', numberOfLegs: 6 },
  { name: 'Spider', numberOfLegs: 8 },
  { name: 'Cat', numberOfLegs: 4 },
  { name: 'Duck', numberOfLegs: 2 },
];

console.log(sortAnimals(animals));

/*
Explanation:
1. **`.slice()`** → Creates a shallow copy of the input array to avoid mutating the original list.
2. **`.sort()`** → Sorts the copied array based on two conditions:
   - First, it sorts by `numberOfLegs` (ascending order).
   - If two animals have the same number of legs, it sorts them alphabetically by `name` using `.localeCompare()`.
3. **Short-circuiting (`||`)** → If `numberOfLegs` is equal, `localeCompare()` is executed, making the code concise and efficient.

This solution runs in O(n log n) due to the sorting operation, which is the best possible complexity for comparison-based sorting.
*/
