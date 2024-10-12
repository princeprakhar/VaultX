const mongoose = require('mongoose');
dotenv = require('dotenv');
dotenv.config();
const connectionString = process.env.DB_URL;
// Connect to the database
mongoose.connect(connectionString);

// Create a Schema for Users
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30,
        placeholder: "Username"
  },
    password: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 20,
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

create a acount Schema
const accountSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    accountNumber: {
        type: Number,
        required: true,
        unique: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const Account = mongoose.model('Account', accountSchema);

const User = mongoose.model('User', userSchema);

module.exports = {
User
};