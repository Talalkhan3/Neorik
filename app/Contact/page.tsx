import Header from "@/components/Header/Header";
import React from "react";
import Hero from "./Hero";
import Image from "next/image";
import Newprojects from "./Newprojects";
import Footer from "@/components/Footer/Footer";
import Letstalk from "./Letstalk";

const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Image
        src="/bgmain2.webp"
        alt="Background Image"
        width={1920}
        height={1000}
        className="mt-32 max-sm:mt-12"
      />
      <Newprojects />
      <Letstalk />
      <Footer />
    </div>
  );
};

export default page;
