const mongoose = require("mongoose");
const { string } = require("zod");
mongoose.connect('mongodb+srv://vishu:MongoDB%40123@cluster0.yzayual.mongodb.net/PaytmApp')

const UserSchema = new mongoose.Schema({
    username : {
        type: String,
        require: true,
        unique: true,
        trim : true,
        lowercase :true,
        minLength:3,
        maLength :40
    },
    firstname : {
        type:String,
        minLength :1,
        maxLength : 50,
        require : true,
        trim : true
    },
    lastname : {
        type:String,
        minLength :1,
        maxLength : 50,
        require : true,
        trim : true},
    password : {
        type:String,
        minLength :4,
        require : true}
})

const User = mongoose.model('User',UserSchema)

module.exports = User;
