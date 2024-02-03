import React from "react";
import Image from "next/image";

const Emailb = () => {
  return (
    <div className="flex items-center max-lg:flex-col justify-between gap-20 px-80 py-32 max-[1710px]:px-16 max-lg:py-12 max-sm:px-5 max-md:px-5 max-lg:px-5 max-xl:px-5 max-2xl:px-12">
      <div>
        <h1 className="text-5xl font-light max-md:text-4xl">
          High-impact, mobile-friendly, integration-ready email marketing
          templates
        </h1>
        <p className="mt-12 max-md:text-sm">
          We design and build templates for email marketing campaigns. We create
          high-impact, stunningly simple email designs that maximize your
          chances of standing out in an overstuffed inbox. We know that around
          half of all emails are opened on mobile devices, so, just like our
          websites, our email designs are fully mobile-optimized. Our email
          templates can be integrated with popular platforms, making the
          management of your marketing campaign as painless as possible. We can
          set you up so you can content manage your email newsletters and
          distribute them with minimal fuss. Or alternatively, you can leave
          that to us!
        </p>
      </div>
      <Image src={"/email2.svg"} alt="background" width={600} height={200} className="max-md:w-[300px]" />
    </div>
  );
};

export default Emailb;
