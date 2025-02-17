class Animal {
  // Constructor to initialize the name and type properties
  constructor(name, type) {
    this._name = name; // Private property for name
    this.type = type; // Public property for type
  }

  // Getter for name (to allow access to _name)
  get name() {
    return this._name;
  }

  // Setter for name (to allow modifying the name)
  set name(newName) {
    this._name = newName;
  }

  // Method to return a human-readable string
  toString() {
    return `${this._name} is a ${this.type}`;
  }
}

let dog = new Animal('Max', 'dog');
console.log(dog.toString()); // "Max is a dog"
console.log(dog.type); // "dog"
console.log(dog.name); // "Max"
dog.name = 'Lassie'; // Set new name
console.log(dog.name); // "Lassie"

/*
Explanation:
1. **Constructor (`constructor`)**: Initializes the `name` and `type` properties. The `name` is stored as a private variable `_name` to demonstrate encapsulation, and `type` is public.
2. **Getter and Setter for `name`**: The `get` and `set` methods are used to control access to the `name` property. The setter allows modification of the `name` field, and the getter allows reading it.
3. **`toString` method**: Returns a string representation of the object in the format `"name is a type"`, which is the expected output when `toString()` is called.
*/
