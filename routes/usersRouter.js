const { Router } = require("express");
const usersRouter = Router();
const usersController = require("../controllers/usersController");

usersRouter.get("/", usersController.usersListGet);
usersRouter.get("/new", usersController.usersNewGet);
usersRouter.post("/new", usersController.usersNewPost);

module.exports = usersRouter;
