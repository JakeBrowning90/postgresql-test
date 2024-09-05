const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function getSearchedUsernames(query) {
  console.log(query);
  const { rows } = await pool.query(
    "SELECT * FROM usernames WHERE LOWER(username) LIKE LOWER('%' || ($1) || '%')",
    [query]
  );
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function deleteAllUsernames() {
  await pool.query("DELETE FROM usernames");
}

module.exports = {
  getAllUsernames,
  getSearchedUsernames,
  insertUsername,
  deleteAllUsernames,
};
