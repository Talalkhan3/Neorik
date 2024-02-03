import Link from "next/link";
import React from "react";

const Discover = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-xl:flex-col gap-x-10 gap-y-7 px-72 mt-32 mb-32  max-sm:px-5 max-md:px-10 max-lg:px-12 max-xl:px-14 max-2xl:px-32">
      <div className="relative bg-gray-200 overflow-hidden rounded-lg  ">
        <div className="absolute flex items-center justify-center p-0 m-0 left-[30%] z-[1]">
          <h1 className=" text-[200px] m-0 p-0 text-white font-bold ">
            Discover
          </h1>
        </div>
        <div className="px-7 py-16 relative z-[2]">
          <h1 className="font-light text-4xl">Discover</h1>
          <p className="font-light text-md mt-12">
            New value. A galvanizing vision. Design-led research and a distinct
            market perspective. The direction and momentum you need to make it
            real.
          </p>
          <Link href={"/"}>
            <div className="flex items-center gap-x-1 hover:gap-x-3 duration-100">
              <p className="text-[#394BE9] text-lg font-light mt-5">Learn More</p>
              <span className="text-[black]  mt-5"> &gt; </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="relative bg-gray-200 overflow-hidden rounded-lg">
        <div className="absolute flex items-center justify-center p-0 m-0 left-[30%] z-[1]">
          <h1 className=" text-[200px] m-0 p-0 text-white font-bold ">Pilot</h1>
        </div>
        <div className="px-7 py-16 relative z-[2]">
          <h1 className="font-light text-4xl">Pilot</h1>
          <p className="font-light text-md mt-12">
            Your idea made real and tested with users. Building value where it
            counts.
          </p>
          <Link href={"/"}>
            <div className="flex  gap-x-1 hover:gap-x-3 duration-100">
              <p className="text-[#394BE9] text-lg font-light mt-5">Learn More</p>
              <span className="text-[black]  mt-5"> &gt; </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="relative bg-gray-200 overflow-hidden rounded-lg">
        <div className="absolute flex items-center justify-center p-0 m-0 left-[30%] z-[1]">
          <h1 className=" text-[200px] m-0 p-0 text-white font-bold ">
            Launch
          </h1>
        </div>
        <div className="px-7 py-16 relative z-[2] ">
          <h1 className="font-light text-4xl">Launch</h1>
          <p className="font-light text-md mt-12">
            From concept to launch or something reinvented. Test and learn
            towards a service people love.
          </p>
          <Link href={"/"}>
            <div className="flex gap-x-1 hover:gap-x-3 duration-100">
              <p className="text-[#394BE9] text-lg font-light mt-5">Learn More</p>
              <span className="text-[black]  mt-5"> &gt; </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="relative bg-gray-200 overflow-hidden rounded-lg">
        <div className="absolute flex items-center justify-center p-0 m-0 left-[30%] z-[1]">
          <h1 className=" text-[200px] m-0 p-0 text-white font-bold ">Boost</h1>
        </div>
        <div className="px-7 py-16 relative z-[2]">
          <h1 className="font-light text-4xl">Boost</h1>
          <p className="font-light text-md mt-12">
            Deep expertise and capabilities integrated into your own projects.
            Better outcomes, new ways of working.
          </p>
          <Link href={"/"}>
            <div className="flex gap-x-1 hover:gap-x-3 duration-100">
              <p className="text-[#394BE9] text-lg font-light mt-5">Learn More</p>
              <span className="text-[black]  mt-5"> &gt; </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Discover;
