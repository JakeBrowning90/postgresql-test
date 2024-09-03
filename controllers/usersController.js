const { body, validationResult } = require("express-validator");
const db = require("../db/queries");

// Err messages

// const validateUser = [];

// exports.usersListGet = (req, res) => {
//   console.log("Usernames will be logged here, WIP");
//   // res.send("Placeholder home");
//   res.render("index");
// };

async function usersListGet(req, res) {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
}

async function usersNewGet(req, res) {
  res.render("new");
  // res.send("Placeholder get");
}

async function usersNewPost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

module.exports = {
  usersListGet,
  usersNewGet,
  usersNewPost,
};
