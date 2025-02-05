// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl-deL_XI952V0BhyATIe8_jEGp6z-ChE",
  authDomain: "netflixgpt-1b528.firebaseapp.com",
  projectId: "netflixgpt-1b528",
  storageBucket: "netflixgpt-1b528.firebasestorage.app",
  messagingSenderId: "787901777973",
  appId: "1:787901777973:web:e8ad1261ba380f21e3c97c",
  measurementId: "G-CMQ7XG35W6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();