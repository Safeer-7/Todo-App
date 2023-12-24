const express = require("express")
const router = express.Router()
const Todo = require("../models/Todo")
const { model } = require("mongoose")
const moment = require("moment")
const todo = require("../controllers/todo")

router.get("/", todo.homeController)
router.get("/add-todo", todo.addtodoFormController)
router.get("/update-todo", todo.updateController)
router.get("/delete-todo", todo.deleteController)
router.post("/add-todo", todo.addtodoController)
router.post("/update-todo/:id", todo.updateTodoController)
router.get("/confirm-delete", todo.deleteTodoController)

module.exports = router
