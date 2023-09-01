const mongoose = require("mongoose");
const { Schema } = mongoose;

const ClientSchema = new Schema({
  date: String,
  time: String,
  fullName: String,
  age: Number,
  gender: String,
  device: String,
  testType: String,
  totalErrorScore: Number,
  errorScoreStatus: String,
  colorBlindType: String,
  comparisonResults: [{ _id: String, comparison: String }],
  discriminantResults: [{ _id: String, discriminant: Number }],
  status: String,
});

const clientuser = mongoose.model("client", ClientSchema, "Client");

module.exports = clientuser;
