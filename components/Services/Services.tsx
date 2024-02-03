import Image from "next/image";
import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <div className="px-44 max-sm:px-5 max-md:px-5 max-lg:px-5 max-xl:px-5">
      <div className="text-center mt-48 font-bold">
        <h1 className="text-6xl text-[#394BE9]">Top Rated Services</h1>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-4 mt-20 ">
        <Link href={"/services/web-design"}>
          <div className="flex flex-col items-center rounded-md border border-slate-300 px-24 py-5 h-full cursor-pointer hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] ease-in duration-100">
            <Image
              src="/Hero/Web-Design-Icon-1.svg"
              alt="logo"
              width={350}
              height={100}
            />
            <h1 className=" text-xl font-medium text-[#434343] p-7">
              Web Design
            </h1>
          </div>
        </Link>
        <Link href={"/services/email-marketing"}>
          <div className="flex flex-col items-center rounded-md border border-slate-300 px-24 py-5 cursor-pointer hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] ease-in duration-100">
            <Image
              src="/Hero/Web-Strategy-Icon-1.svg"
              alt="logo"
              width={350}
              height={400}
            />
            <h1 className=" text-xl font-medium text-[#434343] p-7">
              Email Marketing
            </h1>
          </div>
        </Link>
        <Link href={"/services/web-development"}>
          <div className="flex flex-col items-center rounded-md border border-slate-300 px-24 py-5 cursor-pointer hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] ease-in duration-100">
            <Image
              src="/Hero/WordPress-Developmen-Icon-1.svg"
              alt="logo"
              width={350}
              height={400}
            />
            <h1 className=" text-xl font-medium text-[#434343] p-7">
              Web Developement
            </h1>
          </div>
        </Link>
        <Link href={"/services/e-commerce"}>
          <div className="flex flex-col items-center rounded-md border border-slate-300 px-24 py-5 cursor-pointer hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] ease-in duration-100">
            <Image
              src="/Hero/eCommerce-icon-1.svg"
              alt="logo"
              width={350}
              height={400}
            />
            <h1 className=" text-xl font-medium text-[#434343] p-7">
              E-commerce
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Services;
