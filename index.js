const express=require("express")
const app=express()
const {connect}=require("./database")
const userRoute=require("./routes/Users")
const loginRoute=require("./routes/Login")
require("dotenv").config()

connect();

app.use(express.json())
app.use("/users",userRoute)
app.use("/login",loginRoute)


const PORT=process.env.PORT || 6000;

app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}.`)
})