// import { io } from "socket.io-client";
// const socket = io("ws://localhost:5000");

// console.log("hello");
// socket.on("connect", () => {
//   console.log(`Hello From Server with id ${socket.id}`);
//   socket.emit("join", { extensionId: "qwer" });
//   socket.on("message", function (data) {
//     console.log("here");
//     console.log(`Otp is ${data.message}`);
//   });
// });

fetch("http://3.109.56.163:5000/api/message", {
  method: "POST",
  body: JSON.stringify({
    otp: 123,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));
