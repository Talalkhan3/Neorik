import Image from "next/image";
import React from "react";

const Emaila = () => {
  return (
    <div className="flex items-center max-lg:flex-col max-[1710px]:px-16 justify-between gap-20 px-80 py-32 max-lg:py-12 max-sm:px-5 max-md:px-5 max-lg:px-5 max-xl:px-5 max-2xl:px-12">
      <div>
        <h1 className="text-5xl font-light max-md:text-4xl">
          Email marketing: Are you making the most of this powerful tool?
        </h1>
        <p className="mt-12 max-md:text-sm">
          Email marketing is one of the most effective but underused forms of
          online marketing. If you have an e-commerce site, you can use email to
          drive revenue by showcasing your sales and best deals. If you need to
          generate leads, a targeted email marketing campaign can deliver
          impressive results. If you want to update your customers / clients on
          what you’re up to, an email newsletter is the perfect medium. And if
          you’re creating great content, email could be the perfect way to
          amplify your reach and maximize viral potential.
        </p>
      </div>
      <Image src={"/email1.svg"} alt="background" width={700} height={200} className="max-md:w-[300px]" />
    </div>
  );
};

export default Emaila;
