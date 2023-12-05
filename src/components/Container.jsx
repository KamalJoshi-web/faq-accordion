import React from "react";

const Container = ({ children }) => {
  return (
    <div
      className=" max-w-[1440px] mx-auto px-4 
      bg-patternDesktop  bg-no-repeat 
      min-h-screen flex justify-center items-center 
    max-[375px]:bg-patternMobile "
    >
      {children}
    </div>
  );
};

export default Container;
