const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

const users = [];

io.on("connection", (socket) => {
  socket.on("new user", ({ username, userId }) => {
    users.push({ username, userId });
    socket.broadcast.emit("joined chat", username);
  });

  socket.on("typing", (id) => {
    const user = users.find((user) => user.userId === id);
    socket.broadcast.emit("user typing", `${user.username}`);
  });

  socket.on("chat message", (id, message) => {
    const { username } = users.find((user) => user.userId === id);
    io.emit("chat", username, message);
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
