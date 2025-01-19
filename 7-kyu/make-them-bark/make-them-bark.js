// Adding the 'bark' method to the prototype of Dog constructor
Dog.prototype.bark = function () {
  return 'Woof!';
};

// Explanation:
// 1. `Dog.prototype` is the shared object that all instances of `Dog` refer to for shared methods.
// 2. By adding the `bark` method to `Dog.prototype`, all instances of `Dog` (existing and future)
//    gain access to this method without needing to modify them individually or recreate them.
// 3. This approach is concise, efficient, and leverages JavaScript's prototypal inheritance system.

/* 
How It Works:
When an instance of Dog (say dog1) tries to call dog1.bark(), JavaScript looks up the method in the instance.
If the method is not found on the instance itself, JavaScript checks the prototype (Dog.prototype).
Since we added bark to Dog.prototype, the method will be found there and executed.
This ensures all Dog objects, whether already created or created later, can use the bark() method efficiently without rewriting or modifying individual instances.
*/
