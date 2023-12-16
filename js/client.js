const socket = io("http://localhost:8000");

//Ask new user for his/her name and let server know
const namee = prompt("Enter your name to join");
socket.emit("new-user-joined", namee);

const messageContainer = document.querySelector(".container");
const form = document.getElementById("send-container");
const messageInput = document.getElementById("messageInp");

var audio = new Audio("ting.mp3");

const append = (message, position) => {
  const messageElement = document.createElement("div");
  messageElement.innerText = message;
  messageElement.classList.add("message");
  messageElement.classList.add(position);
  messageContainer.append(messageElement);
  if (position == "left") {
    audio.play();
  }
};

//if form gets submitted,send server the message
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = messageInput.value;
  append(`You: ${message}`, "right");
  socket.emit("send", message);
  messageInput.value = "";
});

//if a new user joins,receive name from the server
socket.on("user-joined", (name) => {
  append(`${name} joined chat`, "right");
});

//if server sends a message,recieve it
socket.on("receive", (data) => {
  append(`${data.name}:${data.message}`, "left");
});

//if a user leaves the chat,append the info to the container
socket.on("left", (name) => {
  append(`${name} left the chat`, "right");
});
