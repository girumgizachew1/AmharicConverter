import React from 'react';
import { useSelector } from 'react-redux';

function Hero() {
    const theme = useSelector((state) => state.theme.mode);

  return (
    <div className={`h-96 w-full bg-emerald-500 flex flex-col justify-center items-center ${theme ===true? 'text-black':'text-white'} `}>
      <h1 className='text-5xl  text-center font-bold'>Amharic converter</h1>
      <p className='text-xl mt-4 text-center'>Amharic writing library!</p>
      <button className='mt-4 px-6 py-4 bg-white hover:bg-zinc-100 text-black font-bold rounded-xl'>
        Get Started
      </button>
    </div>
  );
}

export default Hero;
