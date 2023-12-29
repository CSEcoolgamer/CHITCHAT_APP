# CHITCHAT Application

## Overview

Welcome to Chichat, a full Realtime Chat Application that leverages the power of Social Authentication and dedicated chat APIs/sockets. This application is built using React and utilizes the robust capabilities of [Chat Engine](https://chatengine.io) for seamless real-time communication.

## Features

- **Real-time Chat:** Chichat offers a responsive and real-time chat experience, allowing users to communicate instantly.
  
- **Social Authentication:** Users can easily log in using their social media accounts, making the onboarding process smooth and user-friendly.

- **Dedicated Chat APIs/Sockets:** The application employs dedicated chat APIs and sockets, ensuring reliable and efficient communication between users.

- **Built with React:** The frontend of Chichat is developed using React, a popular JavaScript library for building user interfaces. This ensures a modern and responsive user experience.

- **Firebase Integration:** Chichat utilizes Firebase, a comprehensive mobile and web application development platform, to store data and handle user authentication securely.

- **Great for Learning:** Whether you are a beginner or an experienced developer, Chichat is a great project to learn and understand real-time communication, social authentication, and React development.

## Getting Started

### Prerequisites

Before you start, make sure you have the following installed:

- Node.js and npm
- Firebase Account
- Chat Engine Account

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/chichat-app.git
   ```

2. Change into the project directory:

   ```bash
   cd chichat-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up Firebase:

   - Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/).
   - Copy the Firebase configuration settings.
   - Create a `.env` file in the project root and add your Firebase configuration:

     ```env
     REACT_APP_FIREBASE_API_KEY=your-api-key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
     REACT_APP_FIREBASE_PROJECT_ID=your-project-id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
     REACT_APP_FIREBASE_APP_ID=your-app-id
     ```

5. Set up Chat Engine:

   - Create an account on [Chat Engine](https://chatengine.io/).
   - Create a new project and copy the project ID.
   - Update the `.env` file with your Chat Engine project ID:

     ```env
     REACT_APP_CHAT_ENGINE_PROJECT_ID=your-project-id
     ```

### Run the Application

```bash
npm start
```



