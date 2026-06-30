const http = require("http");

// basic server
const server = http.createServer((req, res) => {
    res.end("Welcome to FlowBoard backend")
})


// request inspector
/*
const server = http.createServer((req, res) => {
    console.log(req.method)
    console.log(req.url)
    console.log(req.headers)
    
    res.end("Request received");
})
*/

// routing 
/*
const server = http.createServer((req, res) => {
    
    if (req.url === "/" && req.method === "GET") {
        return res.end("Home");
    }
    
    if (req.url === "/about" && req.method === "GET") {
        return res.end("About");
    }
    
    if (req.url === "/health" && req.method === "GET") {
        return res.end("Healthy");
    }
    
    res.statusCode = 404;
    res.end("Route not found");
    
});
*/

// json response
/*
const server = http.createServer((req, res) => {
    
    if (req.url === "/" && req.method === "GET") {
        res.setHeader(
            "Content-Type",
            "application/json"
        );
        
        return res.end(
            JSON.stringify({
                status: "success",
                message: "FlowBoard API running"
            })
        );
    }

    res.statusCode = 404;
    res.end("Route not found");

});
*/

server.listen(3000, () => {
    console.log("Server running on port 3000")
})