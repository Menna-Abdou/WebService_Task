const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is a required field"],
  },
  body: {
    type: String,
    default: "No Body",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  comments:[{
    content:String,
    username:String
  }]
  // comments: [
  //   {
  //     comment: {
  //       type: mongoose.Types.ObjectId,
  //       required: [true, "add a comment"],
  //       ref: "Comment",
  //     },
  //   },
  // ],
});
const Article = mongoose.model("Article", articleSchema);
module.exports = Article;
