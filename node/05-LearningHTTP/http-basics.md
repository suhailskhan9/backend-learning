# HTTP Basics

## What is HTTP?

HTTP (**HyperText Transfer Protocol**) is a communication protocol that defines how clients and servers communicate with each other and exchange data.

Despite the name **"HyperText"**, modern HTTP carries much more than HTML, such as:
- JSON
- Images
- Videos
- PDFs
- JavaScript files
- API responses

HTTP defines **how messages are structured**, not what they contain.

---

## Client and Server

- **Client**: Initiates communication.  
  Examples:
  - Browser
  - Mobile app
  - React frontend
  - Postman
  - Another backend service

- **Server**: Waits for requests, processes them, and returns responses.

---

## URL Structure

Example:  
https://www.google.com:443/projects/123?q="abc"


- **https / http** → Protocol  
- **www.google.com** → Domain  
- **443** → Port (default for HTTPS, often omitted)  
- **/projects/123** → Path identifying the resource  
- **?q="abc"** → Query string  

---

## What is a Request?

A **request** is a message sent by a client asking the server to perform an action or provide a resource.

It contains:
- **HTTP method** (GET, POST, etc.)
- **URL**
- **Headers**
- **Optional body** (for methods like POST or PUT)

---

## What is a Response?

A **response** is the server's reply.

It typically contains:
- **Status code**
- **Headers**
- **Body** (HTML, JSON, image, etc.)

---

## Statelessness

HTTP is **stateless**.  
This means:
1. Each request is independent.
2. The server does not automatically remember previous requests.

The server cannot assume who the user is based on a previous request.  
Information such as **authentication tokens** or **cookies** must accompany each request (or otherwise identify the session).

---

## HTTP Methods

- **GET** — Retrieve data  
- **POST** — Create a new resource  
- **DELETE** — Remove a resource  
- **PUT** — Replace an entire resource  
- **PATCH** — Update part of a resource  

---

## HTTP Status Codes

**2xx — Success**
- `200 OK`
- `201 Created`
- `204 No Content`

**4xx — Client Errors**
- `400 Bad Request`
- `401 Unauthorized`
- `403 Forbidden`
- `404 Not Found`

**5xx — Server Errors**
- `500 Internal Server Error`



## The `http` Module in Node.js

The built-in **`http`** module allows us to create HTTP servers without any external libraries.

---

### `http.createServer(callback)`
- Creates a server object.
- **Callback function signature:** `(req, res) => { ... }`
- Executes **once for every incoming request**.
- **`req`** → Request object (contains everything the client sent: method, URL, headers, body).
- **`res`** → Response object (used to send data back to the client).

**Example:**
```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ message: 'Hello, World!' }));
});
