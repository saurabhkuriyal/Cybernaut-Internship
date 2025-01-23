const mongoose=require('mongoose');


async function connection() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connection to database is successful");
        
    } catch (error) {
        console.log(error);
    }
}

module.exports=connection;