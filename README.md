
# iChat - Realtime Node Socket.io Chat App

iChat is a real-time chat application built using Node.js and Socket.io. This project demonstrates the use of WebSockets for real-time communication between clients and a server. It allows multiple users to join a chat room, send messages, and receive messages from other users in real-time.

## Project Structure

```
.gitignore
backend/
    app.js
    package.json
index.html
js/
    client.js
styles.css
```

## Features

- Real-time messaging between users
- User join and leave notifications
- Simple and intuitive UI

## Getting Started

### Prerequisites

- Node.js installed on your machine
- npm (Node Package Manager)

### Installation

1. Clone the repository:

```sh
git clone <repository_url>
cd <repository_name>
```

2. Navigate to the `backend` directory and install the dependencies:

```sh
cd backend
npm install
```

### Running the Application

1. Start the backend server:

```sh
node app.js
```

2. Open `index.html` in your browser to start the chat application.

### Usage

- Enter your name when prompted to join the chat.
- Type your message in the input field and click "Send" to send a message.
- Messages from other users will appear in the chat container.

## Project Files

- **index.html**: The main HTML file that includes the structure of the chat application.
- **styles.css**: The CSS file for styling the chat application.
- **js/client.js**: The client-side JavaScript file that handles the chat functionality.
- **backend/app.js**: The server-side JavaScript file that handles WebSocket connections using Socket.io.
- **backend/package.json**: The package file that lists the dependencies for the backend server.

## Dependencies

- [Node.js](https://nodejs.org/)
- [Socket.io](https://socket.io/)
- [Express](https://expressjs.com/)
- [CORS](https://www.npmjs.com/package/cors)

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Socket.io Documentation](https://socket.io/docs/)
- [Express Documentation](https://expressjs.com/en/starter/installing.html)
