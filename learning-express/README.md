## Express Basics

Express is a Node.js framework used to build HTTP servers and APIs in a simple and structured way.

---

## What Express.js solves

Before Express.js, building a server in Node.js required writing a lot of extra code using the built-in `http` module.

Express.js makes this simpler by:

- Making it easy to create a server
- Giving simple ways to define routes like `app.get()` and `app.post()`
- Helping read request data like query params, path params, and body in a clean way
- Making it easy to send responses like JSON, HTML, or files
- Allowing middleware to run code before the final route handler

In short, Express.js reduces extra code and makes server-side development easier and cleaner.

---

## Server Setup

An Express application is created using:

* Importing Express
* Initializing an app instance
* Listening on a port to start the server

This app object is used to define routes and handle requests.

---

## Request–Response Model

Every HTTP interaction follows the request–response cycle:

### Request (req)

Contains everything sent by the client, such as:

* Domain / URL
* Route
* HTTP method (GET, POST, etc.)
* Query parameters
* Path parameters
* Request body
* Headers

### Response (res)

Used by the server to send data back:

* JSON payload
* HTML response
* Status codes
* Headers

Only one response can be sent per request.

---

## Query Parameters

Query parameters are sent in the URL using `?`.

Example idea:

* Used for simple input values
* Always received as strings
* Must be converted to numbers when needed

They are accessed using the request’s query object.

---

## Path Parameters

Path parameters are dynamic values inside the route itself.

Example idea:

* `/sum/1/2`
* Values are part of the URL path
* Useful for required inputs

They are accessed using the request’s params object.

---

## JSON Response

Most APIs return data in JSON format.

* Structured format for data exchange
* Easy for frontend to consume
* Commonly used in REST APIs

---

## JSON Body in POST Requests

When sending data through POST requests:

* Data is sent inside the request body
* Express needs JSON parsing middleware to read it
* After parsing, data is available in `req.body`

---

## Middleware (JSON Parser)

Express middleware runs before route handlers.

* `express.json()` is used to parse JSON request bodies
* Without it, `req.body` will be undefined

---

## HTTP Methods in Express

Common HTTP methods used:

* GET → fetch data
* POST → send data
* PUT → update data
* DELETE → remove data

Each method defines the type of operation performed on the server.

---

## Serving HTML Files

Express can serve static HTML files directly to the browser.

* Used for simple frontend pages
* Server sends file using response methods

---

## Key Takeaways

* `req` contains all incoming request data
* `res` is used to send responses
* Query params and path params are two ways of passing input
* JSON is the standard format for API responses
* Middleware is used to process request data before routes
* Express simplifies routing and backend development
