import React from 'react'

function Register() {
  return (
    <div className="flex flex-col justify-center items-center h-screen lg:flex-row bg-white dr">
      <div className="lg:w-1/3">
        <div className="font-opensans p-5">
          <p className="font-opensans font-bold text-3xl pb-16">Register</p>
          <p className="font-opensans font-regular text-3xl pb-2">Welcome to bumbu KU!</p>     
          <div className="text-grey">
          <p className="font-opensans text-sm py-5 font-light pb-10">
            Please register to create your own ingridients with bumbu KU, choose base ingridients and have fun!
          </p>
        </div>
        <form>
          <div className="mb-4">
            <label 
              className="font-opensans text-sm font-regular mb-5 text-grey"
            >
              Username
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 mt-1 px-3 text-gray-700 leading-tight focus:border-base bg-grey" 
              id="username" 
              type="text" 
              placeholder="Your username" 
            />
          </div>
          <div className="mb-4">
            <label 
              className="font-opensans text-sm font-regular mb-5 text-grey"
            >
              Email
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 mt-1 px-3 text-gray-700 leading-tight focus:border-base" 
              id="email" 
              type="email" 
              placeholder="Email address" 
            />
          </div>
          <div className="mb-4">
            <label 
              className="font-opensans text-sm font-regular mb-5 text-grey"
            >
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 mt-1 px-3 text-gray-700 leading-tight focus:outline-te" id="password" type="password" placeholder="Password"></input>
          </div>
          </form>
          <div className="pt-5 lg:w-40">
            <button 
              className="bg-base rounded-xl py-2 text-md font-opensans cursor-pointer tracking-wider text-white filter drop-shadow-base w-full"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Register
