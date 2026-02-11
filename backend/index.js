const express = require("express");
const connectToDB = require("./src/db/db.js");
const mongoose = require("mongoose");
const app = express();                                                                                                                                                                                                       
const { Positions } = require("../dashboard/src/data/data.js")
const HoldingsModel = require("../backend/src/model/HoldingsModel.js")
const PositionModel = require("../backend/src/model/PositionsModel.js")
const cors = require("cors");
const { Signup } = require("./src/controllers/AuthController.js")
const port =  3002;
const { Login } = require("./src/controllers/AuthController.js");
const cookieParser = require("cookie-parser");
const { userVerification } = require("./src/controllers/AuthMiddleware.js");

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());

app.post('/',userVerification)

app.post("/register",Signup);
app.post("/login",Login);

app.listen(port,()=>{
    console.log("Listening to port..");
})

// app.get("/addHoldings",async (req,res)=>{
//     try {
//       for (const item of holdings) {
//         const newHolding = new HoldingsModel({
//           name: item.name,
//           qty: item.qty,
//           avg: item.avg,
//           price: item.price,
//           net: item.net,
//           day: item.day,
//         });

//         await newHolding.save();
//       }
//       res.send("Holdings added successfully");
//     } catch (err) {
//       res.status(500).send(err.message);
//     }
// })

// app.get("/addPositons",async(req,res) => {
//     try{
//         for(item in Positions){
//             const Position = new PositionModel({
//               product: item.product,
//               name: item.name,
//               qty: item.qty,
//               avg: item.avg,
//               price: item.price,
//               net: item.net,
//               day: item.day,
//               isLoss: item.isLoss,
//             });

//             await Position.save();
//         }
//         res.send("position saved")
//     }
//     catch{
//         console.log("error");
//     }   
// })

app.get("/allHoldings",async (req,res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get("/allPositions",async (req,res) => {
    let allPositions = await PositionModel.find({});
    res.json(allPositions);
});
connectToDB();      