const mongoose = require("mongoose")
const connectionUrl = "mongodb://0.0.0.0:27017/todoDb"

const connectMongoDb = async() => {
    try{
        await mongoose.connect(connectionUrl)
        console.log("Database Connected Successfully");
    }
    catch(error){
        console.log(error.message)
        process.exit(1)
    }
}

module.exports = connectMongoDb