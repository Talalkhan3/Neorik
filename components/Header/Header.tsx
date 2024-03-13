import React from "react";
import { Button } from "../ui/button";
import Mobilenavbar from "../Mobile-navbar/Mobilenavbar";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/Logo/logo.svg"

const Header = () => {
  return (
    <div className="flex justify-between items-center px-[45px] py-[15px] lg:px-[100px] lg:py-[26px] bg-[#394BE9]">
      <div>
        <Image src={Logo} alt="logo" className="w-[27px]" />
      </div>
      <div className="text-white font-neue font-light hidden lg:block text-[18px]">
        <ul className="flex items-center gap-x-[20px]">
          <Link href="/" legacyBehavior passHref>
            <li className=" cursor-pointer hover:bg-white/30 py-2 rounded-sm px-4">Home</li>
          </Link>
          <Link href="/about" legacyBehavior passHref>
            <li className=" cursor-pointer hover:bg-white/30 py-2 rounded-sm px-4">About</li>
          </Link>
          <Link href="/services" legacyBehavior passHref>
            <li className=" cursor-pointer hover:bg-white/30 py-2 rounded-sm px-4">Services</li>
          </Link>
        </ul>
      </div>
      <div className="flex items-center" >
        <div className="max-lg:hidden">
          <Link href="/Contact">
            <Button className="bg-white text-[#D061FF] rounded-[7px] py-[15px] px-[24px] font-neue">Let&lsquo;s Connect</Button>
          </Link>
        </div>
        <div>
          <Mobilenavbar />
        </div>
      </div>
    </div>
  );
};

export default Header;
