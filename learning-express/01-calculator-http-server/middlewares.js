const express = require("express")
const app = express()
let requestCount = 0

function middleware(req, res, next) {
    requestCount++
    next()
}

app.use(express.json())
app.use(middleware)

app.get("/multiply", function(req, res) {
    
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b)

    const ans = a * b
    res.json({
        ans: ans
    })
})


app.get("/status", function(req, res) {
    
    res.send("up")
})

app.get("/requestCount", function(req, res) {

    res.send({
        requestCount
    })
})
app.listen(3002);