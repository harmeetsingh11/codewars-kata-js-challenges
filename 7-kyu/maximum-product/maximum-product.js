function adjacentElementsProduct(array) {
  // Initialize maxProduct with the product of the first two adjacent numbers
  let maxProduct = array[0] * array[1];

  // Loop through the array starting from the second index
  for (let i = 1; i < array.length - 1; i++) {
    // Calculate the product of the current and next adjacent number
    const product = array[i] * array[i + 1];

    // Update maxProduct if the current product is larger
    if (product > maxProduct) {
      maxProduct = product;
    }
  }

  // Return the maximum product found
  return maxProduct;
}

/* 
Explanation:

Initialize maxProduct:
We begin by calculating the product of the first two adjacent numbers (array[0] * array[1]) to initialize the maxProduct variable.

Loop Through the Array:
The loop starts from the second index (i = 1) and goes up to the second-to-last element (i < array.length - 1) to ensure we always have a pair of adjacent elements.
For each iteration, we calculate the product of the current element (array[i]) and the next element (array[i + 1]).

Update the maxProduct:
If the product of the current adjacent numbers is greater than the current maxProduct, we update the maxProduct.

Return the Result:
After the loop completes, the function returns the highest adjacent product found.

Time Complexity:
O(n) where n is the length of the array, since we are only iterating through the array once and performing constant-time operations in each iteration.
*/
