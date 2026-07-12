/*

    Request URL
    Method
    Headers
    Query parameters
    Route parameters
    Status codes
    JSON responses

*/


app.get("/", (req, res) => {
    
    console.log(req.method);
    console.log(req.url)
    console.log(req.headers)
    console.log(req.headers.authorization)
})


app.get("/projects/:id", (req, res) => {
    
    // if url is ..../projects/44

    console.log(req.params);  // prints 44, all params are string
   
})

app.get("/projects?page=2&limit=30", (req, res) => {

    // everything after the ? is query params

    console.log(req.query); // prints the full object
    console.log(req.query.page)   // prints value for that respected variable, needs to be exactly same as in url
    console.log(req.query.limit)  // everything is a string

    res.status(202)
    res.status(303)
    res.send("Hello")   // sends the response and ends the request
    // works with string, html, objs, arrays, buffers
    // express auto converts into json
    // use this when returning plain text, html, simple responses

    
    /*
        use this for APIs

        res.json({

        })
    */
})