const mongoose = require('mongoose')

const Userschema = new mongoose.Schema({
    title : String,
    date : String,
    task1 : String,
    task2 : String,
    task3 : String,
    task4 : String,
    task5 : String
})
module.exports = mongoose.model("todos",Userschema)