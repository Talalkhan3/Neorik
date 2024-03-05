import React from "react";
import Navbar from "../Navbar/Navbar";
import { Button } from "../ui/button";
import Mobilenavbar from "../Mobile-navbar/Mobilenavbar";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-80 pt-8 max-sm:px-5 max-md:px-10 max-lg:px-12 max-xl:px-14 max-2xl:px-32">
      <div>
        <Image src="/Logo/logo.png" alt="logo" width="30" height={20} className="max-sm:w-[27px]" />
      </div>
      <div>
        <Navbar />
      </div>
      <div >
        <div className="max-xl:hidden">
          <Link href="/Contact">
            <Button className="bg-[#394BE9] rounded-3xl hover:bg-[#2338F2]">Let&lsquo;s Chat</Button>
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
