const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: [true, "add a comment"],
    },
    username: {
      type: String,
      required: [true, "add a username"],
    },
    date: {
      type: Date,
      default: Date.now,
    }
  }
);

const Comment= mongoose.model("Comment", commentSchema);
module.exports = Comment;