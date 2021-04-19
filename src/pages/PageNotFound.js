import React from 'react';
import { Link } from 'react-router-dom';
import LogoPageNotFound from '../assets/images/seasoning.png';

const PageNotFound = () => {
  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-h-screen tw-justify-center">
      <img 
        src={LogoPageNotFound} 
        alt="pagenotfound" 
        className="tw-w-40 tw-h-40" 
      />
      <div className="tw-text-center">
        <h1 className="tw-font-opensans">
          404
        </h1>
        <h2 className="tw-font-opensans">Page Not Found</h2>
        <div className="tw-bg-base tw-py-2 tw-rounded-full tw-mt-2">
          <Link to="/" className="tw-text-white tw-font-opensans">
            Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound
