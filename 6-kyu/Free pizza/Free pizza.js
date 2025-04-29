// Define the function that identifies customers eligible for rewards
const pizzaRewards = (customers, minOrders, minPrice) =>
  // Iterate over the customer names (keys of the customers object)
  Object.keys(customers)
    // Filter customers based on the number of qualifying orders they have
    .filter(
      (e) =>
        // For each customer, filter their orders that meet the minPrice requirement
        customers[e].filter((o) => o >= minPrice).length >= minOrders // Only include orders >= minPrice // Check if the number of qualifying orders is >= minOrders
    );

// Example customers data
const customers = {
  'John Doe': [22, 19, 20, 25], // 2 orders >= 20
  'Jane Doe': [20, 20, 20, 20, 20], // 5 orders >= 20
  'Joe Smith': [10, 5, 7], // No orders >= 20
};

// Test the function
console.log(pizzaRewards(customers, 5, 20)); // Output: ['Jane Doe']
/*
### **Approach/Thought Process:**

1. **Problem Understanding**: 
   - We need to identify customers who meet two conditions:
     - They must have placed **at least `minOrders`** orders.
     - These orders must have a **value greater than or equal to `minPrice`**.
   
2. **Input**: 
   - A dictionary of customers where each key is a customer's name and the value is an array of their order prices.
   - Two numbers: `minOrders` (the minimum number of qualifying orders) and `minPrice` (the minimum price an order must meet to qualify).

3. **Process**:
   - Iterate through each customer.
   - For each customer, filter their orders to find those that meet the `minPrice` condition.
   - Check if the number of qualifying orders meets or exceeds `minOrders`.
   - Return a list of customers who meet both conditions.

4. **Efficiency**:
   - Using `Object.keys(customers)` allows us to quickly access all customer names.
   - The `.filter()` method on the order list ensures that we only consider orders that meet the price condition.
   - This approach runs efficiently because it processes each customer and their orders once.

*/

/*
### **Explanation**:
1. **`Object.keys(customers)`**:
   - This extracts an array of all the customer names (keys) from the `customers` object. This allows us to loop through each customer.

2. **`.filter(e => ...)`**:
   - This `.filter()` is used to check each customer (`e`). It returns only those customers who meet the criteria of having enough qualifying orders.

3. **`customers[e].filter(o => o >= minPrice)`**:
   - For each customer, `customers[e]` gives us the array of their order prices.
   - We use `.filter(o => o >= minPrice)` to filter out orders that are less than `minPrice`.

4. **`.length >= minOrders`**:
   - After filtering out the qualifying orders, `.length` counts how many orders are valid.
   - If the count is greater than or equal to `minOrders`, this customer passes the filter and is eligible for a reward.

5. **Result**:
   - The `.filter()` method returns an array of customer names that meet both conditions.
*/
