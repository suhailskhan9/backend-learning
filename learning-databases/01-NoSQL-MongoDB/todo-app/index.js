const express = require("express")
const { authMiddleware } = require("./middleware")
const app = express()
const jwt = require("jsonwebtoken")

const { userModel, todoModel } = require("./models")
app.use(express.json())

app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // const existingUser = USERS.find(u => u.username === username);
    const existingUser = await userModel.findOne({
        username: username,
        password: password
    })

    if(existingUser){
        res.status(403).json({
            message: "User with username already exists"
        })
        return;
    }
    
    const newUser = await userModel.create({
        username: username,
        password: password
    })

    res.json({
        id: CURRENT_USER_ID - 1
    })
})

app.post("/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // const userExists = USERS.find(u => u.username === username)
    const userExists = await userModel.findOne({
        username: username,
        password: password
    })

    if(!userExists) {
        res.status(403).json({
            message: "Incorrect credentials"
        })
        return;
    }

    const token = jwt.sign({
       userId: userExists.id 
    }, "secret123")

    res.json({
        token
    })
})

app.post("/todo", authMiddleware, async (req, res) => {
    const userId = req.userId;
    const title = req.body.title;
    const description = req.body.description;
    
    await todoModel.create({
        title: title,
        description: description
    })
    res.json({
        message: "Todo made"
    })
})

app.delete("/todo/:todoid", authMiddleware, async (req, res) => {
    const userId = req.userId;
    const todoId = req.params.todoid;

    
    // const doesUserOwnTodo =  TODOS.find(t => t.id === todoId && t.userId === userId)
    const doesUserOwnTodo = await todoModel.findOne({
        todoId: todoId,
        userId: userId
    })
    if(doesUserOwnTodo) {
        TODOS = TODOS.filter(t => t.userId === userId && t.id === t.id === todoId)
        res.json({
            message: "Deleted"
        })
    } else {
        res.status(411).json({
            message: "Either todo doesnt exist or this is not your todo"
        })
    }
})

app.get("/todos", authMiddleware, async (req, res) => {
    const userId = req.userId;
    // const userTodos = TODOS.find(t => t.userId === userId)
    const userTodos = await todoModel.find({
        userId: userId
    })
    res.json({
        todos: userTodos
    })
})

app.listen(3000)