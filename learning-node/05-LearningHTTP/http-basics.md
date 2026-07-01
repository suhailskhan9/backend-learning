# HTTP (Payloads, Domains, IPs, Routes)

## HTTP Servers

- request response model
- http constructs
  1. Domain name / IP
  2. Port
  3. Methods
  4. Plaintext vs JSON vs HTML response
  5. Status codes
  6. Body, Headers
  7. Routes

---

## Introduction

Back in the day, HTTP was introduced so machines all around the world could talk to each other.

This would be useful for things like:
1. Talking via IM (instant messenger)
2. Emails
3. Accessing an algorithm that is only available on a very big machine at Stanford

In the Network tab in devtools, while inspecting requests made when visiting google.com:

### Things server returns
- Response payload
- Status code
- Response headers → headers sent from the server

### Things client sends
- Request URL → an address for the server
- Request Method
- Remote address → real address of the server
- Request headers → headers sent from the request

---

## Request Response Model

The request-response model is a fundamental communication pattern.  
It describes how data is exchanged between a client and a server or between two systems.

This model works for 99% of applications.

In cases like chat apps, Zoom, etc., request-response fails a bit:
- Server may need to send 1000 messages in a group chat
- Server may need to initiate communication to client

This is not request-response, this is server-side events.

Other protocols that exist that let machines communicate with each other:
- WebSockets
- WebRTC
- gRPC

---

## Domain Name / IP

### Domain Names
Used to reach a server.

Examples:
- google.com
- facebook.com

### IPs
Every domain that you see, actually has an underlying IP that it resolves to.

You can check it using:
```bash
ping google.com
```

When you visit a website, you're actually visiting its IP address.

### Analogy
- Domain name → phone contact name  
- IP address → actual phone number  

---

## Ports

Ports are logical endpoints used by protocols to identify services running on a computer or server.

They help direct network traffic to the correct application or service.

Common ports:
- 80 → HTTP  
- 443 → HTTPS  

---

## HTTP Methods

HTTP methods are used to specify the type of action the client wants to perform on a resource.

Common methods:

- GET → retrieve data from a server  
- POST → submit data to be processed by a server  
- PUT → update or create a resource on the server  
- DELETE → remove a resource from the server  

---

## Response (Payload)

The response represents what the server returns in response to a request.

It can be:

1. Plaintext (not commonly used)
2. HTML (for websites)
3. JSON (for APIs and data exchange)

---

## JSON

JSON (JavaScript Object Notation) is a lightweight, text-based format used for data interchange.

Example:

```json
{
  "name": "John Doe",
  "age": 30,
  "isEmployed": true,
  "address": {
    "street": "123 Main St",
    "city": "anytown"
  },
  "phonenumbers": ["123-456-7890", "987-654-3210"]
}
```

---

## Other Data Formats

### XML
XML is a text-based format used to store and transfer structured data.  
It uses tags like HTML, but unlike HTML, you can define your own tags.

### Protobuf
Protobuf (Protocol Buffers) is a compact binary data format created by Google.  
It is used for efficient communication between services.

Instead of readable text (like JSON or XML), it sends binary data.

---

## Status Codes

Status codes are 3-digit numbers returned by the server to indicate the result of a request.

### 2xx (Success)
- 200 OK → request successful  
- 204 No Content → request successful but no response body  

### 3xx (Redirection)
- 301 Moved Permanently → resource moved to a new URL  
- 304 Not Modified → resource has not been modified since th last request, client can use the cached version

### 4xx (Client Error)
- 400 Bad Request → invalid request (server could not understand the request due to invaild syntax)
- 401 Unauthorized → authentication required (request requires user authentication, client must provide credentials)
- 403 Forbidden → not allowed (server understood the request but refuses to authorize it)
- 404 Not Found → resource not found (request resource could not be found on the server)

### 5xx (Server Error)
- 500 Internal Server Error → server failed (server encountered an unexpected condition that prevented it from fulfilling the request)
- 502 Bad Gateway → invalid response from upstream server (server received an invalid response from an upstream server while acting as a gateway or proxy)

---

## Body

The body (or payload) is the actual data sent in an HTTP request or response.

It is usually used in:
- POST  
- PUT  
- PATCH  

Most commonly, it contains JSON data.

---

## Headers

Headers are metadata sent with requests and responses.

### Request Headers
Sent from client → server

Examples:
- Content-Type  
- Authorization  
- Accept  

### Response Headers
Sent from server → client

Examples:
- Content-Type  
- Cache-Control  
- Set-Cookie  

---

## Routes

Routes define how endpoints are structured on a server.

They combine:
- HTTP method  
- URL path  

Examples:
- GET /todos  
- POST /todos  
- DELETE /todos/:id  

---

## URL Structure

Example:

```
https://www.google.com:443/projects/123?q=abc
```

Breakdown:
- https → protocol  
- www.google.com → domain  
- 443 → port  
- /projects/123 → path  
- ?q=abc → query parameters  

---

## Statelessness

HTTP is stateless.

Each request is independent.

The server does not remember previous requests.

To maintain state, we use:
- Cookies  
- Tokens (JWT, etc.)

---

## HTTP Module (Node.js)

Node.js provides a built-in `http` module to create servers.

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  res.end(JSON.stringify({ message: "Hello World" }));
});

server.listen(3000);
```

req → request object (method, url, headers)  
res → response object used to send data back


