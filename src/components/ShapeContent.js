import React from "react";

const ShapeContent = ({ flash, shape }) => {
  
  return (
    <>
      <div
        className={`border-2 my-4 mx-4 ${flash} h-20 w-80 grid grid-cols-4 justify-items-center items-center `}
      >
        {shape.map((piece, index) => (
          <div
            className={` w-full h-full flex justify-center items-center`}
            key={index}
          >
            <img src={`${piece}`} alt="" />
          </div>
        ))}
      </div>
    </>
  );
};

export default ShapeContent;
