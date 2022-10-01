const express = require("express");
const appController = require("../controllers/appController");
const appRouter = express.Router();

appRouter.route("/").post(appController.createOtp);

module.exports = appRouter;
