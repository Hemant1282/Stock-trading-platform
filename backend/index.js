const express = require("express");
const { mongoose } = require("mongoose");
require("dotenv").config();
const app = express();                                                                                                                                                                                                       

const port = 3002;

app.listen(port,()=>{
    console.log("Listening to port..");
})

async function connectDB(){
    return await mongoose.connect(
      process.env.MONGO_URL,
    );
};

connectDB().then((resolve)=>{
    console.log("Connected to database");
})