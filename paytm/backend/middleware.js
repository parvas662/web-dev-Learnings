const { jwtSecret } = require("./config");
const jwt = require('jsonwebtoken')
const express = require('express'); 
async function authMiddleware(req,res,next){  
    const token_header = req.headers.Authorization || req.headers.authorization; 
     
    const token = token_header.split(' ')[1];
    if (!token_header || !token_header.startsWith('Bearer')) {
        return res.status(403).json({
            message: "invalid token" });
    }
    try{
    const decoded = jwt.verify(token,jwtSecret)
       // console.log(decoded)
        req.userId = decoded.userId
        next()
    }
    catch (err)  {
        res.status(403).json({message : "access denied : invalid token"})
    }
}

module.exports = {
    authMiddleware
}