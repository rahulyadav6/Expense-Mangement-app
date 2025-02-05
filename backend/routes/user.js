const express = require("express");
const router = express.Router();
const zod = require("zod");
const jwt = require("jsonwebtoken");
const env = require("../config");
const bcrypt = require('bcrypt');

const {secret} = env;


const { User, Expense } = require("../db");
const { authMiddleware } = require("../middleware");

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
            return res.status(400).json({ error: parsedInput.error.errors });
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
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({
            email,
            password : hashedPassword,
            firstName,
            lastName
        });
        const token = jwt.sign({id: user._id,  email: user.email }, secret, {expiresIn: '1h' });    
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
    const user = await User.findOne({ email });
    if(!user){
        return res.status(400).json({error: "User not found. Please sign up first."});
    }

    /* compare the provided password with the sored hashed password */
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid){
        return res.status(400).json({error: "Invalid email or password."});
    }
    /* Generate jwt token */
    const token = jwt.sign({id: user._id,  email: user.email }, secret, {expiresIn: '1h' });    
    res.json(
        {
            msg:"Logged in successfully ",
            token: token
        });
});


router.post('/addexpense', authMiddleware, async(req,res)=>{
    try{
        const { amount, category, description } = req.body;

        if(!amount || !category){
            return res.status(400).json({error:"Amount and category are required "});
        }
        const userId = req.user.id
        const newExpense = await Expense.create({
            userId,
            amount,
            category,
            description
        });
        res.status(201).json({message:"Expense added successfully", newExpense});
    }catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"});
    }
})


module.exports = router;