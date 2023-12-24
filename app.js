const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const bodyParser = require("body-parser")
const connectMongoDb = require("./init/mongoDb")
const todoRoute = require("./routes/todo")


// init app
const app = express()
const connectionUrl = "mongodb://0.0.0.0:27017/todoDb"

// MondoDb Connection
connectMongoDb()


// view engine
app.set("view engine", "ejs")
app.use(express.json())
app.use(express.static(path.join(__dirname,"public")))
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({extended:true}))
app.use("/", todoRoute)

module.exports = app