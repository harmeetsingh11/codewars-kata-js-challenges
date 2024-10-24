function stockList(books, categories) {
  if (!books.length || !categories.length) return ''; // Edge case: empty lists

  // Initialize an object to store the sums for each category in categories
  const categorySums = categories.reduce(
    (acc, cat) => ({ ...acc, [cat]: 0 }),
    {}
  );

  // Loop through each book entry in the list of books
  books.forEach((book) => {
    const [code, quantity] = book.split(' '); // Split the book entry into code and quantity
    const category = code[0]; // Get the first character (category)
    if (category in categorySums) {
      // Add quantity to the appropriate category if it exists in categories
      categorySums[category] += parseInt(quantity);
    }
  });

  // Format the result as a string, e.g., "(A : 20) - (B : 114) - ..."
  return categories.map((cat) => `(${cat} : ${categorySums[cat]})`).join(' - ');
}

/* 
Explanation:
books: Represents the list of book entries.
categories: Represents the list of categories to sum up.

Edge Case Handling:
If either books or categories is empty, return an empty string since there's no data to process.

Initialize Category Sums:
We initialize an object categorySums where each key is a category from categories, with each value set to 0 initially.

Processing Each Book Entry:
For each book in books, split the entry using split(" ") to separate the book code and quantity.
The first character of the book code represents the category.
If the category exists in categorySums, add the quantity of the current book (converted to an integer) to the corresponding category.

Return Formatted Result:
Finally, generate the formatted string by mapping over categories, constructing the desired output format (Category : Sum), and joining them with " - ".
*/
