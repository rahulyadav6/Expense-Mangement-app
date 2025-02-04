const express = require("express");
const router = express.Router();
const zod = require("zod");
const jwt = require("jsonwebtoken");
const env = require("../config");

const {secret} = env;


const { User } = require("../db");

router.get("/",(req,res)=>{
    res.json({
        message:"Welcome to user page"
    })
}) 

const signupSchema = zod.object({
    email: zod.string().email("Invalid email format"),
    password: zod.string().min(6, "Password must be at least 6 characters"),
    firstName: zod.string().min(1, "First name is required"),
    lastName: zod.string().min(1, "Last name is required")
})

router.post("/signup", async(req,res)=>{
    try{
        const { email, password, firstName, lastName} = req.body;

        const { success } = signupSchema.safeParse(req.body);

        if (!success) {
            return res.status(400).json({ message: "Invalid input format" });
        }

        if(!email || !password || !firstName || !lastName){
            return res.status(400).json({error:"All fileds are required"});
        }

        // validate email format
        const emailregex = /^\S+@\S+\.\S+$/;
        if(!emailregex.test(email)){
            return res.status(400).json({error:"invalid email format"});
        }

        /* check if user already exists */
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({error: "User already exists"});
        }

        /* Register user */
        const user = await User.create({
            email,
            password,
            firstName,
            lastName
        });
        const token = jwt.sign({email}, secret, {expiresIn: '1h' });    
        res.status(201).json(
            {
                message: "User registered successfully", user,
                token,token
            });
    }catch(err){
        console.error(err);
        if(err.code === 11000){
            return res.status(400).json({error: "Email already in use"});
        }
        res.status(500).json({error:"Internal server Error"});
    }
})

router.post("/signin", async(req,res)=>{
    const { email, password } = req.body;
    const isValidUser = await User.findOne({ 
        email: req.body.email,
        password: req.body.password,
    });
    if(!isValidUser){
        return res.status(400).json({error: "Not a valid user sign up first "});
    }

    const token = jwt.sign({email}, secret, {expiresIn: '1h' });
    res.json(
        {
            msg:"Logged in successfully ",
            token: token
        });
});


module.exports = router;