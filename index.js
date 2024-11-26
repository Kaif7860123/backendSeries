require("dotenv").config()
const express=require("express")
const userModels = require("./models/userModels")
const PORT=3000
const app=express()
app.get('/',(req,res)=>{
res.send("hello backend")
})
app.get('/create',async (req,res)=>{
     const createdUser= await userModels.create({
         name:"mdkaif",
         userName:"kaif1234",
         email:"kaif@123"
      })
    res.send( createdUser)
    })
    app.get('/create',async (req,res)=>{
        const createdUser= await userModels.create({
            name:"mdkaif khan",
            userName:"kaif12340987",
            email:"kaif@123"
         })
       res.send( createdUser)
       })
    app.get('/update',async (req,res)=>{
      const update= await userModels.findOneAndUpdate({name:"mdkaif"},{userName:"kaif kya hall h"},{new:true})
     res.send(update)
    })
    app.get("/read",async (req,res)=>{
       const readData=await userModels.find()
       res.send(readData)
    })
    app.get("/delete",async (req,res)=>{
        const deletedata=await userModels.findOneAndDelete({name:"kaif"})
        res.send(deletedata)
    })
app.listen(process.env.PORT,()=>{
    console.log(`backend started ${PORT}`);
    
})