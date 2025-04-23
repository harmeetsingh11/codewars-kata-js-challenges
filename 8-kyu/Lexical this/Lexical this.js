const person = {
  name: 'Lexis',
  _friends: [],

  // Function to fill _friends array using lexical `this`
  fillFriends(friends) {
    // Arrow function inherits `this` from its lexical scope (i.e., `person`)
    friends.forEach((friend) => this._friends.push(friend));
  },
};

person.fillFriends(['Andreea', 'John', 'Aman']);
console.log(person);

/*
Explanation:
- The arrow function inside `forEach` does not create its own `this`.
- Instead, it uses `this` from the enclosing scope, which is `person`.
- This avoids the common issue where regular functions inside callbacks lose `this` context.
- `fillFriends` accepts an array and pushes each friend into `_friends`.
*/
