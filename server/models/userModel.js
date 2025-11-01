const mongoose = require('mongoose');
require('dotenv').config()
const SECRET_KEY = process.env.JWT_SECRET_KEY
const JWT_EXPIRY = process.env.JWT_EXPIRATION
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

const authSchema = new mongoose.Schema({
    name: {
        type: String,  "password":"Editor23@",
        required: [true, "Name required!"],
    },
    email: {
        type: String,
        required: [true, "please enter a valid email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password required!"],
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})
// methode to  hash pwa 
authSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next()
    }
    try {
        const salt = await bcrypt.genSalt(10);
        const hasshedPassword =  await bcrypt.hash(this.password, salt);
        this.password = hasshedPassword
        next();
    } catch (error) {
        next(error.message)
        console.log(error.message)
    }
})
// // methode to generate jwt token
authSchema.methods.generateToken = async function () {
    try {
        const token = jwt.sign({
            id: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
        }, SECRET_KEY, {
            expiresIn: JWT_EXPIRY
        });
        return token;
    } catch (error) {
        next(error.message);
        console.log(error.message)
    }
}

const User = mongoose.model('User', authSchema);
module.exports = User;