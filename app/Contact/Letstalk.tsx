import { Mail, MessageCircle, MessageCircleIcon, PhoneIcon } from "lucide-react";
import React from "react";

const Letstalk = () => {
  return (
    <div className="px-72 my-24 max-md:mt-20 max-sm:px-5 max-md:px-10 max-lg:px-12 max-xl:px-14 max-2xl:px-32">
      <h1 className="font-bold text-9xl">Lets Talk</h1>
      <div className="flex flex-col gap-9 mt-12">
        <div className="flex items-center gap-7">
          <Mail size={27} />
          <h1 className="text-2xl">meditativeside@gmail.com</h1>
        </div>
        <div className="flex items-center gap-7">
          <PhoneIcon />
          <h1 className="text-2xl">03439761267</h1>
        </div>
      </div>
    </div>
  );
};

export default Letstalk;
