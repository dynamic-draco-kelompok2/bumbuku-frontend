import React, { useState } from 'react'
import Logo from '../assets/images/Logo bumbukuok-01.png';
import { Link } from 'react-router-dom'
import Hamburger from '../assets/icons/Hamburger';
import CloseMenu from '../assets/icons/CloseMenu';

const Navbar = () => {
  const [navbarMobile, setNavbarMobile] = useState(false)
  const handleBarMobile = () => {
    setNavbarMobile(!navbarMobile)
  }
  
  return (
    <div className="bg-base w-full h-16 sticky top-0 z-50">
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
            to="/login"
            className="mx-1"
          >
            Login
          </Link>
        </div>
        <div className="flex md:hidden" onClick={handleBarMobile}>
          {navbarMobile ? <CloseMenu /> : <Hamburger />}
        </div>
        {navbarMobile && (
          <ul className="flex flex-col absolute bg-base w-full left-0 top-14 z-10 pb-6 md:hidden">
            <li className="mx-4 pt-4 pb-2 font-medium font-opensans text-base text-white">
              <Link to="#">
                Category
              </Link>
            </li>
            <li className="mx-4 pt-4 pb-2 font-medium font-opensans text-base text-white">
              <Link to="#">
                Cart
              </Link>
            </li>
            <li className="mx-4 pt-4 pb-2 font-medium font-opensans text-base text-white">
              <Link to="#">
                Login
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  )
}

export default Navbar
