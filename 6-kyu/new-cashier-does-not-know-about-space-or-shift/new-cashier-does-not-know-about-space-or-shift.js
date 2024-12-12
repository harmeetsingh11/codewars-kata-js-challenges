function formatOrder(order) {
  // Define the menu items in the required order
  const menu = [
    'Burger',
    'Fries',
    'Chicken',
    'Pizza',
    'Sandwich',
    'Onionrings',
    'Milkshake',
    'Coke',
  ];

  // Create a map to store the counts of each menu item
  const itemCounts = {};

  // Iterate through the menu to count occurrences of each item in the order
  for (const item of menu) {
    const regex = new RegExp(item.toLowerCase(), 'g'); // Case-insensitive match for each menu item
    itemCounts[item] = (order.match(regex) || []).length; // Count occurrences or default to 0
  }

  // Build the formatted order string based on the menu order
  return menu
    .flatMap((item) => Array(itemCounts[item]).fill(item)) // Repeat items based on their counts
    .join(' '); // Join with spaces
}

// Example
const order = 'milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza';
console.log(formatOrder(order)); // Output: "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

/*  
Explanation:

Menu Initialization: The menu array defines the correct order of items with proper capitalization.

Regex Matching: For each menu item, a case-insensitive regex is used to count its occurrences in the input string.

Counting Occurrences: Matches are stored in itemCounts to maintain the order and count of each menu item.

Building the Output:
Use flatMap to repeat each item in the menu order based on its count.
Combine them into a single string using join(' ').
*/
