function NameMe(first, last) {
  // Assign properties to the object being created
  this.firstName = first;
  this.lastName = last;
  this.name = `${first} ${last}`; // Combine names for the 'name' property
}

// Test
const n = new NameMe('John', 'Doe');
console.log(n.firstName); // John
console.log(n.lastName); // Doe
console.log(n.name); // John Doe

/*
### Explanation:
- In JavaScript, **when a constructor function returns an object**, it **replaces** the automatically created `this` object unless the returned value is a primitive.
- To make all properties (`firstName`, `lastName`, `name`) accessible, **avoid returning a custom object** from the constructor.
- Just assign all necessary properties to `this`, and the constructor will return the object implicitly.
*/
