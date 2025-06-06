function topThreeProducts(products, amounts, prices) {
  return (
    products
      // Map each product to an object with name, revenue, and index
      .map((product, i) => ({
        name: product,
        revenue: amounts[i] * prices[i],
        index: i, // to break ties based on original order
      }))
      // Sort by revenue descending, then by original index ascending
      .sort((a, b) =>
        b.revenue !== a.revenue ? b.revenue - a.revenue : a.index - b.index
      )
      // Take top 3 and return their names
      .slice(0, 3)
      .map((item) => item.name)
  );
}

const products = ['Computer', 'Cell Phones', 'Vacuum Cleaner'];
const amounts = [3, 24, 8];
const prices = [199, 299, 399];

console.log(topThreeProducts(products, amounts, prices));
// Output: [ 'Cell Phones', 'Vacuum Cleaner', 'Computer' ]

/*
### Explanation:

1. **`.map(...)`**: Compute revenue for each product along with its name and original index.
2. **`.sort(...)`**:
   - First sort by revenue descending (`b.revenue - a.revenue`).
   - If two products have equal revenue, preserve their original order using `a.index - b.index`.
3. **`.slice(0, 3)`**: Take only the top 3 products.
4. **`.map(...)`**: Extract just the product names to return.

Time Complexity: **O(n log n)** due to sorting. Efficient for typical input sizes.
*/
