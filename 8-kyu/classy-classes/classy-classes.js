class Person {
  // Constructor to initialize name and age
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Getter method to return the formatted info
  get info() {
    return `${this.name}s age is ${this.age}`;
  }
}

// Example usage
const john = new Person('john', 34);
// console.log(john.info); // Output: "johns age is 34"

/* 
Explanation:

Constructor Method:
The constructor method initializes the name and age properties of the Person class instance using the provided arguments.

Getter Property (info):
The get info defines a getter property for the class. Getters are used to retrieve a computed value when accessing a property, making the syntax clean and natural.
It dynamically formats the string "johns age is 34" using the instance's name and age.

Usage:
When john.info is accessed, the info getter is called and returns the required string.
*/
