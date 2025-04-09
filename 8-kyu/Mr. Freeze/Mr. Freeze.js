// MrFreeze is an already existing object/class
Object.freeze(MrFreeze); // Freezes the object so it can't be modified

const MrFreeze = {
  name: 'Freeze',
  power: 'Ice',
};

Object.freeze(MrFreeze);

// Try modifying the object
MrFreeze.name = 'Fire'; // ❌ Will not change
MrFreeze.newProp = 'Oops'; // ❌ Will not be added
delete MrFreeze.power; // ❌ Will not delete

console.log(MrFreeze); // { name: "Freeze", power: "Ice" }

/*
### Explanation:
- `Object.freeze(obj)` is a built-in JavaScript method that **prevents new properties from being added**, existing properties from being removed, or modified.
- After calling `Object.freeze(MrFreeze)`, the object becomes **immutable**:
  - You can't add or delete properties.
  - You can't change the values of existing properties.
  - You can't change its prototype.
*/
