import React from 'react'
import Logo from '../assets/images/Logo bumbukuok-01.png';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="bg-base w-full h-16 sticky top-0">
      <div className="px-4 flex flex-row justify-between lg:px-8 xl:px-14">
        <Link to="/">
          <img 
            src={Logo} 
            alt="Logo"
            className="flex w-32 pt-4"
          />
        </Link>
        <div className="hidden md:flex md:pt-4 font-opensans text-white text-base">
          <Link 
            to="#"
            className="mx-1"
          >
            Category
          </Link>
          <Link 
            to="#"
            className="mx-1"
          >
            Cart
          </Link>
          <Link 
            to="#"
            className="mx-1"
          >
            Login
          </Link>
        </div>
        <div className="flex md:hidden">

        </div>
      </div>
    </div>
  )
}

export default Navbar
