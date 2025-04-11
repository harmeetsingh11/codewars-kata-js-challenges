function spyOn(func) {
  // Store metadata
  const calls = [];
  const returns = [];

  // The spy function wraps the original function
  function spy(...args) {
    // Store arguments for each call
    calls.push(args);

    // Call the original function and store the return value
    const result = func.apply(this, args);
    returns.push(result);
    return result;
  }

  // Number of times the spy has been called
  spy.callCount = () => calls.length;

  // Check if any call included a specific argument
  spy.wasCalledWith = (val) => calls.some((args) => args.includes(val));

  // Check if any call returned a specific value
  spy.returned = (val) => returns.includes(val);

  return spy;
}

// Example:
function adder(n1, n2) {
  return n1 + n2;
}
const adderSpy = spyOn(adder);

adderSpy(2, 4); // 6
adderSpy(3, 5); // 8

console.log(adderSpy.callCount()); // 2
console.log(adderSpy.wasCalledWith(4)); // true
console.log(adderSpy.wasCalledWith(0)); // false
console.log(adderSpy.returned(8)); // true
console.log(adderSpy.returned(0)); // false
