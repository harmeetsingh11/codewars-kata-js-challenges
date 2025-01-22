function binRota(seatingPlan) {
  // Create an array to store the names in the correct order
  const rota = [];

  // Loop through each row
  for (let i = 0; i < seatingPlan.length; i++) {
    // If the row index is even, traverse the row from left to right
    if (i % 2 === 0) {
      rota.push(...seatingPlan[i]);
    }
    // If the row index is odd, traverse the row from right to left
    else {
      rota.push(...seatingPlan[i].reverse());
    }
  }

  return rota;
}

const seatingPlan = [
  ['Stefan', 'Raj', 'Marie'],
  ['Alexa', 'Amy', 'Edward'],
  ['Liz', 'Claire', 'Juan'],
  ['Dee', 'Luke', 'Katie'],
];

console.log(binRota(seatingPlan));
// Output: ["Stefan", "Raj", "Marie", "Edward", "Amy", "Alexa", "Liz", "Claire", "Juan", "Katie", "Luke", "Dee"]

/* 
Explanation:

Initial Setup: We initialize an empty array rota to store the result.

Traverse the Seating Plan: We iterate through each row of the seating plan:
If the row index i is even, we add the row's elements to rota in the same left-to-right order.
If the row index i is odd, we reverse the row before adding its elements to rota.

Return Result: Once the loop finishes, the rota array contains the names in the desired zigzag order and is returned.

Time Complexity:
O(n * m) where n is the number of rows and m is the number of seats per row. Each name is processed exactly once.
*/
