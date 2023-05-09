import React from "react";

interface TextOverlineProps {
  texto: string;
}

function TextOverline({ texto }: TextOverlineProps) {
  return (
    <div className="relative text-center">
      <hr className="border-1 bg-gray-700 w-full" />
      <div
        className="
            absolute 
            -mt-6 
            left-1/4
            h-11 
            text-center  
            transform 
            translate-x--1/2 
            bg-white
            px-10 
            text-purple-700 
            text-base w-52
            flex
            justify-center
            items-center
          "
      >
        <div className="h-full flex flex-1 items-center justify-center">
          {texto}
        </div>
      </div>
    </div>
  );
}

export default TextOverline;
