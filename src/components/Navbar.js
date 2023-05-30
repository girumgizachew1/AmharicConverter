import React, { useState } from 'react';
import Link from 'next/link';
import { FiGithub } from 'react-icons/fi';

import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../Redux/thememode';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
function Navbar() {
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };


  return (
    <div className="flex items-center justify-between h-16 px-40">
      <div className='flex' >
        <Link href="/">
          <h1 className=" text-lg font-semibold">Amharic-converter</h1>
        </Link>
        <Link href="/documentation">
          <h1 className=" text-base font-normal mt-1  ml-4">Documentation</h1>
        </Link>
      </div>
      <div className='flex' >
        <a
          href="https://github.com/your-username/amharic-converter"
          target="_blank"
          rel="noopener noreferrer"
          className="flex  text-base mt-1 space-x-1 mr-4"
        >
          <h1 className='font-semibold'  >Github</h1>
          <FiGithub  className='mt-1' />
        </a>
        <button
          onClick={handleToggleTheme}
          className="text-lg focus:outline-none"
        >
          {/* You can replace the icon below with your desired dark mode/light mode icon */}
          {theme ===true ? <MdDarkMode /> : <MdLightMode />}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
