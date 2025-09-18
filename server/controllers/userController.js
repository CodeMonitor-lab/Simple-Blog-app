const User = require('../models/authModel')
const bcyrpt = require('bcryptjs');
const { response } = require('express');
const jwt = require('jsonwebtoken');

// user register
const userSignup = async (req, res) => {
    const { name, email, password} = req.body;
    if (!name || !email || !password) {
        res.status(400).json({ msg: "Please fill all field!", Sucess: false })
    }

    try{
        const userExists = await User.findOne({email:email})
        if(userExists){
            res.status(409).json({msg:'User already exists!',sucess:false})
        }
        const saveUser = await new User({
            name,
            email,
            password,
        })
        if(!userExists){
        await saveUser.save();
        const userToken = await saveUser.generateToken()
        res.status(201).json({
            msg:'User Created',
            userId:saveUser._id.toString(),
            token:userToken,
        })
        console.log('SignUp Sucessfull')
    }
    }catch(error){
        console.log(error.message)
        return res.status(500).json({msg:"Interna-Server-Error",Sucess:false})
    }
}

// user login
const userLogin = async (req, res) => {
    const {email,password} = req.body;
    try{
        const loginUser = await User.findOne({email})
        
        if(!loginUser){
            return res.status(404).json({msg:"Invalid Credentials!",sucess:false})
        }
        const isMatchPassword = await bcyrpt.compare(password,loginUser.password)
        if(isMatchPassword){
            console.log('Login Sucess')
            res.status(200).json({
                msg:"Login Sucess!",
                userId:loginUser._id.toString(),
                token:await loginUser.generateToken(),
            })
            if(isMatchPassword != isMatchPassword){
                console.log('Password not match');
            }
        }
        else{
            res.status(401).json({msg:"Invalid email or password",sucess:false});
        }
    }catch(error){
        console.log(error.message)
        return res.status(500).json({msg:"Internal-Server-Error",Sucess:false})
    }
}

// get User 
const getAllUser = async (req,res)=>{
    try{
        const findAllUser = await User.find()
        const counAllUser = await User.countDocuments()
        if(!findAllUser){
            res.status(404).json({msg:"User Not Found!",sucess:false})
        }
        if(findAllUser){
            res.status(200).json({counAllUser,findAllUser})
        }
    }catch(error){
        res.status(500).json({msg:"Internal-Server Error!",sucess:false})
    }
}
module.exports = { userSignup, userLogin,getAllUser};