const mongoose = require("mongoose");
const { Schema } = mongoose;

const TestGroupSchema = new Schema({
  date: String,
  groupName: String,
  groupInitial: String,
  maxTES: Number,
  testType: String,
  device: String,
  code: [{ _id: String, key: String }],
  clients: [
    {
      type: Schema.Types.ObjectId,
      ref: "client",
    },
  ],
});

const testgroup = mongoose.model("testgroup", TestGroupSchema, "TestGroup");

module.exports = testgroup;
