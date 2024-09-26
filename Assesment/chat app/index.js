const express = require("express");
const app = express();
const http = require("http").createServer(app);  // Create an HTTP server with Express
const io = require("socket.io")(http);  // Attach socket.io to the HTTP server

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

http.listen(4000, () => {  // Use http to listen, not app.listen
  console.log("listening on port 4000");
});

// Socket.IO setup
io.on("connection", (socket) => {
  console.log("Connected...");

  // Handle incoming messages
  socket.on("message", (msg) => {
    socket.broadcast.emit("message", msg);  // Broadcast the message to all other clients
  });
});
