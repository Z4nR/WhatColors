const mongoose = require("mongoose");
const { Schema } = mongoose;

const IndividualSchema = new Schema({
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
});

const individualuser = mongoose.model(
  "individual",
  IndividualSchema,
  "Individual"
);

module.exports = individualuser;
