import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';
import Profiles from './Profiles'; // Import Profiles Page

const Body = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </div>
  );
};

export default Body;
