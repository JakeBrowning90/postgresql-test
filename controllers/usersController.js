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
  res.send(console.log("Placeholder post"));
};
