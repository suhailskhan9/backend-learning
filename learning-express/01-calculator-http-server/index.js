// http server that supports 4 routes (/sum, /sub, /div, /mul)

const express = require("express");
const app = express();

// learning query params
// if req is like http://localhost/sum?a=5&b=5

/* 
    everything related to the request
        the domain name, ip, route, method, body, request header, query params, path params
        all of them will accessible from ""req""
    
    and the response, whatever we are suppose to send back
        payload, status code, response headers,
        will be send from ""res"" obj
*/
app.get("/sum", function(req, res) {

    const a = parseInt(req.query.a); // by default query param will be a string ,string 1
    const b = parseInt(req.query.b); // string 2    
    const sum = a + b;
    
    // a single req can only get one response, if you do want to send multiple responses,
    // you will use eventstream, which is what chatgpt uses
    // send json response
    res.json({
        ans: sum
    })

    /*
    or you can send response as 

    res.send("<b><u> " + sum.toString() + "</u></b>")
    */

});

////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// learning about path params
// there are some dynamic params in the route
// http://localhost/sum/1/2
app.get("/sum/:a/:b", function(req, res) {
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)
    const sum = a + b

    res.json({
        ans: sum
    })

})
app.get("/multiply/:a/:b", function(req, res) {
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)
    const ans = a * b

    res.json({
        ans: ans
    })

})

// serving frontend html file from backend
app.get("/", function(req, res) {
    res.sendFile("C:\\Users\\Suhail Khan\\Desktop\\cohort\\backend\\calculator-http-server\\index.html")
})


// want to use json data sent in body then need to add this line
// if in your backend you want to use json body as input
app.use(express.json())

app.post("/sum", function(req, res) {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b)
    
    const sum = a + b
    res.json({
        ans: sum
    })
})
app.listen(3000);