const express = require('express');
const router = express.Router();
const zod = require('zod');
const { jwtSecret } = require('../config');
const jwt = require('jsonwebtoken');
const {User,Account} = require('../db');
const { authMiddleware } = require('../middleware');
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
    console.log(req.body)
    try{
        const { success } = signupbody.safeParse({username,firstname,lastname,password})
        console.log(success)
        if (!success){
            res.status(411).send("wrong inputs send")
            return
        }
        const userFound = await User.findOne({username:username})
        //const existingUser = await User.findOne({username: req.body.username})
    
        if (!userFound){
            const data = await User.create({
                username,
                firstname,
                lastname,
                password})
            
                /// ----- Create new account ------
            await Account.create({
                userId : data._id,
                balance : 1 + Math.random() * 10000
            })
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

    const {success } = signinBody.safeParse({username,password}) //zod 
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

const udpateBody = zod.object({
    password: zod.string().min(4),
    firstname : zod.string(),
    lastname : zod.string(),
    
})

router.put('/',authMiddleware,async function(req,res){
    const obj = udpateBody.safeParse(req.body)
    if (!obj.success){
        res.status(403).json({
            message : "Error while updating information"
        })
    }
     await User.updateOne({_id:req.userId},req.body)  //userId fetching from authmiddleware  
     res.json({
        message : "information Updated Successfully"
     })
 })

router.get('/bulk',async function(req,res){
    const filter = req.query.filter || "";
    const users = await User.find({
        $or: [{ 
            firstName: { $regex: filter } },

            { lastName: { $regex: filter } }],
    });
    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    });
})

module.exports = router;