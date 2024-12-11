class Cat extends Animal {
  // Override the speak method from the parent Animal class
  speak() {
    // Use 'this.name' to access the name property and concatenate it with 'meows.'
    return `${this.name} meows.`;
  }
}

// Explanation:
// 1. The 'extends' keyword is used to create a subclass (Cat) that inherits from the parent class (Animal).
// 2. The 'speak' method in the Cat class overrides the 'speak' method from the Animal class.
// 3. The 'this.name' refers to the 'name' property of the Cat instance, which is passed when creating an instance of the Cat class.
// 4. The method returns a string in the required format: "<name> meows."
