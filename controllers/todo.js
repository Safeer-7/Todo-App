const Todo = require("../models/Todo")
const moment = require("moment")

const homeController = async(req, res, next) => {
    try{
        const todos = await  Todo.find({}).sort({ createdAt : -1})
        res.locals.moment = moment  
        res.render("index",{title: "List Todo", todos})
    }catch(error){
        res.status(500).json({message:error.message})
    }
}
const addtodoFormController = (req, res, next) => {
    try{
        res.render("newtodo",{title:"New Todo"})
    }catch(error){
        res.status(500).json({message:error.message})
    }
}
const updateController = async(req, res, next) => {
    try{
        const {id} = req.query
        const todo = await Todo.findById(id)
        res.render("updatetodo",{title:"Update Todo",todo} )
    }catch(error){
        res.status(500).json({message:error.message})
    }
}
const deleteController = (req, res, next) => {
    try{
        const {id} = req.query

        res.render("deletetodo",{title:"Delete Todo",id})
    }catch(error){
        res.status(500).json({message:error.message})
    }
}
const addtodoController = async(req,res,next) => {
    try{
        const {title,desc} = req.body
        if (!title || !desc) {
            return res.status(400).json({ message: "Title and description are required fields" });
        }
        const newTodo = new Todo({title,desc})
        await newTodo.save()
        res.redirect("/")
    }catch(error){
        res.status(500).json({message:error.message})
    }
}
const updateTodoController = async(req,res,next) => {
    try{
        const {id} = req.params
        const {title,desc} = req.body
        const todo = await Todo.findById(id)
        if(!todo){
            return res.status(404).json({message:"Todo Not Found"})
        }
        todo.title = title
        todo.desc = desc
        await todo.save()
        res.redirect("/")
    }catch(error){
        res.status(500).json({message:error.message})
    }
}
const deleteTodoController = async(req,res,next) => {
    try{
        const {id,confirm} = req.query
        if(confirm === "yes"){
            await Todo.findByIdAndDelete(id)
        }
        res.redirect("/")
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

module.exports = 
{
    homeController, 
    addtodoFormController, 
    updateController, 
    deleteController,
    addtodoController,
    updateTodoController,
    deleteTodoController    
}