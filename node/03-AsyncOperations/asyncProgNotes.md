
## Async Programming

- Node.js executes JS on a single thread
- If one request blocks that thread for example, by waiting for a file to be read, evey other incoming request must wait as well
- Async prog allows node.js to continue serving other requests while waiting for I/O operations to complete.

## Callbacks

- a function passed as an argument to another function, called when async work is done
- Node's fs module is entirely callback based
- problem: nested callbacks skew right and become unreadable — callback hell
- always check err first before using the result

## Promises

- an object that represents a future value — either resolved or rejected
- The three Promise states are 
    1. Pending: The operation is still in progress
    2. Fulfilled: The operation completed successfully, and a value is available 
    3. Rejected: The operation failed, and an error is available
- wrapping a callback in new Promise() manually is called promisification
- .then() runs on resolve, .catch() runs on reject
- promise chaining — return a promise inside .then() to chain the next step flat
- Promise.all — waits for all to resolve, rejects if any one rejects
- Promise.race — whichever settles first wins, rest ignored. useful for timeouts

## Async/Await

- syntactic sugar over promises, not a new concept
- asynchronous code that looks almost like synchronous code
- async keyword marks a function as asynchronous
- an async function always returns a Promise under the hood
- await pauses execution inside the function until the promise settles
- wrap in try/catch for error handling
- new Promise(async function...) is an anti-pattern — can silently swallow errors

## Key insight

- callbacks → promises → async/await are all solving the same problem
- how do I write code that waits for async work without blocking the thread
- each layer is just a cleaner way to express the same thing