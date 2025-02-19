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
    fullName: zod.string().min(1, "Name is required"),
})

/* route to signup  when user wants to create new account */

router.post("/signup", async(req,res)=>{
    try{
        const { email, password, fullName} = req.body;

        const { success } = signupSchema.safeParse(req.body);

        if (!success) {
            return res.status(400).json({ error:"Invalid data" });
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
            fullName,
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

/* route to signin */
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

/* route to add expense */
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

/* route to extract all the expenses of a particular user */
router.get("/expenses", authMiddleware, async(req,res)=>{
    try{
        const userId = req.user.id;
         
        const expenses = await Expense.find({ userId }).select("-_id amount category description");

        if(!expenses.length){
            return res.status(404).json({message:"No expense found for this user"});
        }
    
        res.json({ expenses });
    }catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"});
    }
})

/* route to delete an expense */
router.delete('/expenses/:expenseId', authMiddleware, async(req,res)=>{
    try{
        const userId = req.user.id;
        const { expenseId } = req.params;
        
        const expense = await Expense.findOne({_id: expenseId, userId});
        if(!expense){
            return res.status(404).json({ message: "Expense not found or unauthorized" });
        }
        await Expense.deleteOne({ _id: expenseId });
        res.json({message: "Expense deleted successfully"});
        
        
    }catch(err){
        console.log("Error deleting expense", err);
        res.status(500).json({ error: "Internal Server Error" });
        
    }
})

router.put('/expenses/:expenseId', authMiddleware, async(req,res)=>{

} )



module.exports = router;