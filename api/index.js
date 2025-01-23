const express=require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors=require("cors");
const connect=require("./utils/db");
const users=require("./routes/user.routes");

const port=process.env.PORT;

const app=express();

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// routes middlewares
app.use(users);

//server starting
connect().then(() => {
    app.listen(port,()=>{
        console.log("Cybernaut server is running");
    });
})