const dotenv = require("dotenv");
const PORT = process.env.PORT || 8080;
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
    origin: ["http://localhost:8081"],
  },
});


app.use(express.json());

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

app.use(require("./controllers/SocketArchitecture/Websockets")(io));

app.post("/api/message", (req, res) => {
  io.to("qwer").emit("message", { message: 9876 });
});

app.use(errorController);

morgan.token("req-headers", function (req, res) {
  return JSON.stringify(req.headers);
});

httpServer.listen(PORT, () => {
  console.log(`App running on port ${PORT}...`);
});
