function isSantaClausable(obj) {
  // Check if all required methods exist and are functions
  return ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].every(
    (method) => typeof obj[method] === 'function'
  );
}

let santa = {
  sayHoHoHo: function () {
    console.log('Ho Ho Ho!');
  },
  distributeGifts: function () {
    console.log('Gifts for all!');
  },
  goDownTheChimney: function () {
    console.log('*whoosh*');
  },
};

let notSanta = {
  sayHoHoHo: function () {
    console.log('Oink Oink!');
  },
  // Missing distributeGifts() and goDownTheChimney()
};

console.log(isSantaClausable(santa)); // true
console.log(isSantaClausable(notSanta)); // false

/*
### Explanation:
1. We define `isSantaClausable(obj)`, which takes an object as input.
2. We use `every()` to check if all required method names (`sayHoHoHo`, `distributeGifts`, `goDownTheChimney`) exist on the object and are of type `'function'`.
3. If all methods exist and are functions, `every()` returns `true`; otherwise, it returns `false`.
4. The function is concise, efficient, and follows best practices for checking interface-like behavior in JavaScript.
*/
