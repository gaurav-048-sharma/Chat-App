
# Project README

## Introduction
This project is a Node.js-based application that provides user authentication, real-time messaging, and user management functionalities. It is implemented using Express.js and includes controllers for handling authentication, messaging, and user data.

## Features
- User Signup, Login, and Logout (Authentication).
- Real-time messaging between users using WebSockets.
- Retrieve a list of available users for interaction.

## Controllers

### 1. Auth Controller
Handles user authentication processes such as signup, login, and logout. This includes hashing passwords, generating JWT tokens, and managing user sessions.

- **signup(req, res):** Allows users to register by providing full name, username, password, and gender.
- **login(req, res):** Authenticates users using their username and password.
- **logout(req, res):** Logs out the user by clearing the JWT cookie.

### 2. Message Controller
Manages the messaging functionality, allowing users to send and retrieve messages. It utilizes a socket.io integration for real-time communication.

- **sendMessage(req, res):** Sends a message to another user, creating a new conversation if needed.
- **getMessages(req, res):** Retrieves all messages from a conversation between two users.

### 3. User Controller
Provides functionalities to retrieve user data excluding the logged-in user. This is useful for displaying a list of other users in the application.

- **getUserForSidebar(req, res):** Fetches a list of users excluding the currently logged-in user.

## Setup
To run this project locally, follow these steps:
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Create a `.env` file for environment variables such as the database connection string and JWT secret.
4. Start the server using `npm start`.

## API Endpoints
- **POST /api/auth/signup:** Register a new user.
- **POST /api/auth/login:** Login with username and password.
- **POST /api/auth/logout:** Logout the current user.
- **POST /api/messages/:id:** Send a message to a user.
- **GET /api/messages/:id:** Get all messages with a user.
- **GET /api/users/sidebar:** Get a list of other users.