const dotenv = require("dotenv");
const PORT = process.env.PORT || 5000;
const { createServer } = require("http");
const { Server } = require("socket.io");
const morgan = require("morgan");
const express = require("express");
const cors = require("cors");
const errorController = require("./controllers/errorController");
const AppError = require("./utils/appError");

dotenv.config({ path: "./.env" });

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: ["*"],
  },
});

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(express.json());

app.use(require("./controllers/socketArchitecture/webSockets")(io));

app.get("/", (req, res) => {
  res.status(201).json({
    message: "Hello World",
  });
});

app.post("/api/message", (req, res) => {
  // io.to("qwer").emit("message", { message: 9876 });
  res.status(201).json({
    message: "Received Succesfully",
  });
});

app.use(errorController);

morgan.token("req-headers", function (req, res) {
  return JSON.stringify(req.headers);
});

httpServer.listen(PORT, () => {
  console.log(`App running on port ${PORT}...`);
});
