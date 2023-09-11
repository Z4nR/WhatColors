const mongoose = require("mongoose");
const { Schema } = mongoose;

const TestGroupSchema = new Schema({
  date: String,
  email: String,
  groupName: String,
  groupInitial: String,
  maxScore: Number,
  type: String,
  device: String,
  code: [{ id: String, key: String }],
  clients: [
    {
      type: Schema.Types.ObjectId,
      ref: "client",
    },
  ],
});

const testgroup = mongoose.model("testgroup", TestGroupSchema, "TestGroup");

module.exports = testgroup;
