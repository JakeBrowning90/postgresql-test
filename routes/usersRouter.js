const { Router } = require("express");
const usersRouter = Router();
const usersController = require("../controllers/usersController");

usersRouter.get("/", usersController.usersListGet);
usersRouter.get("/search", usersController.usersSearchGet);
usersRouter.get("/new", usersController.usersNewGet);
usersRouter.post("/new", usersController.usersNewPost);
usersRouter.get("/delete", usersController.usersDeleteGet);


module.exports = usersRouter;
