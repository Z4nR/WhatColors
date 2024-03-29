const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClientSchema = new Schema({
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
  comparisonResult: [{ _id: String, comparison: String }],
  discriminantResult: [{ _id: String, discriminant: Number }],
  status: String,
});

const clientuser = mongoose.model('client', ClientSchema, 'Client');

module.exports = clientuser;
