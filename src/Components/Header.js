import React, { useEffect } from 'react';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from "../Utils/userSlice";
import { logo, SUPPORTED_LANGUAGES } from '../Utils/constant';
import { toggleGptSearchView } from '../Utils/gptSlice';
import { changeLanguage } from '../Utils/configSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const user = useSelector((store) => store.user); // Get user from Redux store

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    }).catch(() => {
      navigate("/error");
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/Browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return unsubscribe;
  }, [dispatch, navigate]);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-full min-h-[10vh] p-4 bg-gradient-to-b from-black to-transparent z-20 flex flex-col md:flex-row justify-between items-center">

      {/* Netflix Logo */}
      <img className="w-28 md:w-40 mx-auto md:mx-0" src={logo} alt="logo" />

      {/* User Section - Only Show if User is Logged In */}
      {user && (
        <div className="flex flex-wrap items-center justify-center md:justify-end space-x-4 mt-2 md:mt-0">
          
          {/* Language Selector (Only visible when GPT Search is active) */}
          {showGptSearch && (
            <select 
              className="h-10 px-4 bg-gray-800 text-white rounded-lg text-sm md:text-base"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
              ))}
            </select>
          )}

          {/* GPT Search Toggle Button */}
          <button className="h-10 px-4 bg-purple-800 text-white rounded-lg text-sm md:text-base" onClick={handleGptSearchClick}>
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>

          {/* User Profile Icon */}
          <img className="w-8 h-8 md:w-10 md:h-10 rounded-lg" alt="usericon" 
            src="https://occ-0-33-37.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e" 
          />

          {/* Sign Out Button */}
          <button onClick={handleSignOut} className="font-bold text-white text-sm md:text-base">(Sign Out)</button>
        </div>
      )}
    </div>
  );
};

export default Header;
