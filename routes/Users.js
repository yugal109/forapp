const express=require('express')
const router=express.Router();
const {pool}=require("../database")
const bcrypt=require("bcrypt")
const asyncHandler=require("express-async-handler")


router.get("/",asyncHandler(async (req,res)=>{
    let users=await pool.query('SELECT * FROM Users;')
    users=users.rows
    
    res.send(users)
    
}))

router.post("/",asyncHandler(async (req,res)=>{
    let {first_name,last_name,username,email,password}=req.body
    const salt=await bcrypt.genSalt(10)
    password=await bcrypt.hash(password,salt)
    let user=await pool.query(`INSERT INTO Users(first_name,last_name,username,email,password) VALUES ('${first_name}','${last_name}','${username}','${email}','${password}')`)
    res.send("User Successfuly created.")
    
}))



module.exports=router