# Async Operations - Promises

## What is a Promise?

A Promise in JavaScript is an object that represents the eventual result of an asynchronous operation.

* Either a success (**resolved**) or a failure (**rejected**).

It's commonly used for things like:

* Fetching data from an API
* Reading files
* Timers (`setTimeout`)
* Database requests

---

## Promise States

A Promise has **3 states**:

1. **Pending**

   * The operation is still running.
   * Promise has not resolved or rejected yet.

2. **Fulfilled (Resolved)**

   * The operation completed successfully.

3. **Rejected**

   * The operation failed.

Once fulfilled or rejected, the Promise is **settled** and cannot change state.

---

## Reading a File using Callbacks

This is how we read a file:

```js
fs.readFile("a.txt", "utf-8", function(err, data) {

})
```

Arguments:

* File name
* Encoding
* Callback function

The callback function gets called whenever the file has been successfully read.

---

## Reading a File Synchronously

```js
let data = fs.readFileSync("a.txt", "utf-8");
```

It means it keeps the thread busy while the file is being read.

If file reading takes **2 seconds**, the thread is stuck there and can't do other things.

Which is why `readFile()` is generally better than `readFileSync()`.

---

## Callbacks vs Promises

Callbacks and Promises sort of do the same thing.

Promises are considered better because they provide:

* Cleaner syntax
* Better readability
* Modern syntax

Promises didn't exist until around **2014–2015**.

Before that, callbacks were the only way to perform asynchronous operations.

Now, both callbacks and promises are used for asynchronous programming.

---

## Promisifying `fs.readFile`

Whenever you're asked to write a **promisified version** of `fs.readFile`, you are supposed to:

1. Create the function signature (`fsReadFilePromise`).

2. The function takes:

   * `fileName`
   * `encoding`

   It **does not** take a callback function.

3. Return a new Promise.

4. Inside the Promise:

   * Perform the actual asynchronous operation.
   * If something goes wrong → call `reject()`.
   * If everything succeeds → call `resolve()`.

---

## Things to Practice

Create a promisified version of:

* `fs.readFile`
* `setTimeout`
* `fs.writeFile`

---

## Two Ways to Call a Promisified Function

### 1. Using `.then()`

```js
promise
    .then(...)
    .catch(...)
```

### 2. Using `async/await`

```js
const data = await promise;
```

---

## Note

A callback function can be called in **one way**.

A promisified function can be called in **two ways**:

* `.then()` / `.catch()`
* `async/await`

---

## Summary

### 1. Callback-based async functions

* `fs.readFile`
* `fs.writeFile`
* `setTimeout`

### 2. Promises with `.then()` syntax

### 3. `async/await` syntax

> Most modern and most commonly used approach.




---

## What these files are about

Each file shows one step in understanding async operations in JavaScript. We move from callbacks → promises → async/await.

---

## 01-callback-readFile.js

This file shows the basic way of reading a file using callbacks.

We use:

```js
fs.readFile("a.txt", "utf-8", function (err, data) {
```

### How it works:

* Node reads the file asynchronously
* After reading is done, callback is executed
* If there is an error → `err` is passed
* If successful → `data` is passed

### Key idea:

This is the **old way of handling async operations** in JavaScript.

---

## 02-promisify-readFile.js

This file converts `fs.readFile` into a Promise-based version.

We wrap the callback-based function inside a Promise.

### Logic:

* If file reading is successful → `resolve(data)`
* If error occurs → `reject(err)`

### Usage:

```js
fsReadFilePromise("a.txt", "utf-8")
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log("Error while reading file");
  });
```

### Key idea:

This process is called **promisification** — converting callback-based APIs into Promise-based APIs.

---

## 03-promisify-setTimeout.js

This file converts `setTimeout` into a Promise.

### How it works:

* We create a Promise
* We wait for a delay using `setTimeout`
* After delay completes → we call `resolve()`

### Usage:

```js
setTimeoutPromisified(1000).then(function () {
  console.log("1 second has passed");
});
```

### Key idea:

Even timers can be converted into Promises for consistent async handling.

---

## 04-async-await.js

This file shows the modern way of handling asynchronous code using `async/await`.

### How it works:

* We use a Promise-based function
* Instead of `.then()`, we use `await`
* Code looks synchronous but is still asynchronous

### Example:

```js
let file1Contents = await fsReadFilePromisified("a.txt", "utf-8");
```

### Key idea:

This is the **cleanest and most readable way** to write asynchronous JavaScript today.

---

## Overall Flow of Learning

* Callbacks → Old approach
* Promises → Cleaner and structured approach
* async/await → Modern and most readable approach
