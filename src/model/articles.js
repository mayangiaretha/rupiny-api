const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  articleId: {
    type: String,
    required: true,
  },
  updatedAt: {
    type: String,
    required: false,
  },
  body: {
    type: String,
    required: true,
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
