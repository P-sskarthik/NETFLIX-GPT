import React from 'react';
import { useNavigate } from 'react-router-dom';

const profiles = [
  { id: 1, name: "Rohit", color: "bg-gradient-to-r from-blue-400 to-indigo-500" },
  { id: 2, name: "MaheshBob", color: "bg-gradient-to-r from-purple-500 to-indigo-600" },
  { id: 3, name: "Virat", color: "bg-gradient-to-r from-red-500 to-indigo-600" },
];

const Profiles = () => {
  const navigate = useNavigate();

  const handleProfileClick = (profileName) => {
    navigate('/browse', { state: { profile: profileName } });
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl md:text-5xl mb-8">Who's watching?</h1>
      <div className="flex gap-6">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className={`w-24 h-24 md:w-32 md:h-32 rounded-lg cursor-pointer flex items-center justify-center ${profile.color}`}
            onClick={() => handleProfileClick(profile.name)}
          >
            <p className="text-xl">{profile.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profiles;
