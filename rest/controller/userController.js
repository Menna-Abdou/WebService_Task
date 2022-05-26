const User = require("../model/userModel");

exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.send(users);
};

exports.createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.send(user);
};

exports.suspendUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, {
    isSuspended: true,
  });
  res.send(user)
};

exports.unsuspendUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, {
    isSuspended: false,
  });
  res.send(user)
};