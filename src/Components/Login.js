import React, { useState, useRef } from 'react';
import Header from './Header';
import { checkValidData } from '../Utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from 'react-router-dom';
import { BG_URL } from '../Utils/constant';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const navigate = useNavigate();

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then(() => navigate('/profiles'))  // Redirect to Profile Selection
        .catch((error) => setErrorMessage(error.message));
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then(() => navigate('/profiles'))  // Redirect to Profile Selection
        .catch(() => setErrorMessage("User Not Found"));
    }
  };

  const toggleSignInForm = () => setIsSignInForm(!isSignInForm);

  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <div className="absolute inset-0 -z-10">
        <img src={BG_URL} alt="background" className="w-full h-full object-cover" />
      </div>
      <div className="flex justify-center items-center min-h-screen px-4">
        <form 
          onSubmit={(e) => e.preventDefault()} 
          className="w-full max-w-sm p-6 bg-black bg-opacity-80 text-white rounded-lg shadow-lg"
        >
          <h1 className="font-bold text-2xl py-3 text-center">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm && (
            <input ref={name} type="text" placeholder="Full Name" className="p-3 my-2 w-full bg-gray-800 rounded-md text-sm" />
          )}
          <input ref={email} type="text" placeholder="Email Address" className="p-3 my-2 w-full bg-gray-800 rounded-md text-sm" />
          <input ref={password} type="password" placeholder="Password" className="p-3 my-2 w-full bg-gray-800 rounded-md text-sm" />
          <p className="text-red-500 text-sm">{errorMessage}</p>
          <button className="p-3 my-3 bg-red-600 w-full rounded-md text-sm font-semibold" onClick={handleButtonClick}>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-sm text-center cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm ? "New to Smartflix? Sign Up Now" : "Already registered? Sign In Now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
