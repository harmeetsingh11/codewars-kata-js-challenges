function barista(coffees) {
  if (!coffees.length) return 0;

  // Sort coffees in ascending order for optimal waiting time
  coffees.sort((a, b) => a - b);

  let totalWaitingTime = 0;
  let currentTime = 0;

  for (let i = 0; i < coffees.length; i++) {
    currentTime += coffees[i]; // Add brewing time
    totalWaitingTime += currentTime; // Add waiting time

    if (i < coffees.length - 1) {
      // Add cleaning time except after the last coffee
      currentTime += 2;
    }
  }

  return totalWaitingTime;
}

console.log(barista([3, 2, 5, 10, 9])); // ➝ 85
console.log(barista([20, 5])); // ➝ 32
console.log(barista([4, 3, 2])); // ➝ 22
console.log(barista([])); // ➝ 0

/*
### **Explanation**
1. **Sorting the coffees**:
   - Sorting in ascending order minimizes the waiting time by brewing shorter coffees first.

2. **Iterating through the list**:
   - For each coffee:
     - Add the brewing time to `currentTime`.
     - Add the current accumulated time to `totalWaitingTime`.
     - Add **2 minutes** for cleaning, except for the last coffee (handled by the condition `if (i < coffees.length - 1)`).

### **Complexity Analysis**
- **Time Complexity:** \(O(N \log N)\) → Sorting takes \(O(N \log N)\) and iterating takes \(O(N)\).
- **Space Complexity:** \(O(1)\) → Only a few variables are used.
*/
