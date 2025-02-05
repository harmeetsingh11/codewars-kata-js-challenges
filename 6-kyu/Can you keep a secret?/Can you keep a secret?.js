function createSecretHolder(secret) {
  return {
    // Method to get the secret
    getSecret: () => secret,

    // Method to set a new secret
    setSecret: (newSecret) => (secret = newSecret),
  };
}

const obj = createSecretHolder(5);
console.log(obj.getSecret()); // returns 5
obj.setSecret(2);
console.log(obj.getSecret()); // returns 2

/*
Explanation:
1. **Closure for Encapsulation**:  
   - The function `createSecretHolder(secret)` defines a local variable `secret` that is **not** directly accessible outside the function.  
   - The returned object retains access to this variable due to **closure**, making `secret` effectively "private."

2. **Efficient and Concise**:  
   - The returned object has two arrow functions:
     - `getSecret()` simply returns `secret`.
     - `setSecret(newSecret)` updates `secret`.  
   - No unnecessary properties are exposed, ensuring data encapsulation.

3. **Memory Efficiency**:  
   - Since each function instance shares the same lexical scope, there’s no redundant memory usage.  
   - The solution is clean, maintains immutability outside the closure, and keeps `secret` truly private.
*/
