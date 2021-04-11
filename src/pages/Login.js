import React from 'react'
import { Link } from 'react-router-dom'

function login() {
  return (
    <div className="flex flex-col justify-center items-center h-screen lg:flex-row bg-white dr">
      <div className="lg:w-1/3">
        <div className="font-opensans p-5">
          <p className="font-opensans font-bold text-3xl pb-16">Login</p>
          <p className="font-opensans font-regular text-3xl pb-2">Login to your account</p>     
          <div className="text-grey">
          <p className="font-opensans text-sm py-5 font-light pb-10">Thank you for get back bumbu KU, lets access our the best seasoning recommendation for you</p>
          </div>
          <form>
            <div className="mb-4">
              <label className="font-opensans text-sm font-regular mb-5  text-grey" for="username">Username
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 mt-1 px-3 text-gray-700 leading-tight focus:border-base bg-grey" id="username" type="text" placeholder="Your username"></input>
            </div>
            <div className="mb-4">
              <label class="font-opensans text-sm font-regular mb-5 text-grey" for="password">Password
              </label>
                <input className="shadow appearance-none border rounded w-full py-2 mt-1 px-3 text-gray-700 leading-tight focus:outline-te" id="password" type="password" placeholder="Password"></input>
            </div>
          </form>
          <div className="pt-5 lg:w-40">
            <button className="bg-base rounded-xl py-2 text-md font-opensans cursor-pointer tracking-wider text-white filter drop-shadow-base w-full">Sign In</button>
          </div>
          <div className="pt-12 items-center">
            <p className="font-opensans text-m text-grey">Don’t have an account yet?<Link to='/register/'><b className="font-opensans text-md text-base"> Register</b></Link></p>  

          </div>
        </div>
      </div>
    </div>
  )
}

export default login
