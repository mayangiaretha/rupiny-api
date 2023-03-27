const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  articleId: {
    type: String,
    required: false,
  },
  updatedAt: {
    type: String,
    required: false,
  },
  createdAt: {
    type: String,
    required: false,
  },
  isPublished: {
    type: Boolean,
    default: false,
  },
  likes: {
    type: Number,
    default: 0,
  },
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
