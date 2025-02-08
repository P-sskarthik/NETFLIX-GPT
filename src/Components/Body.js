import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux'; //
import { auth } from '../Utils/firebase';
import { addUser, removeUser } from '../Utils/userSlice';
import Login from './Login';
import Browse from './Browse';

const Body = () => {
  const dispatch = useDispatch();

  // ✅ useEffect must be inside the component
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName}));
      } else {
        dispatch(removeUser());
      }
    });
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Browse" element={<Browse />} />
      </Routes>
    </div>
  );
};

export default Body;
