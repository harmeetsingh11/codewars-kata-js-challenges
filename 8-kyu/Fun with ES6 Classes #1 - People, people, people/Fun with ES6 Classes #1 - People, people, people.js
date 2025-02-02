class Person {
  // Constructor with default values
  constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  // Method to return full name
  sayFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Static method to greet extraterrestrials
  static greetExtraTerrestrials(raceName) {
    return `Welcome to Planet Earth ${raceName}`;
  }
}

const person = new Person('Alice', 'Smith', 25, 'Female');
console.log(person.sayFullName()); // "Alice Smith"
console.log(Person.greetExtraTerrestrials('Martians')); // "Welcome to Planet Earth Martians"

/* 
Explanation:

Constructor with Default Values
Uses default parameters in ES6 to handle cases where arguments are not provided.

Instance Method sayFullName
Uses template literals (${}) for clean and efficient string interpolation.

Static Method greetExtraTerrestrials
A static method does not require an instance of the class and is called directly on the class itself.
*/
