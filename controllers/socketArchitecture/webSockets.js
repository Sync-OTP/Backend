const express = require("express");

module.exports = function (io) {
  const router = express.Router();
  console.log("Socket Online");
  io.on("connection", (socket) => {
    console.log(`User with socketId ${socket.id} connected`);
    socket.on("join", function (data) {
      console.log(`Joining room`);
      socket.join(data.extensionId);
    });
    socket.on("disconnecting", () => {
      console.log(socket.rooms);
    });
  });

  return router;
};
