Netflix-GPT 🎬🤖
AI-Powered Movie & TV Show Recommendation App

Overview
Netflix-GPT is a responsive, AI-driven movie and TV show recommendation app built with React and Redux. It enhances user experience by integrating OpenAI's GPT API for personalized content suggestions and Firebase Authentication for secure user management. Real-time movie and show data is fetched from the TMDB API to provide a dynamic and intuitive interface.

🚀 Features
🎯 GPT-Powered Recommendations – Personalized suggestions using natural language queries via OpenAI API

🔍 Smart Search – Natural language search bar with GPT integration

🔐 Authentication – Firebase-based login system with persistent user sessions

📡 Real-Time Content – Fetches trending movies and shows from the TMDB API

⚛️ Modern Frontend Stack – Built with React, Redux, and Tailwind CSS for a responsive and performant UI

🔄 Async Data Handling – Robust API handling and loading states using async/await

📱 Mobile Responsive – Fully responsive layout optimized for various screen sizes

🛠 Tech Stack
Frontend: React, Redux, Tailwind CSS

AI Integration: OpenAI GPT API

Authentication: Firebase Auth

Data Source: The Movie Database (TMDB) API

State Management: Redux Toolkit

Deployment Ready: Easily deployable build with npm run build

🧠 Learnings & Focus
This project demonstrates skills in:

Natural Language Processing (NLP) integration using OpenAI

Real-time data fetching and dynamic UI rendering

Secure authentication flow using Firebase

State management with Redux Toolkit

Responsive and accessible UI design

🧪 Available Scripts
In the project directory, run:

npm start
Runs the app in development mode at http://localhost:3000

npm run build
Builds the app for production with optimized performance

📦 Setup Instructions
Clone the repository

Run npm install

Add your .env with the following:

ini
Copy
Edit
REACT_APP_OPENAI_API_KEY=your_openai_key
REACT_APP_TMDB_TOKEN=your_tmdb_token
REACT_APP_FIREBASE_CONFIG=your_firebase_config_object
Run npm start and explore!
