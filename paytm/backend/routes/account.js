const express = require('express');
const router = express.Router();
const { Account } = require("../db");
const {authMiddleware} = require('../middleware')
const zod = require('zod')
const { mongoose } = require('mongoose');


router.get('/balance',authMiddleware, async function (req, res) {
 
    console.log(req.userId )
    user = await Account.findOne({ 
        userId : req.userId 
    })
    if (!user) {
        res.status(403).json({
            message: "user not Found"
        })
        return
    }
    else {
        res.status(200).json({
            balance: user.balance
        })
    }
})

const transferSchema = zod.object({
    to : zod.string(),
    amount : zod.number()
})

router.post('/transfer',authMiddleware, async function (req, res) {
    const to = req.body.to;
    const amount = req.body.amount;
    const {success} = transferSchema.safeParse({to,amount});
    if (!success){
        res.status(411).json({
            message: "Invalid Input"
        })
        return 
    } 
    const session = await mongoose.startSession();  
        session.startTransaction();
        // Fetch the accounts within the transaction and check amount\account of debitor.
        const account =  await Account.findOne({userId : req.userId}).session(session);
        if (!account || account.balance <amount){
            await session.abortTransaction();
            res.status(400).json({
                message : "Insufficient Balance"
            })
        }
            // check account of creditor.
        const toAccount = await Account.findOne({userId : to }).session(session);
        if (!toAccount ){
            await session.abortTransaction();
            res.status(400).json({
                message : "Invalid Account"
            })
        }
        // everything is upto the mark now transaction can be done.
        await Account.findOneAndUpdate({userId: req.userId},{$inc:{balance : -amount}}).session(session);
        await Account.findOneAndUpdate({userId: to},{$inc:{balance : amount}}).session(session);
        
        // commit the transaction
        await session.commitTransaction();
        res.json({
            message : "Transfer Successful"
        }) 
      //  session.endSession(); // Ensure session is ended after operation
})
 
module.exports = router;