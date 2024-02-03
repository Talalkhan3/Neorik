import React from "react";
import Image from "next/image";

const Userinterface = () => {
  return (
    <div className="flex max-lg:flex-col max-[1710px]:px-16 max-lg:gap-20 items-center  gap-10 px-80 py-32 max-sm:px-5 max-md:px-5 max-lg:px-5 max-xl:px-5">
      <div>
        <h1 className="text-5xl font-light max-md:text-4xl">User interface</h1>
        <p className=" mt-12 text-lg max-md:w-full max-md:text-sm ">
          Once these foundations are in place, it’s time to get creative. We’ll
          use proven design principles to make sure it’s uniquely ‘you’ – a
          distinctive digital design that seamlessly reflects your brand.
          Whether you’re launching a new website, developing an app, or planning
          an email campaign, we’ll make sure the design does its job.
        </p>
      </div>

      <Image
        src="/pic2.svg"
        alt="Web Design Background Image 1"
        width={"700"}
        height={100}
        className="max-lg:w-[400px]"
      />
    </div>
  );
};

export default Userinterface;
