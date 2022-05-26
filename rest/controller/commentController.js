const Comment = require("../model/commentModel");

exports.getComments = async (req, res) => {
  const comments = await Comment.find();
  res.send(comments)
};

exports.createComment = async (req, res) => {
  const comment = await Comment.create(req.body);
  res.send(comment)
};

exports.deleteComment = async (req, res) => {
  const comment = await Comment.findByIdAndDelete(req.params.id);
  res.send(comment)
};

exports.updateComment = async (req, res) => {
  const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.send("Comment Is Deleted")
};