const express = require('express');
const router = express.Router();
const zod = require('zod');
const { jwtSecret } = require('../config');
const jwt = require('jsonwebtoken');
const User = require('../db');
router.use(express.json());

const signupbody = zod.object({
    username : zod.string().email(),
    password : zod.string().min(4),
    firstname :zod.string(), 
    lastname : zod.string(),
})

const signinBody = zod.object({
    username: zod.string().email(),
	password: zod.string()
})
router.post('/signup',async function(req,res){
    const username = req.body.username;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const password = req.body.password;
    //console.log(req.body)
    try{
        const {success} = signupbody.parse({username,firstname,lastname,password})
        if (!success){
            res.status(411).send("wrong inputs send")
            return
        }
        const userFound =await User.findOne({username})
        
        if (!userFound){
            const data = await User.create({username,firstname,lastname,password})
            const userId = data._id
            const token  = jwt.sign({userId},jwtSecret)
            res.json({token,
                message:"User Created Successfully"
            })
        }
        else{
            res.status(411).json('User already exists.')
        }
    }
    catch(e){
        console.log(e)
        res.status(411).send("wrong inputs send")
    }
})



router.post('/signin',async function(req,res){
    const username = req.body.username;
    const password = req.body.password; 

    
    const {success } = signinBody.safeParse({username,password})
    console.log(success)
    if (!success){
        res.status(411).send("wrong inputs send")
        return
    }
    const userFound = await User.findOne({username}).select('username password')
    console.log(userFound)
    if (!userFound || userFound.username != username || userFound.password != password){
        res.status(411).json({message : "Email or Password is Incorrect"});
        return 
    }
    else{
        const userId = userFound._id
        const token = jwt.sign({userId},jwtSecret)
        res.json({token})
        return 
    }
    
})

module.exports = router;