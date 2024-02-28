const mongoose = require('mongoose');
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

const articlewebsite = mongoose.model('article', ArticleSchema, 'Article');

module.exports = articlewebsite;
