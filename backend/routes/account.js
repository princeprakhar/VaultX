const express = require('express');
const { authMiddleware } = require('../middleware/authMiddleWare');
const mongoose = require('mongoose');
const { User, Account } = require('../root/db');
const router = express.Router();

router.use(express.json());

// Get Account Balance
router.get("/balance", authMiddleware, async (req, res) => {
    try {
        const account = await Account.findOne({ userId: req.userId });
        if (!account) {
            return res.status(404).json({ message: "Account not found" });
        }

        res.status(200).json({ balance: account.balance });
    } catch (error) {
        console.error("Error fetching balance:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
});

router.post("/transfer", authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    let { amount, receiverEmail } = req.body;
    const sender = req.userId;
    // Ensure the amount is a number
    amount = Number(amount);

    try {
        const findSenderAccount = await Account.findOne({ userId: sender }).session(session);
        if (!findSenderAccount || findSenderAccount.balance < amount) {
            await session.abortTransaction();
            return res.status(400).json({ message: "Insufficient balance" });
        }
        const receiverUser = await User.findOne({ username: receiverEmail });
        if (!receiverUser) {
            await session.abortTransaction();
            return res.status(400).json({ message: "Receiver account not found" });
        }

        const findReceiverAccount = await Account.findOne({ userId: receiverUser._id }).session(session);
        if (!findReceiverAccount) {
            await session.abortTransaction();
            return res.status(400).json({ message: "Receiver account not found" });
        }

        // Perform the transfer
        await Account.updateOne({ userId: sender }, { $inc: { balance: -amount } }).session(session);
        await Account.updateOne({ userId: receiverUser._id }, { $inc: { balance: amount } }).session(session);

        await session.commitTransaction();
        res.status(200).json({ message: "Transfer successful" });
    } catch (error) {
        await session.abortTransaction();
        console.error("Transfer error:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    } finally {
        session.endSession();
    }
});

module.exports = router;
