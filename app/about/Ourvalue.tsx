import React from "react";

const Ourvalue = () => {
  return (
    <div className="px-72 mt-32 max-sm:px-5 max-md:px-10 max-lg:px-12 max-xl:px-14 max-2xl:px-32">
      <p className=" font-extralight text-lg">Our Value</p>
      <h1 className="text-6xl font-light mt-5 max-sm:text-4xl">
        we work alongside clients who share our values, to deliver successful
        products which delight and have a positive impact on the world.
      </h1>

      <div className="flex flex-wrap gap-x-20 gap-y-7 mt-24 mb-32" >
        <div className="w-[360px]">
            <h1 className="text-light text-[36px]">Be Human</h1>
            <p className="text-light">Be yourself and recognise it in others.</p>
        </div>
        <div className="w-[360px]">
            <h1 className="text-light text-[36px]">Learn Together</h1>
            <p className="text-light">Rely on each other and get curious.</p>
        </div>
        <div className="w-[360px]">
            <h1 className="text-light text-[36px]">Raise the bar</h1>
            <p className="text-light">Good enough doesn&apos;t cut it, always push forward.</p>
        </div>
        <div className="w-[360px]">
            <h1 className="text-light text-[36px]">Use the Freedom</h1>
            <p className="text-light">We can control the future and make it what we want.</p>
        </div>
        <div className="w-[360px]">
            <h1 className="text-light text-[36px]">Enjoy the journey</h1>
            <p className="text-light">Celebrate, even when we fail.</p>
        </div>
      </div>
    </div>
  );
};

export default Ourvalue;
