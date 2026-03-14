const user = require("../model/user")
const express = require("express");
const bcrypt = require("bcryptjs");

const router = express.Router();
//Register
router.post("/register",async(req,res)=>{
    try {
        const {name,email,password}= req.body;
        const userExist = await user.findOne({email})
        if(userExist){
            return res.status(400).json({message:"user already exists"})
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword= await bcrypt.hash(password,salt);

        const newUser = new user({
            name,
            email,
            password:hashedPassword
    })
    await newUser.save()
   res.json({message:"User Registered Successfully"})
} catch (error) {
         res.status(500).json({ error: error.message });
    }
})


module.exports= router