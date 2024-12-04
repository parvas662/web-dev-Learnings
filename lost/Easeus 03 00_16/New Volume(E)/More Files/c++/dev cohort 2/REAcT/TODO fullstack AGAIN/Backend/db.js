const mongoose = require('mongoose');
const { title } = require('process');

mongoose.connect("mongodb+srv://vishu:MongoDB%40123@cluster0.yzayual.mongodb.net/newFullStack_TodoAPP")
const todoSchema = mongoose.Schema({
    title: String,
    description : String,
    completed  : Boolean
})

const todo  = mongoose.model('Todos',todoSchema)
module.exports = {
    todo
}