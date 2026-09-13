import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

const TestGroupSchema = new Schema({
  date: String,
  email: String,
  groupName: String,
  groupInitial: String,
  maxScore: Number,
  type: String,
  device: String,
  code: [{ _id: String, key: String }],
  clients: [
    {
      type: Schema.Types.ObjectId,
      ref: 'client',
    },
  ],
});

const testgroup = model('testgroup', TestGroupSchema, 'TestGroup');

export default testgroup;
