import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Getintouch = () => {
  return (
    <div className="bg-[rgb(57,75,233)]/10 px-80 pt-10 pb-12 max-sm:px-5 max-md:px-10 max-lg:px-12 max-xl:px-14 max-2xl:px-32">
      <h1 className="text-center text-[#394BE9] text-[48px]">Get in touch</h1>
      <div className="flex justify-center text-md gap-10 mt-12 max-sm:flex-col">
        <p className="">
          We&apos;re always on the lookout for likeminded people, whether you&apos;re a
          start-up company with big ideas or an established brand ready to make
          a big impact.
        </p>
        <p className="">
          If you&apos;re planning a project you&apos;d like to discuss or interested in
          working with us please get in touch - we&apos;d love to hear from you.
        </p>
      </div>
      <div className="flex justify-center items-center mt-12">
        <Link href={"/Contact"}>
          <Button className="px-14 py-6 rounded-xl">Get in touch</Button>
        </Link>
      </div>
    </div>
  );
};

export default Getintouch;
