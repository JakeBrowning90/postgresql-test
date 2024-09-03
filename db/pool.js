const { Pool } = require("pg");

// Normally read from env variables
module.exports = new Pool({
  host: "localhost", // Or where db is hosted
  user: "jakebrowning",
  database: "top_users",
  password: "jakexubuntu2023!",
  port: 5432, // Default port
});

// Alternative is Connection URI
// module.exports = new Pool({
//     connectionString: "postgresql://<role_name>:<role_password>@localhost:5432/top_users"
//   });