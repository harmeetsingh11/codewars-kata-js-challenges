function queueTime(customers, n) {
  // Create an array to represent the tills, all initialized to 0 (no customers yet)
  let tills = Array(n).fill(0);

  // For each customer, assign them to the till with the least load (minimum value)
  customers.forEach((time) => {
    tills[tills.indexOf(Math.min(...tills))] += time;
  });

  // The total time is the maximum value from the tills array
  return Math.max(...tills);
}

//   Explanation:

//   1. Initialize Tills:
//   We create an array tills of length n, where each element is initialized to 0. This represents the available tills and the total time each till has processed so far.

//   2. Assign Customers:
//   For each customer in the customers array, we find the till that has the least load using Math.min(...tills) and indexOf. We add the customer’s checkout time to that till.

//   3. Return the Total Time:
//   Once all customers are assigned, the total time required is the maximum time from the tills array, since all tills finish working when the one with the maximum load finishes.

//   4. Efficiency:
//   Time complexity: Each customer is assigned in O(n) time because Math.min(...tills) scans through the tills. The overall complexity is O(customers.length * n), which is efficient for typical inputs.
