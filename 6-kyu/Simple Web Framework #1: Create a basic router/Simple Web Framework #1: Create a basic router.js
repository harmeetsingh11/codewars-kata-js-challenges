class Router {
  constructor() {
    // Store routes as a map of "METHOD URL" => handler function
    this.routes = new Map();
  }

  // Bind a URL and method to an action
  bind(url, method, action) {
    // Create a unique key using method and URL
    this.routes.set(`${method}:${url}`, action);
  }

  // Run a request with given URL and method
  runRequest(url, method) {
    // Look up the action using the composed key
    const action = this.routes.get(`${method}:${url}`);

    // If found, invoke and return the result
    if (action) return action();

    // If not found, return the 404 error string
    return 'Error 404: Not Found';
  }
}

// Example
const router = new Router();
router.bind('/hello', 'GET', () => 'hello world');
console.log(router.runRequest('/hello', 'GET')); // 'hello world'
console.log(router.runRequest('/hello', 'POST')); // 'Error 404: Not Found'

/*
### Why it's efficient:

* **O(1)** lookup time using `Map`.
* Minimal memory usage.
* Easy to extend for future enhancements (like query params, wildcard routes, etc.).
*/
