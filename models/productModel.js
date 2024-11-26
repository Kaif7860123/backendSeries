const mongoose=require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/product")
const productDetail=mongoose.Schema(
    {
        pname:String,
        pprice:String,
        pquality:String,

    }
)
module.exports=mongoose.model("product",productDetail)
