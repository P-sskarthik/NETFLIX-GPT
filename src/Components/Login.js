import React from 'react'
import Header from './Header'
const Login = () => {
  return (
    <div>
        <Header />
        <div className='absolute'>
 <img src="https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/US-en-20241125-TRIFECTA-perspective_b55c552e-27af-438c-9052-710e645cab6c_large.jpg"
    alt="logo"
    />
        </div>
        <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
        <h1 className="font-bold text-3xl py-4">Sign In</h1>
            <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-800 rounded-lg"/>
            <input type="text" placeholder="Password" className="p-4 my-4 w-full bg-gray-800 rounded-lg"/>
            <button className="p-3 my-4 bg bg-red-600 w-full rounded-lg">Sign In</button>
            <p className="p-3">New to Netflix? Sign Up Now.</p>
        </form>
       
    </div>
  )
}

export default Login