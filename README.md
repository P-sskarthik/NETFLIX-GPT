Netflix-GPT 🎬🤖
AI-Powered Movie & TV Show Recommendation App

📖 Overview
Netflix-GPT is a responsive, AI-driven movie and TV show recommendation app built with React and Redux. It enhances user experience by integrating OpenAI's GPT API for personalized content suggestions and Firebase Authentication for secure user management. Real-time data is fetched from the TMDB API to deliver a dynamic and intuitive interface.

🚀 Features
🎯 GPT-Powered Recommendations – Personalized suggestions using natural language queries via OpenAI API

🔍 Smart Search – Natural language search bar powered by GPT

🔐 Authentication – Firebase login system with persistent sessions

📡 Real-Time Content – Fetches trending movies and shows from TMDB API

⚛️ Modern Frontend Stack – Built with React, Redux, and Tailwind CSS

🔄 Async Data Handling – Efficient API handling using async/await

📱 Mobile Responsive – Optimized layout for all screen sizes

🛠 Tech Stack
Area	Technology
Frontend	React, Redux, Tailwind CSS
AI Integration	OpenAI GPT API
Authentication	Firebase Auth
Data Source	The Movie Database (TMDB) API
State Management	Redux Toolkit
Deployment	Vercel / Netlify Ready

🧠 Learnings & Focus
This project demonstrates skills in:

🧠 Natural Language Processing (NLP) with OpenAI

🔄 Real-time data fetching and async UI rendering

🔐 Secure authentication flow using Firebase

⚛️ State management using Redux Toolkit

💡 Responsive and accessible UI design

🧪 Available Scripts
In the project directory, you can run:

bash
Copy
Edit
npm start
Runs the app in development mode. Open http://localhost:3000 in your browser.

bash
Copy
Edit
npm run build
Builds the app for production with optimized performance.

📦 Setup Instructions
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/netflix-gpt.git
cd netflix-gpt
Install dependencies:

bash
Copy
Edit
npm install
Add a .env file in the root with the following variables:

env
Copy
Edit
REACT_APP_OPENAI_API_KEY=your_openai_key
REACT_APP_TMDB_TOKEN=your_tmdb_token
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
Run the app:

bash
Copy
Edit
npm start
🌐 Deployment
You can deploy this app on Vercel or Netlify:

▶️ Vercel
Push your project to GitHub

Go to vercel.com, import your repo

Add .env variables in Project Settings

Click Deploy

▶️ Netlify
Push your code to GitHub

Go to netlify.com, import your repo

Add environment variables under Site Settings → Environment

Click Deploy site

e_config_object
Run npm start and explore!
