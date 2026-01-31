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
      "mongodb+srv://ZerodhaCloneOwner:ndujrlockjqawjhwed@zerodhaclonecluster.rks4uww.mongodb.net/?appName=ZerodhaCloneCluster",
    );
};

connectDB().then((resolve)=>{
    console.log("Connected to database");
})