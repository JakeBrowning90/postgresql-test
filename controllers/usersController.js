const { body, validationResult } = require("express-validator");

// Err messages

// const validateUser = [];

exports.usersListGet = (req, res) => {
  console.log("Usernames will be logged here, WIP");
  // res.send("Placeholder home");
  res.render("index")
};

exports.usersNewGet = (req, res) => {
  res.render("new")
  // res.send("Placeholder get");
};

exports.usersNewPost = (req, res) => {
  console.log("username to be saved: ", req.body.username);
  res.redirect("/")
};
