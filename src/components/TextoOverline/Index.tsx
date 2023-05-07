import React from 'react';

interface TextOverlineProps {
  texto:String
}
function TextOverline({texto}:TextOverlineProps) {
   return (
    <div className="relative text-center">
      <hr className="border-1  bg-gray-700  w-full" />
      <div className="
            absolute 
            -m-6 
            left-1/3 
            h-11 
            text-center  
            transform 
            translate-x--1/2 
            bg-white
            px-10 
            text-purple-700 
            text-base w-52
            ">
        <div className='flex flex-1 justify-center items-center h-full'>
           {texto}   
        </div>
       
      </div>
    </div>
  );
}

export default TextOverline;