const socket = io("http://localhost:8000");

const namee = prompt("Enter your name to join");

socket.emit("new-user-joined", namee);

// socket.on("user-joined", (name) => {
//   console.log(name + " has joined");
// });
