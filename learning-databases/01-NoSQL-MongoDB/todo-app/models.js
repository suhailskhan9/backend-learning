const mongoose = require("mongoose")

mongoose.connect("") // MongoDB Connection URL

// mongoose schema and model object

// schema describes how does the data will look like

const UserSchema =  new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const TodoSchema = new mongoose.Schema({
    title: String,
    description: String,
    userId: mongoose.Types.ObjectId
})

const userModel = mongoose.model("users", UserSchema)
const todoModel = mongoose.model("todos", TodoSchema)

module.exports = {
    userModel,
    todoModel
}