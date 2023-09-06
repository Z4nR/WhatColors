const mongoose = require("mongoose");
const { Schema } = mongoose;

const IndividualSchema = new Schema({
  date: String,
  time: String,
  name: String,
  age: Number,
  gender: String,
  device: String,
  type: String,
  totalErrorScore: Number,
  errorScoreStatus: String,
  blindCheck: String,
  comparisonResults: [{ _id: String, comparison: String }],
  discriminantResults: [{ _id: String, discriminant: Number }],
});

const individualuser = mongoose.model(
  "individual",
  IndividualSchema,
  "Individual"
);

module.exports = individualuser;
