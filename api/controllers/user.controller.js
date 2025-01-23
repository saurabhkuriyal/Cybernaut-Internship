const mongoose=require("mongoose");
const User=require("../models/users.model");

async function userRegistraion(req,res) {
    try {
        
        console.log(req.body);

        const newUser= new User(req.body);
        await newUser.save();


        console.log("hello",newUser);
        
        res.status(200).json({success:true,msg:"registration successful"})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,msg:"some error occurred"})
    }
}

async function getAllUsers(req,res) {
    try {

        const users=await User.find({});

        console.log(users);

        res.status(200).json({success:true,data:users});
        
        
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,msg:"some error occurred"});
        
    }
}

async function getSpecificUser(req,res) {
    try {
        
        const id=req.params.id;
        const specificUser=await User.findById({_id:id});

        console.log("That specific user",specificUser);

        if(specificUser===null){
            return res.status(404).json({success:true,msg:"user not found"});
        }

        res.status(200).json({success:true,data:specificUser});
        

    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,msg:"some error occurred"});
        
    }
}

async function editUser(req,res) {
    try {

        const id=req.params.id;

        const updatedUser=await User.updateOne({_id:id},req.body)

        console.log("Updated user",updatedUser);
        if(updatedUser===null){
            return res.status(404).json({success:true,msg:"Not found"})
        }

        res.status(200).json({success:true, msg:"successful"})
        
        
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,msg:"some error occurred"})
        
    }
}

async function deleteUser(req,res) {
    try {

        const id=req.params.id;

        const deletedUser=await User.findByIdAndDelete({_id:id});

        if(!deletedUser){
            return res.status(404).json({success:true,msg:"user not found"});
        }

        res.status(200).json({success:true,msg:"Deleted succesfully"});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,msg:"some error occurred"})
        
    }
}
module.exports={
    userRegistraion,
    getAllUsers,
    getSpecificUser,
    editUser,
    deleteUser

}