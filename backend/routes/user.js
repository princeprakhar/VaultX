const express = require('express');
const router = express.Router();
const { User, Account } = require('../root/db');
const zod = require("zod");
const { authMiddleware } = require('../middleware/authMiddleWare');
const jwt = require('jsonwebtoken');

// Define signUpBody to validate
const signUpBody = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6),
    firstName: zod.string().min(1),
    lastName: zod.string().min(1),
});

// Signup handler
router.post("/signup", async (req, res) => {
    const validate = signUpBody.safeParse(req.body);
    if(!validate.success){
        return res.status(400).json({message : "Invalid input"});
    }

    const { username, password, firstName, lastName } = req.body;
    const findUser = await User.findOne({ username });
    if(findUser){
        return res.status(401).json({message : "User already exists"});
    }
    const newUser = await User.create({
        username,
        password,
        firstName,
        lastName
    });

    await newUser.save();
    const newUserId = newUser._id;

    // Create account with a numeric balance instead of a string
    const newAccount = new Account({ userId: newUserId, balance: 10000 });
    await newAccount.save();

    const token = jwt.sign({ id: newUserId }, process.env.JWT_SECRET);

    res.status(200).json({
      message:"User created successfully",
      token: token 
    });
});

// Define signInBody to validate
const signInBody = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6),
});

// Signin handler
router.post("/signin", async (req, res) => { 
  const validate = signInBody.safeParse(req.body);
  if(!validate.success){
      return res.status(400).json({message : "Invalid input"});
  }
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if(user) {
    if(user.password === password) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      return res.status(200).json({
        message: "User login successfully",
        token: token
      });
    }
    return res.status(400).json({message : "Invalid password"});
  }
  return res.status(400).json({message : "User not found"});
});

// Updated user body to validate for update
const updatedUserBody = zod.object({
    password: zod.string().min(6),
    firstName: zod.string().min(1),
    lastName: zod.string().min(1),
});

// PUT handler – note the updateOne method and usage of req.userId
router.put("/update", authMiddleware, async (req, res) => {
  const validate = updatedUserBody.safeParse(req.body);
  if(!validate.success){
      return res.status(400).json({message : "Invalid input"});
  }
  const { password, firstName, lastName } = req.body;
  await User.updateOne({ _id: req.userId }, { password, firstName, lastName });

  res.status(202).json({message : "User updated successfully"});
});

// GET all users handler – use a query parameter "filter" to search by firstName or lastName
router.get("/all", async (req, res) => {
  const filter = req.query.filter || "";
  const regex = new RegExp(filter, "i");
  const users = await User.find({
    $or: [
      { firstName: regex },
      { lastName: regex }
    ]
  });

  res.status(200).json({
    users: users.map(user => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    }))
  });
});

module.exports = router;

