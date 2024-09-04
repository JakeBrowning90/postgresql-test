const { Pool } = require("pg");

// Normally read from env variables
// module.exports = new Pool({
//   host: "localhost",
//   user: process.env.USER,
//   password: process.env.PW,
//   database: process.env.DB,
//   port: 5432,
// });

// Alternative is Connection URI
module.exports = new Pool({
  connectionString: process.env.CONNECTION_STRING,
});
