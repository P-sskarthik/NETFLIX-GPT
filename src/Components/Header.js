import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate=useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      navigate("/error")
      // An error happened.
    });
    
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-20 flex justify-between">
      <img className="w-44"
       src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"
    alt="logo"
    />
  <div className="flex p-2">
      <img className="w-12 h-12"
      alt = "usericon" src="https://occ-0-33-37.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABQvPDU2yMG12eBsG_K_6UY5X-56J7e9rsNUftrHyYxHcRREu9YtgxK7T3xAe9x_nlW7IFwcHMwW0TlVARAOF1GjZ7Y6qAbA.png?r=758"/>
      <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
    </div>
    </div>
  )
}

export default Header