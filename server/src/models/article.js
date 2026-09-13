import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

const ArticleSchema = new Schema({
  title: String,
  author: String,
  year: Number,
  category: String,
  description: String,
  url: String,
  urlPage: String,
});

const articlewebsite = model('article', ArticleSchema, 'Article');

export default articlewebsite;
