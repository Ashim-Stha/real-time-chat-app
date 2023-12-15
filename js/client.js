const socket = io("http://localhost:8000");

const namee = prompt("Enter your name to join");

const messageContainer = document.querySelector(".container");

socket.emit("new-user-joined", namee);

const append = (message, position) => {
  const messageElement = document.createElement("div");
  messageElement.innerText = message;
  messageElement.classList.add("message");
  messageElement.classList.add(position);
  messageContainer.append(messageElement);
};

socket.on("user-joined", (name) => {
  append(`${name} joined chat`, "right");
});
