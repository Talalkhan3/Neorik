import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#1f1f1f] text-white px-72 py-24 max-sm:px-5 max-md:px-10 max-lg:px-12 max-xl:px-14 max-2xl:px-32 flex justify-between max-sm:flex-col max-sm:gap-16">
      <div className=" flex flex-col gap-3 ">
        <Link href={"/"}>
          <h1 className="hover:underline">Home</h1>
        </Link>
        <Link href={"/about"}>
          <h1 className="hover:underline">About</h1>
        </Link>
        <Link href={"/services"}>
          <h1 className="hover:underline">Services</h1>
        </Link>
        <Link href={"/Contact"}>
          <h1 className="hover:underline">Contact us</h1>
        </Link>
      </div>
      <div>
        <div className="text-3xl">Social Media</div>
        <div className="flex gap-4 my-5">
          <Link href="https://www.instagram.com/neorikagency/">
            <Instagram />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=61555967286458">
            <Facebook />
          </Link>
          <Link href="https://twitter.com/neorikagency">
            <Twitter />
          </Link>
        </div>
        <div className="h-[2px] w-full bg-[#8584847c]"></div>
        <div className="mt-4">
          Copyright © Neorik Ltd 2024. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
