import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className='px-6 py-[195px] h-screen flex flex-col items-center'>
      <img src="../../assets/images/rafiki.svg" width={'350px'} alt="Page Not Found" />
      <Link to="/" className='block mt-4 text-[#263238] font-MosafinBold hover:text-green-800 text-lg font-semibold border-2 rounded-4xl py-1 px-8'>
        Go Back
      </Link>
      
    </div>
  );
}

export default PageNotFound;
