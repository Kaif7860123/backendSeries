const express=require('express')
const app=express()
const product=require("./models/productModel")

app.get("/productCreate",async (req,res)=>{
    const productDetail=await product.create(
        {
            pname:"fan",
            pprice:"1000",
            pquality:"better"
        }
    )
    res.send( productDetail)
})
app.get("/productCreate",async (req,res)=>{
    const productDetail=await product.create(
        {
            pname:"bulb",
            pprice:"100",
            pquality:"good"
        }
    )
    res.send( productDetail)
})
app.get("/read",async (req,res)=>{
const readdata=await product.find()
res.send(readdata)
})
app.get('/update',async (req,res)=>{
    const update=await product.findOneAndUpdate({pname:"bulb"},{pname:"electric bulb"})
res.send(update)
})
app.get('/delete',async (req,res)=>{
   const deletedata=await product.findOneAndDelete({pname:"electric bulb"})
   res.send(deletedata)
})
app.listen(3000,()=>{
    console.log("backend started")
})