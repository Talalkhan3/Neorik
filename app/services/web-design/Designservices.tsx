import Image from "next/image";
import React from "react";

const Designservices = () => {
  return (
    <div className="flex items-center max-[1710px]:px-16 max-lg:flex-col justify-between gap-20 px-80 py-32 max-sm:px-5 max-md:px-5 max-lg:px-5 max-xl:px-5">
      <div>
        <h1 className="text-5xl font-light max-md:text-4xl">User journey</h1>
        <p className=" max-md:w-full mt-12 text-lg max-md:text-sm">
          We start by understanding who your user is and what they’re trying to
          achieve. Then we map out the user journey – the foundation of
          everything that follows.
        </p>
      </div>
   
        <Image
          src="/pic1.svg"
          alt="Web Design Background Image 1"
          width={"700"}
          height={100}
          className="max-lg:w-[400px]"
        />
   
    </div>
  );
};

export default Designservices;
