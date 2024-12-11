// Define the Dog constructor function
function Dog(name) {
  this.name = name; // Assign the name property
}

// Add a bark method to the Dog prototype
Dog.prototype.bark = function () {
  return 'Woof'; // All instances of Dog can now use this method
};

// Create instances of Dog
const snoopy = new Dog('Snoopy');
const scoobydoo = new Dog('Scooby-Doo');

// Test the bark method
console.log(snoopy.bark()); // Output: "Woof"
console.log(scoobydoo.bark()); // Output: "Woof"

/* 
Explanation:

Constructor Function: Dog is a constructor function used to create dog instances. Each instance will have a unique name property.

Prototype Method: The bark method is added to Dog.prototype. This ensures all instances of Dog share the same bark method, saving memory compared to defining it separately for each instance.

Creating Instances: snoopy and scoobydoo are created using the new Dog constructor.

Prototype Inheritance: Both snoopy and scoobydoo can access the shared bark method, enabling them to bark correctly.
*/
