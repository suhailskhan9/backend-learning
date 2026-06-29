/*
What is HTTP

HTTP is a communication protocol that defines how clients and server communicate with each and exchange data

Despite the name "HyperText", modern HTTP carries much more than HTML
such as JSON, Images, Videos, PDFs, JS files, API responses
HTTP defines how messages are structured, not what they contain



Client and Server

A client initiates communication 
Examples: Browser, Mobile app, React frontend, Postman, Another backend service



A server waits for requests, processes them, and returns responses


What does a URL contain, how's it actually structured

https://www.google.com:443


https / http ---> Protocol
www.google.com ---> domain
443 ----> default for HTTPS, so often omitted
/projects/123 ---> path identifying the resource
?q="abc"   ----> Query string



What is a Request? 

A request is a message sent by a client asking the server to perform an action or provide a resource

It contains:
HTTP method (GET, POST, etc.)
URL
Headers
Optional body (for methods like POST or PUT)



What is a Response?

A response is a server's reply
It typically contains:
Status code
Headers
Body (HTML, JSON, image, etc)





Statelessness

HTTP is stateless
This means 
1. Each request is independent
2. The server does not automatically remember previous requests



The server cannot assume who the user is based on a previous request. 
Information such as authentication tokens or cookies must accompany each request (or otherwise identify the session).


HTTP Methods
GET   --- Retrieve data
POST  --- Create a new resource
DELETE  --- Remove a resource
PUT   ----  Replace an entire resource
PATCH   --- Update part of a resource

HTTP Status codes

2xx --- Success
    200 OK
    201 Created
    204 No Content


4xx --- Client Errors
    400 Bad Request
    401 Unauthorized
    403 Forbidden
    404 Not Found

5xx --- Server Errors
    500 Internal Server Error
    
*/