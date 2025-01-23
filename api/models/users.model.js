const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:{type:String, required:true},
    age:{type:Number, required:true},
    hobbies:{type:[String],default:[], required:true}
})

module.exports=mongoose.model("Users",userSchema);