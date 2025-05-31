// Linked list node definition
function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

// Returns true if *any* node in the list satisfies the predicate
function anyMatch(head, predicate) {
  let current = head;
  while (current) {
    if (predicate(current.data)) return true; // short-circuit on first match
    current = current.next;
  }
  return false; // no matches found
}

// Returns true only if *all* nodes in the list satisfy the predicate
function allMatch(head, predicate) {
  let current = head;
  while (current) {
    if (!predicate(current.data)) return false; // short-circuit on first failure
    current = current.next;
  }
  return true; // all elements matched
}

// example usage
const list = new Node(1, new Node(2, new Node(3)));

console.log(anyMatch(list, (x) => x > 1)); // true
console.log(allMatch(list, (x) => x > 1)); // false

/*
### Key Points:

* **Efficient**: Traverses the list once (`O(n)` time), and uses short-circuiting (`return early`) for better performance.
* **Null-safe**: Works even if the `head` is `null` (returns `false` for `anyMatch`, `true` for `allMatch` — as expected for empty collections).
* **Concise & Readable**: Minimal lines of code with maximum clarity.
*/
