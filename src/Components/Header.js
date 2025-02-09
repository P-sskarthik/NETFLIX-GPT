import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {addUser, removeUser} from "../Utils/userSlice";
import { useDispatch } from 'react-redux';
import { logo } from '../Utils/constant';

const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleSignOut = () => { 
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      navigate("/error")
      // An error happened.
    });
     };

     useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const { uid, email, displayName } = user;
          dispatch(addUser({ uid, email, displayName}));
          navigate("/Browse");
        } else {
          dispatch(removeUser());
          navigate("/");
        }
      });
      return unsubscribe;
    }, [dispatch]);
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-20 flex justify-between">
      <img className="w-44"
       src={logo} 
       alt="logo"
    />
  <div className="flex p-2">
      <img className="w-12 h-12"
      alt = "usericon" src="https://occ-0-33-37.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e"/>
      <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
    </div>
    </div>
  )
}

export default Header