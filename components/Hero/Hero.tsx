import Image from "next/image";
import React from "react";
import Arrow from "../../public/Arrow.svg";
const Hero = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center px-[46px] pt-[55px] sm:px-[100px] lg:px-[145px] xl:px-[300px] 2xl:px-[400px]">
        <h1 className="font-neue font-bold text-[#1E1E1E] text-[48px] text-center sm:text-[96px]">
          We Serve & You <span className="text-[#394BE9]">Choose .</span>
        </h1>
        <p className="text-center font-robo text-[14px] text-[#717171] 2xl:px-[150px]">
          A web Design & Digital Marketing Agency build to turn your
          expectations into realty. Offering services that can boost your sales
          and make an huge impact on you business
        </p>
        <div className="w-full items-center justify-center flex gap-x-[10px] mt-[40px]">
          <button className=" bg-[#394BE9] py-[19px] px-[17px] rounded-[7px] text-[14px] text-white font-neue">
            What we provide
          </button>
          <button className="flex items-center gap-x-5 justify-center  bg-[#394BE9]/15 py-[16px] px-[17px] rounded-[7px] text-[16px] text-[#1E1E1E] font-neue">
            Hire Us{" "}
            <span>
              <Image src={Arrow} alt="arrow" />
            </span>
          </button>
        </div>
      </div>
      <div className="gap-x-2 text-[#717171]/50  text-center w-full mt-[35px] text-[13px] font-neue font-bold  grid grid-cols-3 ">
        <h1 className="text-[#717171]/50">
    
          <span className="text-[#394be9]">/</span> Web Development{" "}
          <span className="text-[#394be9]">/</span>
        </h1>
        <h1 className="text-[#717171]/50">
          <span className="text-[#394be9]">/</span> Graphic Design{" "}
          <span className="text-[#394be9]">/</span>
        </h1>
        <h1 className="text-[#717171]/50">
          <span className="text-[#394be9]">/</span> Brand Identity{" "}
          <span className="text-[#394be9]">/</span>
        </h1>
        <h1 className="text-[#717171]/50">
          <span className="text-[#394be9]">/</span> Digital Marketing{" "}
          <span className="text-[#394be9]">/</span>
        </h1>
        <h1 className="text-[#717171]/50">
          <span className="text-[#394be9]">/</span> E-commerce{" "}
          <span className="text-[#394be9]">/</span>
        </h1>
        <h1 className="text-[#717171]/50">
          <span className="text-[#394be9]">/</span> Web Design{" "}
          <span className="text-[#394be9]">/</span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
