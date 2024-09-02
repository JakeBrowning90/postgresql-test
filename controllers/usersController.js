const { body, validationResult } = require("express-validator");

// Err messages

// const validateUser = [];

exports.usersListGet = (req, res) => {
  console.log("Usernames will be logged here, WIP");
  res.send("Placeholder home");
};

exports.usersNewGet = (req, res) => {
  res.send("Placeholder get");
};

exports.usersNewPost = (req, res) => {
  console.log("username to be saved: ", req.body.username);
  res.redirect("/")
};
