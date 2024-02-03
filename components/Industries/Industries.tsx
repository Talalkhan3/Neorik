import Image from "next/image";
import React from "react";

const Industries = () => {
  return (
    <div className="flex justify-center items-center mt-32 px-80 gap-7 max-2xl:flex-col max-2xl:px-24 max-xl:px-16">
      <div className="w-[500px] max-sm:w-[300px]">
        <h1 className="font-bold text-6xl text-[#1E1E1E] max-xl:text-8xl max-lg:text-5xl max-sm:3xl ">
          <span className="text-[#394BE9]">Industries</span> We Serve
        </h1>
        <p className="text-[#717171] py-5">
          Smart Design. Quality Research. Forward-Thinking Strategies. Have an
          in-depth look into our projects broken down into three phases –
          website strategy, UI/ UX design and
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        <div className="flex flex-col justify-center items-center gap-4 rounded-lg border px-10 py-10 w-[280px] h-[300px] hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] hover:cursor-pointer ease-in-out duration-100">
          <Image
            src="/Industries/construction.svg"
            alt="Construction"
            width={120}
            height="100"
          />
          <h1 className="font-semibold text-[#1e1e1e]">Construction</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 rounded-lg border px-10 py-10 w-[280px] h-[300px] hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] hover:cursor-pointer ease-in-out duration-100">
          <Image
            src="/Industries/consulting.svg"
            alt="Consulting"
            width={120}
            height="100"
          />
          <h1 className="font-semibold text-[#1e1e1e]">Consluting</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 rounded-lg border px-10 py-10 w-[280px] h-[300px] hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] hover:cursor-pointer ease-in-out duration-100 ">
          <Image
            src="/Industries/education.svg"
            alt="Education"
            width={120}
            height="100"
          />
          <h1 className="font-semibold text-[#1e1e1e]">Education</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 rounded-lg border px-10 py-10 w-[280px] h-[300px] hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] hover:cursor-pointer ease-in-out duration-100">
          <Image
            src="/Industries/healthcare.svg"
            alt="Healthcare"
            width={120}
            height="100"
          />
          <h1 className="font-semibold text-[#1e1e1e]">Healthcare</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 rounded-lg border px-10 py-10 w-[280px] h-[300px] hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] hover:cursor-pointer ease-in-out duration-100">
          <Image
            src="/Industries/nonprofit.svg"
            alt="Non Profit"
            width={120}
            height="100"
          />
          <h1 className="font-semibold text-[#1e1e1e]">Non profit</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 rounded-lg border px-10 py-10 w-[280px] h-[300px] hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] hover:cursor-pointer ease-in-out duration-100">
          <Image
            src="/Industries/realestate.svg"
            alt="Real Estate"
            width={120}
            height="100"
          />
          <h1 className="font-semibold text-[#1e1e1e]">Real Estate</h1>
        </div>
      </div>
    </div>
  );
};

export default Industries;
