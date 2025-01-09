// Calculates the sum of all values in a binary tree.
// @param {Object|null} node - The root node of the binary tree.
// @returns {number} - The sum of all node values in the tree.

function sumTree(node) {
  // Base case: if the node is null, return 0
  if (!node) return 0;

  // Recursive case: add the current node value to the sum of left and right subtrees
  return node.value + sumTree(node.left) + sumTree(node.right);
}

// test cases
const tree1 = {
  value: 10,
  left: { value: 1, left: null, right: null },
  right: { value: 2, left: null, right: null },
};

const tree2 = {
  value: 1,
  left: { value: 0, left: null, right: null },
  right: {
    value: 0,
    left: null,
    right: { value: 2, left: null, right: null },
  },
};

console.log(sumTree(tree1)); // Output: 13
console.log(sumTree(tree2)); // Output: 3

/* 
Explanation:

Base Case:
If the node is null, the function returns 0 because there's no value to add.

Recursive Case:
For any non-null node, the function calculates the sum by adding:
The node's value.
The sum of the left subtree (computed recursively).
The sum of the right subtree (computed recursively).

Efficiency:
The solution visits each node exactly once, making it an O(n) solution, where n is the number of nodes in the tree.
The recursion depth is proportional to the height of the tree, so the space complexity is O(h), where h is the height of the tree. For a balanced tree, this is approximately O(log n); for a skewed tree, it could be O(n).
*/
