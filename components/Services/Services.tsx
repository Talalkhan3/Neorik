import Image from "next/image";
import React from "react";
import Imagesmall from "../../public/imagedummy.png";
import Imagedesktop from "../../public/imagedummydesktop.png";

const Services = () => {
  return (
    <div className="px-[36px] mt-[50px] flex items-center lg:px-[75px] lg:gap-x-[50px]">
      <div>
        <h1 className="font-neue text-[20px] font-bold lg:text-[32px]">
          Bring Your Vision to Life By Delighting Your Customers
        </h1>
        <p className=" font-robo text-[14px] text-[#343434] my-[15px] lg:text-[16px]">
          We help start-ups, SMEs and enterprises grow their business with
          embedded engineers and outsourced software development.
        </p>
        <Image src={Imagesmall} alt="image dummy small" className="lg:hidden" />
        <p className=" font-robo text-[14px] text-[#343434] my-[15px] lg:text-[16px]">
          We bridge the gap between your vision and the digital world. We’ve
          been helping customers since 2009 and take pride in delivering
          high-quality custom services designed to help you build, grow, and
          revolutionize your industry.
        </p>
        <div className="flex items-center gap-x-3">
          <button className="py-[10px] rounded-[3px] font-neue text-[14px]  px-[12px] bg-[#394be9]/25 ">
            Learn More
          </button>
          <button className="py-[10px] rounded-[3px] font-neue text-[14px] px-[12px] bg-[#394be9] text-white ">
            Connect now
          </button>
        </div>
      </div>
      <Image
        src={Imagedesktop}
        alt="Image for desktop"
        className="hidden lg:block lg:w-[490px] h-[390px] w-full"
      />
    </div>
  );
};

export default Services;
