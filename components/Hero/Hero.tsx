import React from "react";
import { Meteors } from "../ui/meteors";

const Hero = () => {
  return (
    <div className="px-80 pt-56 max-sm:px-5 max-md:px-10 max-lg:px-12 max-xl:px-14 max-2xl:px-32 max-sm:pt-24">
      <div className="text-[#394BE9] font-semibold text-xl max-sm:text-sm ">
        Neorik
      </div>
      <div>
        <h1 className="text-[##1E1E1E] text-9xl font-black max-sm:text-7xl max-lg:text-7xl">
          We Serve & <br /> You
          <span className="text-[#394BE9]"> Choose .</span>
        </h1>
      </div>
      <div className="max-sm:text-sm text-[#717171]">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque,
          veniam doloremque itaque, animi qui mollitia tempore tempora voluptate
          eligendi praesentium in cupiditate quae dolorem accusantium possimus
          soluta magnam non ipsa.
        </p>
      </div>
    </div>
  );
};

export default Hero;
