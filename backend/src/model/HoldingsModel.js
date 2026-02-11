const { model, mongo, default: mongoose } = require("mongoose");
const HoldingsSchema = require("../schemas/HoldingsSchema.js");



const HoldingsModel = new model("holding",HoldingsSchema);

module.exports = HoldingsModel; 