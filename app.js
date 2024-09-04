if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
  }

const express = require("express");
const app = express();
const usersRouter = require("./routes/usersRouter");

// app.get("/", (req, res) => res.send("Hello, world!"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", usersRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
