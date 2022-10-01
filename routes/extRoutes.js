const express = require("express");
const extController = require("../controllers/extensionController");
const extRouter = express.Router();

extRouter.route("/").post(extController.getOtp);

module.exports = extRouter;
