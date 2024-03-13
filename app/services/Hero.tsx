import React from "react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-t from-[#394be9]/75 to-[#394be9] px-[33px] py-[50px] lg:px-[100px]">
      <div className=" md:max-w-[600px] 2xl:max-w-[800px]">
        <h1 className="text-white font-robo text-[48px] lg:text-[60px] 2xl:text-[80px]">
          We deliver beautifully crafted projects with passion
        </h1>
      </div>
      <div className="w-full h-[1px] bg-white mt-[50px]"></div>
    </div>
  );
};

export default Hero;
