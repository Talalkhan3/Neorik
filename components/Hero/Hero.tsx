import React from "react";

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
          A web Design & Digital Marketing Agency build to turn your
          expectations into realty. Offering services that can boost your sales
          and make an huge impact on you business
        </p>
      </div>
    </div>
  );
};

export default Hero;
