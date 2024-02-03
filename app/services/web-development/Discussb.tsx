import React from "react";
import Image from "next/image";

const Discussb = () => {
  return (
    <div className=" pl-80 py-32 max-[1710px]:px-16 max-[1710px]:gap-10 max-md:py-16 max-sm:px-5 max-md:px-5 max-lg:px-5 max-xl:px-5 gap-60">
      <div className=" flex items-center gap-60 max-xl:flex-col max-lg:gap-5">
        <div>
          <h1 className="text-5xl font-light max-md:text-4xl">
            Flexible, SEO-friendly, conversion-focused web design{" "}
          </h1>
          <p className="pt-12">
            We build mobile-friendly websites using the latest responsive design
            techniques. Our websites work seamlessly across desktops, tablets
            and smartphones in order to provide the best possible user
            experience on every device. Using responsive design, we build
            websites with flexible layouts that shift according to the size and
            shape of the screen or browser they’re viewed on. To make the most
            of mobile traffic now, and ensure that your site is as future-proof
            as possible, there’s no better option. Responsive design is also
            recommended by Google – it’s the best way to optimize your site for
            mobile without damaging your SEO. With a responsive site, there are
            no duplicate content problems, as users access the same URLs on any
            device. If your website doesn’t provide a good user experience on
            mobile, Google may choose not to show your site to users performing
            searches on the move, which means that you could end up missing out
            on 30% or more of potential visits. With a responsive website, you
            can maximize your chances of being found online, and make the most
            of your traffic when it arrives.
          </p>
        </div>

        <Image src="/pic3.svg" alt="Bacjground" width={600} height={100} className="max-lg:w-[400px]" />
      </div>
    </div>
  );
};

export default Discussb;
