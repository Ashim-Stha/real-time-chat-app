// const express = require("express");
// const cors = require("cors");

// const app = express();

// const corsOptions = {
//   origin: "http://127.0.0.1:5500", // Replace with the actual origin of your frontend app
//   credentials: true, // Allow credentials (cookies, HTTP authentication, etc.)
// };

// app.use(cors(corsOptions));

// // ... (other middleware and route handling)

// const server = app.listen(8000, () => {
//   console.log("Server is running on port 8000");
// });

// const io = require("socket.io")(server);

// ... (Socket.IO configuration)
const io = require("socket.io")(8000, {
  cors: {
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST"],
  },
});

const users = {};
io.on("connection", (socket) => {
  socket.on("new-user-joined", (name) => {
    console.log(name);
    users[socket.id] = name;
    socket.broadcast.emit("user-joined", name);
  });

  socket.on("send", (message) => {
    socket.broadcast.emit("recieve", {
      message: message,
      name: users[socket.id],
    });
  });
});
