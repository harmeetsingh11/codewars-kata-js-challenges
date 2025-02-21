function Event() {
  // Store event handlers in a Set to ensure uniqueness and fast operations
  this.handlers = new Set();
}

// Subscribe method: adds a function to the handlers list
Event.prototype.subscribe = function (fn) {
  this.handlers.add(fn);
};

// Unsubscribe method: removes a function from the handlers list
Event.prototype.unsubscribe = function (fn) {
  this.handlers.delete(fn);
};

// Emit method: calls all handlers with the given arguments
Event.prototype.emit = function (...args) {
  this.handlers.forEach((fn) => fn(...args));
};

const obj = new Event();

function handler1(msg) {
  console.log('Handler1 received:', msg);
}

function handler2(msg) {
  console.log('Handler2 received:', msg);
}

ojb.subscribe(handler1);
ojb.subscribe(handler2);

ojb.emit('Hello!'); // Logs both handlers' messages

ojb.unsubscribe(handler1);

ojb.emit('World!'); // Logs only handler2's message

/*
### Explanation:
- **`this.handlers = new Set();`**  
  - A `Set` is used instead of an array to prevent duplicate subscriptions and ensure fast add/delete operations.
  
- **`subscribe(fn)`**  
  - Adds a function to the `Set`, ensuring each function is stored only once.
  
- **`unsubscribe(fn)`**  
  - Removes a function from the `Set`, preventing it from being called during `emit`.
  
- **`emit(...args)`**  
  - Calls each subscribed function with all provided arguments using the spread operator.

### Example Usage:
```js
```

This implementation is **efficient (O(1) add/remove operations using `Set`)**, **concise**, and **follows best practices** for event handling in JavaScript. 
*/
