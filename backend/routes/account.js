const express = require('express');
const { authMiddleware } = require('../middleware/authMiddleWare');
const { default: mongoose } = require('mongoose');
const router = express.Router();

router.use(express.json());
router.get("balance",authMiddleware,async(req,res){
    const { userId } = req.body;
    const findAccount = await Account.findOne({ userId });
    if(!findAccount){
      return res.status(400).json({message : "Account not found"});
    }
    res.status(200).json({balance : findAccount.balance });
});


router.post("/transfer",authMiddleware,async(req,res)=>{
    const session = mongoose.startSession();
    session.startTransaction();
    const receiver = req.body.receiver;
    const amount = req.body.amount;
    const sender = req.userId;
    
    const findSenderAccount = await Account.findOne({ userId  : sender }).session(session);
    const findReceiverAccount = await Account.findOne({ userId  : receiver }).session(session);  
    if(!findSenderAccount || !findReceiverAccount){
      session.abortTransaction();
      return res.status(400).json({message : "Account not found"});
    }
    if(findSenderAccount.balance < amount){
      session.abortTransaction();
      return res.status(400).json({message : "Insufficient balance"});
    }
    
    await Account.updateOne({ userId : sender },{ $inc : { balance : -amount } }).session(session);
    await Account.updateOne({ userId : receiver },{ $inc : { balance : amount } }).session(session);
    await session.commitTransaction();

    res.status(200).json({message : "Transfer successfull"});
});


module.exports = router;