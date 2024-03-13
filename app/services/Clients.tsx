import Image from "next/image";
import React from "react";

const Clients = () => {
  return (
    <div className="bg-[#394BE9] grid grid-cols-2 max-sm:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
      <Image src="/bgmain1.jpg" alt="Background" width={1020} height={100} />
      <div className="py-10 pl-[30px]">
        <h1 className="text-5xl font-bold text-white md:text-4xl font-neue">Who we work with</h1>
        <div className="py-7">
          <h1 className="text-white text-2xl font-neue">Clients</h1>
          <p className="text-white pt-2 text-sm font-robo">
            We work directly with startups and small businesses in Manchester
            and beyond.
          </p>
        </div>
        <div>
          <h1 className="text-white text-2xl font-neue">Agencies</h1>
          <p className="text-white pt-2 text-sm font-robo">
            We love to collaborate with agencies and other creatives on new and
            exciting projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Clients;
