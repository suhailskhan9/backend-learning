## Middleware

In express.js, middleware refers to functions that have access to the request obj(req), response obj(res), and the next function in the application's request-response cycle.  

Middleware function can perform a variety of tasks, such as:  
1. Modifying the request or response objects  
2. Ending the request-response cycle  
3. Calling the next middleware function in the stack  

---

## app.use()

what does app.use() lets u do  
it lets you put a middleware request-response chain  
jo req arhi hai before it reaches the handler it will go through the middlewares  

---

## express.json()

express.json() returns another function  
written by someone, is written for a specific purpose: extracting JSON payloads from a request  

---

## Middleware (Detailed Note)

Middleware is a function that executes between receiving a request and sending a response.  
It can access the request (req), response (res), and next() function.

Middleware is commonly used for tasks such as logging, authentication, validation, parsing request data, and error handling.

### A middleware can:
- Modify the request or response  
- End the request by sending a response  
- Pass control to the next middleware or route handler using next()

---

## Types of Middleware

### Global Middleware
Runs for every incoming request

```js
app.use(logger);
````

---

### Route-Specific Middleware

Runs only for the routes where it is attached

```js
app.get("/dashboard", auth, dashboardHandler);
```

---

## Important Concept

A request does not move from one route to another route.
Instead, Express creates a middleware pipeline for each incoming request and executes only the middleware applicable to that route.

---

## Middleware Example

```js
// middleware
app.use(express.json());

app.use(function(req, res, next) {
    console.log("hi there");
    next();
});
```

