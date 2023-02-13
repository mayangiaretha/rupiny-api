const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  userId: {
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
});

const Comments = mongoose.model('comment', commentSchema);

module.exports = Comments;
