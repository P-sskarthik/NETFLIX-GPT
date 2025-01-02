import React from 'react'
import Login from './Login'
import { Routes, Route} from 'react-router-dom'
import Browse from './Browse'
const Body = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Browse" element={<Browse />}/>
            </Routes> 
    </div>
  )
}

export default Body