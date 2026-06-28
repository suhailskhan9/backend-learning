## Callbacks

- a function passed as an argument to another function, called when async work is done
- Node's fs module is entirely callback based
- problem: nested callbacks skew right and become unreadable — callback hell
- always check err first before using the result

## Promises

- an object that represents a future value — either resolved or rejected
- wrapping a callback in new Promise() manually is called promisification
- .then() runs on resolve, .catch() runs on reject
- promise chaining — return a promise inside .then() to chain the next step flat
- Promise.all — waits for all to resolve, rejects if any one rejects
- Promise.race — whichever settles first wins, rest ignored. useful for timeouts

## Async/Await

- syntactic sugar over promises, not a new concept
- an async function always returns a Promise under the hood
- await pauses execution inside the function until the promise settles
- wrap in try/catch for error handling
- new Promise(async function...) is an anti-pattern — can silently swallow errors

## Key insight

- callbacks → promises → async/await are all solving the same problem
- how do I write code that waits for async work without blocking the thread
- each layer is just a cleaner way to express the same thing