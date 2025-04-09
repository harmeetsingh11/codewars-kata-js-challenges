// Constructor function for Dependency Injector
var DI = function (dependency) {
  this.dependency = dependency;
};

// Adds an 'inject' method to DI's prototype
DI.prototype.inject = function (func) {
  // Extract the argument names from the function definition using regex
  const argNames = func
    .toString() // Convert function to string
    .match(/\(([^)]*)\)/)[1] // Match contents inside the first pair of parentheses
    .split(',') // Split by commas to get parameter list
    .map((arg) => arg.trim()) // Trim each argument name
    .filter((arg) => arg); // Remove any empty entries

  // Return a new function where arguments are resolved from the dependency map
  return () => {
    // Map each parameter name to its corresponding dependency function from the object
    const resolvedDeps = argNames.map((name) => this.dependency[name]);
    // Call the original function with resolved dependencies
    return func.apply(null, resolvedDeps);
  };
};

/*
### Explanation Summary:

- We extract the function parameter names using regex.
- Match contents inside `()` and split by commas to get each dependency name.
- Then map each of these names to actual dependency values from the `dependency` object.
- We return a wrapper function that applies the original function with the resolved dependencies.
- We assume no nested function handling is needed, and function params are properly named.
*/

var deps = {
  firstDependency: () => console.log('this is firstDependency'),
  secondDepency: () => console.log('this is secondDepency'),
};

var di = new DI(deps);

var myDependentFunc = di.inject(function (secondDepency, firstDependency) {
  firstDependency();
  secondDepency();
});

myDependentFunc(); // Outputs:
// this is firstDependency
// this is secondDepency
