# React-Chat
This is a simple real-time chat application built using React and Firebase. The app allows users to send and receive messages in real-time with other users who are logged in.

## Features

- User authentication using Firebase Authentication.
- Real-time messaging using Firebase Firestore.
- Display of the list of chat users with their last messages.
- Click on a user to open the chat with that user.
- Send messages to other users in real-time.

## Getting Started

To run this project on your local machine, follow these steps:

1.Clone the repository:

   ```bash
   git clone https://github.com/Spsuresh/React-Chat.git
   cd react-chat-app

   The app should now be running at http://localhost:3000/.

Folder Structure

src/
components/: Contains reusable React components used in the app.
context/: Contains React context providers for managing state.
firebase.js: Firebase configuration and initialization.
App.js: Main component that renders the chat application.
index.js: Entry point of the app.

Dependencies

The main dependencies used in this project are:

React: 
Frontend library for building user interfaces.
Firebase: Backend-as-a-Service platform for authentication and real-time database.
Contributing
Contributions to this project are welcome. If you find any issues or want to add new features, feel free to submit a pull request.

License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it as per the terms of the license.


Please note that the Firebase configuration part in `src/firebase.js` should be replaced with your actual Firebase project details obtained from the Firebase Console.