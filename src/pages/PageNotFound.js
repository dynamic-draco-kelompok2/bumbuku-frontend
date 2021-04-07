import React from 'react';
import { Link } from 'react-router-dom';
import LogoPageNotFound from '../assets/images/seasoning.png';

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <img 
        src={LogoPageNotFound} 
        alt="pagenotfound" 
        className="w-40 h-40" 
      />
      <div className="text-center">
        <h1 className="font-opensans">
          404
        </h1>
        <h2 className="font-opensans">Page Not Found</h2>
        <div className="bg-base py-2 rounded-full mt-2 text-white">
          <Link to="/">
            Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound
