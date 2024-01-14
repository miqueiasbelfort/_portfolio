import React from 'react';

function BorderBtn({children, onClick}) {

  return (
    <button onClick={onClick} className='group overflow-hidden flex justify-center items-center relative border opacity-85 border-white px-3 py-2 rounded-md hover:opacity-100'>
        {children}
        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
    </button>
  )
}

export default BorderBtn;