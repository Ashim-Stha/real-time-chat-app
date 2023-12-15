const socket = io("http://localhost:8000");

const namee = prompt("Enter your name to join");

const messageContainer = document.querySelector(".container");
const form = document.getElementById("send-container");
const messageInput = document.getElementById("messageInp");

var audio = new Audio("ting.mp3");

socket.emit("new-user-joined", namee);

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

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = messageInput.value;
  append(`You: ${message}`, "right");
  socket.emit("send", message);
  messageInput.value = "";
});

socket.on("user-joined", (name) => {
  append(`${name} joined chat`, "right");
});

socket.on("receive", (data) => {
  append(`${data.name}:${data.message}`, "left");
});

socket.on("left", (name) => {
  append(`${name} left the chat`, "left");
});
